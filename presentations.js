/* Project DK — presentation viewer
   Two modes for every deck:  CINEMATIC (one slide at a time)  /  SCROLLING (all slides, vertical).
   Reusable functions: open, close, setMode, goTo, next, prev, updateUI, buildScroll, toggleFullscreen. */
(function () {
  'use strict';
  const DK = window.DK;
  if (!DK || !DK.projects) return;
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const byId = {}; DK.projects.forEach(p => { if (p.deck) byId['p-' + p.id] = p; });
  const resolve = path => (window.DK_INLINE && window.DK_INLINE[path]) || path;   /* standalone build inlines images */

  /* ---------- build the overlay once ---------- */
  const pv = document.createElement('div');
  pv.className = 'pv'; pv.id = 'presentationViewer'; pv.hidden = true;
  pv.setAttribute('role', 'dialog'); pv.setAttribute('aria-modal', 'true'); pv.setAttribute('aria-label', 'Presentation viewer');
  pv.innerHTML = `
    <div class="pv-bg" aria-hidden="true"></div>
    <header class="pv-top">
      <div class="pv-heading"><strong class="pv-title"></strong><span class="pv-sub"></span></div>
      <div class="pv-seg" role="group" aria-label="Presentation mode" data-mode="cine">
        <i class="pv-seg-thumb" aria-hidden="true"></i>
        <button type="button" data-mode="cine" aria-pressed="true">CINEMATIC MODE</button>
        <button type="button" data-mode="scroll" aria-pressed="false">SCROLLING MODE</button>
      </div>
      <div class="pv-tools">
        <button type="button" class="pv-fs" aria-label="Toggle fullscreen" title="Fullscreen (F)"><span class="pv-fs-ico">⛶</span><span class="pv-fs-txt">Fullscreen</span></button>
        <button type="button" class="pv-exit" aria-label="Exit presentation" title="Exit (Esc)">✕ <span>Exit presentation</span></button>
      </div>
    </header>
    <div class="pv-body">
      <div class="pv-cine">
        <button type="button" class="pv-side pv-side-prev" aria-label="Previous slide">‹</button>
        <div class="pv-stage loading"><img class="pv-img" alt="" decoding="async"><div class="pv-spin" aria-hidden="true"></div></div>
        <button type="button" class="pv-side pv-side-next" aria-label="Next slide">›</button>
      </div>
      <div class="pv-scroll" tabindex="-1"></div>
      <div class="pv-hint" aria-hidden="true">Rotate your phone for a bigger slide ↻</div>
    </div>
    <footer class="pv-bottom">
      <button type="button" class="pv-nav pv-prev" aria-label="Previous slide">‹ <span>Previous</span></button>
      <div class="pv-meter">
        <div class="pv-count" aria-live="polite"></div>
        <div class="pv-bar" role="progressbar" aria-valuemin="1" aria-valuenow="1"><i></i></div>
      </div>
      <button type="button" class="pv-nav pv-next" aria-label="Next slide"><span>Next</span> ›</button>
    </footer>`;
  document.body.appendChild(pv);

  const q = s => pv.querySelector(s);
  const el = {
    title: q('.pv-title'), sub: q('.pv-sub'), seg: q('.pv-seg'), cine: q('.pv-cine'), stage: q('.pv-stage'), img: q('.pv-img'),
    scroll: q('.pv-scroll'), count: q('.pv-count'), bar: q('.pv-bar'), fill: q('.pv-bar i'), fs: q('.pv-fs'), fsTxt: q('.pv-fs-txt'), exit: q('.pv-exit'),
    prev: [q('.pv-prev'), q('.pv-side-prev')], next: [q('.pv-next'), q('.pv-side-next')]
  };
  const st = { p: null, n: 0, idx: 0, mode: 'cine', opener: null, built: null, raf: 0, token: 0, target: null, tt: 0 };

  const src = (i, thumb) => resolve(DK.slideSrc(st.p, i, thumb));
  const slideTitle = i => st.p.deck.titles[i] || '';

  /* ---------- UI ---------- */
  function updateUI() {
    const i = st.idx, n = st.n;
    el.count.textContent = `${pad(i + 1)} / ${pad(n)} · ${slideTitle(i)}`;
    el.fill.style.width = ((i + 1) / n * 100) + '%';
    el.bar.setAttribute('aria-valuenow', String(i + 1)); el.bar.setAttribute('aria-valuemax', String(n));
    el.prev.forEach(b => b.disabled = i === 0);
    el.next.forEach(b => b.disabled = i === n - 1);
  }
  function showCine(dir) {
    const i = st.idx, token = ++st.token, url = src(i);
    el.stage.classList.add('loading');
    const pre = new Image();
    pre.onload = pre.onerror = () => {
      if (token !== st.token) return;
      el.img.src = url; el.img.alt = `${st.p.title} — slide ${i + 1} of ${st.n}: ${slideTitle(i)}`;
      el.img.classList.remove('in-next', 'in-prev', 'in-fade'); void el.img.offsetWidth;
      el.img.classList.add(dir > 0 ? 'in-next' : dir < 0 ? 'in-prev' : 'in-fade');
      el.stage.classList.remove('loading');
    };
    pre.src = url;
    [i + 1, i - 1].forEach(k => { if (k >= 0 && k < st.n) new Image().src = src(k); });   /* preload neighbours */
  }
  function buildScroll() {
    if (st.built === st.p.id) return;
    el.scroll.innerHTML = '';
    for (let i = 0; i < st.n; i++) {
      const f = document.createElement('figure'); f.className = 'pv-sl'; f.dataset.i = i; f.id = 'pv-slide-' + (i + 1);
      f.innerHTML = `<div class="pv-sl-box"><img loading="lazy" decoding="async" src="${src(i)}" alt="${esc(st.p.title)} — slide ${i + 1} of ${st.n}: ${esc(slideTitle(i))}"></div><figcaption>${pad(i + 1)} · ${esc(slideTitle(i))}</figcaption>`;
      el.scroll.appendChild(f);
    }
    st.built = st.p.id;
  }
  function scrollToSlide(i, instant) {
    const f = el.scroll.children[i]; if (!f) return;
    const top = f.offsetTop - 12;
    st.target = instant ? null : top;                         /* while a smooth scroll runs, the scroll listener must not overwrite st.idx */
    clearTimeout(st.tt); if (!instant) st.tt = setTimeout(() => { st.target = null; }, 1400);
    el.scroll.scrollTo({ top, behavior: instant ? 'instant' : 'smooth' });
  }
  function slideInView() {                                  /* slide whose centre is closest to the viewport centre */
    const mid = el.scroll.scrollTop + el.scroll.clientHeight / 2; let best = 0, bd = Infinity;
    for (let i = 0; i < el.scroll.children.length; i++) {
      const f = el.scroll.children[i], d = Math.abs(f.offsetTop + f.offsetHeight / 2 - mid);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  /* ---------- navigation ---------- */
  function goTo(i, dir) {
    i = Math.max(0, Math.min(st.n - 1, i));
    const d = dir === undefined ? Math.sign(i - st.idx) : dir;
    if (st.mode === 'cine') { if (i === st.idx && el.img.src) return; st.idx = i; updateUI(); showCine(d); }
    else { const far = Math.abs(i - st.idx) > 3; st.idx = i; updateUI(); scrollToSlide(i, far); }   /* long jumps are instant, short ones glide */
  }
  const next = () => goTo(st.idx + 1, 1);
  const prev = () => goTo(st.idx - 1, -1);

  function setMode(m) {
    if (m === st.mode && pv.dataset.mode) return;
    if (st.mode === 'scroll' && m === 'cine') st.idx = slideInView();   /* keep position when leaving scroll mode */
    st.mode = m; pv.dataset.mode = m; el.seg.dataset.mode = m;
    el.seg.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === m)));
    if (m === 'scroll') { buildScroll(); requestAnimationFrame(() => scrollToSlide(st.idx, true)); }
    else showCine(0);
    updateUI();
  }

  /* ---------- fullscreen ---------- */
  const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement;
  const canFS = !!(pv.requestFullscreen || pv.webkitRequestFullscreen);
  if (!canFS) el.fs.hidden = true;
  function toggleFullscreen() {
    if (!canFS) return;
    try {
      if (fsEl()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      else { const r = (pv.requestFullscreen || pv.webkitRequestFullscreen).call(pv); if (r && r.catch) r.catch(() => {}); }
    } catch (e) { /* fullscreen refused by the browser — viewer keeps working */ }
  }
  function onFS() { const on = fsEl() === pv; pv.classList.toggle('is-fs', on); el.fsTxt.textContent = on ? 'Exit fullscreen' : 'Fullscreen'; }
  document.addEventListener('fullscreenchange', onFS); document.addEventListener('webkitfullscreenchange', onFS);

  /* ---------- open / close ---------- */
  function open(id, start, opener) {
    const p = byId[id]; if (!p) return;
    st.p = p; st.n = p.deck.count; st.idx = Math.max(0, Math.min(st.n - 1, +start || 0)); st.opener = opener || document.activeElement;
    pv.dataset.theme = p.theme; el.title.textContent = p.title; el.sub.textContent = p.eyebrow || '';
    pv.hidden = false; document.body.classList.add('modal-open'); void pv.offsetWidth; pv.classList.add('open');
    st.mode = ''; pv.dataset.mode = '';
    setMode('cine'); updateUI(); el.exit.focus({ preventScroll: true });
  }
  function close() {
    if (pv.hidden) return;
    if (fsEl() === pv) { try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) { } }
    pv.classList.remove('open'); pv.hidden = true; document.body.classList.remove('modal-open');
    st.token++; el.img.removeAttribute('src');
    if (st.opener && st.opener.focus && document.contains(st.opener)) st.opener.focus({ preventScroll: true });
  }

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-play-deck]');
    if (b) { e.preventDefault(); open(b.dataset.playDeck, b.dataset.slide, b); }
  });
  el.exit.addEventListener('click', close);
  el.fs.addEventListener('click', toggleFullscreen);
  el.prev.forEach(b => b.addEventListener('click', prev)); el.next.forEach(b => b.addEventListener('click', next));
  el.seg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  el.bar.addEventListener('click', e => { const r = el.bar.getBoundingClientRect(); goTo(Math.round((e.clientX - r.left) / r.width * (st.n - 1))); });
  el.scroll.addEventListener('scroll', () => {
    if (st.mode !== 'scroll' || st.raf) return;
    st.raf = requestAnimationFrame(() => {
      st.raf = 0;
      if (st.target !== null) { if (Math.abs(el.scroll.scrollTop - st.target) > 3) return; st.target = null; }   /* arrived */
      const i = slideInView(); if (i !== st.idx) { st.idx = i; updateUI(); }
    });
  }, { passive: true });
  addEventListener('popstate', () => close());              /* phone back button closes the viewer */

  document.addEventListener('keydown', e => {
    if (pv.hidden) return;
    const k = e.key;
    if (k === 'Escape') { e.preventDefault(); close(); return; }
    if (k === 'Tab') {                                       /* keep focus inside the viewer */
      const f = [...pv.querySelectorAll('button:not([hidden]):not(:disabled)')];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (k === 'ArrowRight' || (st.mode === 'cine' && (k === 'PageDown' || k === ' '))) { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || (st.mode === 'cine' && k === 'PageUp')) { e.preventDefault(); prev(); }
    else if (k === 'Home') { e.preventDefault(); goTo(0); }
    else if (k === 'End') { e.preventDefault(); goTo(st.n - 1); }
    else if (k === 'f' || k === 'F') { e.preventDefault(); toggleFullscreen(); }
    else if (k === 'm' || k === 'M') { e.preventDefault(); setMode(st.mode === 'cine' ? 'scroll' : 'cine'); }
  });

  /* touch swipe (cinematic mode) */
  let tx = 0, ty = 0;
  el.stage.addEventListener('touchstart', e => { tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY; }, { passive: true });
  el.stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) (dx < 0 ? next : prev)();
  }, { passive: true });

  /* small public API (used by tests and other pages) */
  DK.present = { open, close, setMode, goTo, next, prev, toggleFullscreen, state: st };
})();
