/* ============================================================
 * app.js —— 小枫 · 个人档案库 主逻辑
 * 数据流：本浏览器草稿 → ../data/data.json（与看板同源实时数据）
 * ============================================================ */
"use strict";

/* ---------------- 数据加载 ---------------- */
const App = {
  DATA: null,
  readonly: false,           // 合体后始终可管理（无后端：编辑保存到本浏览器）
  charts: {},                // 惰性图表缓存
  portFilter: "全部",
  blogCat: "全部",
  blogQ: "",
  LS_KEY: "kanbanFeng_data", // 本浏览器本地草稿（管理模式无后端保存）

  /* 读取本浏览器保存的本地数据 */
  loadLocal() {
    try { const s = localStorage.getItem(App.LS_KEY); if (s) return JSON.parse(s); } catch (e) {}
    return null;
  },
  /* 保存到本浏览器 */
  saveLocal() {
    try { localStorage.setItem(App.LS_KEY, JSON.stringify(App.DATA)); }
    catch (e) { toast("浏览器存储失败，请用管理面板「下载 data.json」备份", "err"); }
  },
  /* 清除本地草稿 */
  clearLocal() {
    try { localStorage.removeItem(App.LS_KEY); } catch (e) {}
  },

  async init() {
    /* ① 本浏览器已保存的本地草稿优先（管理模式编辑后立即持久显示） */
    const local = App.loadLocal();
    if (local) {
      App.DATA = local;
    } else {
      App.DATA = window.EMBEDDED_DATA ? JSON.parse(JSON.stringify(window.EMBEDDED_DATA)) : null;
      /* ② 运行时拉取与看板同源的共享数据（部署后 archive/../data/data.json） */
      try {
        const r1 = await fetch("../data/data.json", { cache: "no-store" });
        if (r1.ok) App.DATA = await r1.json();
      } catch (e) { /* 静态托管/开发环境无该文件时继续 */ }
    }
    if (!App.DATA) App.DATA = App.defaultData();
    App.boot();
  },

  defaultData() {
    return {
      profile: { name: "小枫", title: "项目财务管理 · 报表统筹 · 业财融合", taglines: ["欢迎访问我的档案库"], summary: "", phone: "", email: "", location: "", company: "" },
      about: { intro: "", education: [], certificates: [], hobbies: [] },
      stats: [], skills: [], radar: { indicators: [], values: [] },
      experience: [], timeline: [], portfolio: [], blog: [], calendar: [],
      locations: [], settings: {}
    };
  },

  boot() {
    document.title = App.DATA.settings.siteTitle || "个人档案库";
    document.getElementById("footNote").textContent =
      (App.DATA.settings.footerNote || "个人档案库") + " · " + new Date().getFullYear();
    if (App.readonly) {
      const b = document.getElementById("adminBtn");
      b.style.display = "none";
    }
    renderAll();
    initParticles();
    initSmoothScroll();
    initReader();
    initErrorCapture();
    initProgressBar();
    initWelcomeToast();
    initRuntime();
    initCnClock();
    initCursor();
    route();
    window.addEventListener("hashchange", route);
    window.addEventListener("resize", () => resizeCharts());
    /* 修复时间轴初始汇聚：视图激活、布局就绪后再渲染一次（首屏尺寸为 0 时跳过） */
    setTimeout(() => { if (TL3D && TL3D.root) TL3D.render(); }, 180);
    window.addEventListener("load", () => { if (TL3D && TL3D.root) TL3D.render(); });
  },

  /* 保存：写入本浏览器 localStorage（合体后无后端，编辑先保存到本机）；
     全网生效请用管理面板「下载 data.json」→ 替换 data/data.json 后运行构建/推送部署 */
  async save() {
    App.saveLocal();
    toast("✅ 已保存到本浏览器。全网生效：管理面板「下载 data.json」后上传/推送部署", "ok");
    /* 立即重渲染，让修改立刻可见 */
    if (typeof renderAll === "function") renderAll();
  }
};

/* ---------------- 路由 ---------------- */
const ROUTES = ["home", "portfolio", "blog", "map"];
function route() {
  const h = (location.hash || "#/home").replace("#/", "");
  const seg = h.split("/");
  let key = ROUTES.includes(seg[0]) ? seg[0] : "home";
  if (key === "about" || key === "experience") key = "home"; // 关于我/经历已并入首页
  const anchor = seg.length > 1 ? seg[1] : "";
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + key).classList.add("active");
  document.querySelectorAll("nav a").forEach(a =>
    a.classList.toggle("active", a.dataset.route === "#/" + key ||
      (anchor && a.dataset.route === "#/" + key + "/" + anchor)));
  window.scrollTo(0, 0);
  smoothTarget = 0;
  activateCharts(key);
  if (anchor) {
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }
  setupObservers();
}
function go(h) { location.hash = h; }

/* 视图激活时初始化/刷新图表 */
function activateCharts(key) {
  if (key === "home") initGlobe();
  if (key === "about") initTimeline();
  if (key === "map") {
    /* 2D 地图需要 echarts：进入该路由时按需加载 */
    if (window.echarts && window.echarts.init && window.CHINA_GEO) initMap();
    else ensureChartLibs(() => initMap());
  }
  requestAnimationFrame(() => resizeCharts());
}

/* 只对真正的图表实例做 resize（排除 mapMeta 等元数据） */
function resizeCharts() {
  Object.values(App.charts).forEach(c => {
    if (c && typeof c.resize === "function") c.resize();
  });
}

/* ---------------- 通用渲染 ---------------- */
function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }

function renderAll() {
  renderHeroMini();
  renderGlobeList();
  renderRecent();
  renderAbout();
  initTimeline();
  renderPortfolio();
  renderBlog();
  renderMapList();
  Editor.syncBar();
  setupObservers();
}

/* ---------------- 首页：Hero（精简版） ---------------- */
function renderHeroMini() {
  const p = App.DATA.profile;
  document.getElementById("heroName").textContent = p.name;
}

/* ---------------- 全国省会城市（放大至中国/省会层级用） ---------------- */
const CAPITALS = [
  ["北京", 116.4, 39.9], ["上海", 121.47, 31.23], ["天津", 117.2, 39.08], ["重庆", 106.55, 29.56],
  ["石家庄", 114.51, 38.04], ["太原", 112.55, 37.87], ["呼和浩特", 111.75, 40.84],
  ["沈阳", 123.43, 41.8], ["长春", 125.32, 43.82], ["哈尔滨", 126.53, 45.8],
  ["南京", 118.8, 32.06], ["杭州", 120.15, 30.28], ["合肥", 117.23, 31.82],
  ["福州", 119.3, 26.08], ["南昌", 115.86, 28.68], ["济南", 117.12, 36.65],
  ["郑州", 113.63, 34.75], ["武汉", 114.31, 30.59], ["长沙", 112.94, 28.23],
  ["南宁", 108.37, 22.82], ["海口", 110.33, 20.03], ["成都", 104.07, 30.67],
  ["贵阳", 106.63, 26.65], ["昆明", 102.83, 24.88], ["拉萨", 91.11, 29.97],
  ["西安", 108.94, 34.34], ["兰州", 103.83, 36.06], ["西宁", 101.78, 36.62],
  ["银川", 106.23, 38.49], ["乌鲁木齐", 87.62, 43.82], ["台北", 121.52, 25.05],
  ["香港", 114.17, 22.32], ["澳门", 113.55, 22.2]
];
function capitalPoints() {
  return CAPITALS.map(([name, lng, lat]) => ({
    name, type: "capital", city: name,
    value: [lng, lat, 0, 1],
    note: name + " · 省会 / 直辖市"
  }));
}

