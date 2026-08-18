/* ============================================================
 * md.js —— 轻量 Markdown 渲染器（零依赖）
 * 支持：标题 #~#####、粗体、斜体、删除线、行内代码、代码块、
 *       有序/无序列表、引用、链接、图片、分割线、表格、任务清单
 * 用法：mdRender(markdownString) -> HTML 字符串
 * ============================================================ */
"use strict";

function mdEscape(s) {
  return s
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function mdInline(s) {
  return s
    // 行内代码（先占位保护）
    .replace(/`([^`]+)`/g, (m, c) => "\u0001" + mdEscape(c) + "\u0001")
    // 图片 ![alt](url)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (m, alt, url, t) => '<img src="' + mdEscape(url) + '" alt="' + mdEscape(alt) + '" loading="lazy">')
    // 链接 [text](url)
    .replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (m, t, url, ti) => '<a href="' + mdEscape(url) + '" target="_blank" rel="noopener"' + (ti ? ' title="' + mdEscape(ti) + '"' : "") + ">" + mdInline(t) + "</a>")
    // 加粗
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    // 斜体
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    // 删除线
    .replace(/~~([^~]+)~~/g, "<del>$1</del>")
    // 恢复行内代码
    .replace(/\u0001([^\u0001]+)\u0001/g, '<code class="md-code">$1</code>');
}

function mdRender(src) {
  if (!src) return "";
  const lines = src.replace(/\r\n?/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let list = null;      // {type:'ul'|'ol', items:[], task:bool}
  let code = null;      // {lang, buf}
  let table = null;     // {head:[], rows:[[..]], align:[]}
  let para = [];        // 普通段落缓冲

  const flushPara = () => {
    if (para.length) {
      out.push("<p>" + para.map(mdInline).join("<br>") + "</p>");
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      const tag = list.type === "ol" ? "ol" : "ul";
      out.push("<" + tag + ">" + list.items.join("") + "</" + tag + ">");
      list = null;
    }
  };
  const flushTable = () => {
    if (table) {
      let h = "<table><thead><tr>";
      table.head.forEach((c, j) => {
        const al = table.align[j] ? ' style="text-align:' + table.align[j] + '"' : "";
        h += "<th" + al + ">" + mdInline(c) + "</th>";
      });
      h += "</tr></thead><tbody>";
      table.rows.forEach(r => {
        h += "<tr>";
        r.forEach((c, j) => {
          const al = table.align[j] ? ' style="text-align:' + table.align[j] + '"' : "";
          h += "<td" + al + ">" + mdInline(c) + "</td>";
        });
        h += "</tr>";
      });
      h += "</tbody></table>";
      out.push(h);
      table = null;
    }
  };

  for (; i < lines.length; i++) {
    const line = lines[i];

    // 代码块
    if (/^```/.test(line)) {
      if (!code) {
        flushPara(); flushList(); flushTable();
        code = { lang: line.slice(3).trim(), buf: [] };
      } else {
        out.push('<pre class="md-pre"><code class="md-codeblock"' +
          (code.lang ? ' data-lang="' + mdEscape(code.lang) + '"' : "") + ">" +
          mdEscape(code.buf.join("\n")) + "</code></pre>");
        code = null;
      }
      continue;
    }
    if (code) { code.buf.push(line); continue; }

    const t = line.trim();
    if (!t) { flushPara(); flushList(); flushTable(); continue; }

    // 表格：表头行 + 分隔行
    if (table && /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(t)) { continue; }
    if (/^\|.*\|$/.test(t) && i + 1 < lines.length && /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(lines[i + 1].trim())) {
      flushPara(); flushList();
      const cells = t.replace(/^\||\|$/g, "").split("|").map(c => c.trim());
      const sep = lines[i + 1].trim().split("|").filter(Boolean).map(c => c.trim());
      table = {
        head: cells,
        align: sep.map(c => c.startsWith(":") && c.endsWith(":") ? "center" : c.endsWith(":") ? "right" : c.startsWith(":") ? "left" : ""),
        rows: []
      };
      i++;
      continue;
    }
    if (table && /^\|.*\|$/.test(t)) {
      table.rows.push(t.replace(/^\||\|$/g, "").split("|").map(c => c.trim()));
      continue;
    }

    // 标题
    const h = t.match(/^(#{1,5})\s+(.*)$/);
    if (h) {
      flushPara(); flushList(); flushTable();
      const n = h[1].length;
      out.push("<h" + n + ">" + mdInline(h[2]) + "</h" + n + ">");
      continue;
    }
    // 分割线
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(t)) {
      flushPara(); flushList(); flushTable();
      out.push("<hr>");
      continue;
    }
    // 引用
    if (/^>\s?/.test(t)) {
      flushPara(); flushList(); flushTable();
      const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        q.push(mdInline(lines[i].replace(/^>\s?/, "")));
        i++;
      }
      i--;
      out.push("<blockquote>" + q.join("<br>") + "</blockquote>");
      continue;
    }
    // 列表
    const li = t.match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
    if (li) {
      flushPara();
      const isTask = /^\[[ xX]\]\s+/.test(li[3]);
      const content = isTask ? li[3].replace(/^\[[ xX]\]\s+/, "") : li[3];
      const checked = isTask && /^\[[xX]\]/.test(li[3]);
      const item = "<li" + (isTask ? ' class="md-task' + (checked ? " done" : "") + '"' : "") + ">" +
        (isTask ? '<input type="checkbox" disabled' + (checked ? " checked" : "") + "> " : "") +
        mdInline(content) + "</li>";
      if (list && list.type === (li[2] === "-" || li[2] === "*" || li[2] === "+" ? "ul" : "ol")) {
        list.items.push(item);
      } else {
        flushList();
        list = { type: li[2] === "-" || li[2] === "*" || li[2] === "+" ? "ul" : "ol", items: [item] };
      }
      continue;
    }
    flushList(); flushTable();
    para.push(t);
  }
  flushPara(); flushList(); flushTable();
  if (code) out.push('<pre class="md-pre"><code class="md-codeblock">' + mdEscape(code.buf.join("\n")) + "</code></pre>");
  return out.join("\n");
}

if (typeof window !== "undefined") window.mdRender = mdRender;
