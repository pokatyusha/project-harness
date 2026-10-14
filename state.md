# State

Updated: 2026-10-14 (Europe/Moscow)

## Week focus

Create the shared operating baseline: confirm scope, owners, and source locations for all five tracks. This is a draft focus pending owner confirmation.

## Tracks

| Track | Status | Nearest action | Plan / fact |
|---|---|---|---|
| PM | Context captured | Reconcile the Sprint 2 tracker snapshot as `done / in progress / blocked` | Plan: one E2E scenario and defence evidence. Fact: 15 task statuses, owners, and next actions are captured from chat but require live tracker verification; an evidence-review skill is available before sharing a report. |
| Direction 2.5 — CoreTeams Product Web | React-migration tooling mapped | Capture a v9 scenario and `localStorage` baseline before proposing the first React slice | Plan: preserve parity, then migrate an approved path incrementally with React, Playwright, and a final UI audit. Fact: PPS context card is READY; the current v9 client is standalone HTML/CSS/JS with local browser storage and separate demo API contours. Personal React best-practice, composition, UI-audit, and Playwright skills were installed on 2026-10-14; this runtime lacks `npx`, so React Doctor and Playwright setup are not yet execution-ready. Tracker task `PPS-185` is in the Epic 2.5 backlog. |
| Video — CTF | Iteration package prepared | Owner reviews the 30-second baseline: `accept` / `revise`, revision-round accounting, and target viewer | Plan: scenario → prompts → assembly. Fact: horizontal 3D/no-music brief and 75/30-second reported versions are recorded; the current review baseline is the 30-second cut, acceptance is UNKNOWN; planning package is `video/ctf-iteration-2026-10-14.md`. |
| Presentations | Latest defence registered | Create the v10 source map before a further revision | Plan: outline → owner selects native animation or motion plan → design/motion brief → texts → evidence review. Fact: the owner confirmed `CoreTeams-по-структуре-2026-10-02-v10.pptx` as the canonical latest defence; no production change was made. |
| Pilot users | Sprint validation planned | Owner selects a first proto-segment, approves recruitment and consent wording, then run the real-case route | Plan: three proto-segments are defined by job context: reconcile conflicting evidence, assemble fragmented materials, or make reviewable progress without timely expert access. The current Sprint 2 hypothesis check remains focused on synthesis/validation barriers; 5–7 consented interviews, with five eligible real-case reconstructions needed for a decision. Counterfactual answers are separated and cannot confirm it. Fact: the owner-approved aggregate research synthesis, real-versus-counterfactual interview method, and response-synthesis method are recorded; no contacts or raw participant responses are stored. Live YouGile query on 2026-10-14 found no identified pilot-research task. |

## Blockers

- YouGile is connected to the common backlog; live Sprint 2 task reconciliation has not yet been run.
- Obsidian vault path and ownership map have not yet been supplied.
- PPS working tree contains local modifications and untracked files; source work is blocked pending confirmation of the canonical state and an explicit owner request.
- Video: acceptance of the 30-second cut and its effect on the three revision rounds are unconfirmed.
- Pilot users: recruitment and consent wording require owner approval; no user check may be claimed before consented real-case sessions are run and synthesised.
- PM: E2E readiness, task statuses, and the Integration Owner are not verified against the tracker or current branches.

## Harness maturity

L2 — concise rules, reusable workflows, and a repeatable local pass/fail verifier are present. Hooks and CI are deliberately deferred until a concrete recurring need appears.

## Parallel work

No task worktrees are active. A worktree is permitted only for a task that passes `workflows/worktree.md`; its plan/fact record must use `templates/parallel-task.md`.

## Project-local skills

The project-local skill source is `.agents/skills/`. `project-skill-authoring` is active to capture and package proven practices. Ten owner-requested, source-derived skills support PM, Direction 2.5, presentations, and pilot research; their allocation and the scoped Founder methods are in `orchestrator/skill-map.md`.

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
- 2026-10-14: after owner confirmation, created YouGile tasks `PPS-180` through `PPS-186` for shared team harness work and skills by track. `PPS-180` and `PPS-181` are assigned to Екатерина Поварнина; `PPS-180` is marked in its description for the next sprint because the tracker has no separate next-sprint container.
- 2026-10-14: with owner approval, published an aggregate pilot-research synthesis only: the v10 defence is canonical, the form remains an aggregate and limited source, and every sprint must include a user check for at least one product hypothesis. Added focused discovery and synthesis skills; no participant identifiers, contacts, or raw responses were copied.
- 2026-10-14: added `Agent.md`, an owner-facing launch guide for opening `project-harness` as the primary local Codex project and switching among the five tracks; no external system was changed.
- 2026-10-14: fixed the reported CTF video baseline as the unaccepted 30-second cut and prepared a planning-only 30-second scenario, generation prompts, assembly plan, and approval gates; no media was rendered, overwritten, or published.
- 2026-10-14: planned the Sprint 2 pilot hypothesis check in `pilot-sprint-hypothesis-check-2026-10-14.md`: a recent real-task route tests synthesis/validation barriers, while ideal-flow questions remain counterfactual. YouGile reconciliation was unavailable because no authenticated tab was open; no contacts were sought and no outreach was sent.
- 2026-10-14: defined three unvalidated pilot proto-segments and their Job Stories in `pilot-segments-2026-10-14.md`: the evidence reconciler, fragmented-context assembler, and expert-gap executor. The grouping is behaviour-and-context based; no contacts were sought and no outreach was sent.