/* 生成中国边界纹理（等距圆柱投影，作为 globe 图层印在球面上，彻底贴面） */
function chinaBorderTexture() {
  try {
    const W = 2048, H = 1024;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(103,232,249,.75)";
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.setLineDash([5, 5]);
    if (window.CHINA_GEO) {
      window.CHINA_GEO.features.forEach(f => {
        const g = f.geometry;
        if (!g || !g.coordinates) return;
        const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
        polys.forEach(poly => {
          const ring = poly && poly[0];
          if (!ring || ring.length < 3) return;
          ctx.beginPath();
          ring.forEach(([lng, lat], i) => {
            const x = (lng + 180) / 360 * W;
            const y = (90 - lat) / 180 * H;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.closePath();
          ctx.stroke();
        });
      });
    }
    return cv.toDataURL("image/png");
  } catch (e) { return null; }
}

/* ---------------- 金额格式化（模糊化：空值/0 显示"保密"） ---------------- */
function fmtMoney(v) {
  if (v == null || isNaN(v) || v === 0) return "保密";
  const abs = Math.abs(v);
  if (abs >= 1e8) return (v / 1e8).toFixed(2).replace(/\.?0+$/, "") + " 亿";
  if (abs >= 1e4) return Math.round(v / 1e4) + " 万";
  return Math.round(v).toLocaleString();
}

/* 项目按城市聚合 */
function aggProjectCities() {
  const map = {};
  App.DATA.projects.forEach(p => {
    if (!map[p.city]) {
      map[p.city] = { city: p.city, coord: p.coord || [114, 23], list: [], contract: 0, done: 0, received: 0 };
    }
    const g = map[p.city];
    g.list.push(p);
    g.contract += p.contract || 0;
    g.done += p.done || 0;
    g.received += p.received || 0;
  });
  return Object.values(map);
}

/* ---------------- 首页：3D 地球地点索引 ---------------- */
function renderGlobeList() {
  const box = document.getElementById("globeList");
  if (!box) return;
  box.innerHTML = "";
  const cities = aggProjectCities();
  const badge = {
    project: '<span class="badge b-project">项目</span>',
    work: '<span class="badge b-work">工作</span>',
    study: '<span class="badge b-study">母校</span>'
  };
  const mk = (name, type, note, clickFn, hoverFn, leaveFn) => {
    const d = el(`<div class="loc-item"><div class="l-name">${badge[type]}${name}</div>
      <div class="l-note">${note}</div></div>`);
    d.addEventListener("click", clickFn);
    if (hoverFn) d.addEventListener("mouseenter", hoverFn);
    if (leaveFn) d.addEventListener("mouseleave", leaveFn);
    box.appendChild(d);
  };
  cities.forEach(g => {
    /* 聚合点在该系列中的 dataIndex（projPts 顺序 = cities 顺序） */
    const cidx = cities.indexOf(g);
    mk(g.city, "project", g.list.length + " 个项目 · 合同额 " + fmtMoney(g.contract),
      () => { globeFocus(g.coord, 62); ProjPanel.openCity(g.city); },
      () => globeShine(3, [cidx], g.coord, 62),
      globeShineOff);
  });
  App.DATA.locations.forEach(l => {
    if (l.type === "work") mk(l.name, "work", l.note,
      () => { globeFocus(l.coord, 85); ProjPanel.openWork(l); },
      () => globeShine(1, [0], l.coord, 85),
      globeShineOff);
    if (l.type === "study") mk(l.name, "study", l.note,
      () => { globeFocus(l.coord, 85); ProjPanel.openStudy(l); },
      () => globeShine(2, [0], l.coord, 85),
      globeShineOff);
  });
  /* 鼠标离开地点索引 → 关闭闪耀、恢复全球旋转（项目面板打开时保持不动） */
  box.addEventListener("mouseleave", () => {
    globeShineOff();
    const open = !document.getElementById("projPanel").classList.contains("hidden");
    if (!open) globeReset();
  });
}

/* 最近动态：最新 2 篇博客 + 最新 2 件作品 */
function renderRecent() {
  const box = document.getElementById("recentBox");
  box.innerHTML = "";
  const blog = App.DATA.blog.slice(0, 2);
  const pf = App.DATA.portfolio.slice(0, 2);
  blog.forEach(b => {
    box.appendChild(el(`<div class="card blog-post reveal" data-blog="${b.id}">
      <div class="b-main"><div class="b-cat">✍ ${b.category} · 学习记录</div>
      <div class="b-title">${b.title}</div>
      <div class="b-summary">${b.summary || ""}</div>
      <div class="b-meta">🗓 ${b.date} · ${(b.tags || []).map(t => "#" + t).join(" ")}</div></div></div>`));
  });
  pf.forEach(p => {
    box.appendChild(el(`<div class="card pf-card reveal" data-pf="${p.id}">
      <div class="pf-cover" style="background:${p.cover || "linear-gradient(135deg,#0ea5e9,#6366f1)"}">
        <span class="pf-type">${p.type}</span></div>
      <div class="pf-title">${p.title}<span class="pf-date">${p.date}</span></div>
      <div class="pf-desc">${p.desc || ""}</div>
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div></div>`));
  });
  bindCardClicks(box);
}

/* 关于我 */
function renderAbout() {
  const a = App.DATA.about || {};
  const p = App.DATA.profile;
  const introEl = document.getElementById("aboutIntro");
  if (introEl) {
    introEl.innerHTML = (a.intro || "").split(/\n\s*\n/).map(pg =>
      `<p style="margin:.65em 0">${pg}</p>`).join("");
  }
  const fill = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v || ""; };
  fill("aboutAvatarName", p.name);
  fill("aboutAvatarRole", p.title);
  fill("asSummary", p.summary);
  const tags = document.getElementById("aboutTags");
  if (tags) {
    tags.innerHTML = "";
    (App.DATA.skills || []).forEach(s =>
      tags.appendChild(el(`<span class="tag">${s.name}</span>`)));
  }
  const chips = document.getElementById("aboutChips");
  chips.innerHTML = "";
  [["🎂", p.birth], ["🏢", p.company]].forEach(([ico, v]) => {
    if (v) chips.appendChild(el(`<span class="chip"><span class="ico">${ico}</span>${v}</span>`));
  });
  /* 联系方式（关于我页底部单独列出，避免重复） */
  const cbox = document.getElementById("contactItems");
  if (cbox) {
    cbox.innerHTML = "";
    const items = [];
    if (p.location) items.push({ ico: "📍", label: "所在地", val: p.location });
    if (p.phone) items.push({ ico: "📞", label: "电话", val: p.phone, href: "tel:" + p.phone });
    if (p.email) items.push({ ico: "✉️", label: "邮箱", val: p.email, href: "mailto:" + p.email });
    items.forEach(it => {
      const link = it.href ? `<a class="c-val" href="${it.href}">${it.val}</a>` : `<span class="c-val">${it.val}</span>`;
      cbox.appendChild(el(`<div class="contact-item"><span class="c-ico">${it.ico}</span><div class="c-main"><span class="c-label">${it.label}</span>${link}</div></div>`));
    });
  }
  /* 个人特长（融入深空档案头像模块） */
  const hob = document.getElementById("asHobbies");
  if (hob) {
    hob.innerHTML = "";
    (a.hobbies || []).forEach(h => {
      hob.appendChild(el(`<span class="as-hobby"><span class="h-ico">${h.icon}</span>${h.title}</span>`));
    });
  }
  /* 手机端静态版（名字/特长，移出太空容器） */
  fill("asStaticName", p.name);
  fill("asStaticRole", p.title);
  fill("asStaticSummary", p.summary);
  const hobM = document.getElementById("asHobbiesMobile");
  if (hobM) {
    hobM.innerHTML = "";
    (a.hobbies || []).forEach(h => {
      hobM.appendChild(el(`<span class="as-hobby"><span class="h-ico">${h.icon}</span>${h.title}</span>`));
    });
  }
  /* 四角数字卡的悬停详情 */
  const escTxt = v => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const ct = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  const exp0 = (App.DATA.experience || [])[0] || {};
  ct("chipTipTl",
    `<b style="color:#f5b942">工作单位</b><br>${escTxt(exp0.company || "—")}<br><span style="color:#22d3ee">${escTxt(exp0.date || "")}</span>`);
  const projs = (App.DATA.projects || []).map(x => x.name).filter(Boolean);
  ct("chipTipTr",
    `<b style="color:#22d3ee">${projs.length} 个项目</b><br>${projs.map(n => "• " + escTxt(n)).join("<br>")}`);
  ct("chipTipBl",
    `<b style="color:#7ea8ff">报表工作</b><br>分公司 9 个节点报表编制 · 收入成本勾稽核查 · 配合审计对接`);
  ct("chipTipBr",
    `<b style="color:#b79bff">合并报表</b><br>200+ 项目合并报表 · 内部交易抵消 · 关联往来核对`);
}

/* 工作经历 */
function renderExp() {
  const box = document.getElementById("expBox");
  if (!box) return;
  if (!box) return;
  box.innerHTML = "";
  App.DATA.experience.forEach(e => {
    const hl = e.highlight ? 'style="border-color:rgba(245,185,66,.45)"' : "";
    const pts = (e.points || []).map(pt => {
      const idx = pt.indexOf("：");
      return idx > 0 ? `<li><b>${pt.slice(0, idx)}：</b>${pt.slice(idx + 1)}</li>` : `<li>${pt}</li>`;
    }).join("");
    box.appendChild(el(`<div class="card exp-card reveal" ${hl} data-exp="${e.id}">
      <h3><span class="ico">${e.highlight ? "🍾" : "🏗️"}</span>${e.title}
        <span class="dim" style="margin-left:auto;font-size:12px">${e.date}</span></h3>
      <div class="muted" style="font-size:13px">${e.company}${e.summary ? " · " + e.summary : ""}</div>
      <ul style="list-style:none;margin-top:10px">${pts}</ul>
      <div class="tags">${(e.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`));
  });}

/* 作品集 */
function renderPortfolio() {
  const bar = document.getElementById("pfFilter");
  bar.innerHTML = "";
  const types = ["全部"].concat([...new Set(App.DATA.portfolio.map(p => p.type))]);
  types.forEach(t => {
    const c = el(`<span class="filter-chip ${App.portFilter === t ? "active" : ""}">${t}</span>`);
    c.onclick = () => { App.portFilter = t; renderPortfolio(); };
    bar.appendChild(c);
  });
  const box = document.getElementById("pfGrid");
  box.innerHTML = "";
  const list = App.DATA.portfolio.filter(p => App.portFilter === "全部" || p.type === App.portFilter)
    .slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  document.getElementById("pfEmpty").classList.toggle("hidden", list.length > 0);
  const tlx = el('<div class="tlx"></div>');
  list.forEach(p => {
    const it = el(`<div class="tlx-item reveal">
      <div class="tlx-time"><b>${p.date || "—"}</b><span>${p.type}</span></div>
      <div class="tlx-dot"></div>
      <div class="tlx-card">
        <div class="card pf-card" data-pf="${p.id}">
          <div class="pf-cover" style="background:${p.cover || "linear-gradient(135deg,#0ea5e9,#6366f1)"}">
            <span class="pf-type">${p.type}</span></div>
          <div class="pf-title">${p.title}</div>
          <div class="pf-desc">${p.desc || ""}</div>
          <div class="tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
          ${p.link ? `<a class="pf-link" href="${p.link}" target="_blank" rel="noopener">查看链接 →</a>` : ""}
        </div>
      </div></div>`);
    tlx.appendChild(it);
  });
  box.appendChild(tlx);
  bindCardClicks(box);
}

/* 学习记录（时间轴） */
function renderBlog() {
  const bar = document.getElementById("blogCatFilter");
  bar.innerHTML = "";
  const cats = ["全部"].concat([...new Set(App.DATA.blog.map(b => b.category))]);
  cats.forEach(c => {
    const chip = el(`<span class="filter-chip ${App.blogCat === c ? "active" : ""}">${c}</span>`);
    chip.onclick = () => { App.blogCat = c; renderBlog(); };
    bar.appendChild(chip);
  });
  const q = App.blogQ.toLowerCase();
  const list = App.DATA.blog.filter(b =>
    (App.blogCat === "全部" || b.category === App.blogCat) &&
    (!q || (b.title + b.summary + (b.tags || []).join() + b.markdown).toLowerCase().includes(q)))
    .slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const box = document.getElementById("blogList");
  box.innerHTML = "";
  document.getElementById("blogEmpty").classList.toggle("hidden", list.length > 0);
  const tlx = el('<div class="tlx"></div>');
  list.forEach(b => {
    const it = el(`<div class="tlx-item reveal">
      <div class="tlx-time"><b>${b.date}</b><span>${b.category}</span></div>
      <div class="tlx-dot"></div>
      <div class="tlx-card">
        <div class="card blog-post" data-blog="${b.id}">
          <div class="b-cat">✍ ${b.category} · 学习记录</div>
          <div class="b-title">${b.title}</div>
          <div class="b-summary">${b.summary || ""}</div>
          <div class="b-meta">${(b.tags || []).map(t => "#" + t).join(" ")} · 点击阅读全文</div>
        </div>
      </div></div>`);
    tlx.appendChild(it);
  });
  box.appendChild(tlx);
  bindCardClicks(box);
}

function bindCardClicks(root) {
  root.querySelectorAll("[data-blog]").forEach(c =>
    c.addEventListener("click", () => Reader.open(Number(c.dataset.blog))));
  root.querySelectorAll("[data-pf]").forEach(c =>
    c.addEventListener("click", () => {
      const p = App.DATA.portfolio.find(x => x.id === Number(c.dataset.pf));
      if (p && p.link) window.open(p.link, "_blank");
      else toast("该作品暂无链接，可在「管理」中添加", "err");
    }));
  root.querySelectorAll("[data-exp]").forEach(c =>
    c.addEventListener("click", () => toast("经历详情已展示在卡片中，可在「管理」中编辑", "ok")));
}

/* 地图地点清单（2D 地图视图） */
function renderMapList() {
  const box = document.getElementById("locList");
  box.innerHTML = "";
  const badge = {
    work: '<span class="badge b-work">工作/现居</span>',
    study: '<span class="badge b-study">母校</span>',
    project: '<span class="badge b-project">项目地点</span>'
  };
  const mkItem = (name, type, note, fn) => {
    const d = el(`<div class="loc-item"><div class="l-name">${badge[type] || ""}${name}</div>
      <div class="l-note">${note || ""}</div></div>`);
    d.addEventListener("mouseenter", () => {
      const chart = App.charts.map;
      if (!chart) return;
      const map = App.charts.mapMeta || {};
      const si = map.seriesIdx && map.seriesIdx[type];
      const di = map.dataIdx && map.dataIdx[type];
      if (si !== undefined && di !== undefined) chart.dispatchAction({ type: "showTip", seriesIndex: si, dataIndex: di });
    });
    d.addEventListener("mouseleave", () => {
      const chart = App.charts.map;
      if (chart) chart.dispatchAction({ type: "hideTip" });
    });
    d.addEventListener("click", fn);
    box.appendChild(d);
  };
  aggProjectCities().forEach(g => mkItem(g.city, "project",
    g.list.length + " 个项目 · 合同额 " + fmtMoney(g.contract), () => ProjPanel.openCity(g.city)));
  App.DATA.locations.forEach(l => {
    if (l.type === "work") mkItem(l.name, "work", l.note, () => ProjPanel.openWork(l));
    if (l.type === "study") mkItem(l.name, "study", l.note, () => ProjPanel.openStudy(l));
  });
}

/* ---------------- 图表 ---------------- */
function darkText() { return { color: "#93b4d4" }; }

/* ---------------- 3D 地球（echarts-gl） ---------------- */
function globePoints() {
  const pts = [];
  /* 一个城市一个聚合点（点大小随项目数变化） */
  aggProjectCities().forEach(g => {
    pts.push({
      name: g.city, type: "project", city: g.city, count: g.list.length,
      value: [g.coord[0], g.coord[1], 0, g.list.length],
      note: g.list.length + " 个项目 · 合同额 " + fmtMoney(g.contract),
      projects: g.list
    });
  });
  App.DATA.locations.forEach(l => {
    pts.push({ name: l.name, type: l.type, city: l.name, count: 1,
      value: [l.coord[0], l.coord[1], 0, 1], note: l.note });
  });
  return pts;
}

/* 地球视角：放大聚焦到指定经纬度，并暂停自动旋转 */
/* 默认距离 55 = 整个中国地图填满画布；传入 distance 可进一步拉近 */
function globeFocus(coord, distance) {
  const g = App.charts.globe;
  if (!g || !g.focusOn) return;
  g.focusOn(coord ? coord[0] : 104.5, coord ? coord[1] : 34.5, distance || 55);
  const btn = document.getElementById("globeReset");
  if (btn) btn.classList.remove("hidden");
}

/* 一键放大到整个中国地图 */
function globeChina() {
  globeFocus([104.5, 34.5], 55);
}

/* 悬停定位：地球转动到指定地点（不显示按钮，用于右侧列表悬停联动） */
function globeLocate(coord, distance) {
  const g = App.charts.globe;
  if (!g || !g.focusOn) return;
  g.focusOn(coord ? coord[0] : 104.5, coord ? coord[1] : 34.5, distance || 62);
}

/* 悬停发光：定位 + 光点高亮 + 黄色涟漪光圈（持续扩散，同 2D 地图现居地效果） */
let glowTimer = 0, glowPhase = 0;
function globeShine(seriesIndex, dataIdxList, coord, distance) {
  globeLocate(coord, distance);
  const c = App.charts.globe;
  if (!c) return;
  App.charts.glowInfo = { seriesIndex, dataIdxList: dataIdxList || [] };
  (dataIdxList || []).forEach(di => {
    try { c.dispatchAction({ type: "highlight", seriesIndex, dataIndex: di }); } catch (e) {}
  });
  if (dataIdxList && dataIdxList.length) {
    try { c.dispatchAction({ type: "showTip", seriesIndex, dataIndex: dataIdxList[0] }); } catch (e) {}
  }
  /* 黄色涟漪光圈：三环相位错开持续向外扩散 + 中心实心金点 */
  if (glowTimer) clearInterval(glowTimer);
  glowPhase = 0;
  glowTimer = setInterval(() => {
    glowPhase = (glowPhase + 1) % 8;
    const t = glowPhase / 8;
    const pts = [];
    for (let i = 0; i < 3; i++) {
      const ph = (t + i / 3) % 1;
      const size = 10 + ph * 36;
      const op = Math.max(0, (1 - ph) * .1);
      pts.push({ value: [coord[0], coord[1], 0], symbolSize: size,
        itemStyle: { color: "rgba(245,185,66," + op.toFixed(2) + ")", borderColor: "rgba(245,185,66,.75)", borderWidth: 0.45 } });
    }
    pts.push({ value: [coord[0], coord[1], 0], symbolSize: 9,
      itemStyle: { color: "#f5b942", borderColor: "#fff3d6", borderWidth: 1.5 } });
    try { c.setOption({ series: [{}, {}, {}, {}, {}, { data: pts }] }); } catch (e) { /* ignore */ }
  }, 110);
}
function globeShineOff() {
  if (glowTimer) { clearInterval(glowTimer); glowTimer = 0; }
  const c = App.charts.globe;
  if (!c) return;
  const gi = App.charts.glowInfo;
  if (gi) {
    (gi.dataIdxList || []).forEach(di => {
      try { c.dispatchAction({ type: "downplay", seriesIndex: gi.seriesIndex, dataIndex: di }); } catch (e) {}
    });
  }
  App.charts.glowInfo = null;
  try { c.dispatchAction({ type: "hideTip" }); } catch (e) {}
  try { c.setOption({ series: [{}, {}, {}, {}, {}, { data: [] }] }); } catch (e) {}
}

/* 地球视角：回到全球自动旋转 */
function globeReset() {
  const g = App.charts.globe;
  if (g && g.resetView) g.resetView();
  const btn = document.getElementById("globeReset");
  if (btn) btn.classList.add("hidden");
}

/* 手动切换地球白天 / 夜晚 / 自动 */
let _globeDayNightMode = "auto";
function toggleGlobeDayNight() {
  const g = App.charts.globe;
  if (!g || !g.setOverride) return;
  _globeDayNightMode = _globeDayNightMode === "auto" ? "day" : _globeDayNightMode === "day" ? "night" : "auto";
  g.setOverride(_globeDayNightMode);
  const btn = document.getElementById("globeDayNight");
  if (btn) btn.innerHTML = _globeDayNightMode === "auto" ? "🌓 自动昼夜" : _globeDayNightMode === "day" ? "☀️ 白天" : "🌙 夜晚";
  if (btn) btn.title = _globeDayNightMode === "auto" ? "跟随北京时间自动切换（点击手动）" : "点击切回自动";
}

/* 检测是否软件渲染（SwiftShader/llvmpipe），软件渲染时关闭 bloom 保证流畅 */
function isSoftwareGL() {
  try {
    const g = document.createElement("canvas").getContext("webgl");
    if (!g) return true;
    const ext = g.getExtension("WEBGL_debug_renderer_info");
    const r = ext ? g.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    return /swiftshader|llvmpipe|software/i.test(String(r));
  } catch (e) { return true; }
}

/* 地球纹理全部由 globeTextureDataURL() 本地程序生成（canvas → dataURL 字符串），
   无网络请求、必成功，任何环境（本地 http / file:// / 云端托管）都不会白球 */

async function initGlobe() {
  const el = document.getElementById("globeChart");
  if (!el) return;
  if (App.charts.globe) return;
  /* 还原 yzyy.cloud/earth 风格的 Three.js 地球 */
  /* 地球上的中国省份边界需要 china.geo.js（已改为懒加载，需在此按需加载） */
  if (!window.CHINA_GEO) {
    await new Promise(res => {
      const s = document.createElement("script");
      s.src = "assets/china.geo.js";
      s.onload = () => res();
      s.onerror = () => res();
      document.head.appendChild(s);
    });
  }
  try {
    const g = await Globe3D.init(el, { radius: 100 });
    /* 数据点：工作 / 母校 / 项目城市 */
    const pts = globePoints();
    g.setPoints(pts);
    /* 中国省份边界高亮（突出中国） */
    if (window.CHINA_GEO) g.buildChinaBorders(window.CHINA_GEO);
    /* 飞线：母校 → 工作 → 项目城市 */
    const work = pts.find(p => p.type === "work");
    const study = pts.find(p => p.type === "study");
    const projs = pts.filter(p => p.type === "project");
    const conns = [];
    if (study && work) conns.push({ from: [study.value[0], study.value[1]], to: [work.value[0], work.value[1]], color: 0x22d3ee, colorHex: "#22d3ee" });
    if (work) projs.forEach(p => conns.push({ from: [work.value[0], work.value[1]], to: [p.value[0], p.value[1]], color: 0x22d3ee, colorHex: "#22d3ee" }));
    g.buildFlyLines(conns);
    /* 交互：点击城市 → 聚焦 + 打开项目面板 */
    g.onPointClick = d => {
      if (!d) return;
      /* globeFocus(coord, distance)：coord 传 [经度, 纬度] 数组（勿拆成独立参数，否则经纬度错位成 NaN） */
      if (d.type === "project") { globeFocus([d.value[0], d.value[1]], 62); ProjPanel.openCity(d.city); }
      else if (d.type === "work") { globeFocus([104.5, 34.5], 55); ProjPanel.openWork(d); }
      else if (d.type === "study") { globeFocus([104.5, 34.5], 55); ProjPanel.openStudy(d); }
    };
    /* 昼夜 */
    g.setDayNight(isChinaDay(), true);
    App.charts.globe = g;
    el.dataset.globe = "ok";
    const gl = document.getElementById("globeLoading");
    if (gl) gl.style.display = "none";
  } catch (e) {
    el.dataset.globe = "globe3d-err:" + e.message;
  }
}

/* 亮度随缩放距离自适应：拉远变暗、拉近变亮；同时拉远时减弱大气辉光与 bloom，避免"强光" */
function initGlobeBrightness() {
  const c = App.charts.globe;
  if (!c) return;
  let lastKey = null;
  setInterval(() => {
    let dist = null;
    try {
      const g = c.getOption().globe;
      const vc = (Array.isArray(g) ? g[0] : g).viewControl;
      dist = vc && vc.distance;
    } catch (e) { /* ignore */ }
    if (!dist) return;
    const key = Math.round(dist / 6) * 6;
    if (key === lastKey) return;
    lastKey = key;
    const k = Math.max(0.5, Math.min(1.15, 1.25 - dist / 420));
    const kAtm = Math.max(0.1, Math.min(1, 1.1 - dist / 280));
    const day = isChinaDay();
    const base = day ? { ambient: 1.05, main: 1.55, glow: 75 } : { ambient: 0.62, main: 0.95, glow: 92 };
    /* 携带完整地球配置（纹理/底色），周期性自愈，避免间歇性灰/白球 */
    const patch = {
      globe: Object.assign({}, globeDayNightCfg(day), {
        light: {
          ambient: { intensity: +(base.ambient * k).toFixed(2) },
          main: { intensity: +(base.main * k).toFixed(2) }
        },
        atmosphere: { glowPower: Math.max(0, Math.round(base.glow * kAtm)) }
      })
    };
    if (!isSoftwareGL()) {
      const bi = dist > 260 ? 0.02 : dist > 170 ? 0.06 : 0.12;
      patch.globe.postEffect = { enable: bi > 0.02, bloom: { enable: true, bloomIntensity: bi } };
    }
    try { c.setOption(patch); } catch (e) { /* ignore */ }
  }, 600);
}

/* ============================================================
 * 关于我 · 深空沉浸式 3D 时间轴（围绕头像的轨道）
 * ============================================================ */
const TL3D = {
  root: null, nodesBox: null, svg: null, path: null, future: null, cometEl: null,
  els: [], nodes: [], step: 0, initAngle: [],
  base: 0, target: 0, raf: 0, dragging: false, lastX: 0,
  cometProgress: 0, cometRaf: 0, cometPause: 0,
  esc: null,

  bind() {
    const self = this;
    this.esc = v => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    this.root.style.touchAction = "pan-y";

    this.root.addEventListener("mousedown", e => {
      self.dragging = true; self.lastX = e.clientX;
      self.root.classList.add("dragging");
      cancelAnimationFrame(self.raf);
    });
    window.addEventListener("mousemove", e => {
      if (!self.dragging) return;
      const dx = e.clientX - self.lastX; self.lastX = e.clientX;
      self.base += dx * 0.008; self.target = self.base; self.render();
    });
    window.addEventListener("mouseup", () => {
      if (self.dragging) { self.dragging = false; self.root.classList.remove("dragging"); self.snap(); }
    });
    /* 不使用滚轮旋转（鼠标拖拽已可旋转） */

    this.root.addEventListener("touchstart", e => {
      if (e.touches.length === 1) { self.dragging = true; self.lastX = e.touches[0].clientX; cancelAnimationFrame(self.raf); }
    }, { passive: true });
    this.root.addEventListener("touchmove", e => {
      if (!self.dragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - self.lastX; self.lastX = e.touches[0].clientX;
      self.base += dx * 0.008; self.target = self.base; self.render();
    }, { passive: true });
    this.root.addEventListener("touchend", () => { if (self.dragging) { self.dragging = false; self.snap(); } });

    this.nodesBox.addEventListener("click", e => {
      const n = e.target.closest(".tl3d-node");
      if (!n) return;
      const i = self.els.indexOf(n);
      if (i >= 0) self.setFront(i); /* 点击只置前，不固定弹窗：鼠标移开弹窗即消失 */
    });


    window.addEventListener("resize", () => { self.render(); });
  },

  rebuild() {
    const self = this;
    const esc = this.esc;
    const nodesBox = this.nodesBox;
    nodesBox.innerHTML = "";
    this.els = [];

    const nowY = new Date().getFullYear();
    const nowM = new Date().getMonth() + 1;
    const nowStr = nowY + "." + String(nowM).padStart(2, "0");
    const exps = App.DATA.experience || [];
    const entries = (App.DATA.timeline || []).slice().sort((a, b) => {
      const [ay, am] = String(a.start).split(".").map(Number);
      const [by, bm] = String(b.start).split(".").map(Number);
      return (ay * 12 + (am || 1)) - (by * 12 + (bm || 1));
    });

    const toM = s => { const [y, m] = String(s).split(".").map(Number); return (y * 12) + ((m || 1) - 1); };
    const expRange = e => { const m = String(e.date || "").match(/(\d{4}\.\d{2})\s*[–—-]\s*(\d{4}\.\d{2})/); return m ? [toM(m[1]), toM(m[2])] : null; };
    const matchExp = (d, fallback) => {
      const dm = toM(d);
      const hit = exps.filter(e => { const r = expRange(e); return r && dm >= r[0] && dm <= r[1]; });
      if (hit.length) return hit;
      if (fallback && exps.length) {
        return exps.slice().sort((a, b) => ((expRange(b) || [0, 0])[1]) - ((expRange(a) || [0, 0])[1])).slice(0, 1);
      }
      return [];
    };
    const tipHTML = p => {
      let html = "";
      if (p.entry) {
        const e = p.entry;
        html += `<div class="ct-t-head" style="--pc:${e.color}"><span class="ct-t-dot"></span>${esc(e.name)}<span class="ct-t-date">${esc(e.start)} – ${esc(e.end || "至今")}</span></div>`;
        if (e.detail) html += `<div class="ct-t-detail">${esc(e.detail)}</div>`;
        matchExp(p.date, false).forEach(x => {
          html += `<div class="ct-t-exp"><div class="ct-t-title">💼 ${esc(x.title)}</div>`;
          if (x.summary) html += `<div class="ct-t-summary">${esc(x.summary)}</div>`;
          if (x.company) html += `<div class="ct-t-company">🏢 ${esc(x.company)}</div>`;
          if (x.points && x.points.length) html += `<ul class="ct-t-points">${x.points.map(pt => `<li>${esc(pt)}</li>`).join("")}</ul>`;
          if (x.tags && x.tags.length) html += `<div class="ct-t-tags">${x.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>`;
          html += `</div>`;
        });
      } else {
        html += `<div class="ct-t-head" style="--pc:#22d3ee"><span class="ct-t-dot"></span>现在 · 正在进行<span class="ct-t-date">${nowStr}</span></div>`;
        const last = matchExp(nowStr, true)[0];
        if (last) {
          html += `<div class="ct-t-exp"><div class="ct-t-title">💼 ${esc(last.title)}</div>`;
          if (last.summary) html += `<div class="ct-t-summary">${esc(last.summary)}</div>`;
          if (last.points && last.points.length) html += `<ul class="ct-t-points">${last.points.slice(0, 3).map(pt => `<li>${esc(pt)}</li>`).join("")}</ul>`;
          if (last.tags && last.tags.length) html += `<div class="ct-t-tags">${last.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>`;
          html += `</div>`;
        }
        html += `<div class="ct-t-detail" style="margin-top:10px">持续探索 AI × 财务数字化转型，让每一笔数据开口说话。</div>`;
      }
      return html;
    };

    const nodes = entries.map(e => ({ date: e.start, entry: e }));
    nodes.push({ date: nowStr, entry: null });
    this.nodes = nodes;
    this.step = (Math.PI * 2) / nodes.length;
    /* 节点初始角度（时间顺序：最早 → 现在，均匀分布圆周，现在在正下方前方） */
    this.initAngle = nodes.map((_, j) => (j - (nodes.length - 1)) * this.step);

    nodes.forEach(p => {
      const color = p.entry ? p.entry.color : "#22d3ee";
      const el = document.createElement("div");
      el.className = "tl3d-node" + (p.entry ? "" : " tl3d-now");
      el.style.setProperty("--pc", color);
      const title = p.entry ? p.entry.name : "现在";
      el.innerHTML =
        `<span class="tl3d-dot"></span>` +
        `<span class="tl3d-date">${p.date}</span>` +
        `<span class="tl3d-name">${esc(title)}</span>` +
        `<div class="tl3d-tip">${tipHTML(p)}</div>`;
      nodesBox.appendChild(el);
      this.els.push(el);
    });
  },

  setFront(i) {
    const step = this.step;
    const init = this.nodes.map((_, j) => (j - (this.nodes.length - 1)) * step);
    let want = -init[i];
    let d = want - this.base;
    d = ((d + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    this.target = this.base + d;
    this.tick();
  },

  norm(a) {
    return ((a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  },

  snap() {
    const n = this.nodes.length;
    if (!n) return;
    const step = this.step;
    let best = 0, bestD = Infinity;
    for (let j = 0; j < n; j++) {
      const init = (j - (n - 1)) * step;
      const d = Math.abs(this.norm(this.base + init));
      if (d < bestD) { bestD = d; best = j; }
    }
    if (bestD > 0.04) this.setFront(best);
  },

  render() {
    this._pathLen = null; /* 路径可能重建，长度缓存失效 */
    const root = this.root;
    const w = root.clientWidth, h = root.clientHeight;
    if (w < 120 || h < 120 || !this.els.length) return;
    const rr = root.getBoundingClientRect();
    let cx = w / 2, cy = h * 0.46;
    const av = document.querySelector(".as-avatar");
    if (av) {
      const ar = av.getBoundingClientRect();
      cx = ar.left - rr.left + ar.width / 2;
      cy = ar.top - rr.top + ar.height / 2;
    }
    const R = w < 680
      ? Math.max(150, Math.min(180, Math.min(w, h) * 0.42))
      : Math.max(185, Math.min(230, Math.min(w, h) * 0.40));
    const YS = 0.96;
    const f = 440;
    const init = this.initAngle;
    /* 1) 先定位节点光球：直接 left/top 绝对定位，确保围绕头像 */
    const pos = [];
    this.els.forEach((el, i) => {
      const a = this.base + init[i];
      const x = cx + R * Math.sin(a);
      const z = R * (1 - Math.cos(a));
      const s = f / (f + z);
      const y = cy + R * YS * Math.cos(a);
      pos.push({ x, y, s });
      el.style.left = x.toFixed(1) + "px";
      el.style.top = y.toFixed(1) + "px";
      el.style.transform = "translate(-50%,-50%) scale(" + s.toFixed(3) + ")";
      el.style.opacity = Math.max(0.35, Math.min(1, 0.4 + 0.6 * s));
      el.style.filter = s < 0.62 ? "blur(" + ((0.62 - s) * 2).toFixed(2) + "px)" : "none";
      el.style.zIndex = Math.round(30 + s * 70);
      el.classList.toggle("far", s < 0.58);
      el.dataset.scale = s.toFixed(2);
      /* 弹窗方向自适应：底部节点朝上弹、左右节点对齐容器内，避免被裁剪 */
      el.classList.remove("tip-up", "tip-l", "tip-r");
      if (y > h * 0.5) el.classList.add("tip-up");
      if (x < 145) el.classList.add("tip-l");
      else if (x > w - 145) el.classList.add("tip-r");
    });
    /* 2) 再用时间光线连接节点（按时间顺序），并延伸向未来 */
    if (this.svg && this.path && pos.length) {
      this.svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      let d = "M " + pos[0].x.toFixed(1) + " " + pos[0].y.toFixed(1);
      for (let i = 1; i < pos.length; i++) {
        d += " L " + pos[i].x.toFixed(1) + " " + pos[i].y.toFixed(1);
      }
      const aLast = this.base + init[init.length - 1];
      const seg = 26;
      for (let i = 1; i <= seg; i++) {
        const p = this.cometPos(aLast + (i / seg) * 1.6);
        d += " L " + p.x.toFixed(1) + " " + p.y.toFixed(1);
      }
      this.path.setAttribute("d", d);
    }
    /* 驶向未来的光线：单独一条弧线（从「现在」节点向前延伸） */
    if (this.future && init.length) {
      const a0 = this.base + init[init.length - 1];
      const seg = 30;
      let fd = "";
      for (let i = 0; i <= seg; i++) {
        const aa = a0 + (i / seg) * 1.6;
        const p = this.cometPos(aa);
        fd += (i === 0 ? "M " : " L ") + p.x.toFixed(1) + " " + p.y.toFixed(1);
      }
      this.future.setAttribute("d", fd);
    }
  },

  /* 圆轨道上任意角度的位置（与节点/光梭共用） */
  cometPos(a) {
    const root = this.root;
    const w = root.clientWidth, h = root.clientHeight;
    if (w < 120 || h < 120) return { x: 0, y: 0, s: 1 };
    const rr = root.getBoundingClientRect();
    let cx = w / 2, cy = h * 0.46;
    const av = document.querySelector(".as-avatar");
    if (av) {
      const ar = av.getBoundingClientRect();
      cx = ar.left - rr.left + ar.width / 2;
      cy = ar.top - rr.top + ar.height / 2;
    }
    const R = w < 680
      ? Math.max(150, Math.min(180, Math.min(w, h) * 0.42))
      : Math.max(185, Math.min(230, Math.min(w, h) * 0.40));
    const x = cx + R * Math.sin(a);
    const z = R * (1 - Math.cos(a));
    const s = 440 / (440 + z);
    const y = cy + R * 0.96 * Math.cos(a);
    return { x, y, s };
  },

  /* 光梭：沿「时间连线路径」从最早节点出发，依次跳跃到各节点，最终驶向未来，循环 */
  startComet() {
    const self = this;
    if (this.cometRaf) return;
    this.cometProgress = 0;
    const tick = () => {
      self.cometRaf = requestAnimationFrame(tick);
      if (!self.nodes.length || !self.cometEl) return;
      if (self.cometPause > 0) { self.cometPause -= 16; return; }
      self.cometProgress += 0.0016;
      if (self.cometProgress > 1) self.cometProgress = 0;
      if (self.path) {
        try {
          if (self._pathLen == null) self._pathLen = self.path.getTotalLength(); /* 缓存，避免每帧重算 */
          const L = self._pathLen;
          if (L > 0) {
            const pt = self.path.getPointAtLength(Math.min(1, self.cometProgress) * L);
            self.cometEl.style.left = pt.x.toFixed(1) + "px";
            self.cometEl.style.top = pt.y.toFixed(1) + "px";
            self.cometEl.style.transform = "translate(-50%,-50%)";
            self.cometEl.style.opacity = "1";
            let near = false;
            self.els.forEach(el => {
              if (near) return;
              const ex = parseFloat(el.style.left), ey = parseFloat(el.style.top);
              if (!isNaN(ex) && Math.abs(ex - pt.x) < 26 && Math.abs(ey - pt.y) < 26) near = true;
            });
            if (near) {
              self.cometPause = 650;
              self.cometEl.classList.add("hop");
              setTimeout(() => { if (self.cometEl) self.cometEl.classList.remove("hop"); }, 700);
            }
          }
        } catch (e) { /* ignore */ }
      }
    };
    tick();
    /* 性能优化：时间轴不可见时暂停光梭动画 */
    if (!this.obs && this.root && "IntersectionObserver" in window) {
      this.obs = new IntersectionObserver(entries => {
        const vis = entries[0] && entries[0].isIntersecting;
        if (!vis && self.cometRaf) { cancelAnimationFrame(self.cometRaf); self.cometRaf = 0; }
        else if (vis && !self.cometRaf) { self.cometProgress = 0; tick(); }
      }, { threshold: 0.05 });
      this.obs.observe(this.root);
    }
  },

  tick() {
    cancelAnimationFrame(this.raf);
    const self = this;
    const anim = () => {
      if (Math.abs(self.target - self.base) > 0.002) {
        self.base += (self.target - self.base) * 0.12;
        self.render();
        self.raf = requestAnimationFrame(anim);
      } else {
        self.base = self.target;
        self.render();
      }
    };
    anim();
  }
};

/* 关于我主体内的局部星空（随机闪烁） */
function initAboutStars() {
  const cv = document.getElementById("aboutStars");
  if (!cv || cv.dataset.init) return;
  cv.dataset.init = "1";
  const ctx = cv.getContext("2d");
  let W = 0, H = 0, stars = [];
  const resize = () => {
    const rect = cv.parentElement.getBoundingClientRect();
    W = rect.width; H = rect.height;
    const dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = [];
    const n = Math.max(50, Math.round((W * H) / 6500));
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.3 + 0.35,
        p: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.9 + 0.3,
        c: Math.random() < 0.72 ? "255,255,255" : "34,211,238"
      });
    }
  };
  const draw = t => {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      const a = 0.22 + 0.78 * (0.5 + 0.5 * Math.sin(t * 0.0012 * s.sp + s.p));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c},${a.toFixed(2)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

function initTimeline() {
  if (!TL3D.root) {
    TL3D.root = document.getElementById("tl3d");
    if (!TL3D.root) return;
    TL3D.nodesBox = document.getElementById("tl3dNodes");
    TL3D.svg = document.getElementById("tl3dLine");
    TL3D.path = document.getElementById("tl3dPath");
    TL3D.future = document.getElementById("tl3dFuture");
    TL3D.cometEl = document.getElementById("tl3dComet");
    if (!TL3D.nodesBox || !TL3D.svg || !TL3D.path) return;
    TL3D.bind();
    initAboutStars();
  }
  TL3D.rebuild();
  TL3D.base = 0; TL3D.target = 0;
  TL3D.setFront(TL3D.nodes.length - 1);
  TL3D.startComet();
}

function initMap() {
  const el = document.getElementById("mapChart");
  if (!el || !window.CHINA_GEO) return;
  if (!App.charts.map) {
    echarts.registerMap("china", window.CHINA_GEO);
    App.charts.map = echarts.init(el);
  }
  const c = App.charts.map;
  const byType = t => App.DATA.locations.filter(l => l.type === t)
    .map(l => ({ name: l.name, value: l.coord.slice(), note: l.note }));
  const workPts = byType("work"), studyPts = byType("study");
  const projPts = aggProjectCities().map(g => ({
    name: g.city, value: g.coord.slice(), note: g.list.length + " 个项目 · 合同额 " + fmtMoney(g.contract), city: g.city
  }));
  const seriesIdx = { work: 0, study: 1, project: 2 };
  const dataIdx = { work: 0, study: 0, project: 0 };
  const setIdx = (pts, key) => {
    App.DATA.locations.forEach((l, i) => { if (l.type === key) dataIdx[key] = pts.findIndex(p => p.name === l.name); });
    if (key === "project") projPts.forEach((p, i) => { if (p.city) dataIdx.project = i; });
  };
  setIdx(workPts, "work"); setIdx(studyPts, "study"); setIdx(projPts, "project");
  App.charts.mapMeta = { seriesIdx, dataIdx };

  c.setOption({
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: p => {
        const d = p.data;
        if (!d || !d.name) return "";
        return `<b style="color:#22d3ee">${d.name}</b><br><span style="color:#93b4d4">${d.note || ""}</span>`;
      },
      backgroundColor: "rgba(4,12,26,.92)", borderColor: "rgba(34,211,238,.35)", textStyle: { color: "#e8f4ff" }
    },
    legend: {
      top: 4, left: 8, itemWidth: 12, itemHeight: 12, textStyle: { color: "#93b4d4", fontSize: 12 },
      data: [
        { name: "工作 / 现居", icon: "circle", itemStyle: { color: "#f5b942" } },
        { name: "母校", icon: "circle", itemStyle: { color: "#8b5cf6" } },
        { name: "项目地点", icon: "circle", itemStyle: { color: "#22d3ee" } },
        { name: "省会 / 直辖市", icon: "circle", itemStyle: { color: "rgba(126,168,255,.6)" } }
      ]
    },
    geo: {
      map: "china", roam: true, zoom: 1.18, center: [104.5, 34.8],
      itemStyle: { areaColor: "#0a1c3a", borderColor: "#23477a", borderWidth: 0.8 },
      emphasis: { itemStyle: { areaColor: "#123a6b" }, label: { show: false } }
    },
    series: [
      {
        name: "工作 / 现居", type: "effectScatter", coordinateSystem: "geo",
        data: workPts, symbolSize: 15,
        rippleEffect: { brushType: "stroke", scale: 3.2 },
        label: { show: true, position: "right", formatter: "{b}", color: "#f5b942", fontSize: 13, fontWeight: "bold" },
        itemStyle: { color: "#f5b942", shadowBlur: 12, shadowColor: "rgba(245,185,66,.8)" }
      },
      {
        name: "母校", type: "scatter", coordinateSystem: "geo",
        data: studyPts, symbolSize: 12,
        label: { show: true, position: "right", formatter: "{b}", color: "#b79bff", fontSize: 12 },
        itemStyle: { color: "#8b5cf6" }
      },
      {
        name: "项目地点", type: "scatter", coordinateSystem: "geo",
        data: projPts, symbolSize: 9,
        label: { show: true, position: "right", formatter: "{b}", color: "#7de3f5", fontSize: 11 },
        itemStyle: { color: "#22d3ee", opacity: .92 }
      },
      {
        name: "省会 / 直辖市", type: "scatter", coordinateSystem: "geo",
        data: capitalPoints(), symbolSize: 5,
        itemStyle: { color: "rgba(126,168,255,.6)" },
        emphasis: { itemStyle: { color: "#7ea8ff" }, label: { show: true, position: "right", formatter: "{b}", color: "#9db8ff", fontSize: 10 } }
      }
    ]
  }, true);
  c.on("click", p => {
    const d = p.data;
    if (d && d.city) {
      /* 2D 地图放大聚焦到该城市 */
      const chart = App.charts.map;
      if (chart) {
        chart.setOption({ geo: { center: d.value.slice(), zoom: 6.5 } });
      }
      ProjPanel.openCity(d.city);
    }
  });
}

/* ---------------- 粒子星空 ---------------- */
function initParticles() {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  let W, H, mouse = { x: -999, y: -999 };
  const N = 30;
  const pts = [];
  const SCALE = 0.5; /* 星空画布半分辨率渲染 + CSS 拉伸：填充量降 4 倍，视觉无差 */
  function resize() {
    W = canvas.width = Math.round(innerWidth * SCALE);
    H = canvas.height = Math.round(innerHeight * SCALE);
  }
  resize();
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { mouse.x = e.clientX * SCALE; mouse.y = e.clientY * SCALE; });
  for (let i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.6 + .5,
      c: Math.random() < .5 ? "34,211,238" : Math.random() < .5 ? "255,255,255" : "139,92,246",
      a: Math.random() * .6 + .25,
      sp: 0.4 + Math.random() * 1.6, ph: Math.random() * Math.PI * 2, cap: false
    });
  }
  /* --- 小游戏：鼠标牵引星星，连成金色光线（无 HUD 弹窗） --- */
  const isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const CAPTURE_R = 160, STICK_R = 22, LINE_R = 180, LOSE_R = 300;
  let connected = 0;
  let particlesRunning = true;
  let particlesFrame = 0;
  document.addEventListener("visibilitychange", () => {
    particlesRunning = !document.hidden;
    if (particlesRunning) requestAnimationFrame(draw);
  });
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function draw() {
    if (!particlesRunning) return;
    if (reduceMotion) return; /* 尊重“减弱动效”：只画一帧静态 */
    requestAnimationFrame(draw);
    if (++particlesFrame % 2 !== 0) return; /* 30fps：兼顾小游戏手感 */
    ctx.clearRect(0, 0, W, H);
    const now = performance.now();
    /* 牵引物理：鼠标附近的星星被吸引，贴住即捕获 */
    for (const p of pts) {
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      const d2 = dx * dx + dy * dy;
      if (!isTouch && d2 < CAPTURE_R * CAPTURE_R) {
        const d = Math.sqrt(d2) || 1;
        const pull = (1 - d / CAPTURE_R) * 0.14;
        p.vx += dx / d * pull; p.vy += dy / d * pull;
        p.vx *= 0.95; p.vy *= 0.95;
        if (d < STICK_R) { if (!p.cap) { p.cap = true; connected++; } }
      } else if (p.cap && d2 > LOSE_R * LOSE_R) {
        p.cap = false; connected = Math.max(0, connected - 1);
      }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    /* 星星（捕获的变金色 + 光晕） */
    for (const p of pts) {
      const tw = p.cap ? 1 : 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(now * 0.003 * p.sp + p.ph));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.cap ? p.r + 0.8 : p.r, 0, 7);
      ctx.fillStyle = p.cap ? "rgba(255,209,102,.95)" : "rgba(" + p.c + "," + (p.a * tw).toFixed(2) + ")";
      ctx.fill();
      if (p.cap) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 9);
        g.addColorStop(0, "rgba(255,224,150,.45)");
        g.addColorStop(1, "rgba(255,224,150,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, 7); ctx.fill();
      }
    }
    /* 星座连线（低频） */
    if (particlesFrame % 6 === 0) {
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 85 * 85) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = "rgba(120,200,255,.08)"; ctx.lineWidth = .6; ctx.stroke();
          }
        }
      }
    }
    /* 鼠标连线（牵引线，捕获后变金色） */
    if (!isTouch) {
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINE_R * LINE_R) {
          const a = 0.22 * (1 - d2 / (LINE_R * LINE_R));
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = (p.cap ? "rgba(255,209,102," : "rgba(34,211,238,") + a.toFixed(2) + ")";
          ctx.lineWidth = .7; ctx.stroke();
        }
      }
    }
  })();
}

