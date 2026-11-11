#!/bin/sh
# Re-creates the page images used by the Holographic Resume Chamber after you replace the PDF.
# Needs poppler (pdftoppm):  macOS `brew install poppler` · Ubuntu `sudo apt install poppler-utils` · Windows: poppler binaries.
# Run from the project root:  sh tools/render-resume.sh
set -e
rm -f assets/documents/resume-pages/page-*.png
pdftoppm -r 200 -png assets/documents/devi-karnambigai-resume.pdf assets/documents/resume-pages/tmp
for f in assets/documents/resume-pages/tmp-*.png; do n=$(echo "$f" | sed 's/.*tmp-0*\([0-9]*\)\.png/\1/'); mv "$f" "assets/documents/resume-pages/page-$n.png"; done
COUNT=$(ls assets/documents/resume-pages/page-*.png | wc -l | tr -d ' ')
sed -i.bak "s/const RESUME_PAGES = [0-9]*;/const RESUME_PAGES = $COUNT;/" js/career-universe.js && rm -f js/career-universe.js.bak
echo "Rendered $COUNT page(s); js/career-universe.js updated."
