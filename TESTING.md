# Project DK — Testing report

Automated browser tests (Playwright / headless Chromium), run against the final files.

* **Folder version** served over http://localhost: **177/177** checks passed
* **Single-file version** opened from disk (file://): **177/177** checks passed
* JavaScript errors / console errors during both runs: **0**
* Mobile = Chromium device emulation (390×844, touch). **Not** tested on a physical phone or on Safari/Firefox.
* Network failures seen: only `assets/images/portrait.jpg` (404) — the photo has not been supplied yet; the page falls back to the DK emblem.

## GitHub links

The three repository links are preserved exactly as supplied. Checked with `git ls-remote` / a metadata-only clone (this test sandbox cannot load github.com web pages):

| Link | Result |
|---|---|
| github.com/devikarnambigai086-rgb/csk-ipl-analysis-2027 | exists, public, default branch `main` |
| github.com/devikarnambigai086-rgb/sales-data-pipeline | exists, public, default branch `main` |
| …/csk-ipl-analysis-2027/blob/main/Data_Scientist_Career_Intelligence.ipynb | file present on `main` (note: this notebook lives inside the csk-ipl-analysis-2027 repo) |

The test also confirms each link is wired to the right card / detail button (`href` equals the supplied URL).

## Results by area

| Area | Passed |
|---|---|
| Existing universes | 14/14 |
| Projects section (six projects) | 16/16 |
| AeroPhoton | 38/38 |
| TerraSense | 38/38 |
| Computing at the Speed of Light | 37/37 |
| Certificates | 5/5 |
| Mobile | 29/29 |

## Every check

### Existing universes

- ✅ intro dismisses
- ✅ hero + galaxy present
- ✅ universe "about" opens
- ✅ "Back to galaxy" from about
- ✅ universe "skills" opens
- ✅ "Back to galaxy" from skills
- ✅ universe "projects" opens
- ✅ "Back to galaxy" from projects
- ✅ universe "journey" opens
- ✅ "Back to galaxy" from journey
- ✅ universe "certifications" opens
- ✅ "Back to galaxy" from certifications
- ✅ universe "contact" opens
- ✅ "Back to galaxy" from contact

### Projects section (six projects)

- ✅ Projects shows 6 cards
- ✅ Project order 01–06
- ✅ CSK IPL Analysis 2027: detail opens
- ✅ CSK IPL Analysis 2027: GitHub link kept
- ✅ CSK IPL Analysis 2027: no presentation button
- ✅ CSK IPL Analysis 2027: Back to Projects
- ✅ Sales Data Pipeline: detail opens
- ✅ Sales Data Pipeline: GitHub link kept
- ✅ Sales Data Pipeline: no presentation button
- ✅ Sales Data Pipeline: Back to Projects
- ✅ Data Scientist Career Intelligence: detail opens
- ✅ Data Scientist Career Intelligence: GitHub link kept
- ✅ Data Scientist Career Intelligence: no presentation button
- ✅ Data Scientist Career Intelligence: Back to Projects
- ✅ Card GitHub buttons (3)
- ✅ Browser Back closes viewer

### AeroPhoton

- ✅ AeroPhoton: correct universe opens
- ✅ AeroPhoton: themed environment (aero)
- ✅ AeroPhoton: filmstrip has 17 thumbnails
- ✅ AeroPhoton: viewer opens
- ✅ AeroPhoton: correct presentation loads
- ✅ AeroPhoton: counter shows 01 / 17
- ✅ AeroPhoton: Previous disabled on first slide
- ✅ AeroPhoton: Next button → slide 2
- ✅ AeroPhoton: side arrow Next → slide 3
- ✅ AeroPhoton: Previous button → slide 2
- ✅ AeroPhoton: progress bar updates
- ✅ AeroPhoton: ArrowRight ×2 → slide 4
- ✅ AeroPhoton: ArrowLeft → slide 3
- ✅ AeroPhoton: End → last slide
- ✅ AeroPhoton: Home → first slide
- ✅ AeroPhoton: Space → next slide
- ✅ AeroPhoton: clicking progress bar seeks
- ✅ AeroPhoton: fullscreen enters
- ✅ AeroPhoton: fullscreen button label changes
- ✅ AeroPhoton: F key leaves fullscreen
- ✅ AeroPhoton: scrolling mode shows
- ✅ AeroPhoton: scrolling mode lists all 17 slides
- ✅ AeroPhoton: switch cinematic→scrolling keeps slide 5 in view
- ✅ AeroPhoton: every slide image loads
- ✅ AeroPhoton: slide order preserved
- ✅ AeroPhoton: original 16:9 proportions
- ✅ AeroPhoton: counter follows scrolling (last slide)
- ✅ AeroPhoton: Home in scrolling mode → slide 1
- ✅ AeroPhoton: ArrowRight in scrolling mode → slide 2
- ✅ AeroPhoton: Next button in scrolling mode → slide 3
- ✅ AeroPhoton: switch scrolling→cinematic keeps slide 3
- ✅ AeroPhoton: M key toggles mode
- ✅ AeroPhoton: Exit presentation closes viewer
- ✅ AeroPhoton: stays on project page after exit
- ✅ AeroPhoton: thumbnail opens that slide
- ✅ AeroPhoton: Escape closes viewer
- ✅ AeroPhoton: Back to Projects
- ✅ Next-universe hop AeroPhoton → TerraSense

### TerraSense

- ✅ TerraSense: correct universe opens
- ✅ TerraSense: themed environment (terra)
- ✅ TerraSense: filmstrip has 6 thumbnails
- ✅ TerraSense: viewer opens
- ✅ TerraSense: correct presentation loads
- ✅ TerraSense: counter shows 01 / 06
- ✅ TerraSense: Previous disabled on first slide
- ✅ TerraSense: Next button → slide 2
- ✅ TerraSense: side arrow Next → slide 3
- ✅ TerraSense: Previous button → slide 2
- ✅ TerraSense: progress bar updates
- ✅ TerraSense: ArrowRight ×2 → slide 4
- ✅ TerraSense: ArrowLeft → slide 3
- ✅ TerraSense: End → last slide
- ✅ TerraSense: Home → first slide
- ✅ TerraSense: Space → next slide
- ✅ TerraSense: clicking progress bar seeks
- ✅ TerraSense: fullscreen enters
- ✅ TerraSense: fullscreen button label changes
- ✅ TerraSense: F key leaves fullscreen
- ✅ TerraSense: scrolling mode shows
- ✅ TerraSense: scrolling mode lists all 6 slides
- ✅ TerraSense: switch cinematic→scrolling keeps slide 5 in view
- ✅ TerraSense: every slide image loads
- ✅ TerraSense: slide order preserved
- ✅ TerraSense: original 16:9 proportions
- ✅ TerraSense: counter follows scrolling (last slide)
- ✅ TerraSense: Home in scrolling mode → slide 1
- ✅ TerraSense: ArrowRight in scrolling mode → slide 2
- ✅ TerraSense: Next button in scrolling mode → slide 3
- ✅ TerraSense: switch scrolling→cinematic keeps slide 3
- ✅ TerraSense: M key toggles mode
- ✅ TerraSense: Exit presentation closes viewer
- ✅ TerraSense: stays on project page after exit
- ✅ TerraSense: thumbnail opens that slide
- ✅ TerraSense: Escape closes viewer
- ✅ TerraSense: Back to Projects
- ✅ Previous-universe hop TerraSense → AeroPhoton

### Computing at the Speed of Light

- ✅ Computing at the Speed of Light: correct universe opens
- ✅ Computing at the Speed of Light: themed environment (optical)
- ✅ Computing at the Speed of Light: filmstrip has 17 thumbnails
- ✅ Computing at the Speed of Light: viewer opens
- ✅ Computing at the Speed of Light: correct presentation loads
- ✅ Computing at the Speed of Light: counter shows 01 / 17
- ✅ Computing at the Speed of Light: Previous disabled on first slide
- ✅ Computing at the Speed of Light: Next button → slide 2
- ✅ Computing at the Speed of Light: side arrow Next → slide 3
- ✅ Computing at the Speed of Light: Previous button → slide 2
- ✅ Computing at the Speed of Light: progress bar updates
- ✅ Computing at the Speed of Light: ArrowRight ×2 → slide 4
- ✅ Computing at the Speed of Light: ArrowLeft → slide 3
- ✅ Computing at the Speed of Light: End → last slide
- ✅ Computing at the Speed of Light: Home → first slide
- ✅ Computing at the Speed of Light: Space → next slide
- ✅ Computing at the Speed of Light: clicking progress bar seeks
- ✅ Computing at the Speed of Light: fullscreen enters
- ✅ Computing at the Speed of Light: fullscreen button label changes
- ✅ Computing at the Speed of Light: F key leaves fullscreen
- ✅ Computing at the Speed of Light: scrolling mode shows
- ✅ Computing at the Speed of Light: scrolling mode lists all 17 slides
- ✅ Computing at the Speed of Light: switch cinematic→scrolling keeps slide 5 in view
- ✅ Computing at the Speed of Light: every slide image loads
- ✅ Computing at the Speed of Light: slide order preserved
- ✅ Computing at the Speed of Light: original 16:9 proportions
- ✅ Computing at the Speed of Light: counter follows scrolling (last slide)
- ✅ Computing at the Speed of Light: Home in scrolling mode → slide 1
- ✅ Computing at the Speed of Light: ArrowRight in scrolling mode → slide 2
- ✅ Computing at the Speed of Light: Next button in scrolling mode → slide 3
- ✅ Computing at the Speed of Light: switch scrolling→cinematic keeps slide 3
- ✅ Computing at the Speed of Light: M key toggles mode
- ✅ Computing at the Speed of Light: Exit presentation closes viewer
- ✅ Computing at the Speed of Light: stays on project page after exit
- ✅ Computing at the Speed of Light: thumbnail opens that slide
- ✅ Computing at the Speed of Light: Escape closes viewer
- ✅ Computing at the Speed of Light: Back to Projects

### Certificates

- ✅ Certificates: 14 cards
- ✅ Certificates: all 14 open with image
- ✅ Certificates: Next works
- ✅ Achievement certificate 1 opens
- ✅ Achievement certificate 2 opens

### Mobile

- ✅ Mobile: no horizontal overflow (projects)
- ✅ Mobile: no horizontal overflow (AeroPhoton)
- ✅ Mobile AeroPhoton: viewer controls inside the screen
- ✅ Mobile: no horizontal overflow (AeroPhoton viewer)
- ✅ Mobile AeroPhoton: tap Next
- ✅ Mobile AeroPhoton: swipe left → next slide
- ✅ Mobile AeroPhoton: swipe right → previous slide
- ✅ Mobile: no horizontal overflow (AeroPhoton scrolling mode)
- ✅ Mobile AeroPhoton: scrolling mode works
- ✅ Mobile AeroPhoton: exit works
- ✅ Mobile: no horizontal overflow (TerraSense)
- ✅ Mobile TerraSense: viewer controls inside the screen
- ✅ Mobile: no horizontal overflow (TerraSense viewer)
- ✅ Mobile TerraSense: tap Next
- ✅ Mobile TerraSense: swipe left → next slide
- ✅ Mobile TerraSense: swipe right → previous slide
- ✅ Mobile: no horizontal overflow (TerraSense scrolling mode)
- ✅ Mobile TerraSense: scrolling mode works
- ✅ Mobile TerraSense: exit works
- ✅ Mobile: no horizontal overflow (Computing at the Speed of Light)
- ✅ Mobile Computing at the Speed of Light: viewer controls inside the screen
- ✅ Mobile: no horizontal overflow (Computing at the Speed of Light viewer)
- ✅ Mobile Computing at the Speed of Light: tap Next
- ✅ Mobile Computing at the Speed of Light: swipe left → next slide
- ✅ Mobile Computing at the Speed of Light: swipe right → previous slide
- ✅ Mobile: no horizontal overflow (Computing at the Speed of Light scrolling mode)
- ✅ Mobile Computing at the Speed of Light: scrolling mode works
- ✅ Mobile Computing at the Speed of Light: exit works
- ✅ Mobile: certificate opens

## Limitations and things to know

* **Portrait photo** and **resume PDF** were not supplied → `assets/images/portrait.jpg` and `assets/Devi-Karnambigai-Resume.pdf` are missing (README explains where to put them).
* **TerraSense:** the uploaded SIH deck is about *Flash Flood Prediction System for Hilly Regions* (it spells the project “TerraSence”). The site follows the deck, not the “landslide” wording in the brief. Edit `js/projects.js` if you want different wording.
* **Slide fidelity:** the two PowerPoint decks were converted to images with LibreOffice, so fonts/spacing can differ slightly from PowerPoint — TerraSense slide 1 shows its title tight against the top edge. For pixel-exact slides export from PowerPoint and replace the JPGs (see README). AeroPhoton was converted from the supplied PDF.
* **AeroPhoton “Concept Demo Video” slide** is a still image — a video cannot play inside a slide image.
* **Optical Computing** uses the new “PRO REDESIGNED V2” deck (17 slides), replacing the older 17-slide version previously on the site.
* **Fullscreen** works where the browser supports the Fullscreen API (desktop browsers, Android Chrome). iPhone Safari does not support it, so the button is hidden there; the viewer already fills the screen.
* **Single-file version** uses 1280 px slide images (the folder/ZIP version uses 1920 px) to keep the file phone-friendly (~10 MB).
* Fonts load from Google Fonts and need an internet connection.

## Portrait upgrade — verification
Headless Chromium, desktop 1440×900 and mobile 390×844, compared against the previous build:
* 6 project cards, 9 skills, 14 certificates, 6 universes open/close, 3 presentation viewers (cinematic + scrolling, next, exit), certificate modal, 7 GitHub links — identical results before and after.
* No JavaScript errors. No horizontal scroll at 390 px (the previous build overflowed to ~420 px; fixed with `html{overflow-x:clip}`).
* Photo aspect ratio rendered 0.9234 vs source 0.9234 (no distortion); natural width 1205 px (original pixels).
* The only console message offline is Google Fonts failing to load (needs internet).

## Career Dimension — verification (headless Chromium, desktop 1440×900, mobile 390×844, reduced-motion, keyboard)
138 automated checks, 0 failed: gateway/menu entry, six portals (open, Esc, prev/next, arrow keys), certificate viewer reused from the Achievement panel, project links into existing universes, resume page image loads, zoom in/out/reset, download, open-PDF link, Live PDF toggle, full screen on/off, five constellation stars (cards stay inside the box), hidden star message, return to the Multiverse, all 10 existing universes + certificate viewer + 6 projects/9 skills/14 certificates unchanged, no horizontal scroll, no JS errors or 404s (only Google Fonts fail offline).
Not tested: real phones/Safari (only Chromium), and the Live PDF viewer's own controls (they belong to the browser; headless Chromium has no PDF plugin).