/* ---------------- 平滑滚动 ---------------- */
let smoothTarget = 0, smoothCur = 0, smoothRaf = 0;
function initSmoothScroll() {
  window.addEventListener("wheel", e => {
    if (e.ctrlKey) return;
    const t = e.target;
    /* 图表区域（3D 地球 / 2D 地图）：滚轮交给图表缩放，页面不滚动 */
    if (t && t.closest && t.closest("#globeChart, #mapChart")) {
      e.preventDefault();
      return;
    }
    /* 弹窗 / 输入框等内部滚动区域：交给原生滚动 */
    if (t && t.closest && t.closest(".reader, .modal, .admin-bar, input, textarea, select, .form-input")) return;
    e.preventDefault();
    const max = document.documentElement.scrollHeight - innerHeight;
    smoothTarget = Math.max(0, Math.min(max, smoothTarget + e.deltaY));
    if (!smoothRaf) smoothLoop();
  }, { passive: false });
  window.addEventListener("keydown", e => {
    const k = e.key;
    const step = innerHeight * .85;
    if (["ArrowDown", "PageDown"].includes(k)) { smoothTarget = Math.min(document.documentElement.scrollHeight - innerHeight, smoothTarget + step); if (!smoothRaf) smoothLoop(); e.preventDefault(); }
    else if (["ArrowUp", "PageUp"].includes(k)) { smoothTarget = Math.max(0, smoothTarget - step); if (!smoothRaf) smoothLoop(); e.preventDefault(); }
    else if (k === "Home") { smoothTarget = 0; if (!smoothRaf) smoothLoop(); e.preventDefault(); }
    else if (k === "End") { smoothTarget = document.documentElement.scrollHeight; if (!smoothRaf) smoothLoop(); e.preventDefault(); }
  });
  window.addEventListener("scroll", () => { smoothCur = window.scrollY; }, { passive: true });
}
function smoothLoop() {
  smoothCur += (smoothTarget - smoothCur) * .13;
  window.scrollTo(0, smoothCur);
  smoothRaf = Math.abs(smoothTarget - smoothCur) < .6 ? 0 : requestAnimationFrame(smoothLoop);
}

