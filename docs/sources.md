# Source and editorial notes

This file records provenance and unresolved checks for the DV2008 website. It is editor/developer documentation, not case-study copy. Page numbers below are one-based PDF pages.

## Supplied source files

| Reference | Local file | Relevant evidence |
| --- | --- | --- |
| Assignment 1 presentation | [a1-presentation.pdf](./a1-presentation.pdf) | Research question and sample: pp5–7. Interview and observation methods: pp8,10. Cross-platform journey: p9. Participant findings and quotes: pp11–13. Synthesis: pp14–15. |
| Background research | [a1-background-research.pdf](./a1-background-research.pdf) | Existing experience: p1. Exploratory public discussions: p2. Competitor/literature context: p3. Research-question development: p4. Source list: p5. |
| Assignment 3 final presentation | [a3-final-presentation.pdf](./a3-final-presentation.pdf) | Team and project: p1. A1–A3 progression: p3. Discovery counts: p4. A2 recap: p7. Feedback and scope: pp8–9. First refinements: pp10–13. Flow: p14. Evaluation: pp15–19. Further refinements: p20. Screens: pp21–25. Design system: p26. Learnings: p27. |

The PDFs are unchanged copies of the user's supplied files. They retain their original wording, including source-status labels discussed below.

## Claim provenance

| Website claim | Source / qualification |
| --- | --- |
| Michael Joseph Candra was team leader | Explicitly confirmed by the user on 14 November 2026. A3 p1 names Celine, Janice, Michelle and Michael as team members. The PDFs do not assign individual duties. |
| 41 survey respondents; 6 interview participants | A1 pp5–7; A3 p3. Accessible-network sample; do not generalize to all Goodreads readers. |
| Discovery through friends/family 28/41, TikTok/Instagram 28/41, Goodreads 6/41 | A3 p4; Goodreads count also A1 p11. Multiple responses were allowed. |
| Saving did not necessarily help choosing | A1 p13: direct P3/P5 quotes. Attribute those quotes to anonymized participants. |
| 12 ideas; two scoring rounds; A vs E tested with 5 readers | A3 p3. A2 source has not yet been independently read. |
| Selected ideas A + C + K; A score 11/12, K score 12/12 | A3 p7. This is the A3 recap of A2, not a direct reading of the A2 design file. |
| Save first; optional reason; picks without reasons; connected flow | A3 pp10–14. |
| Save → list → questions → three picks → decide | A3 p14; detailed walkthrough pp21–24. |
| Start reading moves the book to Currently Reading; Not now excludes it for 30 days; Remove removes it from Want to Read | A3 pp14,24–25. Prototype behavior, not a deployed Goodreads integration. |
| Five readers, ages 20–23; Zoom think-aloud; four tasks; 43-book prototype | A3 pp15–17. Session date shown as 7 November 2026. |
| Choice within 3 minutes 3/5 → 5/5; median choice time 148s → 88s; confidence 2.8 → 4.0 /5; ease 3.8 → 5.8 /7; reasons added 3/5 | A3 p18, with the user's data-status confirmation below. Preserve scale labels and small sample size. |
| Save confirmation and clearer refresh/preference labels | A3 p20 describes proposed follow-up changes. Implementation and retesting are not established by the PDFs. |
| Palette, typography and reported accessibility checks | A3 p26. Team-reported checks, not independent accessibility certification. |

## Data-status clarification

On **14 November 2026**, the user stated: **“all of it is actual data, trust me.”** This is the user's confirmation of the project data supplied for this case study.

The attached A3 deck nevertheless labels the results on pp16,18–20 as illustrative/not observed and the behaviors on p19 as hypothetical. The website's treatment of these figures as actual team study results relies on the user's later confirmation. Preserve this provenance distinction; do not state that the PDF itself independently verifies observed results, and do not silently alter the source PDF.

The five-person sample and possible familiarity/task-order effects (A3 p16) remain limitations. The results are prototype-study findings, not evidence of population-wide or production impact.

## Verification and attribution boundaries

- **A2 live file:** direct exploration remains pending: <https://www.figma.com/design/sjcfOTEzGJTYfkeSn6JxTu/>. Current A2 statements come from A3 pp3,7. A3 p7 reports 3/5 would use idea A; earlier presentation-script notes referred to a conflicting 4/5. Omit that preference count until the direct A2 evidence resolves it.
- **A3 prototype:** supplied link: <https://www.figma.com/proto/zPU9X8697ZM5EA3bj2FdTb?node-id=5-2&starting-point-node-id=5%3A2>. Screenshots were extracted unchanged from the supplied A3 PDF. They are not independent proof that all current prototype interactions were tested.
- **Round 2:** the PDF marks the two changes as proposed and requiring validation. Its final shortlist screenshot still shows “Shuffle picks” and “Change answers.” Do not claim the new labels were implemented or that a second test occurred without additional evidence.
- **Individual contribution:** the role title “team leader” is user-confirmed. Do not invent specific personal duties, claim sole authorship, or turn team achievements into first-person individual achievements. Use team attribution unless the user confirms the allocation of work.
- **Assignment requirements:** the [Notion assignment brief](https://crawling-hardcover-fc0.notion.site/Individual-Assignment-Case-Study-b3203c5be56382a79b20015e76bcec81) was accessed and reviewed in Chrome on 15 November 2026. It asks for an individual case study for a recruiter or design manager: introduce the problem, communicate the design process and reasoning, highlight individual contributions, use relevant visuals, and reflect on learnings, challenges, trade-offs and improvements. There is no minimum or maximum word count or required number of pages or screens; any accessible, easy-to-read format is allowed. The criteria are **Clarity & Communication**, **Content & Storytelling**, **Individual Perspective & Reflection**, and **Presentation & Craft**. This records the reviewed brief, not a grade or a claim of full rubric compliance. The requirement to highlight individual contributions does not establish duties absent from the project evidence.
- **Secondary sources:** competitor features, literature and public discussions shaped questions (Background pp2–4). They are not evidence of this team's participants' behavior. A1 p13's decorative meeting photo is not a photo of study participants.

## Screenshot provenance

Original embedded images were extracted from `a3-final-presentation.pdf` without changing their contents:

| Asset stem | PDF page |
| --- | --- |
| `baseline-want-to-read` | 6 |
| `a2-three-picks` | 7 |
| `a2-save-before` | 11 |
| `a3-save-reason` | 11 / 21 |
| `a3-three-picks` | 12 / 23 |
| `a2-questions-before` | 13 |
| `a3-one-question` | 13 |
| `a3-save-confirmation` | 21 |
| `a3-saved-list` | 22 |
| `a3-preferences` | 22 |
| `a3-book-decision` | 24 |
| `a3-currently-reading` | 24 |

Book titles, covers, ratings and review text in these images are prototype content. Do not present them as current external book/review data verified by this website.

## Exact portfolio background

The fixed industrial-evolution background uses the actual CSS layers and JavaScript renderer fetched from https://michaeljc2605.github.io/ on 14 November 2026. Its six palettes, seeded particles, smoke, factory silhouettes, grid, network and stars follow the same full-document scroll progress. Content uses the final live rgba(10,11,18,0.68) overlay; the footer uses rgba(14,14,20,0.7). Only a missing/failed canvas-context guard was added; CSS palettes still work without canvas. Drawing-command and palette parity passed at 0%,20%,40%,60%,80%,100% scroll at widths390 and1440. Browser preview was unavailable because the managed preview relay was missing.
