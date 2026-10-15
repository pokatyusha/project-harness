# State

Updated: 2026-10-15 (Europe/Moscow)

## Week focus

Deliver the owner-requested WEB and integration package at the immutable checkpoints08:03/09:03MSK15October, then gate real CTF, storage, deployment and paired user results. Execution record: `orchestrator/launch-2026-10-15.md`; package: `handoff/2026-10-15/index.md`.

## Tracks

| Track | Status | Nearest action | Plan / fact |
|---|---|---|---|
| PM | Live handoff tasks updated | Obtain contract/storage acknowledgments from Илья and Арина, and resolve Филипп's deadline discrepancy | Fact: PPS-139/165/138/167/166 descriptions updated and verified, current owners/statuses retained; Project Hub updated. Филипп's actual task deadline15.10 15:00:02 is retained. Published package is partial; recipient acceptance is unknown. |
| Direction 2.5 — CoreTeams Product Web | Build verified; branch published | Create/review PR and confirm the proposed project API with Илья | Fact: separate React/Vite/TS `web-app/`, commit f6eff66, feature branch `codex/coreteams-react-handoff-2026-10-15`. Frozen install/typecheck/build,8unit and desktop/mobile/isolated-fixture browser checks passed. Backend unavailable by default; proposed adapter, session-only metrics, browser drafts. PR creation denied403 by GitHub integration, CLI absent. Original dirty PPS untouched. |
| Video — CTF | Iteration package prepared | Owner reviews the 30-second baseline: `accept` / `revise`, revision-round accounting, and target viewer | Plan: scenario → prompts → assembly. Fact: horizontal 3D/no-music brief and 75/30-second reported versions are recorded; the current review baseline is the 30-second cut, acceptance is UNKNOWN; planning package is `video/ctf-iteration-2026-10-14.md`. |
| Presentations | Editable draft verified | Update affected slides after actual integration and pilot evidence | Fact:15editable slides with notes/source map and separate motion plan in `handoff/2026-10-15/presentation/`. Render, re-import, structure/layout finalizer passed. User E2E results remain NOT_RUN. |
| Pilot users | Research and ZIP package ready | Recruit one eligible consenting solo owner and record baseline before showing the prototype | Fact: eight survey rows support one provisional solo-owner profile R02, with no contact/consent; contactable rows do not establish target eligibility. Three sprints are task hypotheses, not proven segments. Scenario, source-backed decision brief ZIP contract, product skill, messages, metrics and E2E checklist are in the handoff. Actual paired E2E NOT_RUN. Earlier v9.2 corridor session remains inconclusive and is not target-user E2E evidence. |

## Blockers

- YouGile live handoff tasks are reconciled; full Sprint2 reconciliation remains separate.
- Obsidian vault path and ownership map have not yet been supplied.
- Original PPS working tree remains dirty and untouched; isolated source feature work is authorised and published.
- Video: acceptance of the 30-second cut and its effect on the three revision rounds are unconfirmed.
- Pilot users: recruitment and consent wording require owner approval; no user check may be claimed before consented real-case sessions are run and synthesised.
- PM: named handoff task statuses are live-verified; overall Sprint2 reconciliation and a single Integration Owner remain unconfirmed. Actual E2E readiness is not established by tracker edits.
- Handoff: PR blocked by integration permissions; CTF contract approval and Арина's architecture are missing. Deployment and target recruitment remain prerequisites for user results.

## Harness maturity

L2 — concise rules, reusable workflows, and a repeatable local pass/fail verifier are present. Hooks and CI are deliberately deferred until a concrete recurring need appears.

## Parallel work

No task worktrees are active. A worktree is permitted only for a task that passes `workflows/worktree.md`; its plan/fact record must use `templates/parallel-task.md`.

## Project-local skills

The project-local skill source is `.agents/skills/`. `project-skill-authoring` captures proven practice. Owner-requested skills support PM, WEB, presentations and pilot research; `coreteams-pilot-result` now specifies the user ZIP and supplies a structural validator tested on isolated synthetic archives. Its adaptation into CTF remains Илья's responsibility. Allocation is in `orchestrator/skill-map.md`.

## Multi-project orchestrator

Four read-only slots are configured in `orchestrator/projects.toml`. `project-01` (PPS) is mapped and ready for read-only context collection; the other three remain intentionally unmapped.

## OpenSpec

OpenSpec is initialized in this harness with the `spec-driven` schema. Its workflow is reserved for durable changes to the harness or a mapped product project; PPS is not initialized and the other three source-project slots remain pending a real root. Target phrases are in `orchestrator/interaction.md`.

## Session log

- 2026-10-15: executed the owner-requested four-role launch, pause and explicit resume without resetting T0; published isolated React/Vite/TS commit f6eff66, verified8unit/build/browser checks, and generated the15-slide editable defence draft. Synced five existing YouGile tasks and the existing Hub. Handoff remains partial pending PR permissions, contracts/storage, recipient acceptance and target recruitment. Approved three-hour heartbeat `coreteams-e2e` is ACTIVE; budget remains account-wide with snapshot checks rather than a hard cutoff.
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
- 2026-10-14: prepared a planning-only corridor-test packet for the CoreTeams v9.2 first-use path in `Коридорное-тестирование-CoreTeams-v9.2-2026-10-14.md`: readiness checklist, neutral legend, tasks, observations, and analysis rules. No participants were identified or contacted.
- 2026-10-15: synthesised one aggregate CoreTeams v9.2 corridor-test session in `pilot-evidence-corridor-coreteams-v9.2-2026-10-14.md`. The session is inconclusive and cannot validate the sprint product hypothesis; it yielded a prioritised list for a separate follow-up usability check.
- 2026-10-15: prepared the planning-only UI change brief `Правки-веб-интерфейса-CoreTeams-v9.2-по-коридорному-тесту.md`, prioritising credits/limits, saved versions, first-screen clarity, input load, and the workspace hierarchy. No prototype source was edited.
- 2026-10-15: added `coreteams-web-development` and changed Direction 2.5 routing so `2.5:` defaults to bounded frontend development, fixes, tests, and UI review; research and specification now require an explicit request or a documented web-delivery blocker. No PPS source file or tracker task was changed.
- 2026-10-15: fixed the owner-approved 15-part CoreTeams defence sequence in the presentation workflow and agent instructions; no presentation was created or changed.