/* ---------------- 滚动动画 ---------------- */
let revealIO = null, numIO = null, barIO = null;
function setupObservers() {
  if (revealIO) revealIO.disconnect();
  revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
  }, { threshold: .12 });
  if (numIO) numIO.disconnect();
  numIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.value) || 0;
      const suffix = el.dataset.suffix || "";
      const raw = el.dataset.raw || el.textContent;
      const t0 = performance.now(), dur = 1100;
      const ease = t => 1 - Math.pow(1 - t, 3);
      (function step(now) {
        const k = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round(target * ease(k)) + suffix;
        if (k < 1) requestAnimationFrame(step);
        else el.textContent = raw;
      })(t0);
      numIO.unobserve(el);
    });
  }, { threshold: .4 });
  if (barIO) barIO.disconnect();
  barIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.width = e.target.dataset.w + "%";
      barIO.unobserve(e.target);
    });
  }, { threshold: .3 });
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight * .95) el.classList.add("in");
    else revealIO.observe(el);
  });
  document.querySelectorAll(".k-num").forEach(el => numIO.observe(el));
  document.querySelectorAll(".s-fill").forEach(el => barIO.observe(el));
}

/* ---------------- 文章阅读器 ---------------- */
const Reader = {
  open(id) {
    const b = App.DATA.blog.find(x => x.id === id);
    if (!b) return;
    document.getElementById("readerTitle").textContent = b.title;
    document.getElementById("readerMeta").innerHTML =
      `<span>${b.category}</span><span>🗓 ${b.date}</span><span>${(b.tags || []).map(t => "#" + t).join(" ")}</span>`;
    document.getElementById("readerBody").innerHTML = window.mdRender(b.markdown || "");
    document.getElementById("reader").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },
  close() {
    document.getElementById("reader").classList.add("hidden");
    document.body.style.overflow = "";
  }
};
function initReader() {
  const r = document.getElementById("reader");
  r.addEventListener("click", e => { if (e.target === r) Reader.close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { Reader.close(); ProjPanel.close(); } });
}

