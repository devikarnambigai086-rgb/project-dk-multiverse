# Project DK — The Multiverse (Devi Karnambigai)

An interactive portfolio: a galaxy of six universes (Identity, Skills, Creation, Journey, Achievements, Connection).
The **Creation** universe now holds **six projects**, each with its own detail view. Three of them
(AeroPhoton, TerraSense, Computing at the Speed of Light) are full **presentation universes** with a
two-mode slide viewer.

Plain HTML + CSS + vanilla JavaScript. No build step, no frameworks.

## Run it locally

**Easiest:** double-click `index.html`. Everything uses relative paths, so it works straight from the folder.

**Recommended (closest to a real website):**
```bash
cd Project-DK
python -m http.server 8000      # then open http://localhost:8000
```
Fonts (Space Grotesk, DM Sans, DM Mono) load from Google Fonts, so they need an internet connection;
without one the site falls back to system fonts and everything still works.

## Put it online
Upload the whole `Project-DK` folder (keep the structure) to GitHub Pages, Netlify (drag & drop) or any static host.

## Folder structure
```
Project-DK/
├── index.html                  page markup (hero, universes, sections, certificate viewer)
├── css/
│   ├── style.css               original Multiverse styles (hero, galaxy, universes, certificates)
│   ├── projects.css            project cards, six detail universes, presentation viewer
│   └── portrait.css            NEW: Creator Signature Portrait (hero + About holographic frame, reveal, rings)
├── js/
│   ├── projects.js             NEW: project data, card rendering, detail pages, themed SVG scenes
│   ├── main.js                 original site logic (starfield, navigation, universes, certificate viewer)
│   ├── presentations.js        presentation viewer (cinematic + scrolling modes, fullscreen, keyboard)
│   └── portrait.js             NEW: portrait reveal sequence, neon name, particles, pointer parallax
├── assets/
│   ├── certificates/           16 certificate images (14 cards + Drawing + Composition)
│   ├── images/                 devi-portrait.jpg (original, 1205×1305) + devi-portrait-640.jpg (About)
│   └── icons/                  (empty, reserved)
├── presentations/
│   ├── aerophoton/slides/      slide-01.jpg … slide-17.jpg  (+ thumbs/)
│   ├── terrasense/slides/      slide-01.jpg … slide-06.jpg  (+ thumbs/)
│   └── optical-computing/slides/  slide-01.jpg … slide-17.jpg (+ thumbs/)
├── README.md
└── TESTING.md                  what was tested, and how
```

## How the presentation viewer works
Open a presentation project → **View presentation** (or click the poster / any thumbnail).

| | Cinematic mode | Scrolling mode |
|---|---|---|
| Layout | one slide at a time, animated transitions | all slides stacked vertically, original 16:9 proportions |
| Move | Previous / Next, side arrows, swipe, progress-bar click | Previous / Next jump slide-by-slide, or just scroll |
| Keys | ← → Space PageUp PageDown Home End | ← → Home End (↑ ↓ scroll normally) |
| Both | **F** fullscreen · **M** switch mode · **Esc** exit · slide counter + progress bar · slide titles | |

Switching modes keeps your current slide. Images are lazy-loaded (cinematic mode preloads the next/previous slide;
scrolling mode uses native lazy loading with reserved 16:9 boxes, so nothing jumps).

## Things you will want to edit
* **Projects / text / links:** `js/projects.js` (one `PROJECTS` array — title, summary, chips, facts, GitHub link).
* **Portrait photo:** replace `assets/images/devi-portrait.jpg` (and the 640 px copy `devi-portrait-640.jpg`) with a new image of the same ~12:13 ratio. The photo is never filtered or overlaid — only the frame, rings and particles around it are styled. If the file is missing, a "DK" emblem shows.
* **Name / subtitle / tagline under the portrait:** the `<figcaption class="dk-id">` block in `index.html`.
* **Resume:** the two "resume" buttons point to `assets/Devi-Karnambigai-Resume.pdf` — add that file (it was not supplied).
* **Replace a deck's slides:** export the slides from PowerPoint as 1920×1080 JPG, name them `slide-01.jpg`, `slide-02.jpg`…
  and overwrite the files in the project's `slides/` folder. If the slide count changes, update `count` and `titles` in `js/projects.js`.
  (Thumbnails in `thumbs/` are 480 px wide copies — regenerate them the same way.)

## Known limitations
See the end of `TESTING.md`.

## Creator Signature Portrait
The reveal starts when the intro screen is dismissed: galaxy glow → portrait → holographic rings → neon name → subtitle → tagline (~5 s). Pointer parallax is desktop-only; animations pause off-screen and are disabled for `prefers-reduced-motion`.

## The Infinite Career Dimension (resume universe)
Open it from the **Career** link in the menu or the "Infinite Career Dimension" gateway under the six planets.
* **Six portals** (Education, Skills, Achievements, Projects, Experience, Creator Identity), the **Holographic Resume Chamber** and the **Career Constellation**. A hidden star is somewhere near the top of the page.
* Files: `css/career-universe.css`, `js/career-universe.js` (all text lives in the `DATA` block at the top), `assets/documents/devi-karnambigai-resume.pdf`, and `assets/documents/resume-pages/page-N.png`.
* The chamber shows the resume as page images so it is readable and zoomable on every phone and browser. "Live PDF" switches to the real PDF (selectable text) where the browser supports it. Download / Open PDF use the original, unmodified PDF.
* **When you replace the resume PDF:** overwrite `assets/documents/devi-karnambigai-resume.pdf` (and `assets/Devi-Karnambigai-Resume.pdf`, used by the older resume buttons), then run `sh tools/render-resume.sh` (needs poppler) to rebuild the page images and page count.
