/* Project DK — The Infinite Career Dimension.
   Load between projects.js and main.js: it registers the "career" universe with the existing Multiverse engine.
   All facts come from the resume PDF and the existing Project DK site. Edit the DATA block to change text. */
(() => {
  'use strict';
  const DK = (window.DK = window.DK || {});
  ['universes', 'fx', 'wc'].forEach(k => (DK[k] = DK[k] || {}));
  DK.universes.career = 'Career Dimension'; DK.fx.career = ['✦', '·', '◇', '∞', 'λ', 'Σ']; DK.wc.career = '#7c3aed';
  const root = document.getElementById('career'); if (!root) return;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches, body = document.body;
  const PDF = 'assets/documents/devi-karnambigai-resume.pdf', PAGE = n => `assets/documents/resume-pages/page-${n}.png`;
  const RESUME_PAGES = 1; /* number of page images in assets/documents/resume-pages/ — tools/render-resume.sh updates this automatically */
  const C = f => `assets/certificates/${f}.jpg`, GH = 'https://github.com/devikarnambigai086-rgb', LI = 'https://www.linkedin.com/in/devi-karnambigai-g-56ab29380';
  const ICON = {
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    rocket: '<path d="M12 2c4 2 6 6 5 11l-3 3h-4l-3-3C6 8 8 4 12 2z"/><circle cx="12" cy="9" r="1.6"/><path d="M7 14l-3 2 1 3 3-2M17 14l3 2-1 3-3-2M10 19l2 3 2-3"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
    doc: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>'
  };
  const svg = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;

  /* ---------------- DATA ---------------- */
  // row: [title, meta, description, {cert: image path (opens the existing certificate viewer), open: project universe id, href, label}]
  const CERTS = [['GenAI Data Analytics — Tata IQ × Forage', 'May 2026', '', { cert: C('tata-genai-analytics') }], ['Fundamentals of Digital Marketing — Google', 'May 2026', '', { cert: C('google-digital-marketing') }],
    ['TCS iON Career Edge — Young Professional', 'May 2026', '', { cert: C('tcs-career-edge') }], ['Prompt Engineering with GitHub Copilot — Microsoft', 'May 2026', '', { cert: C('microsoft-prompt-engineering') }],
    ['Kaggle Pandas Course', 'May 2026', '', { cert: C('kaggle-pandas') }], ['IBM Excel Basics — Coursera (94%)', 'Jun 2026', '', { cert: C('ibm-excel-basics') }],
    ['Data Science & Analytics — HP LIFE', 'May 2026', '', { cert: C('hp-life-data-science') }], ['MATLAB Onramp — MathWorks', 'Dec 2025', '', { cert: C('matlab-onramp') }],
    ['AINCAT 2026 — Naukri Campus', 'May 2026', '', { cert: C('aincat-2026') }], ['Python for Beginners — Simplilearn SkillUP', 'Aug 2026', '', { cert: C('python-for-beginners') }]];
  const PORTALS = [
    { id: 'edu', n: 'Education Galaxy', ic: 'cap', c: '#a78bfa', d: 'Qualifications and academic journey', a: 'cuLift', s: '3.6s', B: [
      { h: 'ACADEMIC JOURNEY', rows: [
        ['B.E. Computer Science and Engineering', '2025 – 2029 · E.G.S. Pillai Engineering College', 'CGPA 9.2'],
        ['HDCA — Honours Diploma in Computer Application', 'Oct 2024 – Oct 2025 · CSC Computer Education', 'Grade A', { cert: C('hdca-csc') }],
        ['Higher Secondary Certificate (12th)', '2024 – 2025 · Government Higher Secondary School, Pragramam', '77%']] }] },
    { id: 'skills', n: 'Skill Nebula', ic: 'code', c: '#22d3ee', d: 'Languages, tools and technologies', a: 'cuTilt', s: '3s', B: [
      { h: 'CORE TOOLKIT', chips: ['Python', 'SQL', 'Pandas', 'Git & GitHub', 'Machine Learning', 'ETL Pipelines'], big: 1 },
      { h: 'USED ACROSS MY PROJECTS', chips: ['Matplotlib', 'SQLite3', 'Random Forest', 'XGBoost', 'LightGBM', 'Gradio', 'Hugging Face Spaces'] },
      { h: 'ALSO IN THE TOOLKIT', chips: ['MySQL', 'C++', 'HTML5', 'Data Analytics', 'MS Office', 'Digital Marketing'] },
      { h: 'SOFT SKILLS', chips: ['Communication', 'Problem Solving', 'Teamwork', 'Analytical Thinking', 'Time Management'] }] },
    { id: 'ach', n: 'Achievement Planet', ic: 'award', c: '#e879f9', d: 'Certifications, courses and awards', a: 'cuTurn', s: '5s', B: [
      { h: 'CERTIFICATIONS', rows: CERTS },
      { h: 'PARTICIPATION CERTIFICATES', rows: [['Prediction League Participation — Unstop', '', '', { cert: C('unstop-prediction-league') }], ['Glitch Hunt · TECHNOVA ’26 — Arasu Engineering College', '', '', { cert: C('technova-glitch-hunt') }], ['Technical (PPT) Event · RAVAGE 2026 — St. Joseph’s College of Engineering & Technology', '', '', { cert: C('ravage-2026-ppt') }]] },
      { h: 'ACHIEVEMENTS & AWARDS', rows: [
        ['1st Prize — District Level Drawing Competition', 'Mar 2026 · Tamil Nadu Magalir Membattu Niruvanam, Nagapattinam', '', { cert: C('drawing-competition-1st-prize') }],
        ['1st Prize — District Level Health & Nutrition Composition Competition', 'Mar 2026 · Tamil Nadu Magalir Membattu Niruvanam', '', { cert: C('composition-competition-1st-prize') }],
        ['Paper Presentation — ‘Computing at the Speed of Light’', '2026 · TECHNOVA ’26 National Symposium, Arasu Engineering College', '', { open: 'p-optical', label: 'Open the project' }],
        ['Participant — Startup Pitch Fest 2026', 'Oct 2026 · IAAA & StartupTN, PMIST Thanjavur'],
        ['Unstop National Rank 19 — IPL Crunch ’26', '', '']] },
      { h: 'PUBLICATION', rows: [['CSK Performance Decline (2021–2026) & 2027 Outlook', 'Zenodo · DOI 10.5281/zenodo.20356166 · Open Access, indexed in OpenAIRE', 'Analyzed 283,678 IPL records and identified death bowling economy as a key win predictor.', { href: 'https://doi.org/10.5281/zenodo.20356166', label: 'View on Zenodo ↗' }]] }] },
    { id: 'proj', n: 'Project Orbit', ic: 'rocket', c: '#60a5fa', d: 'Technical projects and what they do', a: 'cuLift', s: '4.4s', B: [
      { h: 'PROJECTS', rows: [
        ['IPL Crunch ’26 — CSK Dynasty to Decline', 'Python · Pandas · Matplotlib · Unstop National Rank 19', 'Analyzed 283,678 IPL records; CSK wins tied to death bowling economy (r = –0.91). Built interactive visualizations. Published on Zenodo.', { open: 'p-csk-ipl' }],
        ['Data Scientist Career Intelligence System', 'Python · Random Forest · XGBoost · LightGBM · Gradio · HuggingFace', 'Built ML models on 10,000+ job records achieving 90%+ salary prediction accuracy. Deployed an interactive Gradio web app on HuggingFace Spaces.', { open: 'p-career-intel' }],
        ['Sales Data Pipeline — End-to-End ETL', 'Python · Pandas · SQLite3 · Matplotlib', 'Built an ETL pipeline processing 1,000+ sales records with 100% cleaning accuracy. Automated data transformation; deployed on GitHub.', { open: 'p-sales-pipeline' }],
        ['AeroPhoton — Smart Aircraft Ground Lock Pin Monitoring System', 'Sensors · Web Dashboard · Startup Pitch Fest 2026 (IAAA & StartupTN)', 'Team of 3; sensors detect ground lock pin status (Present / Removed–Verified / Sensor Fault) and feed a live dashboard with event log.', { open: 'p-aerophoton' }],
        ['TerraSense', 'SIH 2026 idea · presentation project', 'A live disaster-monitoring dashboard prototype for flash flood risk estimation.', { open: 'p-terrasense' }],
        ['Computing at the Speed of Light', 'TECHNOVA ’26 paper presentation', 'Optical computing uses light (photons) to transmit and process information.', { open: 'p-optical' }]] }] },
    { id: 'exp', n: 'Experience Zone', ic: 'briefcase', c: '#2dd4bf', d: 'Internships and hands-on experience', a: 'cuBeat', s: '2.6s', B: [
      { h: 'EXPERIENCE', rows: [
        ['Junior Data Scientist Intern (Remote)', 'Jul 2026 – Aug 2026 · YuvaIntern (NSDC)', 'Loan Prediction (finance) project — data cleaning, EDA, loan-approval classification model, visualizations and final report.'],
        ['Data Analytics Intern', 'May 2026 · Tata iQ × Forage virtual internship', 'Completed a GenAI-powered data analytics job simulation — EDA, risk profiling, AI-driven delinquency prediction and a data-driven collections strategy.', { cert: C('tata-genai-analytics'), label: 'View certificate' }],
        ['Data Science Volunteer', 'Unessa Foundation']] }] },
    { id: 'me', n: 'Creator Identity', ic: 'user', c: '#c084fc', d: 'Introduction, interests and goals', a: 'cuTilt', s: '3.8s', B: [
      { me: 1 },
      { h: 'INTRODUCTION', t: ['Aspiring Data Scientist with hands-on experience in building end-to-end ETL pipelines, ensemble ML models, and GenAI applications. Completed a Data Science internship at YuvaIntern (NSDC) and a Data Analytics internship at Forage Virtual Internship – Tata IQ, developing AI-driven solutions for risk profiling and delinquency prediction.', 'Published research on IPL performance analysis (Zenodo, OpenAIRE-indexed).'] },
      { h: 'CAREER INTERESTS', chips: ['Data science', 'Machine learning', 'ETL pipelines', 'GenAI applications', 'Analytics'] },
      { h: 'CAREER GOAL', t: ['Seeking a Data Scientist / Data Analyst role to deliver measurable business impact using Python, SQL, and ML.'] },
      { h: 'LANGUAGES', chips: ['Tamil (Native)', 'English (Professional Working Proficiency)'] },
      { h: 'FIND ME ONLINE', links: [['GitHub ↗', GH], ['LinkedIn ↗', LI], ['Hugging Face ↗', 'https://huggingface.co/devikarnambigai'], ['Email ↗', 'mailto:devikarnambigai713@gmail.com']] }] }
  ];
  const STARS = [
    { p: 'edu', n: 'Education', t: 'B.E. Computer Science and Engineering (2025–2029) at E.G.S. Pillai Engineering College, CGPA 9.2, plus an Honours Diploma in Computer Application (Grade A).', m: [10, 62], v: [26, 12] },
    { p: 'skills', n: 'Technical Skills', t: 'Python, SQL, Pandas, Git & GitHub, Machine Learning and ETL Pipelines.', m: [30, 30], v: [70, 28] },
    { p: 'ach', n: 'Certifications', t: 'Ten certifications on the resume — from Tata IQ × Forage and Google to Microsoft, IBM, HP LIFE and MathWorks.', m: [50, 66], v: [28, 48] },
    { p: 'proj', n: 'Projects', t: 'IPL Crunch ’26, the Data Scientist Career Intelligence System, the Sales Data Pipeline and AeroPhoton.', m: [72, 28], v: [72, 68] },
    { p: 'me', n: 'Career Goals', t: 'A Data Scientist / Data Analyst role, delivering measurable business impact with Python, SQL and ML.', m: [90, 58], v: [38, 88] }];

  /* ---------------- page shell ---------------- */
  root.insertAdjacentHTML('beforeend', `
  <header class="cu-hero"><div class="cu-gate3d" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
    <h2>THE INFINITE CAREER DIMENSION</h2><p class="cu-sub">Explore the mind behind the code.</p><p class="cu-by">DEVI KARNAMBIGAI</p>
    <p class="cu-tag">Every skill tells a story. Every project creates a possibility.</p>
    <button class="cu-secret" type="button" aria-label="A faint hidden star"><i></i></button>
    <div class="cu-note" role="status" hidden><p>“Beyond every certificate, every project and every line of code, there is a curious mind that never stops exploring.”</p><b>DEVI KARNAMBIGAI</b><small>DREAM BIG. BUILD FEARLESSLY. EXPLORE INFINITELY.</small></div></header>
  <div class="cu-hub" role="group" aria-label="Career portals">${PORTALS.map((p, i) => `<button type="button" class="cu-p" data-p="${p.id}" style="--c:${p.c};--i:${i};--ia:${p.a};--id:${p.s}"><span class="cu-p-ic">${svg(p.ic)}</span><small>PORTAL 0${i + 1}</small><strong>${p.n}</strong><span>${p.d}</span></button>`).join('')}</div>
  <button type="button" class="cu-chgate" data-p="chamber"><img src="${PAGE(1)}" alt="" width="84" height="119" onerror="this.remove()"><span><small>THE MAIN ATTRACTION</small><strong>The Holographic Resume Chamber</strong><span>Step inside and read my actual resume — page by page, zoomed, full screen or downloaded.</span></span></button>
  <section class="cu-const" aria-labelledby="cuCT"><h3 id="cuCT">The Career Constellation</h3><p>Five milestones, one path. Select a star to read what it holds.</p><div class="cu-sk" id="cuSk"></div></section>
  <div class="cu-ret"><button class="cu-retb" type="button"><i aria-hidden="true"></i>RETURN TO THE MULTIVERSE</button></div>`);
  const sky = document.createElement('canvas'); sky.className = 'cu-sky'; sky.setAttribute('aria-hidden', 'true'); body.append(sky);
  const ov = document.createElement('div'); ov.className = 'cu-ov'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'cuT');
  ov.innerHTML = '<div class="cu-win"><div class="cu-hd"><span class="cu-p-ic"></span><h2 id="cuT"></h2><button class="cu-x" type="button" aria-label="Close panel">×</button></div><div class="cu-bd"></div><div class="cu-ft"><button class="cu-btn" data-n="-1" type="button">‹ Previous portal</button><span class="cu-cnt"></span><button class="cu-btn" data-n="1" type="button">Next portal ›</button></div></div>';
  body.append(ov);
  const win = $('.cu-win', ov), bd = $('.cu-bd', ov), ft = $('.cu-ft', ov);

  /* ---------------- sky particles ---------------- */
  let raf = 0, mx = 0, my = 0, parts = [];
  function skyStart() {
    if (raf) return; const x = sky.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 1.5);
    const size = () => { sky.width = innerWidth * dpr; sky.height = innerHeight * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0); parts = Array.from({ length: innerWidth < 650 ? 45 : 90 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.8 + .4, z: Math.random() * .8 + .2, h: Math.random() < .5 ? '196,181,253' : '34,211,238' })); };
    size(); skyStart.size = size; addEventListener('resize', size);
    const draw = () => { x.clearRect(0, 0, innerWidth, innerHeight); for (const p of parts) { p.y -= .18 * p.z; if (p.y < -4) { p.y = innerHeight + 4; p.x = Math.random() * innerWidth } x.beginPath(); x.arc(p.x + mx * p.z * 14, p.y + my * p.z * 14, p.r, 0, 6.3); x.fillStyle = `rgba(${p.h},${.25 + p.z * .55})`; x.shadowColor = `rgb(${p.h})`; x.shadowBlur = 8; x.fill() } raf = requestAnimationFrame(draw) };
    reduce ? (draw(), cancelAnimationFrame(raf), raf = -1) : draw();
  }
  function skyStop() { if (raf > 0) cancelAnimationFrame(raf); raf = 0; removeEventListener('resize', skyStart.size || (() => {})) }
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5 } });

  /* ---------------- panels ---------------- */
  let curP = null, opener = null, closeT = 0;
  /* the reveal circle grows from the clicked portal; clamp to the viewport so it always covers the screen */
  const origin = el => { const r = el.getBoundingClientRect(), c = (v, m) => Math.min(Math.max(v, 0), m); ov.style.setProperty('--ox', c(r.left + r.width / 2, innerWidth) + 'px'); ov.style.setProperty('--oy', c(r.top + r.height / 2, innerHeight) + 'px') };
  const idx = id => PORTALS.findIndex(p => p.id === id);
  const link = (cls, href, t, ext) => `<a class="${cls}" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
  function render(b, k) {
    let h = '';
    if (b.me) return `<div class="cu-me" style="--k:${k}"><img src="assets/images/devi-portrait-640.jpg" alt="Portrait of Devi Karnambigai" width="640" height="693" onerror="this.remove()"><div><p><strong style="font:600 24px 'Space Grotesk'">G. Devi Karnambigai</strong><br>Nagapattinam, Tamil Nadu</p><p>Aspiring Data Scientist · B.E. Computer Science and Engineering student.</p></div></div>`;
    if (b.h) h += `<h3 style="--k:${k}">${b.h}</h3>`;
    (b.t || []).forEach(t => (h += `<p style="--k:${k}">${esc(t)}</p>`));
    if (b.chips) h += `<ul class="cu-chips${b.big ? ' big' : ''}" style="--k:${k}">${b.chips.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
    if (b.links) h += `<p style="--k:${k}">${b.links.map(([t, u]) => link('cu-btn', u, esc(t), !u.startsWith('mailto'))).join(' ')}</p>`;
    if (b.rows) h += `<ul class="cu-li" style="--k:${k}">${b.rows.map(([t, m, d, o = {}]) => `<li><b>${esc(t)}</b>${m ? `<em>${esc(m)}</em>` : ''}${d ? `<p>${esc(d)}</p>` : ''}${o.cert ? `<button type="button" class="cu-btn" data-cert="${o.cert}">${o.label || 'View certificate'}</button>` : ''}${o.open ? `<button type="button" class="cu-btn" data-open="${o.open}">${o.label || 'Open in Creation universe'}</button>` : ''}${o.href ? link('cu-btn', o.href, o.label, 1) : ''}</li>`).join('')}</ul>`;
    return h;
  }
  function show(el) { clearTimeout(closeT); ov.hidden = false; void ov.offsetWidth; ov.classList.add('on'); body.classList.add('cu-lock'); const x = $('.cu-x', ov); x.focus({ preventScroll: true }); return el }
  function openPortal(id, from, keep) {
    if (id === 'chamber') return openChamber(from);
    const p = PORTALS[idx(id)]; if (!p) return; curP = id; if (from) opener = from;
    if (from && !keep) origin(from);
    ov.classList.remove('ch'); bd.style.padding = ''; win.style.setProperty('--c', p.c); $('.cu-p-ic', ov).innerHTML = svg(p.ic); $('#cuT').textContent = p.n;
    bd.classList.remove('cu-ch'); bd.innerHTML = p.B.map(render).join(''); bd.scrollTop = 0; ft.hidden = false; $('.cu-cnt', ov).textContent = `${idx(id) + 1} / ${PORTALS.length}`;
    if (!ov.classList.contains('on')) show(); else { bd.querySelectorAll(':scope>*').forEach(e => { e.style.animation = 'none'; void e.offsetWidth; e.style.animation = '' }) }
  }
  function closePanel(instant) {
    if (ov.hidden) return; $('.cu-live', ov) && ($('.cu-live', ov).src = 'about:blank'); if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); win.classList.remove('cu-fs');
    ov.classList.remove('on'); body.classList.remove('cu-lock'); curP = null;
    closeT = setTimeout(() => { ov.hidden = true; bd.innerHTML = ''; if (opener && opener.isConnected && !instant) opener.focus({ preventScroll: true }) }, instant || reduce ? 0 : 650);
  }
  ov.addEventListener('click', e => {
    const t = e.target;
    if (t.closest('.cu-x')) return closePanel();
    const n = t.closest('[data-n]'); if (n) return openPortal(PORTALS[(idx(curP) + +n.dataset.n + PORTALS.length) % PORTALS.length].id, null, 1);
    const c = t.closest('[data-cert]'); if (c) { const src = $(`[data-src="${c.dataset.cert}"]`); if (src) { lastBtn = c; src.click() } return }
    const o = t.closest('[data-open]'); if (o) { closePanel(1); DK.open && DK.open(o.dataset.open) }
    if (t === ov) closePanel();
  });
  let lastBtn = null; const cm = document.getElementById('certificateModal');
  if (cm) new MutationObserver(() => { if (cm.getAttribute('aria-hidden') === 'true' && lastBtn && lastBtn.isConnected) { lastBtn.focus({ preventScroll: true }); lastBtn = null } }).observe(cm, { attributes: true, attributeFilter: ['aria-hidden'] });
  document.addEventListener('keydown', e => {
    if (ov.hidden || (cm && cm.classList.contains('open'))) return;
    if (e.key === 'Escape') { if (document.fullscreenElement) return; e.preventDefault(); closePanel() }
    else if (curP && (e.key === 'ArrowRight' || e.key === 'ArrowLeft') && !e.target.closest('input,textarea')) openPortal(PORTALS[(idx(curP) + (e.key === 'ArrowRight' ? 1 : -1) + PORTALS.length) % PORTALS.length].id, null, 1);
    else if (e.key === 'Tab') { const f = $$('button,a[href],[tabindex="0"],iframe', ov).filter(x => !x.disabled && x.offsetParent !== null); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() } }
  });
  let sx = 0; ov.addEventListener('touchstart', e => (sx = e.touches[0].clientX), { passive: true });
  ov.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (curP && Math.abs(d) > 90 && !e.target.closest('.cu-chips')) openPortal(PORTALS[(idx(curP) + (d < 0 ? 1 : -1) + PORTALS.length) % PORTALS.length].id, null, 1) }, { passive: true });
  $('.cu-hub', root).addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (b) openPortal(b.dataset.p, b) });
  $('.cu-chgate', root).addEventListener('click', e => openChamber(e.currentTarget));

  /* ---------------- holographic resume chamber ---------------- */
  const ZS = [.6, .8, 1, 1.25, 1.5, 1.8, 2.2, 3];
  function openChamber(from) {
    curP = null; if (from) { opener = from; origin(from) }
    ov.classList.add('ch'); win.style.setProperty('--c', '#22d3ee'); $('.cu-p-ic', ov).innerHTML = svg('doc'); $('#cuT').textContent = 'The Holographic Resume Chamber'; ft.hidden = true;
    bd.classList.add('cu-ch'); bd.style.padding = '0';
    bd.innerHTML = `<div class="cu-rings" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="cu-bar" role="toolbar" aria-label="Resume controls"><button type="button" data-a="prev" aria-label="Previous page">‹</button><span class="cu-pg" aria-live="polite">1 / 1</span><button type="button" data-a="next" aria-label="Next page">›</button><i></i>
      <button type="button" data-a="out" aria-label="Zoom out">−</button><button type="button" class="cu-z" data-a="fit" aria-label="Reset zoom">100%</button><button type="button" data-a="in" aria-label="Zoom in">+</button><i></i>
      <button type="button" data-a="fs">Full screen</button><button type="button" data-a="live" aria-pressed="false" title="Show the real PDF with selectable text">Live PDF</button>${link('', PDF, 'Download Resume').replace('<a ', '<a download="Devi-Karnambigai-Resume.pdf" ')}${link('', PDF, 'Open PDF ↗', 1)}</div>
    <div class="cu-stage"><div class="cu-emerge"><div class="cu-float"><div class="cu-doc"><div class="cu-frame"><div class="cu-scroll" tabindex="0" role="region" aria-label="Resume document. Scroll to read; the six portals hold the same content as text."><img class="cu-img" alt="Resume of G. Devi Karnambigai, A4 page" draggable="false"></div><iframe class="cu-live" title="Resume PDF" hidden></iframe></div></div></div></div></div>`;
    const img = $('.cu-img', bd), pg = $('.cu-pg', bd), zl = $('.cu-z', bd), sc = $('.cu-scroll', bd), live = $('.cu-live', bd), doc = $('.cu-doc', bd), stage = $('.cu-stage', bd);
    let n = 1, total = RESUME_PAGES, zi = innerWidth < 700 ? 5 : 2;
    const sync = () => { img.style.width = ZS[zi] * 100 + '%'; zl.textContent = Math.round(ZS[zi] * 100) + '%'; pg.textContent = `${n} / ${total}`; $('[data-a=prev]', bd).disabled = n <= 1; $('[data-a=next]', bd).disabled = n >= total; $('[data-a=out]', bd).disabled = zi === 0; $('[data-a=in]', bd).disabled = zi === ZS.length - 1; img.alt = `Resume of G. Devi Karnambigai, page ${n} of ${total}` };
    const load = () => { img.onerror = () => { sc.innerHTML = '<div class="cu-miss"><p>The page image could not be loaded.</p>' + link('cu-btn', PDF, 'Open the PDF ↗', 1) + '</div>' }; img.src = PAGE(n); sc.scrollTop = 0; sync() };
    total = RESUME_PAGES; load();
    bd.onclick = e => {
      const b = e.target.closest('[data-a]'); if (!b) return; const a = b.dataset.a;
      if (a === 'prev' && n > 1) { n--; load() } else if (a === 'next' && n < total) { n++; load() }
      else if (a === 'in' && zi < ZS.length - 1) { zi++; sync() } else if (a === 'out' && zi > 0) { zi--; sync() } else if (a === 'fit') { zi = innerWidth < 700 ? 5 : 2; sync() }
      else if (a === 'live') { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); live.hidden = !on; sc.hidden = on; if (on && !live.src.endsWith('.pdf#view=FitH')) live.src = PDF + '#view=FitH' }
      else if (a === 'fs') { if (win.requestFullscreen) { document.fullscreenElement ? document.exitFullscreen() : win.requestFullscreen().catch(() => win.classList.toggle('cu-fs')) } else win.classList.toggle('cu-fs') }
    };
    stage.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse' || reduce || zi > 2) return; const r = stage.getBoundingClientRect(); doc.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 8 + 'deg'); doc.style.setProperty('--rx', (.5 - (e.clientY - r.top) / r.height) * 5 + 'deg') });
    stage.addEventListener('pointerleave', () => { doc.style.setProperty('--ry', '0deg'); doc.style.setProperty('--rx', '0deg') });
    bd.onkeydown = e => { if (e.target.closest('.cu-scroll') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft') && total > 1 && e.altKey) { n = Math.min(total, Math.max(1, n + (e.key === 'ArrowRight' ? 1 : -1))); load() } };
    ov.querySelector('.cu-bd').scrollTop = 0; if (!ov.classList.contains('on')) show();
  }
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) win.classList.remove('cu-fs') });

  /* ---------------- constellation ---------------- */
  const sk = $('#cuSk'), mob = matchMedia('(max-width:560px)'); let card;
  function drawSky() {
    const m = mob.matches ? 'v' : 'm', pts = STARS.map(s => s[m]);
    sk.innerHTML = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="cuG"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><polyline points="${pts.map(p => p.join(',')).join(' ')}"/></svg>` +
      STARS.map((s, i) => `<button type="button" class="cu-st" style="--x:${s[m][0]};--y:${s[m][1]};--i:${i};--c:${PORTALS[idx(s.p)].c}" aria-expanded="false" data-s="${i}"><i></i><span>${s.n}</span></button>`).join('') + '<div class="cu-card" role="region" aria-live="polite" hidden></div>';
    card = $('.cu-card', sk);
  }
  drawSky(); (mob.addEventListener ? mob.addEventListener('change', drawSky) : mob.addListener(drawSky));
  sk.addEventListener('click', e => {
    const b = e.target.closest('[data-s]'), go = e.target.closest('[data-go]');
    if (go) return openPortal(go.dataset.go, go);
    if (!b) { if (!e.target.closest('.cu-card')) { card.hidden = true; $$('.cu-st', sk).forEach(x => x.setAttribute('aria-expanded', 'false')) } return }
    const s = STARS[+b.dataset.s], p = PORTALS[idx(s.p)], pos = s[mob.matches ? 'v' : 'm'], same = b.getAttribute('aria-expanded') === 'true';
    $$('.cu-st', sk).forEach(x => x.setAttribute('aria-expanded', 'false')); if (same) return (card.hidden = true);
    b.setAttribute('aria-expanded', 'true'); card.innerHTML = `<h4>${s.n}</h4><p>${esc(s.t)}</p><button type="button" class="cu-btn" data-go="${s.p}">Open ${p.n}</button>`;
    card.style.cssText = `left:clamp(0px,calc(${pos[0]}% - 155px),calc(100% - min(310px,90%)));` + (pos[1] > 50 ? `bottom:${100 - pos[1] + 9}%;top:auto` : `top:${pos[1] + 9}%;bottom:auto`); card.hidden = false; card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  });
  sk.addEventListener('keydown', e => { if (e.key === 'Escape' && !card.hidden) { card.hidden = true; e.stopPropagation() } });

  /* ---------------- hidden star ---------------- */
  const star = $('.cu-secret', root), note = $('.cu-note', root); let noteT = 0;
  const hideNote = () => { note.hidden = true; clearTimeout(noteT) };
  star.addEventListener('click', e => { e.stopPropagation(); star.classList.add('found'); note.hidden = false; note.style.animation = 'none'; void note.offsetWidth; note.style.animation = ''; clearTimeout(noteT); noteT = setTimeout(hideNote, 16000) });
  note.addEventListener('click', hideNote);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !note.hidden && ov.hidden) hideNote() });

  /* ---------------- return, entrance, integration ---------------- */
  $('.cu-retb', root).addEventListener('click', () => { const f = document.createElement('div'); f.className = 'cu-flash'; body.append(f); setTimeout(() => f.remove(), 700); setTimeout(() => DK.close && DK.close(), reduce ? 0 : 450) });
  let wasOn = false;
  new MutationObserver(() => {
    const on = body.dataset.uv === 'career', back = $('.uv-back');
    if (on && !wasOn) { root.classList.remove('cu-run'); void root.offsetWidth; root.classList.add('cu-run'); skyStart(); hideNote(); star.classList.remove('found'); card.hidden = true; if (back) back.textContent = 'RETURN TO THE MULTIVERSE' }
    if (!on && wasOn) { skyStop(); closePanel(1); hideNote(); if (back) back.textContent = '← Back to galaxy' }
    if (on && back && back.textContent !== 'RETURN TO THE MULTIVERSE') back.textContent = 'RETURN TO THE MULTIVERSE';
    wasOn = on;
  }).observe(body, { attributes: true, attributeFilter: ['data-uv'] });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { if (raf > 0) { cancelAnimationFrame(raf); raf = 0 } } else if (body.dataset.uv === 'career') skyStart() });
})();
