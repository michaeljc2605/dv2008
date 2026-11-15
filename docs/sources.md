# Source and editorial notes

This file records provenance and unresolved checks for the DV2008 website. It is editor/developer documentation, not case-study copy. Page numbers below are one-based PDF pages.

## Supplied source files

| Reference | Local file | Relevant evidence |
| --- | --- | --- |
| Assignment 1 presentation | [a1-presentation.pdf](./a1-presentation.pdf) | Research question and participant group: pp5–7. Interview and observation methods: pp8,10. Cross-platform journey: p9. Participant findings and quotes: pp11–13. Synthesis: pp14–15. |
| Background research | [a1-background-research.pdf](./a1-background-research.pdf) | Existing experience: p1. Exploratory public discussions: p2. Competitor/literature context: p3. Research-question development: p4. Source list: p5. |
| Assignment 3 final presentation | [a3-final-presentation.pdf](./a3-final-presentation.pdf) | Team and project: p1. A1–A3 progression: p3. Discovery counts: p4. A2 recap: p7. Feedback and scope: pp8–9. First refinements: pp10–13. Flow: p14. Evaluation: pp15–19. Further refinements: p20. Screens: pp21–25. Design system: p26. Learnings: p27. |

The A1 PDFs are unchanged copies of the user's supplied files. On 15 November 2026, Michael confirmed that the A3 figures and participant behaviours describe actual study sessions and requested correction of the deck's inaccurate data-status wording. The A3 copy was corrected in both its visible and extractable text while preserving the numerical results, study limitations and status of proposed refinements. Earlier versions remain in repository history.

The correction affects pages 16, 18, 19 and 20. It updates the visible vector lettering, the tagged `ActualText` layer and other extractable text; it does not cover stale wording with an overlay. MuPDF and Poppler renders were reviewed. At the comparison resolution, all 24 untouched pages and the areas outside the scoped edits on the four changed pages were pixel-identical. Text extraction with three independent readers confirmed the corrected labels. The revised PDF is 11,587,049 bytes, SHA256 `ac58cc418e605b7d6b001925fa0a82a0961c8cb861729d91bbd7d6a15832f941`.

## Claim provenance

| Website claim | Source / qualification |
| --- | --- |
| Michael Joseph Candra's team role | Michael clarified on 15 November 2026 that he was not formally the team leader. A3 p1 names Celine, Janice, Michelle and Michael as team members. Do not attribute a leadership title to Michael. |
| Michael's individual contributions | Confirmed by Michael on 15 November 2026: contributed to team ideation and proposed A2 ideas J, K and L; contributed to shared concept testing and prototype UI work; arranged meeting times outside class; helped with presentations; finalised slides and submission; conducted interviews individually in A1 and A2 and with teammates in A3; prepared participant tasks intended to approximate realistic reading situations. These duties are personal contributions within shared team research and design, not claims of sole authorship or proven real-world equivalence. |
| Team attribution for A2 | A teammate's 15 November message, relayed by Michael, described ideation, concept testing and prototype UI as work the members can include, and stated her own A2 ideas were A–D. Michael specifically confirmed J, K and L as his A2 ideas. The site credits those contributions without assigning sole ownership of team concept testing or prototype screens. |
| Michael's personal learning and presentation contribution | Confirmed by Michael on 15 November 2026: began unfamiliar with FigJam; learned about colour theory and interview technique; felt the A1 presentation was too template-led and disconnected from Goodreads; suggested using FigJam for A2 to explore presentation and colour beyond familiar templates. The team sought seniors' feedback and used OpenAI to brainstorm ideas, then developed the A2 and A3 presentations together. The website identifies a future working practice as an intention, not a past action. |
| 41 survey respondents; 6 interview participants | A1 pp5–7; A3 p3. Participants recruited through accessible networks; do not generalize to all Goodreads readers. |
| Discovery through friends/family 28/41, TikTok/Instagram 28/41, Goodreads 6/41 | A3 p4; Goodreads count also A1 p11. Multiple responses were allowed. |
| Research framing, interview/observation approach, and cross-platform participant journeys | A1 pp2,4–10. The five-step website diagram synthesizes A1 p9; P1 and P5 routes are shown separately so it does not imply every participant took the same path. |
| Saving did not necessarily help choosing | A1 p13: direct P3/P5 quotes. Attribute those quotes to anonymized participants. |
| 12 ideas; two scoring rounds; A vs E tested with 5 readers | A3 p3. A2 presentation slide 14 was reviewed directly in Chrome on 15 November 2026 and confirms five readers tried A, then E. |
| Selected ideas A + C + K; A score 11/12, K score 12/12 | A3 p7; also confirmed directly in A2 presentation slide 20 in Chrome on 15 November 2026. Michael explained on 15 November 2026 that four members each had up to three points, considering feasibility, wireframe design and expected effect from the concept explanation. Twelve is the combined maximum. This was a structured team judgement, not a participant score or a measured effectiveness result. Complementary choices were combined into one flow. No weighting formula beyond this explanation is asserted. |
| Save first; optional reason; picks without reasons; connected flow | A3 pp10–14. |
| Save → list → questions → three picks → decide | A3 p14; detailed walkthrough pp21–24. |
| Start reading moves the book to Currently Reading; Not now excludes it for 30 days; Remove removes it from Want to Read | A3 pp14,24–25. Prototype behavior, not a deployed Goodreads integration. |
| Five readers, ages 20–23; Zoom think-aloud; four tasks; 43-book prototype | A3 pp15–17. Session date shown as 7 November 2026. |
| Choice within 3 minutes 3/5 → 5/5; median choice time 148s → 88s; confidence 2.8 → 4.0 /5; ease 3.8 → 5.8 /7; reasons added 3/5 | A3 p18, with the user's data-status confirmation below. Preserve scale labels and the limited number of participants. |
| Save confirmation and clearer refresh/preference labels | A3 p20 describes proposed follow-up changes. Implementation and retesting are not established by the PDFs. |
| Palette, typography and reported accessibility checks | A3 p26. Team-reported checks, not independent accessibility certification. |

