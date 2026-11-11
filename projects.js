/* Project DK — project data, project cards and the six project detail universes.
   Loaded BEFORE main.js (which registers these universes) and BEFORE presentations.js.
   All facts below come from the user's own site text, GitHub links and the three uploaded decks. */
(function () {
  'use strict';
  const GH = 'https://github.com/devikarnambigai086-rgb/';

  const PROJECTS = [
    {
      id: 'csk-ipl', no: '01', kind: 'repo', theme: 'repo', glyph: 'IPL × DATA',
      tag: 'DATA ANALYSIS', status: 'Research project',
      title: 'CSK IPL Analysis 2027',
      blurb: 'Exploring IPL performance patterns with Python, Pandas and visualisation — turning match records into questions about team performance and strategy.',
      summary: 'Exploring IPL performance patterns with Python, Pandas and visualisation — turning match records into questions about team performance and strategy.',
      chips: ['Python', 'Pandas', 'Matplotlib', 'Data storytelling'],
      facts: [['Category', 'Data analysis'], ['Stage', 'Research project'], ['Stack', 'Python · Pandas · Matplotlib'], ['Source', 'Open on GitHub']],
      github: GH + 'csk-ipl-analysis-2027', githubLabel: 'View repository on GitHub ↗'
    },
    {
      id: 'sales-pipeline', no: '02', kind: 'repo', theme: 'repo', glyph: 'ETL → DB',
      tag: 'DATA ENGINEERING', status: 'Portfolio project',
      title: 'Sales Data Pipeline',
      blurb: 'An end-to-end ETL workflow to clean, transform and organise sales records for analysis using a lightweight database.',
      summary: 'An end-to-end ETL workflow to clean, transform and organise sales records for analysis using a lightweight database.',
      chips: ['Python', 'Pandas', 'SQLite', 'ETL'],
      facts: [['Category', 'Data engineering'], ['Stage', 'Portfolio project'], ['Stack', 'Python · Pandas · SQLite'], ['Source', 'Open on GitHub']],
      github: GH + 'sales-data-pipeline', githubLabel: 'View repository on GitHub ↗'
    },
    {
      id: 'career-intel', no: '03', kind: 'repo', theme: 'repo', glyph: 'ML / INSIGHT',
      tag: 'MACHINE LEARNING', status: 'Portfolio project',
      title: 'Data Scientist Career Intelligence',
      blurb: 'A machine-learning project exploring career and salary insights from job-market data, with an interactive interface for discovery.',
      summary: 'A machine-learning project exploring career and salary insights from job-market data, with an interactive interface for discovery.',
      chips: ['Python', 'Random Forest', 'Gradio', 'Hugging Face'],
      facts: [['Category', 'Machine learning'], ['Stage', 'Portfolio project'], ['Stack', 'Python · Random Forest · Gradio'], ['Source', 'Notebook on GitHub']],
      github: GH + 'csk-ipl-analysis-2027/blob/main/Data_Scientist_Career_Intelligence.ipynb', githubLabel: 'Open the notebook on GitHub ↗'
    },
    {
      id: 'aerophoton', no: '04', kind: 'deck', theme: 'aero', glyph: 'AERO / SAFE',
      tag: 'STARTUP PITCH', status: 'Pitch Fest 2026',
      title: 'AeroPhoton',
      full: 'AeroPhoton – Smart Aircraft Ground Lock Pin Safety Monitoring System',
      tagline: 'Detect. Verify. Alert.',
      eyebrow: 'Aerospace and Defence Startup Pitch Fest 2026',
      blurb: 'A proposed sensor-based system that helps maintenance personnel monitor landing gear ground lock pin status — pin presence, verified removal, sensor faults, alerts and a timestamped event log.',
      summary: 'A proposed sensor-based system that helps maintenance personnel monitor landing gear ground lock pin status through sensing, a controller and a dashboard: pin presence, verified removal, sensor faults, alerts and a timestamped event log.',
      chips: ['Sensor-based pin detection', 'Three-state safety indication', 'Sensor health monitoring', 'Live dashboard updates', 'Alerts for unresolved status', 'Timestamped event logging', 'Scalable multi-point design'],
      facts: [
        ['Event', 'Aerospace and Defence Startup Pitch Fest 2026'],
        ['Team', 'AeroPhoton — G. Devi Karnambigai, S. Kaviya, K. Santhana Lakshmi'],
        ['Safety logic', 'RED: pin present · GREEN: removal verified · AMBER: fault / unknown'],
        ['Prototype plan', 'ESP32 / Arduino-class board · Python + Streamlit · SQLite history']
      ],
      deck: {
        dir: 'aerophoton', count: 17,
        titles: ['AeroPhoton', 'The Problem', 'Safety Need and Strategic Relevance', 'Our Solution', 'Core Technology and Components', 'Technical Foundation', 'Working Demonstration', 'Product Prototype', 'Performance Validation Plan', 'Unique Value Proposition', 'Target Market and Customers', 'Business Model and Revenue', 'Competition and Differentiation', 'Roadmap and Investment Ask', 'Live Prototype', 'Concept Demo Video', 'Vision and Closing Pitch']
      }
    },
    {
      id: 'terrasense', no: '05', kind: 'deck', theme: 'terra', glyph: 'TERRA / SENSE',
      tag: 'SMART INDIA HACKATHON', status: 'SIH 2026 idea',
      title: 'TerraSense',
      full: 'TerraSense – Flash Flood Prediction System for Hilly Regions',
      tagline: 'Sense the Ground, Save Lives.',
      eyebrow: 'Smart India Hackathon 2026 · Disaster Management',
      blurb: 'A live disaster-monitoring dashboard prototype for flash flood risk estimation — fusing rainfall, terrain, hydrology, soil and historical data into village and ward-level risk.',
      summary: 'A live disaster-monitoring dashboard prototype for flash flood risk estimation. It builds a location-specific hazard profile for villages and wards by fusing five data pillars — rainfall, terrain, hydrology, soil and historical data — and shows risk through a live dashboard with SMS and siren demo alerts.',
      chips: ['Flash flood risk', 'Multi-source data fusion', 'Physics + AI/ML', 'Village / ward-level risk', 'Live dashboard', 'SMS & siren demo'],
      facts: [
        ['Event', 'Smart India Hackathon 2026 · Problem Statement SIH26192'],
        ['Theme', 'Disaster Management · Software category'],
        ['Team', 'Mativerse'],
        ['Data pillars', 'Rainfall · Terrain · Hydrology · Soil · Historical']
      ],
      deck: {
        dir: 'terrasense', count: 6,
        titles: ['Title Page', 'Idea Title', 'Technical Approach', 'Business Model Canvas', 'Impact and Benefits', 'Research and References']
      }
    },
    {
      id: 'optical', no: '06', kind: 'deck', theme: 'optical', glyph: 'LIGHT / SPEED',
      tag: 'PAPER PRESENTATION', status: 'TECHNOVA ’26',
      title: 'Computing at the Speed of Light',
      full: 'Computing at the Speed of Light – The Future of Optical Computing',
      tagline: 'Photons, Photonic Chips, Light-Speed Data.',
      eyebrow: 'TECHNOVA ’26 National Symposium',
      blurb: 'A presentation on how light can carry and process data — optical vs electronic computing, photonic integrated circuits, optical interconnects and the challenges ahead.',
      summary: 'Optical computing uses light (photons) to transmit and process information. Unlike traditional computers that use electrical signals, it uses light for faster data communication and high-bandwidth processing.',
      chips: ['Optical computing', 'Photonics', 'Photonic chips', 'Optical interconnects', 'WDM'],
      facts: [
        ['Event', 'TECHNOVA ’26 National Symposium'],
        ['Presented by', 'G. Devi Karnambigai, S. Kaviya, K. Santhanalakshmi, K. Dhiya'],
        ['College', 'E.G.S. Pillay Engineering College, Nagapattinam'],
        ['Agenda', 'Problem · Concept · How it works · Why light · Challenges · Future']
      ],
      deck: {
        dir: 'optical-computing', count: 17,
        titles: ['Computing at the Speed of Light', 'Agenda', 'Why Do We Need Faster Computing?', 'What Is Optical Computing?', 'Electronic vs Optical Computing', 'How Does It Work?', 'Key Components', 'Photonic Integrated Circuits', 'Why Use Light?', 'Optical Interconnects', 'Applications', 'Advantages', 'Challenges', 'Future Vision', 'Conclusion', 'Key Terms', 'Thank You']
      }
    }
  ];

  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const sid = p => 'p-' + p.id;
  const slideSrc = (p, i, thumb) => { const path = `presentations/${p.deck.dir}/slides/${thumb ? 'thumbs/' : ''}slide-${pad(i + 1)}.jpg`; return (window.DK_INLINE && window.DK_INLINE[path]) || path; };   /* DK_INLINE exists only in the single-file build */
  const chips = list => `<div class="chips">${list.map(c => `<span>${esc(c)}</span>`).join('')}</div>`;

  /* ---------- registration used by main.js (universe map, particles, warp colours) ---------- */
  const FXSET = { repo: ['{ }', '01', '</>', 'Σ'], aero: ['✈', '◇', '·', '+'], terra: ['▲', '◆', '~', '·'], optical: ['◉', 'λ', '✦', '·'] };
  const WCSET = { repo: '#ec4899', aero: '#38bdf8', terra: '#34d399', optical: '#22d3ee' };
  const DK = (window.DK = window.DK || {});
  DK.projects = PROJECTS;
  DK.slideSrc = slideSrc;
  DK.universes = {}; DK.fx = {}; DK.wc = {};
  PROJECTS.forEach(p => { DK.universes[sid(p)] = p.title; DK.fx[sid(p)] = FXSET[p.theme]; DK.wc[sid(p)] = WCSET[p.theme]; });

  /* ---------- project cards (Creation universe) ---------- */
  function cardHTML(p) {
    const deck = p.deck ? `<span class="pc-count">${p.deck.count} slides</span>` : '';
    const gh = p.github ? `<a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>` : '';
    return `<article class="project-card pc" data-theme="${p.theme}" data-id="${sid(p)}">
      <div class="project-art"><span class="project-glyph">${esc(p.glyph)}</span><span class="pc-no">${p.no} / 06</span><i class="pc-glare"></i></div>
      <div class="project-body">
        <div class="project-meta"><span class="tag">${esc(p.tag)}</span><span class="status">${esc(p.status)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.blurb)}</p>
        ${chips(p.chips.slice(0, 4))}
        <div class="pc-actions"><button class="btn primary" type="button" data-open-project="${sid(p)}">${p.deck ? 'Enter universe ↗' : 'View project ↗'}</button>${gh}${deck}</div>
      </div></article>`;
  }

  function wireCards(grid) {
    grid.querySelectorAll('.pc').forEach(card => {
      /* whole card is clickable (links and buttons keep their own behaviour) */
      card.addEventListener('click', e => { if (!e.target.closest('a,button')) DK.open(card.dataset.id); });
      /* subtle 3D tilt + glare following the pointer (skipped for touch / reduced motion) */
      if (!matchMedia('(hover:hover)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--ry', ((x - .5) * 8).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((.5 - y) * 6).toFixed(2) + 'deg');
        card.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
        card.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
      });
      card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    });
  }

  /* ---------- themed animated scenes (inline SVG, decorative) ---------- */
  function rng(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

  const SCENES = {
    repo() {
      return `<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#ec4899" stroke-opacity=".22">
        <ellipse cx="900" cy="220" rx="260" ry="90" transform="rotate(-24 900 220)"/><ellipse cx="900" cy="220" rx="170" ry="58" transform="rotate(32 900 220)" stroke="#38bdf8"/></g>
        <circle cx="900" cy="220" r="14" fill="#f9a8d4" class="sc-pulse"/></svg>`;
    },
    aero() {
      const r = rng(7); let dots = '';
      for (let i = 0; i < 14; i++) dots += `<circle cx="${(r() * 1180 + 10).toFixed(0)}" cy="${(r() * 520 + 20).toFixed(0)}" r="${(r() * 1.6 + .6).toFixed(1)}" fill="#bae6fd" class="sc-blink" style="animation-delay:${(r() * 4).toFixed(1)}s"/>`;
      let grid = ''; for (let i = -6; i <= 6; i++) grid += `<line x1="${600 + i * 40}" y1="560" x2="${600 + i * 190}" y2="700"/>`;
      for (let j = 0; j < 4; j++) grid += `<line x1="0" y1="${575 + j * j * 9 + j * 12}" x2="1200" y2="${575 + j * j * 9 + j * 12}"/>`;
      return `<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice"><defs>
        <linearGradient id="agA" x1="0" x2="1"><stop offset="0" stop-color="#38bdf8" stop-opacity="0"/><stop offset=".55" stop-color="#38bdf8"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></linearGradient>
        <linearGradient id="agS" x1="0" x2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity="0"/><stop offset="1" stop-color="#22d3ee" stop-opacity=".45"/></linearGradient></defs>
        <g transform="translate(930 250)" fill="none" stroke="#38bdf8" stroke-opacity=".2"><circle r="70"/><circle r="130"/><circle r="190"/><circle r="250"/>
          <line x1="-260" x2="260"/><line y1="-260" y2="260"/><g class="sc-sweep"><path d="M0 0 L250 0 A250 250 0 0 0 214 -129Z" fill="url(#agS)" stroke="none"/></g></g>
        <path id="agPath" d="M-30 520 C 260 380, 520 480, 760 260 S 1100 80, 1240 130" fill="none" stroke="url(#agA)" stroke-width="1.6" stroke-dasharray="6 10"/>
        <path d="M0 0 L-18 -7 L-13 0 L-18 7Z" fill="#e0f2fe"><animateMotion dur="15s" repeatCount="indefinite" rotate="auto"><mpath href="#agPath"/></animateMotion></path>
        <g stroke="#38bdf8" stroke-opacity=".18" fill="none">${grid}</g>${dots}</svg>`;
    },
    terra() {
      const r = rng(11); let rain = '';
      for (let i = 0; i < 34; i++) rain += `<line x1="${(r() * 1200).toFixed(0)}" y1="-30" x2="${(r() * 1200).toFixed(0)}" y2="-8" class="sc-rain" style="animation-delay:${(r() * 3).toFixed(2)}s;animation-duration:${(1.2 + r() * 1.4).toFixed(2)}s"/>`;
      return `<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice"><defs>
        <linearGradient id="tgA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34d399" stop-opacity=".34"/><stop offset="1" stop-color="#04140f" stop-opacity="0"/></linearGradient>
        <linearGradient id="tgB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#38bdf8" stop-opacity=".26"/><stop offset="1" stop-color="#04140f" stop-opacity="0"/></linearGradient></defs>
        <path d="M0 470 L130 360 L230 430 L380 280 L510 410 L640 320 L790 450 L940 300 L1090 420 L1200 350 L1200 700 L0 700Z" fill="url(#tgB)"/>
        <path d="M0 540 L150 440 L260 500 L420 380 L560 500 L700 410 L860 520 L1010 420 L1200 510 L1200 700 L0 700Z" fill="url(#tgA)"/>
        <g fill="none" stroke="#a3e635" stroke-opacity=".16"><path d="M0 590 C 200 540, 380 600, 600 560 S 1000 520, 1200 570"/><path d="M0 625 C 220 580, 420 640, 640 600 S 1020 565, 1200 610"/><path d="M0 660 C 240 625, 440 675, 680 640 S 1040 610, 1200 650"/></g>
        <g class="sc-rainwrap" stroke="#7dd3fc" stroke-opacity=".5" stroke-width="1.2">${rain}</g>
        <g class="sc-wave"><path d="M-600 650 q 100 -22 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 V 720 H -600Z" fill="#38bdf8" fill-opacity=".14"/></g></svg>`;
    },
    optical() {
      const r = rng(23); let rails = '', nodes = '';
      for (let i = 0; i < 9; i++) {
        const y = 60 + i * 66 + r() * 20, x1 = 120 + r() * 420, y2 = y + (r() > .5 ? 1 : -1) * (30 + r() * 70), x2 = x1 + 160 + r() * 380;
        const col = ['#22d3ee', '#a855f7', '#60a5fa'][i % 3];
        rails += `<path d="M-10 ${y.toFixed(0)} H${x1.toFixed(0)} L${(x1 + 30).toFixed(0)} ${y2.toFixed(0)} H${x2.toFixed(0)} L${(x2 + 30).toFixed(0)} ${y.toFixed(0)} H1210" stroke="${col}" class="sc-flow" style="animation-delay:${(-r() * 6).toFixed(1)}s;animation-duration:${(5 + r() * 5).toFixed(1)}s"/>`;
        nodes += `<circle cx="${x1.toFixed(0)}" cy="${y.toFixed(0)}" r="4" fill="${col}" class="sc-pulse" style="animation-delay:${(r() * 3).toFixed(1)}s"/><circle cx="${(x2 + 30).toFixed(0)}" cy="${y.toFixed(0)}" r="3.5" fill="${col}" class="sc-pulse" style="animation-delay:${(r() * 3).toFixed(1)}s"/>`;
      }
      return `<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice"><defs>
        <linearGradient id="opL" x1="0" x2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity="0"/><stop offset=".5" stop-color="#a5f3fc"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></linearGradient></defs>
        <g fill="none" stroke-width="1.5" stroke-opacity=".5">${rails}</g>${nodes}
        <g fill="none" stroke="#a855f7" stroke-opacity=".35"><path d="M930 90 l60 60 l-60 60 l-60 -60Z"/><path d="M930 120 l30 30 l-30 30 l-30 -30Z" stroke="#22d3ee"/></g>
        <rect class="sc-laser" x="0" y="0" width="160" height="700" fill="url(#opL)" opacity=".18"/></svg>`;
    }
  };

  /* ---------- project detail universes ---------- */
  function detailHTML(p, i) {
    const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
    const facts = p.facts.map(([k, v]) => `<div class="pd-fact"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join('');
    const kind = p.deck ? 'PRESENTATION UNIVERSE' : 'GITHUB PROJECT';
    const eyebrow = p.eyebrow ? `<div class="pd-event">${esc(p.eyebrow)}</div>` : `<div class="pd-event">${esc(p.tag)}</div>`;
    const cta = p.deck
      ? `<button class="btn primary pd-play" type="button" data-play-deck="${sid(p)}" data-slide="0">▶ View presentation</button>`
      : `<a class="btn primary" href="${p.github}" target="_blank" rel="noopener">${esc(p.githubLabel)}</a>`;
    const visual = p.deck
      ? `<button class="pd-poster" type="button" data-play-deck="${sid(p)}" data-slide="0" aria-label="Play ${esc(p.title)} presentation"><img src="${slideSrc(p, 0)}" alt="${esc(p.title)} — title slide" loading="lazy" decoding="async"><span class="pd-poster-play">▶</span><span class="pd-poster-cap">${p.deck.count} slides · original deck</span></button>`
      : `<div class="pd-orb" aria-hidden="true"><i></i><b>${esc(p.glyph)}</b></div>`;
    const film = p.deck ? `<div class="pd-film"><h3>Slides</h3><div class="pd-strip">${p.deck.titles.map((t, k) => `<button type="button" class="pd-th" data-play-deck="${sid(p)}" data-slide="${k}" title="${esc(t)}"><img src="${slideSrc(p, k, true)}" alt="Slide ${k + 1}: ${esc(t)}" loading="lazy" decoding="async"><span>${pad(k + 1)}</span></button>`).join('')}</div></div>` : '';
    return `<div class="pd-scene" aria-hidden="true">${SCENES[p.theme]()}</div>
      <div class="wrap pd-inner">
        <div class="pd-crumbs"><button class="btn pd-back" type="button" data-back-projects>← Back to Projects</button><span class="kicker">PROJECT ${p.no} / 06 · ${kind}</span></div>
        <div class="pd-hero">
          <div class="pd-copy">
            ${eyebrow}
            <h2>${esc(p.title)}</h2>
            ${p.full ? `<p class="pd-full">${esc(p.full)}</p>` : ''}
            ${p.tagline ? `<p class="pd-tag">${esc(p.tagline)}</p>` : ''}
            <p class="pd-summary">${esc(p.summary)}</p>
            ${chips(p.chips)}
            <div class="pd-cta">${cta}<button class="btn" type="button" data-back-projects>All projects</button></div>
          </div>
          <div class="pd-visual">${visual}</div>
        </div>
        <div class="pd-facts">${facts}</div>
        ${film}
        <div class="pd-hop">
          <button class="btn" type="button" data-open-project="${sid(prev)}">← ${esc(prev.title)}</button>
          <button class="btn" type="button" data-open-project="${sid(next)}">${esc(next.title)} →</button>
        </div>
      </div>`;
  }

  const grid = document.getElementById('projectGrid');
  if (grid) { grid.innerHTML = PROJECTS.map(cardHTML).join(''); wireCards(grid); }
  const main = document.querySelector('main');
  const before = document.getElementById('journey');
  PROJECTS.forEach((p, i) => {
    const s = document.createElement('section');
    s.className = 'section pd';
    s.id = sid(p);
    s.dataset.theme = p.theme;
    s.setAttribute('aria-label', p.title);
    s.innerHTML = detailHTML(p, i);
    main.insertBefore(s, before);
  });
})();