/* ---------------- 项目信息面板 ---------------- */
const ProjPanel = {
  open(cfg) {
    document.getElementById("projTitle").textContent = cfg.title;
    document.getElementById("projMeta").innerHTML = cfg.meta || "";
    const sum = document.getElementById("projSummary");
    sum.innerHTML = (cfg.summary || []).map(([l, v]) =>
      `<div class="ps-item"><div class="ps-label">${l}</div><div class="ps-value">${v}</div></div>`).join("");
    const list = document.getElementById("projList");
    list.innerHTML = "";
    (cfg.cards || []).forEach(cd => {
      const rows = (cd.rows || []).map(([l, v]) => `<div>${l}：<b>${v}</b></div>`).join("");
      const img = cd.image
        ? `<div class="pc-img"><img src="${cd.image}" alt="${cd.name}" loading="lazy" onerror="this.parentElement.innerHTML='📷 图片加载失败，请检查路径'"></div>`
        : `<div class="pc-img">📷 项目图片位置<br><span style="font-size:11px">管理 → 项目 → 编辑填入图片</span></div>`;
      list.appendChild(el(`<div class="proj-card">${img}
        <div class="pc-main"><div class="pc-name">${cd.name}</div><div class="pc-rows">${rows}</div></div></div>`));
    });
    document.getElementById("projPanel").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },
  openCity(city) {
    const g = aggProjectCities().find(x => x.city === city);
    if (!g) return;
    ProjPanel.open({
      title: "📍 " + city + " · 项目明细",
      meta: "<span>" + g.list.length + " 个项目</span><span>合同额合计 " + fmtMoney(g.contract) + "</span>",
      summary: [
        ["合同总额", fmtMoney(g.contract)],
        ["累计完成（含税）", fmtMoney(g.done)],
        ["累计已收款（含税）", fmtMoney(g.received)],
        ["回款率", (g.done ? (g.received / g.done * 100).toFixed(1) + "%" : "保密")]
      ],
      cards: g.list.map(p => ({
        name: p.name, image: p.image,
        rows: [
          ["合同额", fmtMoney(p.contract)],
          ["累计完成工作量（含税）", fmtMoney(p.done)],
          ["累计已收款（含税）", fmtMoney(p.received)],
          ["回款率", (p.done ? (p.received / p.done * 100).toFixed(1) + "%" : "保密")],
          ...(p.status ? [["状态", p.status]] : []),
          ...(p.note ? [["备注", p.note]] : [])
        ]
      }))
    });
  },
  /* 单个项目明细（地球项目点点击） */
  openProject(p) {
    if (!p) return;
    const rate = p.done ? (p.received / p.done * 100).toFixed(1) + "%" : "保密";
    ProjPanel.open({
      title: "📌 " + p.name,
      meta: "<span>📍 " + (p.city || "") + "</span>" + (p.status ? "<span>" + p.status + "</span>" : ""),
      summary: [
        ["合同额", fmtMoney(p.contract)],
        ["累计完成（含税）", fmtMoney(p.done)],
        ["累计已收款（含税）", fmtMoney(p.received)],
        ["回款率", rate]
      ],
      cards: [{
        name: p.name, image: p.image,
        rows: [
          ["合同额", fmtMoney(p.contract)],
          ["累计完成工作量（含税）", fmtMoney(p.done)],
          ["累计已收款（含税）", fmtMoney(p.received)],
          ["回款率", rate],
          ...(p.status ? [["状态", p.status]] : []),
          ...(p.note ? [["备注", p.note]] : [])
        ]
      }]
    });
  },
  openWork(l) {
    const p = App.DATA.profile;
    ProjPanel.open({
      title: "💼 " + l.name + " · 工作地点",
      meta: "<span>" + (p.company || "") + "</span>",
      summary: [
        ["岗位", p.title || "—"],
        ["入职", p.joinDate || "—"],
        ["所在地", p.location || "—"],
        ["联系电话", p.phone || "—"]
      ],
      cards: [{ name: l.note || l.name, image: "", rows: [["说明", l.note || "工作所在地"], ["公司", p.company || "—"], ["邮箱", p.email || "—"]] }]
    });
  },
  openStudy(l) {
    const edu = (App.DATA.about.education || [])[0] || {};
    ProjPanel.open({
      title: "🎓 " + l.name + " · 母校",
      meta: "<span>" + (edu.school || "") + " · " + (edu.major || "") + "</span>",
      summary: [
        ["学校", edu.school || "—"],
        ["专业", edu.major || "—"],
        ["学历", edu.degree || "—"],
        ["时间", edu.date || "—"]
      ],
      cards: [{ name: l.note || l.name, image: "", rows: [["说明", l.note || "学习经历"]] }]
    });
  },
  close() {
    document.getElementById("projPanel").classList.add("hidden");
    document.body.style.overflow = "";
  }
};

