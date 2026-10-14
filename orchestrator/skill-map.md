# Skill allocation by track

| Track | Project-local skills | Supporting workflow / capability | Current use boundary |
|---|---|---|---|
| PM | `evidence-artifact-review` | `workflows/pm.md`, YouGile | Review material claims before sharing; work from verified tracker data and do not infer live task status. |
| Direction 2.5 — CoreTeams Product Web | `coreteams-web-development`, `multi-project-context`; when explicitly needed: `design-thinking-experiment`, `journey-evidence-to-backlog`, `monetization-unit-model`, `direction-2-5-spec-readiness`, OpenSpec skills; personal `react-best-practices`, `composition-patterns`, `web-design-guidelines`, `playwright-skill` | `workflows/direction-2.5.md`, GitHub, YouGile | Default to a bounded web build, fix, refactor, test, or UI review. For static-to-React, protect scenario/storage parity first, add components under React best practices, test in Playwright, then audit UI. Research/specification is explicit or blocker-driven. `react-doctor` is deferred until Node/npm are available. Source-project edits need separate authorization. |
| Video — CTF | No source-derived skill yet | `workflows/video.md` | Retain the agreed brief and seek approval before rendering or publishing. |
| Presentations | `presentation-visual-motion`, `monetization-unit-model`, `evidence-artifact-review` | `workflows/presentations.md`, `knowledge-cat-ppt-skill`, Presentations capability | Build only from reviewed source evidence and the approved defence structure; choose native PowerPoint animation or a motion plan before production; use the dark token system as inspiration, never as a copied site design. |
| Pilot users | `pilot-desk-research`, `pilot-segmentation-jtbd`, `pilot-barrier-discovery`, `design-thinking-experiment`, `pilot-evidence-synthesis`, `journey-evidence-to-backlog` | `workflows/pilot-users.md`, `templates/pilot-sprint-hypothesis-check.md` | In every sprint, test at least one product hypothesis with users and record its result or `NOT_RUN`. Separate real past interaction from counterfactual expectation; contacts and invitations require owner confirmation. |
| Cross-project context | `multi-project-context` | `orchestrator/` retrieval prompts | Read mapped source folders only after the GitHub check and only as configured. |

## Source-derived skill record

Owner-provided learning materials were reviewed on 2026-10-14. Their methods were distilled into the project-local skills above; the source files, their full text, images, and local locations are not copied to this repository. `Цифровой_бизнес_и_модели_монетизации_3.html` and `_4.html` are byte-identical and are treated as one source.

The owner-provided presentation visual reference and token set are retained only as a compact design adaptation in `presentation-visual-motion`; no third-party brand assets or layouts are copied.

`knowledge-cat-ppt-skill` is installed in the owner's personal Codex skills. It selects the production lane and QA workflow; `presentation-visual-motion` remains the project-specific design and animation layer.

The owner-approved aggregate pilot-research synthesis is in `orchestrator/context/pilot-research-2026-10-14.md`. It records the canonical v10 defence, survey limitations, and customer-method boundary without raw participant data, contacts, or source-file locations.

## Founder-skill allocation

The public [Founder skill](https://github.com/Jakeschincariol/founder-skill) is already available in this environment as `founder-*` skills; it is not copied or installed again.

| Need | Available Founder skills | Boundary |
|---|---|---|
| Direction 2.5 market or model exploration | `founder-board`, `founder-competitors`, `founder-pricing`, `founder-cfo` | Use only for an explicit product or monetisation question and only with supplied or publicly verifiable inputs. It does not establish CoreTeams facts. |
| Pilot research preparation | `founder-consumer` | Simulated buyers may surface hypotheses and objections; they never replace consented interviews or validate demand. |
| Business narrative for a defence | `founder-plan` | Use as an input to a business-model section, not as an academic or financial verdict. |
| Go-to-market work | `founder-offer`, `founder-marketing`, `founder-brand`, `founder-ops`, `founder-launch` | Keep inactive unless the owner explicitly opens a real product-launch question. |

## Allocation rule

Load the narrowest matching skill for the requested work. A deck or simulated founder method that only supports a method is not evidence for CoreTeams product facts, pilot-user findings, demand, or a completed deliverable.