## Study results and iteration status

Michael confirmed on **14 and 15 November 2026** that the project data are actual results collected by the team. On 15 November he explicitly requested correction of the A3 document's inaccurate data-status labels. This clarification establishes the editorial basis for the website and corrected presentation. Numeric results and participant behaviours are retained; no additional sessions or outcomes are inferred.

The five-person study and possible familiarity/task-order effects (A3 p16) remain limitations. The results are prototype-study findings, not evidence of population-wide or production impact. Saving first and the connected flow belong to the tested design. Stronger save confirmation and clearer refresh/preference labels remain proposed follow-up work unless their implementation and retesting are separately established.

## Verification and attribution boundaries

- **A2 live file:** the original [Figma presentation](https://www.figma.com/design/sjcfOTEzGJTYfkeSn6JxTu/) was accessible in Chrome on 15 November 2026. Slide 14, "Idea testing", states that five readers from A1 tried idea A followed by E and that three of five picked A. Slide 20, "Selected direction", confirms A + C + K, scores of 11/12 for A and 12/12 for K, and three of five readers preferring A when choosing a next read. This supports the A3 recap's 3/5 figure over the earlier script's 4/5; the public A2 chapter now includes the directly verified 3/5 preference count and the fixed task order. This review covered those two slides, not every A2 frame or interaction.
- **A3 prototype:** supplied link: <https://www.figma.com/proto/zPU9X8697ZM5EA3bj2FdTb?node-id=5-2&starting-point-node-id=5%3A2>. Screenshots were extracted unchanged from the supplied A3 PDF. They are not independent proof that all current prototype interactions were tested.
- **Round 2:** the PDF marks the two changes as proposed and requiring validation. Its final shortlist screenshot still shows “Shuffle picks” and “Change answers.” Do not claim the new labels were implemented or that a second test occurred without additional evidence.
- **Individual contribution:** Michael's role and the specific duties recorded above are user-confirmed. Use first person for those contributions and team attribution for shared research/design/testing outcomes. Do not infer sole ownership of prototype screens or a formal leadership role.
- **Assignment requirements:** the [Notion assignment brief](https://crawling-hardcover-fc0.notion.site/Individual-Assignment-Case-Study-b3203c5be56382a79b20015e76bcec81) was accessed and reviewed in Chrome on 15 November 2026. It asks for an individual case study for a recruiter or design manager: introduce the problem, communicate the design process and reasoning, highlight individual contributions, use relevant visuals, and reflect on learnings, challenges, trade-offs and improvements. There is no minimum or maximum word count or required number of pages or screens; any accessible, easy-to-read format is allowed. The criteria are **Clarity & Communication**, **Content & Storytelling**, **Individual Perspective & Reflection**, and **Presentation & Craft**. This records the reviewed brief, not a grade or a claim of full rubric compliance. The requirement to highlight individual contributions does not establish duties absent from the project evidence.
- **Secondary sources:** competitor features, literature and public discussions shaped questions (Background pp2–4). They are not evidence of this team's participants' behavior. A1 p13's decorative meeting photo is not a photo of study participants.

## Screenshot provenance

`a2-decision-matrix.png` is an unmodified 3840 × 2160 PNG export of A2 slide 10, “Decision matrix”, from Figma node `18:184`. It was exported in the user’s signed-in Chrome session on 15 November 2026. The matrix shows all twelve ideas A–L against impact and effort; filled green identifies A, C and K as the selected direction, outlined green marks E as tested against A, and dashed borders mark I and J as saved for later. The visible image and accompanying text are taken directly from that frame.


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

## Team photograph and thanks

On 15 November 2026, Michael supplied the group photograph `photo_2026-11-14 22.46.59.jpeg` and requested a special thank-you to Prof. Ice and his teammates. `assets/people/dv2008-team.jpeg` is an unchanged copy of that photograph, displayed at its full 4:3 proportions. The closing acknowledgment uses the confirmed team names Celine, Janice and Michelle, and the requested name Prof. Ice. No identities are assigned to positions in the image, and no specific occasion is claimed.

## Exact portfolio background

The fixed industrial-evolution background uses the actual CSS layers and JavaScript renderer fetched from https://michaeljc2605.github.io/ on 14 November 2026. Its six palettes, seeded particles, smoke, factory silhouettes, grid, network and stars follow the same full-document scroll progress. Content uses the final live rgba(10,11,18,0.68) overlay; the footer uses rgba(14,14,20,0.7). A missing/failed canvas-context guard preserves CSS palettes without canvas. Drawing-command and palette parity passed at 0%,20%,40%,60%,80%,100% scroll at widths390 and1440. The 15 November technical correction repairs animation scheduling on tab visibility changes without changing the scene or palette. Live desktop rendering and walkthrough interactions were reviewed on 15 November; browser verification of this revision is recorded with the revision checks.