/* ---------------- 运行时错误捕获（辅助调试） ---------------- */
function initErrorCapture() {
  window.addEventListener("error", e => {
    if (!e || !e.message || e.message === "Script error.") return;
    const box = document.getElementById("jsErrorBox");
    if (!box) return;
    box.style.display = "block";
    box.textContent += e.message + " @ " + (e.filename || "").split("/").pop() + ":" + e.lineno + "\n";
  });
}

/* ---------------- 按需加载图表库（仅 2D 地图需要；首页/地球无需 echarts） ----------------
   性能优化：首屏不再下载 echarts（~1.6MB），进入「地点地图」时才加载 */
let _chartLibsLoading = null;
function ensureChartLibs(cb) {
  if (window.echarts && window.echarts.init && window.CHINA_GEO) { if (cb) cb(); return; }
  if (!_chartLibsLoading) {
    _chartLibsLoading = [];
    const libs = ["assets/china.geo.js", "assets/echarts.min.js"];
    let i = 0;
    const next = () => {
      if (i >= libs.length) return;
      const s = document.createElement("script");
      s.src = libs[i];
      s.async = false; /* 保持依赖顺序 */
      s.onload = () => { i++; next(); };
      s.onerror = () => { i++; next(); };
      document.head.appendChild(s);
    };
    next();
  }
  const wait = () => {
    if (window.echarts && window.echarts.init && window.CHINA_GEO) { if (cb) cb(); }
    else setTimeout(wait, 80);
  };
  wait();
}

