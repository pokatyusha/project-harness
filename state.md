# State

Updated: 2026-10-14 (Europe/Moscow)

## Week focus

Create the shared operating baseline: confirm scope, owners, and source locations for all five tracks. This is a draft focus pending owner confirmation.

## Tracks

| Track | Status | Nearest action | Plan / fact |
|---|---|---|---|
| PM | Context captured | Reconcile the Sprint 2 tracker snapshot as `done / in progress / blocked` | Plan: one E2E scenario and defence evidence. Fact: 15 task statuses, owners, and next actions are captured from chat but require live tracker verification; an evidence-review skill is available before sharing a report. |
| Direction 2.5 — CoreTeams Product Web | React-migration tooling mapped | Capture a v9 scenario and `localStorage` baseline before proposing the first React slice | Plan: preserve parity, then migrate an approved path incrementally with React, Playwright, and a final UI audit. Fact: PPS context card is READY; the current v9 client is standalone HTML/CSS/JS with local browser storage and separate demo API contours. Personal React best-practice, composition, UI-audit, and Playwright skills were installed on 2026-10-14; this runtime lacks `npx`, so React Doctor and Playwright setup are not yet execution-ready. |
| Video — CTF | Context captured | Confirm acceptance of the 30-second cut and whether it consumes a revision round | Plan: scenario → prompts → assembly. Fact: horizontal 3D/no-music brief and 75/30-second reported versions are recorded; 30-second acceptance is UNKNOWN. |
| Presentations | Design system ready | Build the 16-section source map from the supplied briefs and transcripts | Plan: outline → owner selects native animation or motion plan → design/motion brief → texts → evidence review. Fact: v3.2 was reportedly delivered; the later owner structure has priority, but exact slide count and source evidence are UNKNOWN; Knowledge Cat production QA, visual/motion, monetisation framing, and evidence-review skills are available before delivery. |
| Pilot users | Methods ready | Confirm research objective, target group, and consent process | Plan: desk research → segment/Job Story → journey or concept test → candidate list → outreach draft → interviews → findings. Fact: desk research, segmentation/JTBD, design-thinking, and journey-to-backlog skills are available; no contacts or research brief is recorded. |

## Blockers

- YouGile is connected to the common backlog; live Sprint 2 task reconciliation has not yet been run.
- Obsidian vault path and ownership map have not yet been supplied.
- PPS working tree contains local modifications and untracked files; source work is blocked pending confirmation of the canonical state and an explicit owner request.
- Video: acceptance of the 30-second cut and its effect on the three revision rounds are unconfirmed.
- Presentations: the requested section sequence has ambiguous numbering and the referenced briefs/transcripts have not yet been reviewed.
- PM: E2E readiness, task statuses, and the Integration Owner are not verified against the tracker or current branches.

## Harness maturity

L2 — concise rules, reusable workflows, and a repeatable local pass/fail verifier are present. Hooks and CI are deliberately deferred until a concrete recurring need appears.

## Parallel work

No task worktrees are active. A worktree is permitted only for a task that passes `workflows/worktree.md`; its plan/fact record must use `templates/parallel-task.md`.

## Project-local skills

The project-local skill source is `.agents/skills/`. `project-skill-authoring` is active to capture and package proven practices. Eight owner-requested, source-derived skills support PM, Direction 2.5, presentations, and pilot research; their allocation and the scoped Founder methods are in `orchestrator/skill-map.md`.

## Multi-project orchestrator

Four read-only slots are configured in `orchestrator/projects.toml`. `project-01` (PPS) is mapped and ready for read-only context collection; the other three remain intentionally unmapped.

## OpenSpec

OpenSpec is initialized in this harness with the `spec-driven` schema. Its workflow is reserved for durable changes to the harness or a mapped product project; PPS is not initialized and the other three source-project slots remain pending a real root. Target phrases are in `orchestrator/interaction.md`.

## Session log

- 2026-10-13: initialized the separate repository `project-harness`, registered the supplied project repository, and pushed the harness to `https://github.com/pokatyusha/project-harness` (`main`).
- 2026-10-13: applied the supplied harness guidance: normalized the agent entry point to `AGENTS.md` and added the local verifier; the verifier passed.
- 2026-10-13: applied the worktree guidance as a parallel-work gate; no additional worktree was created because no eligible task has been selected.
- 2026-10-14: added a project-local skill authoring workflow and canvas; the structure is ready to retain proven practices across sessions.
- 2026-10-14: configured the multi-project orchestrator structure, collection prompts, and file-retrieval map; no source project has been read.
- 2026-10-14: initialized OpenSpec in `project-harness`, configured its safeguards, and added the owner interaction protocol; no external project was initialized because its local root is unknown.
- 2026-10-14: mapped PPS — ПП Сбер — осень as `project-01` for Direction 2.5 at branch `PPS-2`; source context collection is pending.
- 2026-10-14: collected the first read-only PPS context card; the current React prototype is confirmed as a local simulation, while production integration requirements remain unconfirmed.
- 2026-10-14: stored a chat-sourced Video/Presentations context card; no media, presentation, or external project was changed.
- 2026-10-14: stored a chat-sourced PM context card with the Sprint 2 E2E target and task snapshot; no tracker, branch, or external team member was changed.
- 2026-10-14: verified the active YouGile board and CoreTeams GitHub repository through their plugins; made plugin routing mandatory for planning/context and repository work.
- 2026-10-14: reviewed the three newest owner-provided learning decks and distilled their methods into two pilot-user skills and one Direction 2.5 specification-readiness skill; no source deck or local source path was copied into Git.
- 2026-10-14: reviewed owner-provided HTML learning materials and Job Story examples; added design experiment, journey-to-backlog, monetisation-unit, and evidence-artifact-review skills, expanded B2B segmentation, and mapped the already-available Founder skills with explicit simulation and financial-evidence boundaries.
- 2026-10-14: added a presentation visual-design and motion skill using the owner-provided dark token system as an inspiration-only adaptation; it includes an accessible slide scale and an honest native-motion handoff boundary.
- 2026-10-14: installed the personal `knowledge-cat-ppt-skill` and added an orchestrator choice for each concrete deck: verified native PowerPoint animation or a motion plan with static reading order.
- 2026-10-14: installed personal React best-practice, component-composition, web-design-audit, and Playwright skills; added a staged static-to-React routing for Direction 2.5. React Doctor installation and browser-test setup are pending a Node/npm-capable runtime.
