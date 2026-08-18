/* ============================================================
 * 侯康峰 · 个人档案库 —— 本地服务
 * 功能：
 *   1. 静态文件服务（index.html / css / js / assets / data）
 *   2. GET  /api/data        读取内容数据（data/data.json）
 *   3. POST /api/data        保存内容数据（自动备份 .bak）
 *   4. GET  /api/export      导出「静态只读版」到 export/ 目录
 *                            （单文件 index.html + assets，可上传云端供他人观看）
 * 启动：双击「启动网站.bat」，或命令行 node server.js
 * ============================================================ */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.ARCHIVE_PORT) || 8765; // 固定端口，避免与系统 PORT 环境变量冲突
const DATA_FILE = path.join(ROOT, "data", "data.json");
const EXPORT_DIR = path.join(ROOT, "export");
const MAX_BODY = 8 * 1024 * 1024; // 8MB

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
};

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "text/plain; charset=utf-8" });
  res.end(body);
}

function sendJson(res, code, obj) {
  send(res, code, JSON.stringify(obj), "application/json; charset=utf-8");
}

function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (e) {
    return { error: "data.json 读取失败: " + e.message };
  }
}

/* ---------------- 导出静态版 ---------------- */
function buildExport() {
  const need = ["index.html", "css/style.css", "js/md.js", "js/editor.js", "js/globe3d.js", "js/app.js", "data/data.json"];
  for (const f of need) {
    if (!fs.existsSync(path.join(ROOT, f))) return { ok: false, msg: "缺少文件: " + f };
  }
  const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
  const html = read("index.html");
  const css = read("css/style.css");
  const mdJs = read("js/md.js");
  const editorJs = read("js/editor.js");
  const appJs = read("js/app.js");
  const globe3dJs = read("js/globe3d.js");
  /* 导出时清除管理密码，避免泄露到云端 */
  const dataObj = JSON.parse(read("data/data.json"));
  if (dataObj.settings) dataObj.settings.adminPassword = "";
  const data = JSON.stringify(dataObj);
  /* 地球贴图内联为 base64 dataURL：保证 file:// 双击打开（Chrome 会拦截 file:// 下 WebGL 纹理）
     与任意静态托管都能正常显示地球，且不受 CORS 影响 */
  let appJsExport = appJs;
  let globe3dJsExport = globe3dJs;
  /* 贴图在 globe3d.js 里引用：内联 base64 保证 file:// 与任意托管都能显示 */
  try {
    const earthTex = {
      '"assets/earth3d-day.jpg"': ["earth3d-day.jpg", "image/jpeg"],
      '"assets/earth3d-night.jpg"': ["earth3d-night.jpg", "image/jpeg"],
      '"assets/earth3d-cloud.png"': ["earth3d-cloud.png", "image/png"]
    };
    for (const key of Object.keys(earthTex)) {
      const [file, mime] = earthTex[key];
      const p = path.join(ROOT, "assets", file);
      if (fs.existsSync(p)) {
        const dataUrl = "data:" + mime + ";base64," + fs.readFileSync(p).toString("base64");
        globe3dJsExport = globe3dJsExport.split(key).join('"' + dataUrl + '"');
      }
    }
  } catch (e) { /* 内联失败则保持外链，不阻塞导出 */ }

  const inline = html
    .replace(/<link rel="stylesheet" href="css\/style\.css[^"]*">/,
      "<style>\n" + css + "\n</style>")
    .replace(/<script src="js\/md\.js[^"]*"><\/script>/,
      "<script>\n" + mdJs + "\n</script>")
    .replace(/<script src="js\/globe3d\.js[^"]*"><\/script>/,
      "<script>\n" + globe3dJsExport + "\n</script>")
    .replace(/<script src="js\/editor\.js[^"]*"><\/script>/,
      "<script>\n" + editorJs + "\n</script>")
    .replace(/<script src="js\/app\.js[^"]*"><\/script>/,
      "<script>\nwindow.EMBEDDED_DATA = " + data + ";\n</script>\n<script>\n" + appJsExport + "\n</script>");

  // 清理旧导出并重建
  fs.rmSync(EXPORT_DIR, { recursive: true, force: true });
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
  fs.writeFileSync(path.join(EXPORT_DIR, "index.html"), inline, "utf8");

  // 复制 assets（echarts / 地图数据；地球纹理为程序生成，world*.jpg 不再需要）
  const assetsSrc = path.join(ROOT, "assets");
  if (fs.existsSync(assetsSrc)) {
    fs.mkdirSync(path.join(EXPORT_DIR, "assets"), { recursive: true });
    for (const f of fs.readdirSync(assetsSrc)) {
      if (f.endsWith("-small.jpg")) continue; // 备用压缩小图不导出
      if (f === "echarts-gl.min.js") continue; // 3D 地球已改 Three.js，echarts-gl 不再加载
      if (f === "world-day.jpg" || f === "world.jpg" || f === "world-lights.png" || f === "world-lights-small.png") continue; // 旧 echarts 纹理已废弃
      const srcF = path.join(assetsSrc, f);
      if (!fs.statSync(srcF).isFile()) continue; // 跳过子目录
      fs.copyFileSync(srcF, path.join(EXPORT_DIR, "assets", f));
    }
  }
  // 复制 images（项目图片，若存在；排除超大源图，仅同步压缩版）
  const imagesSrc = path.join(ROOT, "images");
  if (fs.existsSync(imagesSrc)) {
    fs.mkdirSync(path.join(EXPORT_DIR, "images"), { recursive: true });
    for (const f of fs.readdirSync(imagesSrc)) {
      if (f === "anime.png" || f === "50abb48946fd1653d031e44031d502b5.png") continue; // 超大源图仅本地，云端用压缩版
      fs.copyFileSync(path.join(imagesSrc, f), path.join(EXPORT_DIR, "images", f));
    }
  }
  fs.writeFileSync(path.join(EXPORT_DIR, "说明.txt"),
    "index.html 已内置地球贴图（dataURL），单独上传它也能正常显示地球。\n" +
    "建议把本 export 文件夹（index.html + assets + images）整体上传到 GitHub Pages / Gitee Pages / Netlify / Cloudflare Pages 等任意静态托管，即可获得公开访问链接。\n", "utf8");
  let idxSize = 0;
  try { idxSize = Math.round(fs.statSync(path.join(EXPORT_DIR, "index.html")).size / 1024); } catch (e) { /* ignore */ }
  return { ok: true, msg: "已导出到 export/（index.html " + idxSize + " KB · 地球贴图已内联，可直接双击打开或上传托管）" };
}