/* ---------------- 进场动画：御剑穿越时空 ---------------- */
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  /* 首屏无需 echarts（地球为 Three.js）：不再提前下载 2.3MB 图表库 */
  const cv = document.getElementById("splashCanvas");
  const ctx = cv.getContext("2d");
  let W = 0, H = 0, cx = 0, cy = 0, raf = 0, stars = [];
  const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; cx = W / 2; cy = H / 2; };
  resize();
  window.addEventListener("resize", resize);
  const mk = () => ({
    a: Math.random() * Math.PI * 2,
    r: Math.random() * 0.9 + 0.05,
    sp: 0.007 + Math.random() * 0.018,
    ln: 6 + Math.random() * 10,
    sz: 1 + Math.random() * 1.8
  });
  for (let i = 0; i < 240; i++) stars.push(mk());
  const draw = () => {
    raf = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    const R = Math.max(W, H) * 0.62;
    for (const s of stars) {
      s.r += s.sp;
      if (s.r > 1.25) Object.assign(s, mk());
      const x = cx + Math.cos(s.a) * s.r * R;
      const y = cy + Math.sin(s.a) * s.r * R;
      const bx = cx + Math.cos(s.a) * (s.r - s.ln * s.sp) * R;
      const by = cy + Math.sin(s.a) * (s.r - s.ln * s.sp) * R;
      ctx.strokeStyle = "rgba(150,225,255," + Math.min(1, s.r).toFixed(2) + ")";
      ctx.lineWidth = s.sz;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };
  draw();
  /* 淡出：最短 2.2s（不再等 echarts），最长 8s 兜底 —— 首屏内容更快出现 */
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(raf);
    splash.classList.add("out");
    setTimeout(() => splash.remove(), 1000);
  };
  const t0 = Date.now();
  const check = () => {
    if (done) return;
    if (Date.now() - t0 > 8000) return finish();                 /* 兜底 */
    if (Date.now() - t0 >= 2200) return finish();                /* 最短 2.2s */
    setTimeout(check, 200);
  };
  setTimeout(check, 2000);
  window.addEventListener("load", () => setTimeout(check, 100));
}

/* ---------------- 顶部滚动进度条 ---------------- */
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = p + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------------- 欢迎 toast（每会话一次） ---------------- */
function initWelcomeToast() {
  const t = document.getElementById("welcomeToast");
  if (!t) return;
  if (sessionStorage.getItem("welcomeShown")) return;
  setTimeout(() => { t.dataset.state = "visible"; sessionStorage.setItem("welcomeShown", "1"); }, 1400);
}
function closeWelcome() {
  const t = document.getElementById("welcomeToast");
  if (t) t.dataset.state = "";
}

/* ---------------- 科技感自定义光标 ---------------- */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return; // 触屏设备不启用
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf = 0;
  const INTERACTIVE = "a, button, .loc-item, .kpi, .pf-card, .blog-post, .chip, .tag, .filter-chip, .skill-list span, .btn, .logo, nav a, .globe-reset, .scroll-cue, .social-link, .tag-chip, .exp-card, .reader-close, .admin-bar .btn";
  document.addEventListener("mousemove", e => {
    dot.style.display = ring.style.display = "block";
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
    const overInput = e.target.closest("input, textarea, select");
    dot.classList.toggle("hidden-c", !!overInput);
    ring.classList.toggle("hidden-c", !!overInput);
    if (!overInput) {
      ring.classList.toggle("hovering", !!e.target.closest(INTERACTIVE));
      ring.classList.toggle("target", !!e.target.closest("#globeChart, #mapChart"));
    }
    if (!raf) raf = requestAnimationFrame(loop);
  });
  function loop() {
    rx += (mx - rx) * .16;
    ry += (my - ry) * .16;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    raf = 0;
  }
  document.addEventListener("mousedown", () => ring.classList.add("pressed"));
  document.addEventListener("mouseup", () => ring.classList.remove("pressed"));
  document.addEventListener("mouseleave", () => { dot.style.display = ring.style.display = "none"; });
}

/* ---------------- 中国时间（北京时间）+ 地球昼夜切换 ---------------- */
/* 生成深蓝星空环境纹理（与网站背景粒子星空同风格，供 globe 环境使用） */
function makeStarfieldEnv() {
  try {
    const W = 2048, H = 1024;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");
    if (!ctx) return null;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#0a1a38");
    g.addColorStop(0.5, "#060f24");
    g.addColorStop(1, "#040a18");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 1300; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const r = Math.random() * 1.4 + 0.3;
      const c = Math.random() < 0.65 ? "255,255,255" : "34,211,238";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 7);
      ctx.fillStyle = "rgba(" + c + "," + (Math.random() * 0.7 + 0.3).toFixed(2) + ")";
      ctx.fill();
    }
    for (let i = 0; i < 9; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const rg = ctx.createRadialGradient(x, y, 0, x, y, 130 + Math.random() * 130);
      rg.addColorStop(0, "rgba(34,211,238,.07)");
      rg.addColorStop(1, "rgba(34,211,238,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(x - 260, y - 260, 520, 520);
    }
    return cv.toDataURL("image/png");
  } catch (e) { return null; }
}

/* 程序化生成地球纹理（canvas → dataURL 字符串）：
   echarts-gl 的 baseTexture 只接受字符串（URL 或 dataURL），传 Image/Canvas 对象会白球；
   本函数在本地画布直接生成纹理，100% 成功、无网络请求、任何环境都不会白球。
   day=true 白天（蓝海科技网格 + 中国淡高亮），day=false 夜晚（黑底城市灯光） */
