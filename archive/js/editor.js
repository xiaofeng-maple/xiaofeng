/* ============================================================
 * editor.js —— 管理后台（增删改本站内容）
 * 入口：右上角「⚙ 管理」；合体版无后端无密码，修改保存到本浏览器
 * ============================================================ */
"use strict";

const Editor = {
  mode: false,

  /* 进入管理模式（合体后无后端、无密码：修改保存到本浏览器） */
  toggle() {
    if (Editor.mode) { Editor.exit(); return; }
    toast("🛠 管理模式已开启（修改保存到本浏览器；全网生效请用管理面板「下载 data.json」）", "ok");
    Editor.enter();
  },
  enter() { Editor.mode = true; Editor.syncBar(); },
  exit() { Editor.mode = false; Editor.syncBar(); toast("管理模式已退出", "ok"); },

  syncBar() {
    const bar = document.getElementById("adminBar");
    if (!bar) return;
    if (!Editor.mode) {
      bar.classList.add("hidden");
      bar.innerHTML = "";
      Editor.removeCardTools(); /* 退出管理模式：清理所有编辑按钮 */
      return;
    }
    bar.classList.remove("hidden");
    bar.innerHTML =
      `<button class="btn btn-primary btn-sm" onclick="Editor.addMenu()">＋ 新增</button>
       <button class="btn btn-sm" onclick="Editor.openPanel()">⚙ 管理面板</button>
       <button class="btn btn-ghost btn-sm" onclick="Editor.exit()">✕ 退出管理</button>`;
    Editor.attachCardTools();
  },

  /* 清理页面上的所有编辑按钮（退出管理模式时调用） */
  removeCardTools() {
    document.querySelectorAll(".card-admin").forEach(b => b.remove());
    document.querySelectorAll(".admin-add-hint").forEach(b => b.remove());
    document.querySelectorAll(".has-admin").forEach(e => e.classList.remove("has-admin"));
    document.querySelectorAll("[data-admin]").forEach(e => delete e.dataset.admin);
    document.querySelectorAll("[data-add-btn]").forEach(e => delete e.dataset.addBtn);
  },

  /* 页面上直接编辑：作品/文章卡片悬停显示 编辑/删除 按钮 */
  attachCardTools() {
    if (!Editor.mode) return;
    const addTools = (cards, type) => {
      cards.forEach(card => {
        if (card.querySelector(".card-admin")) return;
        const id = Number(card.dataset.pf || card.dataset.blog);
        const list = App.DATA[type];
        const idx = list.findIndex(x => x.id === id);
        if (idx < 0) return;
        const tools = document.createElement("span");
        tools.className = "card-admin";
        tools.innerHTML =
          `<button class="btn btn-sm" title="编辑" onclick="Editor.openForm('${type}',${idx})">✏️</button>
           <button class="btn btn-sm btn-danger" title="删除" onclick="Editor.delItem('${type}',${idx})">🗑</button>`;
        card.appendChild(tools);
        card.classList.add("has-admin");
      });
    };
    addTools(document.querySelectorAll(".pf-card[data-pf]"), "portfolio");
    addTools(document.querySelectorAll(".blog-post[data-blog]"), "blog");
    /* 区块快捷新增按钮 */
    Editor.addSecAddBtn("pfGrid", "portfolio");
    Editor.addSecAddBtn("blogList", "blog");
    /* 首页 / 关于我：直接编辑与新增 */
    Editor.attachEditBtn(document.querySelector(".portfolio-hero"), "✏️ 编辑个人资料", () => Editor.formProfile());
    const globeCard = document.querySelector("#globe .card") || document.querySelector("#view-home .card");
    Editor.attachEditBtn(globeCard, "＋ 新增项目", () => Editor.openForm("projects", -1));
    const idBox = document.getElementById("asSummary") && document.getElementById("asSummary").closest(".as-id");
    Editor.attachEditBtn(idBox, "✏️ 编辑资料", () => Editor.formProfile());
    Editor.attachEditBtn(document.getElementById("asHobbies"), "＋ 新增特长", () => Editor.openForm("hobbies", -1));
    const introCard = document.getElementById("aboutIntro") && document.getElementById("aboutIntro").closest(".card");
    Editor.attachEditBtn(introCard, "✏️ 编辑简介", () => Editor.formAbout());
    const contactCard = document.querySelector("#contact .card");
    Editor.attachEditBtn(contactCard, "✏️ 编辑联系方式", () => Editor.formProfile());
    Editor.attachEditBtn(document.querySelector(".as-chip-tl"), "✏️ 经历", () => Editor.openForm("experience", 0));
    Editor.attachEditBtn(document.querySelector(".as-chip-tr"), "✏️ 项目", () => Editor.openForm("projects", -1));
  },

  /* 给任意元素附加常显编辑按钮 */
  attachEditBtn(target, label, onClick) {
    if (!target || target.dataset.admin) return;
    target.dataset.admin = "1";
    target.classList.add("has-admin");
    /* 确保按钮定位在该元素内部（static 元素改为 relative，避免按钮错位盖住别处） */
    if (getComputedStyle(target).position === "static") target.style.position = "relative";
    const b = document.createElement("span");
    b.className = "card-admin force";
    b.innerHTML = `<button class="btn btn-sm">${label}</button>`;
    b.addEventListener("click", e => { e.stopPropagation(); onClick(); });
    target.appendChild(b);
  },

  addSecAddBtn(containerId, type) {
    const box = document.getElementById(containerId);
    if (!box || box.dataset.addBtn) return;
    box.dataset.addBtn = "1";
    const b = document.createElement("div");
    b.className = "admin-add-hint";
    b.textContent = "＋ 新增" + (type === "portfolio" ? "作品" : "学习文章");
    b.onclick = () => Editor.openForm(type, -1);
    box.parentElement.insertBefore(b, box.nextSibling);
  },

  /* 新增下拉菜单 */
  addMenu() {
    const bar = document.getElementById("adminBar");
    if (document.getElementById("addSel")) return;
    const sel = document.createElement("select");
    sel.id = "addSel";
    sel.className = "form-select btn-sm";
    sel.style.width = "auto";
    sel.innerHTML =
      `<option value="">选择要新增的类型…</option>
       <option value="projects">项目</option>
       <option value="portfolio">作品</option>
       <option value="blog">学习文章</option>
       <option value="experience">工作经历</option>
       <option value="location">地图地点</option>
       <option value="education">教育背景</option>
       <option value="hobbies">个人特长</option>
       <option value="skills">技能条目</option>
       <option value="timeline">时间轴条目</option>`;
    sel.onchange = () => {
      if (sel.value) Editor.openForm(sel.value, -1);
      sel.remove();
    };
    bar.insertBefore(sel, bar.firstChild);
    sel.focus();
  },

  /* ---------------- 表单规格 ---------------- */
  spec(type) {
    const S = {
      portfolio: {
        title: "作品", list: "portfolio",
        fields: [
          { key: "title", label: "作品名称", required: true },
          { key: "type", label: "类型（用于筛选）", required: true, placeholder: "如：财务工具 / 数据可视化 / 网页作品" },
          { key: "date", label: "日期" },
          { key: "tags", label: "标签", type: "tags" },
          { key: "desc", label: "描述", type: "textarea", rows: 3 },
          { key: "link", label: "链接（可选）", placeholder: "https://…" },
          { key: "cover", label: "封面色（CSS 渐变，可选）", placeholder: "linear-gradient(135deg,#0ea5e9,#6366f1)" }
        ]
      },
      blog: {
        title: "学习文章", list: "blog",
        fields: [
          { key: "title", label: "标题", required: true },
          { key: "category", label: "分类", required: true, placeholder: "如：技能学习 / 技术实践 / 工作沉淀" },
          { key: "date", label: "日期", placeholder: "2026.08" },
          { key: "tags", label: "标签", type: "tags" },
          { key: "summary", label: "摘要（列表页显示）", type: "textarea", rows: 2 },
          { key: "markdown", label: "正文（Markdown 语法）", type: "markdown" }
        ]
      },
      experience: {
        title: "工作经历", list: "experience",
        fields: [
          { key: "title", label: "职位 / 经历名称", required: true },
          { key: "company", label: "公司 / 单位" },
          { key: "date", label: "时间", placeholder: "2022.07 – 2026.07" },
          { key: "summary", label: "一句话总结" },
          { key: "points", label: "职责要点（每行一条）", type: "points", rows: 6 },
          { key: "tags", label: "标签", type: "tags" },
          { key: "highlight", label: "标记为亮点项目", type: "checkbox" }
        ]
      },
      location: {
        title: "地图地点", list: "locations",
        fields: [
          { key: "name", label: "城市名称", required: true },
          { key: "lng", label: "经度", type: "number", required: true, placeholder: "如 113.26（广州）" },
          { key: "lat", label: "纬度", type: "number", required: true, placeholder: "如 23.13（广州）" },
          { key: "type", label: "类型", type: "select", required: true,
            options: [["work", "工作 / 现居"], ["study", "母校"], ["project", "项目地点"]] },
          { key: "note", label: "备注" }
        ]
      },
      calendar: {
        title: "日历事项", list: "calendar",
        fields: [
          { key: "date", label: "日期 (YYYY-MM-DD)", required: true, placeholder: "2026-08-20" },
          { key: "title", label: "事项名称", required: true },
          { key: "desc", label: "说明", type: "textarea", rows: 2 }
        ]
      },
      education: {
        title: "教育背景", list: "education",
        fields: [
          { key: "school", label: "学校", required: true },
          { key: "major", label: "专业" },
          { key: "degree", label: "学历", placeholder: "本科 · 管理学学士 · 全日制" },
          { key: "date", label: "时间", placeholder: "2018.09 – 2022.06" }
        ]
      },
      hobbies: {
        title: "个人特长", list: "hobbies",
        fields: [
          { key: "icon", label: "图标（Emoji）", placeholder: "📊" },
          { key: "title", label: "标题", required: true },
          { key: "text", label: "描述", type: "textarea", rows: 3 }
        ]
      },
      stats: {
        title: "数据指标（KPI）", list: "stats",
        fields: [
          { key: "icon", label: "图标（Emoji）", placeholder: "💰" },
          { key: "label", label: "指标名称", required: true },
          { key: "value", label: "数值", type: "number", required: true },
          { key: "suffix", label: "后缀", placeholder: "亿 / 万+ / +" },
          { key: "note", label: "备注" }
        ]
      },
      skills: {
        title: "技能条目", list: "skills",
        fields: [
          { key: "name", label: "技能名称", required: true },
          { key: "score", label: "分数（0–100）", type: "number", required: true },
          { key: "tags", label: "说明标签", type: "tags" }
        ]
      },
      timeline: {
        title: "时间轴条目", list: "timeline",
        fields: [
          { key: "name", label: "名称", required: true },
          { key: "start", label: "开始（年.月）", required: true, placeholder: "2022.07" },
          { key: "end", label: "结束（年.月）", required: true, placeholder: "2026.07" },
          { key: "color", label: "颜色", type: "color",
            options: [["#f5b942", "金色"], ["#22d3ee", "青色"], ["#8b5cf6", "紫色"], ["#3b82f6", "蓝色"], ["#2dd4bf", "青绿"]] },
          { key: "detail", label: "描述", type: "textarea", rows: 2 }
        ]
      },
      projects: {
        title: "项目", list: "projects",
        fields: [
          { key: "name", label: "项目名称", required: true },
          { key: "city", label: "项目地点（城市）", required: true, placeholder: "如：东莞 / 深圳" },
          { key: "lng", label: "经度", type: "number", placeholder: "如 113.75（东莞）", hint: "同一城市的项目可填相同坐标" },
          { key: "lat", label: "纬度", type: "number", placeholder: "如 23.02（东莞）" },
          { key: "contract", label: "合同额（元）", type: "number", placeholder: "留空则展示为「保密」", hint: "为避免敏感数据泄露，金额可留空；留空后页面统一显示「保密」" },
          { key: "done", label: "累计完成工作量（含税，元）", type: "number", hint: "留空则展示为「保密」" },
          { key: "received", label: "累计已收款（含税，元）", type: "number", hint: "留空则展示为「保密」" },
          { key: "status", label: "状态（可选）", placeholder: "在建 / 竣工 / 结算中…" },
          { key: "image", label: "项目图片", placeholder: "images/xxx.jpg 或 https://…", hint: "把图片文件放进项目目录的 images/ 文件夹，这里填文件名；导出云端时 images/ 会自动复制" },
          { key: "note", label: "备注（可选）" }
        ]
      }
    };
    return S[type] || null;
  },

  closeModal() {
    document.getElementById("modal").classList.add("hidden");
  },

  addTag(ev, input) {
    if (ev.key !== "Enter" && ev.key !== ",") return;
    ev.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    const box = input.parentElement;
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = v + "<button onclick='Editor.delTag(this)'>✕</button>";
    box.insertBefore(span, input);
    input.value = "";
  },
  delTag(btn) { btn.parentElement.remove(); },

  collectTags(box) {
    const key = box.dataset.tags;
    return Array.from(box.querySelectorAll(".tag")).map(t => t.childNodes[0].textContent);
  },

  /* 收集表单数据并保存 */
  collect(type, index, form) {
    const spec = Editor.spec(type);
    const list = App.DATA[spec.list];
    const item = index >= 0 ? list[index] : {};
    const fd = new FormData(form);

    spec.fields.forEach(f => {
      if (f.type === "tags") {
        const box = form.querySelector(`[data-tags="${f.key}"]`);
        item[f.key] = Editor.collectTags(box);
      } else if (f.type === "points") {
        item[f.key] = (fd.get(f.key) || "").split("\n").map(s => s.trim()).filter(Boolean);
      } else if (f.type === "checkbox") {
        item[f.key] = !!fd.get(f.key);
      } else if (f.type === "number") {
        item[f.key] = fd.get(f.key) === "" ? 0 : Number(fd.get(f.key));
      } else {
        item[f.key] = (fd.get(f.key) || "").trim();
      }
    });
    /* 必填校验 */
    for (const f of spec.fields) {
      if (f.required && (item[f.key] === "" || item[f.key] === undefined || item[f.key] === null)) {
        toast("请填写「" + f.label + "」", "err");
        return;
      }
    }
    /* 坐标转换 */
    if (type === "location") item.coord = [Number(item.lng), Number(item.lat)];
    if (type === "projects") item.coord = [Number(item.lng) || 114, Number(item.lat) || 23];
    if (index < 0) list.push(item);
    Editor.closeModal();
    App.save();
    App.renderAll();
    toast("已保存：" + spec.title, "ok");
  },

  delItem(type, index) {
    const spec = Editor.spec(type);
    const list = App.DATA[spec.list];
    if (!confirm("确定删除这条「" + spec.title + "」？")) return;
    list.splice(index, 1);
    Editor.closeModal();
    App.save();
    App.renderAll();
    toast("已删除：" + spec.title, "ok");
  },

  /* ---------------- 管理面板 ---------------- */
  openPanel() {
    document.getElementById("modalTitle").textContent = "⚙ 管理面板";
    const form = document.getElementById("modalForm");
    form.innerHTML = "";
    const groups = [
      ["📄 基本信息", [
        ["编辑个人资料（姓名/联系方式/简介）", "profile"],
        ["编辑首页标语与摘要", "profile"],
        ["编辑「关于我」简介 / 证书（每行一个）", "about"]
      ]],
      ["📊 数据", [
        ["项目数据（合同额/完成/收款）", "projects"],
        ["技能条目", "skills"],
        ["能力雷达（指标与分数）", "radar"]
      ]],
      ["💼 内容", [
        ["工作经历", "experience"],
        ["时间轴条目", "timeline"],
        ["作品集", "portfolio"],
        ["学习记录（博客文章）", "blog"],
        ["教育背景", "education"],
        ["个人特长", "hobbies"]
      ]],
      ["🗺️ 地图", [
        ["地图地点", "location"]
      ]],
      ["🗓 日历", [
        ["日历特殊事项", "calendar"]
      ]]
    ];
    groups.forEach(([title, items]) => {
      const h = el(`<div style="font-size:12px;color:var(--dim);letter-spacing:2px;margin:16px 0 6px;border-top:1px dashed var(--line);padding-top:12px">${title}</div>`);
      form.appendChild(h);
      items.forEach(([lab, t]) => {
        const b = el(`<button type="button" class="btn btn-sm" style="margin:4px 6px 4px 0">${lab}</button>`);
        b.onclick = () => Editor.openList(t);
        form.appendChild(b);
      });
    });
    const row = el(`<div class="form-actions" style="border-top:1px dashed var(--line);margin-top:20px;padding-top:14px">
      <button type="button" class="btn btn-sm" onclick="Editor.downloadBackup()">⬇ 下载 data.json（上线更新用）</button>
      <button type="button" class="btn btn-sm" onclick="Editor.importData()">⬆ 导入 data.json 备份</button>
      <button type="button" class="btn btn-sm" onclick="Editor.resetToRemote()">🔄 重置为线上数据</button>
      <button type="button" class="btn btn-primary" onclick="Editor.closeModal()">关闭</button></div>
      <div class="form-hint" style="margin-top:10px;font-size:12px;color:var(--dim)">💡 修改默认保存到<b>本浏览器</b>。全网生效：点「下载 data.json」替换项目 data/data.json → 运行「构建部署.bat / 推送部署.bat」；或直接在 Cloudflare 后台替换 data.json（看板 60 秒内自动更新）。</div>`);
    form.appendChild(row);
    document.getElementById("modal").classList.remove("hidden");
  },

  /* 列表管理（某类型所有条目） */
  openList(type) {
    const spec = Editor.spec(type);
    if (!spec) { Editor.openForm(type, -1); return; }
    if (type === "profile" || type === "about" || type === "radar") { Editor.openForm(type, -1); return; }
    const list = App.DATA[spec.list];
    document.getElementById("modalTitle").textContent = "管理「" + spec.title + "」";
    const form = document.getElementById("modalForm");
    form.innerHTML = "";
    if (!list.length) form.innerHTML = '<div class="blog-empty">暂无内容</div>';
    list.forEach((it, i) => {
      const name = it.title || it.name || it.label || it.school || (it[0] && it[0]) || ("条目 " + (i + 1));
      const row = el(`<div style="display:flex;align-items:center;gap:10px;padding:9px 4px;border-bottom:1px solid rgba(120,200,255,.08)">
        <span style="flex:1;font-size:13.5px">${name}</span>
        <button class="btn btn-sm" onclick="Editor.openForm('${type}',${i})">编辑</button>
        <button class="btn btn-sm btn-danger" onclick="Editor.delItem('${type}',${i})">删除</button></div>`);
      form.appendChild(row);
    });
    const foot = el(`<div class="form-actions">
      <button type="button" class="btn btn-primary" onclick="Editor.openForm('${type}',-1)">＋ 新增</button>
      <button type="button" class="btn btn-ghost" onclick="Editor.openPanel()">← 返回面板</button>
      <button type="button" class="btn btn-ghost" onclick="Editor.closeModal()">关闭</button></div>`);
    form.appendChild(foot);
    document.getElementById("modal").classList.remove("hidden");
  },

  /* ---------------- 特殊表单：profile / about / radar ---------------- */
  openForm(type, index) {
    if (type === "profile") return Editor.formProfile();
    if (type === "about") return Editor.formAbout();
    if (type === "radar") return Editor.formRadar();
    const spec = Editor.spec(type);
    if (!spec) return;
    /* ……通用表单逻辑（见下方 _openListForm）…… */
    Editor._openListForm(type, index, spec);
  },

  _openListForm(type, index, spec) {
    const list = App.DATA[spec.list];
    const item = index >= 0 ? list[index] : {};
    document.getElementById("modalTitle").textContent =
      (index >= 0 ? "编辑" : "新增") + "「" + spec.title + "」";
    const form = document.getElementById("modalForm");
    form.innerHTML = "";

    spec.fields.forEach(f => {
      const row = document.createElement("div");
      row.className = "form-row";
      const req = f.required ? '<span class="req"> *</span>' : "";
      const v = item[f.key];
      let input = "";
      if (f.type === "textarea" || f.type === "points" || f.type === "markdown") {
        const val = f.type === "points" ? (v || []).join("\n") : (v || "");
        input = `<textarea class="form-textarea" name="${f.key}" rows="${f.rows || 4}" placeholder="${f.placeholder || ""}">${val}</textarea>`;
      } else if (f.type === "select") {
        const opts = (f.options || []).map(([val, lab]) =>
          `<option value="${val}" ${String(v) === val ? "selected" : ""}>${lab}</option>`).join("");
        input = `<select class="form-select" name="${f.key}">${opts}</select>`;
      } else if (f.type === "checkbox") {
        input = `<label style="display:flex;align-items:center;gap:8px;font-size:13.5px;color:var(--text)">
          <input type="checkbox" name="${f.key}" ${v ? "checked" : ""} style="accent-color:var(--cyan);width:16px;height:16px"> 是</label>`;
      } else if (f.type === "number") {
        input = `<input class="form-input" type="number" step="any" name="${f.key}" value="${v ?? ""}" placeholder="${f.placeholder || ""}">`;
      } else if (f.type === "tags") {
        input = `<div class="tag-editor" data-tags="${f.key}">
          ${(v || []).map(t => `<span class="tag">${t}<button onclick="Editor.delTag(this)">✕</button></span>`).join("")}
          <input class="tag-input" placeholder="输入后回车添加" onkeydown="Editor.addTag(event, this)"></div>`;
      } else if (f.type === "color") {
        const opts = (f.options || []).map(([val, lab]) =>
          `<option value="${val}" ${v === val ? "selected" : ""}>${lab}</option>`).join("");
        input = `<select class="form-select" name="${f.key}">${opts}<option value="">自定义</option></select>`;
      } else {
        input = `<input class="form-input" name="${f.key}" value="${(v ?? "").replace(/"/g, "&quot;")}" placeholder="${f.placeholder || ""}">`;
      }
      row.innerHTML = `<label>${f.label}${req}</label>${input}${f.hint ? `<div class="form-hint">${f.hint}</div>` : ""}`;
      form.appendChild(row);
    });

    const actions = document.createElement("div");
    actions.className = "form-actions";
    actions.innerHTML =
      `<button type="button" class="btn btn-ghost" onclick="Editor.closeModal()">取消</button>
       <button type="button" class="btn btn-danger" ${index < 0 ? "style='display:none'" : ""} onclick="Editor.delItem('${type}',${index})">删除</button>
       <button type="submit" class="btn btn-primary">保存</button>`;
    form.appendChild(actions);
    form.onsubmit = e => { e.preventDefault(); Editor.collect(type, index, form); };
    document.getElementById("modal").classList.remove("hidden");
  },

  /* 个人资料 */
  formProfile() {
    const p = App.DATA.profile;
    document.getElementById("modalTitle").textContent = "编辑个人资料";
    const form = document.getElementById("modalForm");
    form.innerHTML = `
      <div class="form-grid2">
        <div class="form-row"><label>姓名</label><input class="form-input" id="pf_name" value="${p.name || ""}"></div>
        <div class="form-row"><label>英文名</label><input class="form-input" id="pf_en" value="${p.enName || ""}"></div>
      </div>
      <div class="form-row"><label>职位标语</label><input class="form-input" id="pf_title" value="${p.title || ""}"></div>
      <div class="form-row"><label>首页标语（每行一条，打字机轮播）</label>
        <textarea class="form-textarea" id="pf_tags" rows="4">${(p.taglines || []).join("\n")}</textarea></div>
      <div class="form-grid2">
        <div class="form-row"><label>生日</label><input class="form-input" id="pf_birth" value="${p.birth || ""}"></div>
        <div class="form-row"><label>电话</label><input class="form-input" id="pf_phone" value="${p.phone || ""}"></div>
        <div class="form-row"><label>邮箱</label><input class="form-input" id="pf_email" value="${p.email || ""}"></div>
        <div class="form-row"><label>所在地</label><input class="form-input" id="pf_loc" value="${p.location || ""}"></div>
        <div class="form-row"><label>入职时间</label><input class="form-input" id="pf_join" value="${p.joinDate || ""}"></div>
        <div class="form-row"><label>公司</label><input class="form-input" id="pf_company" value="${p.company || ""}"></div>
      </div>
      <div class="form-row"><label>个人总结</label><textarea class="form-textarea" id="pf_summary" rows="4">${p.summary || ""}</textarea></div>
      <div class="form-actions">
        <button type="button" class="btn btn-ghost" onclick="Editor.closeModal()">取消</button>
        <button type="button" class="btn btn-primary" onclick="Editor.saveProfile()">保存</button></div>`;
    document.getElementById("modal").classList.remove("hidden");
  },
  saveProfile() {
    const g = id => document.getElementById(id).value.trim();
    const p = App.DATA.profile;
    p.name = g("pf_name"); p.enName = g("pf_en"); p.title = g("pf_title");
    p.taglines = document.getElementById("pf_tags").value.split("\n").map(s => s.trim()).filter(Boolean);
    p.birth = g("pf_birth"); p.phone = g("pf_phone"); p.email = g("pf_email");
    p.location = g("pf_loc"); p.joinDate = g("pf_join"); p.company = g("pf_company");
    p.summary = g("pf_summary");
    Editor.closeModal();
    App.save();
    App.renderAll();
    toast("个人资料已保存", "ok");
  },

  /* 关于我：简介 + 证书 */
  formAbout() {
    const a = App.DATA.about;
    document.getElementById("modalTitle").textContent = "编辑「关于我」";
    const form = document.getElementById("modalForm");
    form.innerHTML = `
      <div class="form-row"><label>个人简介</label>
        <textarea class="form-textarea" id="ab_intro" rows="5">${a.intro || ""}</textarea></div>
      <div class="form-row"><label>证书荣誉（每行一个）</label>
        <textarea class="form-textarea" id="ab_certs" rows="6">${(a.certificates || []).join("\n")}</textarea></div>
      <div class="form-hint" style="margin-bottom:14px">💡 教育背景与个人特长请通过「＋ 新增」或「管理面板」分别维护。</div>
      <div class="form-actions">
        <button type="button" class="btn btn-ghost" onclick="Editor.closeModal()">取消</button>
        <button type="button" class="btn btn-primary" onclick="Editor.saveAbout()">保存</button></div>`;
    document.getElementById("modal").classList.remove("hidden");
  },
  saveAbout() {
    const a = App.DATA.about;
    a.intro = document.getElementById("ab_intro").value.trim();
    a.certificates = document.getElementById("ab_certs").value.split("\n").map(s => s.trim()).filter(Boolean);
    Editor.closeModal();
    App.save();
    App.renderAll();
    toast("「关于我」已保存", "ok");
  },

  /* 能力雷达 */
  formRadar() {
    const r = App.DATA.radar;
    document.getElementById("modalTitle").textContent = "编辑能力雷达";
    const form = document.getElementById("modalForm");
    form.innerHTML = "";
    (r.indicators || []).forEach((name, i) => {
      const row = el(`<div class="form-grid2" style="margin-bottom:10px">
        <input class="form-input" id="rd_n${i}" value="${name}" placeholder="维度名称">
        <input class="form-input" type="number" id="rd_v${i}" value="${r.values[i] || 0}" placeholder="分数 0-100"></div>`);
      form.appendChild(row);
    });
    const foot = el(`<div class="form-actions">
      <button type="button" class="btn btn-ghost" onclick="Editor.closeModal()">取消</button>
      <button type="button" class="btn btn-primary" onclick="Editor.saveRadar()">保存</button></div>`);
    form.appendChild(foot);
    document.getElementById("modal").classList.remove("hidden");
  },
  saveRadar() {
    const r = App.DATA.radar;
    r.indicators = []; r.values = [];
    document.querySelectorAll("[id^=rd_n]").forEach(el => {
      r.indicators.push(el.value.trim() || "未命名");
      const v = document.getElementById(el.id.replace("rd_n", "rd_v"));
      r.values.push(Math.max(0, Math.min(100, Number(v.value) || 0)));
    });
    Editor.closeModal();
    App.save();
    App.renderAll();
    toast("能力雷达已保存", "ok");
  },

  /* 备份下载 */
  downloadBackup() {
    const blob = new Blob([JSON.stringify(App.DATA, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "档案库数据备份_" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    URL.revokeObjectURL(a.href);
    toast("已下载数据备份文件", "ok");
  },

  /* 导入 data.json 备份：从本地文件读取并覆盖当前数据（保存到本浏览器） */
  importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = () => {
      const f = input.files && input.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const obj = JSON.parse(String(reader.result));
          if (!obj || typeof obj !== "object") throw new Error("bad");
          App.DATA = obj;
          App.save();
          toast("✅ 已导入并保存（本浏览器），页面已更新", "ok");
        } catch (e) { toast("导入失败：不是有效的 data.json", "err"); }
      };
      reader.readAsText(f);
    };
    input.click();
  },

  /* 重置为线上数据：重新拉取部署后台 data.json 覆盖本地草稿 */
  async resetToRemote() {
    App.clearLocal();
    try {
      const r = await fetch("../data/data.json", { cache: "no-store" });
      if (r.ok) { App.DATA = await r.json(); if (typeof renderAll === "function") renderAll(); toast("✅ 已重置为线上数据", "ok"); return; }
    } catch (e) {}
    toast("重置失败：无法获取线上数据", "err");
  }
};

/* 面板打开时重新挂载 */
window.Editor = Editor;