/* ---------------- HTTP 服务 ---------------- */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:" + PORT);
  const p = decodeURIComponent(url.pathname);

  /* ----- API ----- */
  if (p === "/api/data" && req.method === "GET") {
    const d = readData();
    return d.error ? sendJson(res, 500, d) : sendJson(res, 200, d);
  }
  if (p === "/api/data" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > MAX_BODY) { req.destroy(); }
    });
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (fs.existsSync(DATA_FILE)) {
          fs.copyFileSync(DATA_FILE, DATA_FILE + ".bak");
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
        sendJson(res, 200, { ok: true, msg: "已保存到本地 data/data.json（自动备份 .bak）" });
      } catch (e) {
        sendJson(res, 400, { ok: false, msg: "数据格式错误: " + e.message });
      }
    });
    return;
  }
  if (p === "/api/export" && req.method === "GET") {
    const r = buildExport();
    return sendJson(res, r.ok ? 200 : 500, r);
  }
  /* 管理模式密码验证（仅本地服务） */
  if (p === "/api/admin/check" && req.method === "POST") {
    let body = "";
    req.on("data", c => { body += c; if (body.length > 4096) req.destroy(); });
    req.on("end", () => {
      try {
        const { password } = JSON.parse(body);
        const d = readData();
        const real = (d.settings && d.settings.adminPassword) || "";
        if (!real) return sendJson(res, 200, { ok: true, needSet: true }); // 未设置密码：允许进入并提示设置
        sendJson(res, 200, { ok: password === real });
      } catch (e) {
        sendJson(res, 400, { ok: false });
      }
    });
    return;
  }

  /* ----- 静态文件 ----- */
  let rel = p === "/" ? "/index.html" : p;
  let file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) return send(res, 403, "forbidden");
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, "404 Not Found: " + rel);
    send(res, 200, buf, MIME[path.extname(file).toLowerCase()] || "application/octet-stream");
  });
});

/* 端口被占用容错：若旧实例仍占着端口，不崩溃退出，
   直接尝试打开已有服务（旧实例实时读磁盘文件，内容是最新的） */
server.on("error", err => {
  if (err && err.code === "EADDRINUSE") {
    console.log("");
    console.log("  ⚠ 端口 " + PORT + " 已被占用（可能旧服务仍在运行）");
    console.log("  尝试直接打开已有服务 http://127.0.0.1:" + PORT + " ...");
    setTimeout(() => {
      try {
        const { exec } = require("child_process");
        if (process.platform === "win32") exec('start "" http://127.0.0.1:' + PORT);
        else console.log("  请手动打开 http://127.0.0.1:" + PORT);
      } catch (e) { /* ignore */ }
    }, 400);
    return;
  }
  throw err;
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("");
  console.log("  ╔══════════════════════════════════════════════╗");
  console.log("  ║   侯康峰 · 个人档案库  本地服务已启动          ║");
  console.log("  ║   地址: http://127.0.0.1:" + PORT + "              ║");
  console.log("  ║   关闭本窗口即可停止服务                       ║");
  console.log("  ╚══════════════════════════════════════════════╝");
  // 自动打开浏览器
  setTimeout(() => {
    try {
      const { exec } = require("child_process");
      if (process.platform === "win32") exec('start "" http://127.0.0.1:' + PORT);
      else console.log("  请手动打开 http://127.0.0.1:" + PORT);
    } catch (e) { /* ignore */ }
  }, 600);
});
