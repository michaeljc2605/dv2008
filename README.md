# DV2008 — Narrow to Now

Michael Joseph Candra's individual portfolio case study of Group 5 Beng-Beng's Goodreads concept redesign. It shows his research, A2 ideas J, K and L, and prototype UI within the team's shared design and testing work.

Repository: [michaeljc2605/dv2008](https://github.com/michaeljc2605/dv2008)

Live case study: https://michaeljc2605.github.io/dv2008/

Published through GitHub Pages Actions on 15 November 2026 and verified in Chrome. This is a separate repository from `michaeljc2605.github.io`, like the existing `teduh-site` project. The portfolio card links to this case study and its prototype section.

## Included experience

- A1 → A2 → A3 project progression, evidence and design decisions.
- Michael's confirmed contributions: A1 interviews, affinity-map setup and problem statement; A2 ideas J, K and L, the “Is it for me?” card and decide step; A3 Want to Read list, Add a reason overlay and questionnaire screens 04–07; pilot test, P4 facilitation and P1 notes. The team retains credit for shared outcomes.
- Michael's original J, K and L sketches, prototype screens, an A2/A3 comparison and six-step interactive walkthrough.
- Study outcomes, limits, proposed follow-up changes and Michael's concrete reflection on learning FigJam, colour theory and interviewing.
- Figma embed loaded on request, plus a direct prototype link and static screen fallback.
- Research and presentation PDFs, including the user-authorised correction of A3 data-status wording in visible and extractable text.
- A downloadable 12-page individual case-study PDF for submission backup, linked from Project Materials.
- The exact live portfolio background: fixed industrial scene, scroll-driven six-stage palette, smoke, circuits, stars, transparent sections, mobile and reduced-motion support.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Node 22 or later can run the build and checks without installing dependencies:

```sh
node scripts/check.mjs
node scripts/build.mjs
```

`dist/` contains the complete static output. All local file URLs are relative, so the site works both at a domain root and under `/dv2008/`.

## Publish to GitHub Pages

The original `portfolio-case-studies` delivery bundle includes `publish-case-study.sh`, `publish-both.sh` and a portfolio integration patch outside this standalone repository. For a new repository, read the bundle's root README, then run `bash publish-case-study.sh dv2008` from the bundle folder. The helper requires the GitHub CLI, verifies the signed-in account is `michaeljc2605`, refuses to overwrite an existing repository, and creates a **public** `dv2008` repository.

Alternatively, create an empty public repository named `dv2008`, push this folder to its `main` branch, and set **Settings → Pages → Source → GitHub Actions**. The included `.github/workflows/pages.yml` validates, builds and deploys the site. Run the workflow manually if it ran before Pages was enabled.

If the repository already exists, clone or fetch `michaeljc2605/dv2008`, inspect its current files and history, and apply updates on a normal branch. Run the checks and build before committing, then push and merge according to the repository's protections. Do not rerun the new-repository helper, delete the repository or force-push. Confirm the Pages workflow succeeds and the public site shows the update.

## Edit the content

| File | Purpose |
| --- | --- |
| `index.html` | Case study, figures, result table, resource links and Figma destination |
| `styles.css` | Portfolio-matched design and responsive layout |
| `background.css`, `background.js` | Actual portfolio scene and canvas animation, with a canvas-unavailable fallback |
| `app.js` | Walkthrough, comparison, image dialog, embed and chapter indicator |
| `assets/screens/` | Prototype images extracted from the supplied final deck, plus Michael's three original A2 wireframe photographs |
| `assets/people/` | User-supplied group photograph for the closing special thanks |
| `docs/` | Research/presentation PDFs and editorial source notes |
| `scripts/` | Dependency-free build and integrity checks |

## Before final assignment submission

The Notion assignment brief was accessed and reviewed in Chrome on 15 November 2026. It asks for an individual case study aimed at a recruiter or design manager, covering the problem, design process and reasoning, individual contributions, relevant visuals, and reflection on learnings, challenges, trade-offs and improvements. It sets no minimum or maximum word count or required number of pages or screens, and allows any accessible, easy-to-read format. The assessment criteria are recorded in `docs/sources.md`; reviewing the brief does not establish a grade or full rubric compliance.

The original A2 Figma presentation's idea-testing and selected-direction slides were reviewed in Chrome on 15 November 2026, including the original twelve-idea decision matrix, confirming the five-reader comparison, selected A + C + K flow and reported scores. Michael subsequently explained the scoring: four members each had up to three points, considering feasibility, wireframe design and expected effect from the explanation. Read `docs/sources.md` for evidence and contribution provenance. Michael confirmed on 14 and 15 November 2026 that the study data are actual. Round 2 refinements remain proposed and unretested unless separately verified.

The embedded Figma prototype still depends on the file's sharing settings and Figma availability. It has a permanent external-link fallback. This is a student concept, not a functioning Goodreads integration or recommendation backend.

## Attribution

Team: Celine, Janice, Michelle and Michael — Group 5, Beng-Beng. Book covers and Goodreads UI shown in prototype screenshots remain part of the original educational design material; no ownership claim is made over them.
