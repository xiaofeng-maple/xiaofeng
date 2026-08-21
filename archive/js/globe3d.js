/* ============================================================
 * globe3d.js —— 还原 yzyy.cloud/earth 风格的 Three.js 地球
 * 依赖（动态加载）：assets/three.min.js + assets/OrbitControls.js
 * 贴图：assets/earth3d-day.jpg / earth3d-night.jpg（昼夜）
 *       assets/earth3d-cloud.png（云层） / earth3d-aperture.jpg（光环）
 * ============================================================ */
"use strict";

const Globe3D = {
  EARTH_R: 100,
  el: null, renderer: null, scene: null, camera: null, controls: null,
  clock: null, raf: 0, _enterRaf: 0, _tweenRaf: 0, _tween: null, disposed: false,
  earth: null, earthMat: null, clouds: null, atmo: null, aperture: null, stars: null,
  pointGroup: null, points: [], flyLines: [],
  labelsWrap: null, tooltip: null,
  ray: null, pointer: null, hovered: null,
  dayNight: 1, dayNightTarget: 1, lightBoost: 0, lightBoostTarget: 0, override: "auto",
  onPointClick: null, onPointHover: null,
  _tmpV: null, _tmpV2: null,

  loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      s.onerror = () => rej(new Error("加载失败 " + src));
      document.head.appendChild(s);
    });
  },

  async init(el, opts) {
    this.el = el;
    this.EARTH_R = (opts && opts.radius) || 100;
    this.onPointClick = (opts && opts.onPointClick) || null;
    this.onPointHover = (opts && opts.onPointHover) || null;
    if (!window.THREE) await this.loadScript("assets/three.min.js");
    if (!(window.THREE && window.THREE.OrbitControls)) await this.loadScript("assets/OrbitControls.js");
    if (!window.THREE || !window.THREE.OrbitControls) throw new Error("Three.js 库加载失败");
    const THREE = window.THREE;
    this._tmpV = new THREE.Vector3();
    this._tmpV2 = new THREE.Vector3();

    const w = el.clientWidth || 800, h = el.clientHeight || 520;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(w, h);
    this.renderer.setClearColor(0x000000, 0);
    el.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    /* 光照：给云层 / 月球等 MeshLambert 材质提供明暗 */
    {
      const dLight = new THREE.DirectionalLight(0xffffff, 1.15);
      dLight.position.set(0.55, 0.75, 0.62);
      this.scene.add(dLight);
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    }
    this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 6000);
    /* 默认视角对准中国（突出中国） */
    this.chinaDir = this.latLngToVec3(34.5, 104.5, 1).normalize();
    this.camera.position.copy(this.chinaDir.clone().multiplyScalar(this.EARTH_R * 7.6));

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minDistance = this.EARTH_R * 1.25;
    this.controls.maxDistance = this.EARTH_R * 9;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.4;

    this.clock = new THREE.Clock();
    this.ray = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this._buildEarth();
    this._buildClouds();
    this._buildAtmosphere();
    this._buildAperture();
    this._buildSatellite();
    this._buildGalaxy();
    this._buildOverlay();
    this._bindEvents();

    this._onResize = () => this.resize();
    window.addEventListener("resize", this._onResize);

    /* 性能：地球离开视口或标签页隐藏时暂停渲染循环 */
    this._paused = false;
    this._setPaused = p => {
      if (this._paused === p || this.disposed) return;
      this._paused = p;
      if (!p && !this.raf) this.animate();
    };
    if ("IntersectionObserver" in window) {
      this._io = new IntersectionObserver(entries => {
        this._setPaused(!(entries[0] && entries[0].isIntersecting));
      }, { threshold: 0.02 });
      this._io.observe(el);
    }
    this._onVis = () => this._setPaused(document.hidden);
    document.addEventListener("visibilitychange", this._onVis);

    /* 入场动画：从远处飞近 */
    const t0 = performance.now();
    const dur = 2200;
    const from = this.chinaDir.clone().multiplyScalar(this.EARTH_R * 7.6);
    const to = this.chinaDir.clone().multiplyScalar(this.EARTH_R * 3.2);
    const enter = now => {
      const k = Math.min(1, (now - t0) / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      this.camera.position.lerpVectors(from, to, e);
      this.controls.update();
      if (k < 1) this._enterRaf = requestAnimationFrame(enter);
    };
    this._enterRaf = requestAnimationFrame(enter);

    this.animate();
    return this;
  },

  /* ---------- 场景构建 ---------- */
  _buildEarth() {
    const THREE = window.THREE;
    const loader = new THREE.TextureLoader();
    /* 白天/夜晚贴图对调：earth3d-night 较亮作白天，earth3d-day 深蓝作夜晚 */
    const dayTex = loader.load("assets/earth3d-night.jpg");
    const nightTex = loader.load("assets/earth3d-day.jpg");
    this.earthMat = new THREE.ShaderMaterial({
      uniforms: {
        dayMap: { value: dayTex },
        nightMap: { value: nightTex },
        uDayNight: { value: 1 },
        uSunDir: { value: new THREE.Vector3(0.55, 0.75, 0.62).normalize() }
      },
      vertexShader: [
        "varying vec2 vUv;",
        "varying vec3 vNormal;",
        "void main(){",
        "  vUv = uv;",
        "  vNormal = normalize(normalMatrix * normal);",
        "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
        "}"
      ].join("\n"),
      fragmentShader: [
        "uniform sampler2D dayMap;",
        "uniform sampler2D nightMap;",
        "uniform float uDayNight;",
        "uniform vec3 uSunDir;",
        "varying vec2 vUv;",
        "varying vec3 vNormal;",
        "void main(){",
        "  vec3 day = texture2D(dayMap, vUv).rgb;",
        "  vec3 night = texture2D(nightMap, vUv).rgb;",
        "  float diff = max(dot(vNormal, uSunDir), 0.0);",
        "  float amb = 0.38;",
        "  float lit = amb + (1.0 - amb) * diff;",
        "  vec3 col = mix(night * 1.6, day * 1.25, uDayNight) * lit;",
        "  gl_FragColor = vec4(col, 1.0);",
        "}"
      ].join("\n")
    });
    this.earth = new THREE.Mesh(new THREE.SphereGeometry(this.EARTH_R, 64, 48), this.earthMat);
    this.scene.add(this.earth);
  },

  _buildClouds() {
    const THREE = window.THREE;
    const loader = new THREE.TextureLoader();
    const cloudTex = loader.load("assets/earth3d-cloud.png");
    this.clouds = new THREE.Mesh(
      new THREE.SphereGeometry(this.EARTH_R * 1.025, 48, 32),
      new THREE.MeshLambertMaterial({ map: cloudTex, transparent: true, opacity: 1, depthWrite: false })
    );
    this.scene.add(this.clouds);
  },

  _buildAtmosphere() {
    const THREE = window.THREE;
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(0x4d9fff) }, uPower: { value: 3.2 } },
      vertexShader: "varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: "uniform vec3 uColor; uniform float uPower; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), uPower); gl_FragColor = vec4(uColor, 1.0) * i; }",
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });
    this.atmo = new THREE.Mesh(new THREE.SphereGeometry(this.EARTH_R * 1.2, 48, 32), mat);
    this.scene.add(this.atmo);
  },

  /* 光环：相机朝向的细圆环（轨道光环，无方块残留） */
  _buildAperture() {
    const THREE = window.THREE;
    const R = this.EARTH_R * 1.42;
    const pts = [];
    for (let i = 0; i <= 96; i++) {
      const a = i / 96 * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0));
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color: 0x35c8ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    this.aperture = new THREE.Line(g, mat);
    this.scene.add(this.aperture);
  },

  /* 人造卫星：沿光环（1.42r）公转，带太阳能板，带柔和光晕 */
  _buildSatellite() {
    const THREE = window.THREE;
    const R = this.EARTH_R;
    this.sat = new THREE.Group();
    /* 主体：银灰色圆柱体（沿飞行方向） */
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(R * 0.012, R * 0.015, R * 0.05, 12),
      new THREE.MeshLambertMaterial({ color: 0xc8d2dc })
    );
    body.rotation.x = Math.PI / 2;
    this.sat.add(body);
    /* 两块深蓝色太阳能板 */
    const panelGeo = new THREE.BoxGeometry(R * 0.05, R * 0.002, R * 0.022);
    const panelMat = new THREE.MeshLambertMaterial({ color: 0x2a6fd6, emissive: 0x0a1a3a, emissiveIntensity: 0.5 });
    const p1 = new THREE.Mesh(panelGeo, panelMat); p1.position.x = R * 0.033; this.sat.add(p1);
    const p2 = new THREE.Mesh(panelGeo, panelMat); p2.position.x = -R * 0.033; this.sat.add(p2);
    /* 天线 */
    const ant = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.14, R * 0.022, 6),
      new THREE.MeshLambertMaterial({ color: 0x9aa8b5 })
    );
    ant.position.y = R * 0.031;
    this.sat.add(ant);
    this.scene.add(this.sat);
    /* 柔和光晕 */
    this.satGlow = this.makeGlowSprite("#9fd0ff", 0.5);
    this.satGlow.scale.set(6, 6, 1);
    this.scene.add(this.satGlow);
    this._moonAngle = 0.6;
    this._moonSpeed = 0.45;
  },

  /* 环绕星系：地球周边的卫星与极淡粒子星系环，融入背景 */
  _buildGalaxy() {
    const THREE = window.THREE;
    this.satellites = [];
    const orbits = [
      { r: 2.5, tilt: 0.55, speed: 0.10, color: "#7de3f5", size: 3.5 },
      { r: 3.1, tilt: -0.4, speed: 0.07, color: "#a78bfa", size: 2.8 },
      { r: 3.7, tilt: 0.85, speed: 0.05, color: "#ffd166", size: 2.6 },
      { r: 4.3, tilt: -0.65, speed: 0.04, color: "#67e8f9", size: 2.2 },
      { r: 5.0, tilt: 0.25, speed: 0.03, color: "#93c5fd", size: 2 }
    ];
    orbits.forEach(o => {
      const spr = this.makeGlowSprite(o.color, 0.75);
      spr.scale.set(o.size, o.size, 1);
      this.scene.add(spr);
      this.satellites.push({ sprite: spr, r: o.r * this.EARTH_R, tilt: o.tilt, speed: o.speed, angle: Math.random() * Math.PI * 2 });
    });
    /* 两条极淡的倾斜粒子星系环 */
    this.galaxyRings = [];
    [[3.4, 0.42, 0x7de3f5, 0.16], [4.2, -0.72, 0xa78bfa, 0.12]].forEach(([R, tilt, color, op]) => {
      const n = 120;
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const a = i / n * Math.PI * 2;
        const rr = R * this.EARTH_R * (0.9 + 0.18 * Math.random());
        pos[i * 3] = Math.cos(a) * rr;
        pos[i * 3 + 1] = Math.sin(a) * rr * Math.sin(tilt);
        pos[i * 3 + 2] = Math.sin(a) * rr * Math.cos(tilt);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color, size: 1.5, sizeAttenuation: true, transparent: true, opacity: op, depthWrite: false });
      const pts = new THREE.Points(g, mat);
      this.scene.add(pts);
      this.galaxyRings.push(pts);
    });
  },

  /* 定位光圈：金色，从大到小收缩定位（贴附球面） */
  _buildRing() {
    const THREE = window.THREE;
    const pts = [];
    for (let i = 0; i <= 48; i++) pts.push(new THREE.Vector3(0, 0, 0));
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    this.ring = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.ring.visible = false;
    this.scene.add(this.ring);
  },
  showRing(lat, lng) {
    const THREE = window.THREE;
    if (!this.ring) this._buildRing();
    this._ringCenter = this.latLngToVec3(lat, lng, 1).normalize();
    this._ringAngle = 0;
    /* 从大到小收缩定位（最终半径只覆盖城市，不跨省） */
    this._ringAnim = { t0: performance.now(), dur: 480, from: this.EARTH_R * 0.16, to: this.EARTH_R * 0.045 };
    this._ringRadius = this.EARTH_R * 0.16;
    this._ringPulse = true;
    this.ring.visible = true;
    this._updateRingGeometry();
  },
  _updateRingGeometry() {
    const THREE = window.THREE;
    if (!this._ringCenter || !this.ring) return;
    const dir = this._ringCenter;
    const center = dir.clone().multiplyScalar(this.EARTH_R * 1.012);
    const r = this._ringRadius;
    const up = Math.abs(dir.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const u = new THREE.Vector3().crossVectors(up, dir).normalize();
    const v = new THREE.Vector3().crossVectors(dir, u).normalize();
    const pts = [];
    for (let i = 0; i <= 48; i++) {
      const a = (this._ringAngle || 0) + i / 48 * Math.PI * 2;
      pts.push(center.clone().add(u.clone().multiplyScalar(Math.cos(a) * r)).add(v.clone().multiplyScalar(Math.sin(a) * r)));
    }
    this.ring.geometry.setFromPoints(pts);
  },
  hideRing() {
    if (this.ring) this.ring.visible = false;
    this._ringAnim = null;
    this._ringPulse = false;
  },

  _buildOverlay() {
    this.labelsWrap = document.createElement("div");
    this.labelsWrap.className = "globe3d-overlay";
    this.labelsWrap.style.cssText = "position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5;";
    this.el.appendChild(this.labelsWrap);
    this.tooltip = document.createElement("div");
    this.tooltip.className = "globe3d-tip";
    this.tooltip.style.cssText = "position:absolute;display:none;pointer-events:none;z-index:60;max-width:250px;padding:10px 12px;border-radius:10px;background:rgba(6,14,30,.95);border:1px solid rgba(34,211,238,.4);box-shadow:0 12px 34px rgba(0,0,0,.55),0 0 22px rgba(34,211,238,.14);color:#e8f4ff;font-size:12px;line-height:1.7;backdrop-filter:blur(8px);";
    this.labelsWrap.appendChild(this.tooltip);
  },

  /* ---------- 数据 ---------- */
  latLngToVec3(lat, lng, r) {
    const THREE = window.THREE;
    const la = lat * Math.PI / 180, lo = lng * Math.PI / 180;
    return new THREE.Vector3(
      r * Math.cos(la) * Math.cos(lo),
      r * Math.sin(la),
      -r * Math.cos(la) * Math.sin(lo)
    );
  },

  _hexToRgba(hex, a) {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map(x => x + x).join("") : h, 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  },

  makeGlowSprite(hex, alpha) {
    const THREE = window.THREE;
    const c = document.createElement("canvas");
    c.width = 128; c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.18, this._hexToRgba(hex, 0.85));
    g.addColorStop(0.5, this._hexToRgba(hex, 0.28));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: alpha, depthWrite: false });
    return new THREE.Sprite(mat);
  },

  /* points: 站点数据 [{ name,type,city,count,value:[lng,lat,0,n],note,projects }] */
  setPoints(points) {
    const THREE = window.THREE;
    if (this.pointGroup) { this.scene.remove(this.pointGroup); }
    if (this.labelsWrap) { this.labelsWrap.querySelectorAll(".globe3d-label").forEach(n => n.remove()); }
    this.pointGroup = new THREE.Group();
    this.points = [];
    (points || []).forEach(p => {
      const lng = p.value[0], lat = p.value[1];
      const v = this.latLngToVec3(lat, lng, this.EARTH_R * 1.012);
      const color = p.type === "work" ? "#f5b942" : p.type === "study" ? "#a78bfa" : "#22d3ee";
      const spr = this.makeGlowSprite(color, p.type === "project" ? 0.75 : 1);
      spr.position.copy(v);
      const base = p.type === "work" ? 9 : p.type === "study" ? 8 : 8;
      spr.scale.set(base, base, 1);
      this.pointGroup.add(spr);
      const lb = document.createElement("div");
      lb.className = "globe3d-label";
      lb.textContent = p.name;
      lb.style.cssText = "position:absolute;left:0;top:0;font-size:12px;font-weight:600;color:" + color + ";text-shadow:0 0 8px rgba(0,0,0,.9);white-space:nowrap;letter-spacing:.5px;transform-origin:center bottom;";
      this.labelsWrap.appendChild(lb);
      this.points.push({ data: p, sprite: spr, label: lb, baseScale: base, type: p.type });
    });
    this.scene.add(this.pointGroup);
  },

  /* 飞线：城市间的弧线 + 移动光点 */
  buildFlyLines(conns) {
    const THREE = window.THREE;
    this.flyLines.forEach(f => { if (f.line) this.scene.remove(f.line); if (f.comet) this.scene.remove(f.comet); });
    this.flyLines = [];
    (conns || []).forEach(c => {
      const a = this.latLngToVec3(c.from[1], c.from[0], this.EARTH_R * 1.01);
      const b = this.latLngToVec3(c.to[1], c.to[0], this.EARTH_R * 1.01);
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(this.EARTH_R * 1.5);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48));
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: c.color || 0x22d3ee, transparent: true, opacity: 0.45, depthWrite: false }));
      this.scene.add(line);
      const comet = this.makeGlowSprite(c.colorHex || "#22d3ee", 0.95);
      comet.scale.set(5, 5, 1);
      this.scene.add(comet);
      this.flyLines.push({ curve, comet, speed: 0.22 + Math.random() * 0.12, t: Math.random() });
    });
  },

  /* 中国省份边界高亮（沿用站点 china.geo.js 数据，青色发光线条） */
  buildChinaBorders(geo) {
    const THREE = window.THREE;
    if (!geo || !geo.features || this.chinaBorders) return;
    const pts = [];
    const r = this.EARTH_R * 1.01;
    geo.features.forEach(f => {
      const g = f.geometry;
      if (!g || !g.coordinates) return;
      const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
      polys.forEach(poly => {
        const ring = poly && poly[0];
        if (!ring || ring.length < 3) return;
        for (let i = 0; i < ring.length - 1; i++) {
          const a = this.latLngToVec3(ring[i][1], ring[i][0], r);
          const b = this.latLngToVec3(ring[i + 1][1], ring[i + 1][0], r);
          pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      });
    });
    if (!pts.length) return;
    const g3 = new THREE.BufferGeometry();
    g3.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
    const mat = new THREE.LineBasicMaterial({ color: 0x35e0ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    this.chinaBorders = new THREE.LineSegments(g3, mat);
    this.scene.add(this.chinaBorders);
  },

  /* ---------- 交互 ---------- */
  _bindEvents() {
    const dom = this.renderer.domElement;
    dom.addEventListener("pointermove", e => this._onMove(e));
    dom.addEventListener("pointerdown", e => this._onDown(e));
    dom.addEventListener("pointerleave", () => this._clearHover());
  },
  _onMove(e) {
    const r = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    this.pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    this._raycast();
  },
  _raycast() {
    const THREE = window.THREE;
    this.ray.setFromCamera(this.pointer, this.camera);
    const sprites = this.points.map(p => p.sprite);
    const hits = this.ray.intersectObjects(sprites, false);
    const p = hits.length ? this.points.find(pt => pt.sprite === hits[0].object) : null;
    if (p !== this.hovered) {
      this.hovered = p;
      this.points.forEach(pt => pt.sprite.scale.setScalar(pt.baseScale));
      if (p) {
        p.sprite.scale.setScalar(p.baseScale * 1.55);
        this._showTooltip(p.data);
        this.showRing(p.data.value[1], p.data.value[0]);
        if (this.onPointHover) this.onPointHover(p.data);
      } else {
        this._hideTooltip();
        this.hideRing();
        if (this.onPointHover) this.onPointHover(null);
      }
    }
  },
  _onDown(e) {
    if (e.button !== 0) return;
    this._onMove(e);
    if (this.hovered && this.onPointClick) this.onPointClick(this.hovered.data);
  },
  _clearHover() {
    if (this.hovered) {
      this.hovered = null;
      this.points.forEach(pt => pt.sprite.scale.setScalar(pt.baseScale));
      this._hideTooltip();
      this.hideRing();
      if (this.onPointHover) this.onPointHover(null);
    }
  },

  _showTooltip(d) {
    let html = '<b style="color:#22d3ee">📍 ' + d.name + "</b>";
    if (d.note) html += '<br><span style="color:#93b4d4">' + d.note + "</span>";
    if (d.projects && d.projects.length) {
      const rows = d.projects.slice(0, 5).map(x =>
        '<div style="border-bottom:1px dashed rgba(120,200,255,.15);padding:2px 0">' + x.name + "</div>").join("");
      html += '<div style="margin-top:4px">' + rows + "</div>";
    }
    this.tooltip.innerHTML = html;
    this.tooltip.style.display = "block";
  },
  _hideTooltip() { this.tooltip.style.display = "none"; },

  /* ---------- 视角 ---------- */
  focusOn(lng, lat, dist) {
    const THREE = window.THREE;
    const target = this.latLngToVec3(lat, lng, this.EARTH_R);
    /* dist 兼容站点原 echarts 语义：55≈中国视角、170≈全球视角 */
    const d = (dist == null) ? 170 : dist;
    const camDist = this.EARTH_R * Math.max(1.5, Math.min(4.2, 1.1 + d / 170 * 2.1));
    /* 沿城市径向摆动相机 → 城市位于地球正面（屏幕中央） */
    const dir = target.clone().normalize();
    const endPos = target.clone().add(dir.multiplyScalar(camDist));
    this.controls.autoRotate = false;
    this.showRing(lat, lng);
    this._tweenTo(target, endPos, 1000);
  },
  resetView() {
    const THREE = window.THREE;
    this.controls.autoRotate = true;
    this.hideRing();
    this._tweenTo(new THREE.Vector3(0, 0, 0), this.chinaDir.clone().multiplyScalar(this.EARTH_R * 3.2), 1200);
  },
  _tweenTo(target, pos, dur) {
    const THREE = window.THREE;
    /* 球面插值：相机方向 slerp + 距离 lerp，平滑且不穿越地球 */
    const ref = new THREE.Vector3(0, 0, 1);
    const sDir = this.camera.position.clone().normalize();
    const eDir = pos.clone().normalize();
    const qs = new THREE.Quaternion().setFromUnitVectors(ref, sDir);
    const qe = new THREE.Quaternion().setFromUnitVectors(ref, eDir);
    this._tween = {
      t0: performance.now(), dur,
      sTarget: this.controls.target.clone(), target: target.clone(),
      sDist: this.camera.position.length(), eDist: pos.length(),
      qs, qe
    };
    if (!this._tweenRaf) {
      const step = now => {
        const tw = this._tween;
        if (!tw) { this._tweenRaf = 0; return; }
        const k = Math.min(1, (now - tw.t0) / tw.dur);
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        this.controls.target.lerpVectors(tw.sTarget, tw.target, e);
        const q = tw.qs.clone().slerp(tw.qe, e);
        const dir = ref.clone().applyQuaternion(q);
        const dist = tw.sDist + (tw.eDist - tw.sDist) * e;
        this.camera.position.copy(dir.multiplyScalar(dist));
        this.controls.update();
        if (k < 1) this._tweenRaf = requestAnimationFrame(step);
        else { this._tween = null; this._tweenRaf = 0; }
      };
      this._tweenRaf = requestAnimationFrame(step);
    }
  },

  /* ---------- 昼夜 ---------- */
  setDayNight(isDay, immediate) {
    if (this.override && this.override !== "auto") return; /* 手动模式不受时钟影响 */
    this.dayNightTarget = isDay ? 1 : 0;
    this.lightBoostTarget = isDay ? 0 : 1;
    if (immediate) { this.dayNight = this.dayNightTarget; this.lightBoost = this.lightBoostTarget; }
  },
  /* 手动昼夜：'auto' 跟随北京时间，'day' / 'night' 固定 */
  setOverride(mode) {
    this.override = mode === "day" || mode === "night" ? mode : "auto";
    const isDay = this.override === "day" ? true : this.override === "night" ? false : isChinaDay();
    this.dayNightTarget = isDay ? 1 : 0;
    this.lightBoostTarget = isDay ? 0 : 1;
    this.dayNight = this.dayNightTarget;
    this.lightBoost = this.lightBoostTarget;
  },

  resize() {
    if (this.disposed || !this.el) return;
    const w = this.el.clientWidth, h = this.el.clientHeight;
    if (!w || !h) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  },

  /* ---------- 主循环 ---------- */
  animate() {
    if (this.disposed) return;
    if (this._paused) { this.raf = 0; return; } /* 暂停：不调度下一帧 */
    this.raf = requestAnimationFrame(() => this.animate());
    const dt = Math.min(0.05, this.clock.getDelta());

    /* 昼夜渐变 + 城市灯光 */
    this.dayNight += (this.dayNightTarget - this.dayNight) * Math.min(1, dt * 1.5);
    this.lightBoost += (this.lightBoostTarget - this.lightBoost) * Math.min(1, dt * 1.5);
    if (this.earthMat) this.earthMat.uniforms.uDayNight.value = this.dayNight;
    this.points.forEach(pt => {
      pt.sprite.material.opacity = (pt.type === "project" ? 0.72 : 1) * (0.5 + 0.5 * this.lightBoost);
    });

    /* 云层缓慢自转 */
    if (this.clouds) this.clouds.rotation.y += dt * 0.02;

    /* 光环始终面向相机 */
    if (this.aperture && this.camera) this.aperture.quaternion.copy(this.camera.quaternion);
    /* 人造卫星：沿光环（相机朝向平面，1.42r）公转，机头朝飞行方向 */
    if (this.sat) {
      this._moonAngle = (this._moonAngle || 0) + dt * (this._moonSpeed || 0.45);
      const a = this._moonAngle;
      const R = this.EARTH_R * 1.42;
      const q = this.camera.quaternion;
      const pos = new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0).applyQuaternion(q);
      this.sat.position.copy(pos);
      const fwd = new THREE.Vector3(-Math.sin(a) * R, Math.cos(a) * R, 0).applyQuaternion(q).normalize();
      const up = this.camera.position.clone().normalize();
      const right = new THREE.Vector3().crossVectors(up, fwd).normalize();
      const m = new THREE.Matrix4().makeBasis(right, up, fwd);
      this.sat.quaternion.setFromRotationMatrix(m);
      if (this.satGlow) this.satGlow.position.copy(pos);
    }
    /* 环绕卫星旋转 */
    if (this.satellites) this.satellites.forEach(sat => {
      sat.angle += dt * sat.speed;
      const a = sat.angle;
      sat.sprite.position.set(
        Math.cos(a) * sat.r,
        Math.sin(a) * sat.r * Math.sin(sat.tilt),
        Math.sin(a) * sat.r * Math.cos(sat.tilt)
      );
    });
    /* 金色定位光圈：先收缩定位，再持续脉动（呼吸 + 缓旋） */
    if (this._ringAnim && this.ring && this.ring.visible) {
      const k = Math.min(1, (performance.now() - this._ringAnim.t0) / this._ringAnim.dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      this._ringRadius = this._ringAnim.from + (this._ringAnim.to - this._ringAnim.from) * e;
      if (k >= 1) this._ringAnim = null;
      this._updateRingGeometry();
    } else if (this._ringPulse && this.ring && this.ring.visible) {
      const t = performance.now() / 1000;
      this._ringRadius = this.EARTH_R * (0.045 + 0.012 * Math.sin(t * 3.4));
      this._ringAngle = (this._ringAngle || 0) + 0.015;
      this._updateRingGeometry();
    }

    /* 飞线光点移动 */
    this.flyLines.forEach(f => {
      f.t = (f.t + dt * f.speed) % 1;
      f.comet.position.copy(f.curve.getPoint(f.t));
    });

    this._updateOverlay();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  },

  _updateOverlay() {
    const THREE = window.THREE;
    const now = performance.now();
    if (now - (this._lastOvT || 0) < 66) return; /* 标签/气泡约 15fps，避免每帧改 DOM */
    this._lastOvT = now;
    const w = this.el.clientWidth || 800, h = this.el.clientHeight || 520;
    this.points.forEach(pt => {
      const v = this._tmpV.copy(pt.sprite.position).project(this.camera);
      const vis = v.z < 1 && v.z > -1;
      const lb = pt.label;
      if (vis) {
        const x = (v.x * 0.5 + 0.5) * w;
        const y = (-v.y * 0.5 + 0.5) * h;
        lb.style.transform = "translate(" + x + "px," + y + "px) translate(-50%, calc(-100% - 10px))";
        lb.style.display = "block";
      } else lb.style.display = "none";
    });
    /* tooltip 跟随悬停点 */
    if (this.hovered && this.tooltip.style.display === "block") {
      const v = this._tmpV2.copy(this.hovered.sprite.position).project(this.camera);
      if (v.z < 1) {
        const x = (v.x * 0.5 + 0.5) * w, y = (-v.y * 0.5 + 0.5) * h;
        this.tooltip.style.left = Math.min(Math.max(6, x), w - 260) + "px";
        this.tooltip.style.top = Math.max(6, y + 16) + "px";
      }
    }
  },

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    cancelAnimationFrame(this._enterRaf);
    cancelAnimationFrame(this._tweenRaf);
    if (this._onResize) window.removeEventListener("resize", this._onResize);
    if (this._onVis) document.removeEventListener("visibilitychange", this._onVis);
    if (this._io) { try { this._io.disconnect(); } catch (e) { /* ignore */ } }
    if (this.labelsWrap) this.labelsWrap.remove();
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement) this.renderer.domElement.remove();
    }
    this.el = null;
  }
};