let _globeTexCache = null;
function globeTextureDataURL(day) {
  const key = day ? "d" : "n";
  if (_globeTexCache && _globeTexCache[key]) return _globeTexCache[key];
  try {
    const W = 1024, H = 512;
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");
    if (!ctx) return null;
    /* 海洋底色渐变 */
    const g = ctx.createLinearGradient(0, 0, 0, H);
    if (day) {
      g.addColorStop(0, "#0b4a8f");
      g.addColorStop(0.45, "#083b75");
      g.addColorStop(1, "#041f45");
    } else {
      g.addColorStop(0, "#0a1226");
      g.addColorStop(0.45, "#060d1e");
      g.addColorStop(1, "#02050f");
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    /* 白天：波光噪点 */
    if (day) {
      for (let i = 0; i < 900; i++) {
        ctx.fillStyle = "rgba(190,235,255," + (Math.random() * 0.08).toFixed(3) + ")";
        ctx.fillRect(Math.random() * W, Math.random() * H, 1.2, 1.2);
      }
    }
    /* 经纬网格 */
    ctx.strokeStyle = day ? "rgba(120,210,255,.18)" : "rgba(80,140,255,.15)";
    ctx.lineWidth = 0.7;
    for (let i = 0; i <= 24; i++) {
      ctx.beginPath();
      ctx.moveTo(W * i / 24, 0); ctx.lineTo(W * i / 24, H);
      ctx.stroke();
    }
    for (let i = 0; i <= 12; i++) {
      ctx.beginPath();
      ctx.moveTo(0, H * i / 12); ctx.lineTo(W, H * i / 12);
      ctx.stroke();
    }
    /* 赤道高亮线 */
    ctx.strokeStyle = day ? "rgba(103,232,249,.35)" : "rgba(90,140,255,.30)";
    ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
    /* 城市灯光 / 光点 */
    const n = day ? 300 : 520;
    for (let i = 0; i < n; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const r = Math.random() * 1.5 + 0.4;
      if (day) {
        ctx.fillStyle = "rgba(200,240,255," + (Math.random() * 0.45 + 0.12).toFixed(2) + ")";
      } else {
        const warm = Math.random() < 0.55;
        ctx.fillStyle = warm
          ? "rgba(255,205,120," + (Math.random() * 0.85 + 0.15).toFixed(2) + ")"
          : "rgba(150,215,255," + (Math.random() * 0.75 + 0.15).toFixed(2) + ")";
      }
      ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }
    /* 大光斑（城市群） */
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const rr = 14 + Math.random() * 30;
      const rg = ctx.createRadialGradient(x, y, 0, x, y, rr);
      if (day) {
        rg.addColorStop(0, "rgba(120,220,255,.20)");
        rg.addColorStop(1, "rgba(120,220,255,0)");
      } else {
        rg.addColorStop(0, "rgba(255,200,110,.30)");
        rg.addColorStop(1, "rgba(255,200,110,0)");
      }
      ctx.fillStyle = rg;
      ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    /* 中国区域淡高亮 + 轮廓（数据地球的视觉重心，配合 chinaBorderTexture 虚线） */
    if (window.CHINA_GEO) {
      ctx.fillStyle = day ? "rgba(56,189,248,.12)" : "rgba(90,150,255,.12)";
      ctx.strokeStyle = day ? "rgba(103,232,249,.55)" : "rgba(140,180,255,.55)";
      ctx.lineWidth = 1.3;
      window.CHINA_GEO.features.forEach(f => {
        const gg = f.geometry;
        if (!gg || !gg.coordinates) return;
        const polys = gg.type === "Polygon" ? [gg.coordinates] : gg.coordinates;
        polys.forEach(poly => {
          const ring = poly && poly[0];
          if (!ring || ring.length < 3) return;
          ctx.beginPath();
          ring.forEach(([lng, lat], i) => {
            const x = (lng + 180) / 360 * W;
            const y = (90 - lat) / 180 * H;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        });
      });
    }
    const url = cv.toDataURL("image/jpeg", 0.82);
    _globeTexCache = _globeTexCache || {};
    _globeTexCache[key] = url;
    return url;
  } catch (e) { return null; }
}

/* 后台预加载真实地图贴图（world-day.jpg / world.jpg）：
   就绪后把地球无缝切换为真实地图；未就绪/失败期间用程序化 dataURL 兜底，绝无白帧白球 */
function preloadGlobeMaps() {
  if (App.globeMapsLoading) return;
  App.globeMapsLoading = true;
  App.globeTexImg = App.globeTexImg || {};
  const map = { d: "assets/world-day.jpg", n: "assets/world.jpg" };
  Object.keys(map).forEach(k => {
    const img = new Image();
    img.onload = () => {
      App.globeTexImg[k] = img;
      const c = App.charts.globe;
      if (c && App.globeTexImg.d && App.globeTexImg.n) {
        try { c.setOption({ globe: globeDayNightCfg(isChinaDay()) }); } catch (e) { /* ignore */ }
      }
    };
    img.onerror = () => { /* 加载失败保持兜底纹理，不白球 */ };
    img.src = map[k];
  });
}

/* 白天/夜晚的地球配置（纹理 + 光照）
   主纹理：真实地图图片（URL 字符串，echarts-gl 只接受字符串纹理，传 Image/Canvas 对象会白球）。
   图片已预加载就绪 → 用 URL；未就绪/失败 → 程序化 dataURL 兜底；另有深色 baseColor 最终兜底。
   任何情况下都不会白球。 */
function globeDayNightCfg(day) {
  const url = day ? "assets/world-day.jpg" : "assets/world.jpg";
  const key = day ? "d" : "n";
  const img = App.globeTexImg && App.globeTexImg[key];
  const ok = img && img.complete && img.naturalWidth > 0;
  const proc = globeTextureDataURL(day);
  /* 实测：echarts-gl 的 baseTexture 必须传字符串（URL/dataURL），
     传 Image/Canvas 对象会渲染成灰球。故优先用图片 URL（导出版为内联 dataURL），
     图片未就绪时回退程序化 dataURL 纹理，再不行才回退深色底 */
  const baseTexture = ok ? url : (proc || url);
  return {
    baseTexture,
    /* 纹理可用时用白底（避免把纹理乘暗）；仅完全无纹理时才用深色底兜底，绝不白球 */
    baseColor: (ok || proc) ? "#ffffff" : (day ? "#0a3d7a" : "#040913"),
    light: {
      ambient: { intensity: day ? 1.05 : 0.62 },
      main: { intensity: day ? 1.55 : 0.95, shadow: false, alpha: day ? 40 : 32, beta: 20 }
    },
    atmosphere: { show: true, color: day ? "#38d9f2" : "#5aa7ff", glowPower: day ? 75 : 92, innerGlowPower: 6 }
  };
}

/* ============ 地球：环绕光环 + 夜晚灯光图层 ============ */
/* 倾斜大圆环上的点（球面“环绕光环”，随地球一起旋转、近大远小） */
function globeRingPoints(tiltDeg, count, offsetDeg) {
  const pts = [];
  const tilt = tiltDeg * Math.PI / 180;
  const off = (offsetDeg || 0) * Math.PI / 180;
  for (let i = 0; i < count; i++) {
    const a = off + i / count * Math.PI * 2;
    const x = Math.cos(a);
    const y = Math.sin(a) * Math.cos(tilt);
    const z = Math.sin(a) * Math.sin(tilt);
    const lat = Math.asin(Math.max(-1, Math.min(1, y))) * 180 / Math.PI;
    const lng = Math.atan2(z, x) * 180 / Math.PI;
    pts.push([+lng.toFixed(2), +lat.toFixed(2), 0]);
  }
  return pts;
}

/* 中国边界图层（缓存，避免动画每帧重复生成大画布） */
let _chinaBorderLayerCache;
function chinaBorderLayerTexture() {
  if (_chinaBorderLayerCache === undefined) _chinaBorderLayerCache = chinaBorderTexture() || null;
  return _chinaBorderLayerCache;
}

/* 夜晚“城市灯光”图层（透明 PNG；导出版会被内联为 dataURL） */
function cityLightsLayerTexture() {
  return "assets/world-lights.png";
}

/* 组装 globe.layers：中国边界 + 城市灯光（intensity 由 animateCityLights 驱动 0→1） */
function globeLayers(cityIntensity) {
  const arr = [];
  const cb = chinaBorderLayerTexture();
  if (cb) arr.push({ type: "blend", blendTo: "albedo", texture: cb, intensity: 1 });
  arr.push({ type: "blend", blendTo: "albedo", texture: cityLightsLayerTexture(), intensity: Math.max(0, Math.min(1, cityIntensity || 0)) });
  return arr;
}

/* 夜晚灯光缓慢亮起 / 白天缓缓熄灭（rAF 缓动，约 2.6s） */
function animateCityLights(target, dur) {
  const c = App.charts.globe;
  if (!c) return;
  if (App._lightsRaf) cancelAnimationFrame(App._lightsRaf);
  const from = App._lightsVal || 0;
  const t0 = performance.now();
  dur = dur || 2600;
  const step = now => {
    const k = Math.min(1, (now - t0) / dur);
    const ease = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    const v = from + (target - from) * ease;
    App._lightsVal = v;
    /* 携带完整地球配置（纹理/底色/光照），任何竞态导致的坏状态都会在下一帧被自愈 */
    try { c.setOption({ globe: Object.assign({ layers: globeLayers(v) }, globeDayNightCfg(isChinaDay())) }); } catch (e) { /* ignore */ }
    if (k < 1) App._lightsRaf = requestAnimationFrame(step);
    else App._lightsRaf = 0;
  };
  App._lightsRaf = requestAnimationFrame(step);
}

function isChinaDay() {
  const bj = new Date(Date.now() + 8 * 3600 * 1000);
  const h = bj.getUTCHours();
  return h >= 6 && h < 18;
}
function initCnClock() {
  const el = document.getElementById("cnTime");
  if (!el) return;
  let lastPeriod = "";
  const tick = () => {
    const bj = new Date(Date.now() + 8 * 3600 * 1000);
    const pad = n => String(n).padStart(2, "0");
    const hh = pad(bj.getUTCHours()), mm = pad(bj.getUTCMinutes()), ss = pad(bj.getUTCSeconds());
    el.textContent = hh + ":" + mm + ":" + ss;
    const meta = document.getElementById("cnMeta");
    if (meta) {
      const period = isChinaDay() ? "day" : "night";
      meta.innerHTML =
        `<span>${bj.getUTCFullYear()}-${pad(bj.getUTCMonth() + 1)}-${pad(bj.getUTCDate())} 星期${["日","一","二","三","四","五","六"][bj.getUTCDay()]}</span>` +
        `<span class="time-day ${period}">${period === "day" ? "🌞 白天" : "🌙 夜晚"}</span>`;
      if (period !== lastPeriod) {
        lastPeriod = period;
        const c = App.charts.globe;
        if (c && c.setDayNight) c.setDayNight(period === "day");
      }
    }
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------------- 站点运行时间计时 ---------------- */
function initRuntime() {
  const d = document.getElementById("rtDays");
  if (!d) return;
  const start = App.DATA.settings.siteStart || "2026-08-15";
  const t0 = new Date(start).getTime();
  const pad = n => String(n).padStart(2, "0");
  const tick = () => {
    const s = Math.max(0, Math.floor((Date.now() - t0) / 1000));
    d.textContent = Math.floor(s / 86400);
    document.getElementById("rtHours").textContent = pad(Math.floor((s % 86400) / 3600));
    document.getElementById("rtMins").textContent = pad(Math.floor((s % 3600) / 60));
    document.getElementById("rtSecs").textContent = pad(s % 60);
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------------- Toast ---------------- */
function toast(msg, type) {
  const box = document.getElementById("toast");
  const t = el(`<div class="toast ${type || ""}">${msg}</div>`);
  box.appendChild(t);
  setTimeout(() => { t.style.opacity = "0"; t.style.transition = ".4s"; }, 2600);
  setTimeout(() => t.remove(), 3100);
}

/* ---------------- 启动 ---------------- */
window.go = go;
window.App = App;
window.Reader = Reader;
window.ProjPanel = ProjPanel;
window.toast = toast;
/* 进场动画已移除：档案室改为二向箔展开入场 */
App.init();
