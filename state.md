# State

Updated: 2026-10-14 (Europe/Moscow)

## Week focus

Create the shared operating baseline: confirm scope, owners, and source locations for all five tracks. This is a draft focus pending owner confirmation.

## Tracks

| Track | Status | Nearest action | Plan / fact |
|---|---|---|---|
| PM | Setup | Confirm team, milestones, and reporting cadence | Plan: baseline. Fact: no team inputs recorded yet. |
| Direction 2.5 — CoreTeams Product Web | Baseline mapped | Confirm product priority and acceptance criteria against the specification package | Plan: map specifications, criteria, research. Fact: PPS context card is READY; current React runtime is a local simulation, not CTF/gateway/production integration. |
| Video — CTF | Setup | Obtain audience, duration, format, and source materials | Plan: scenario → prompts → assembly. Fact: brief not yet provided. |
| Presentations | Setup | Obtain defence date, rubric, and prior materials | Plan: outline and texts. Fact: requirements not yet provided. |
| Pilot users | Setup | Confirm research objective, target group, and consent process | Plan: list → outreach draft → interviews → findings. Fact: no contacts or research brief recorded. |

## Blockers

- YouGile tracker must be available to its connector before epics can be created and linked.
- Obsidian vault path and ownership map have not yet been supplied.
- PPS working tree contains local modifications and untracked files; source work is blocked pending confirmation of the canonical state and an explicit owner request.

## Harness maturity

L2 — concise rules, reusable workflows, and a repeatable local pass/fail verifier are present. Hooks and CI are deliberately deferred until a concrete recurring need appears.

## Parallel work

No task worktrees are active. A worktree is permitted only for a task that passes `workflows/worktree.md`; its plan/fact record must use `templates/parallel-task.md`.

## Project-local skills

The project-local skill source is `.agents/skills/`. `project-skill-authoring` is active to capture and package proven practices. No speculative operational skills have been created.

## Multi-project orchestrator

Four read-only slots are configured in `orchestrator/projects.toml`. `project-01` (PPS) is mapped and ready for read-only context collection; the other three remain intentionally unmapped.

## OpenSpec

OpenSpec is initialized in this harness with the `spec-driven` schema. Its workflow is reserved for durable changes to the harness or a mapped product project; each of the four source-project slots is marked `pending-initialization` until its real root is supplied. Target phrases are in `orchestrator/interaction.md`.

## Session log

- 2026-10-13: initialized the separate repository `project-harness`, registered the supplied project repository, and pushed the harness to `https://github.com/pokatyusha/project-harness` (`main`).
- 2026-10-13: applied the supplied harness guidance: normalized the agent entry point to `AGENTS.md` and added the local verifier; the verifier passed.
- 2026-10-13: applied the worktree guidance as a parallel-work gate; no additional worktree was created because no eligible task has been selected.
- 2026-10-14: added a project-local skill authoring workflow and canvas; the structure is ready to retain proven practices across sessions.
- 2026-10-14: configured the multi-project orchestrator structure, collection prompts, and file-retrieval map; no source project has been read.
- 2026-10-14: initialized OpenSpec in `project-harness`, configured its safeguards, and added the owner interaction protocol; no external project was initialized because its local root is unknown.
- 2026-10-14: mapped PPS — ПП Сбер — осень as `project-01` for Direction 2.5 at branch `PPS-2`; source context collection is pending.
- 2026-10-14: collected the first read-only PPS context card; the current React prototype is confirmed as a local simulation, while production integration requirements remain unconfirmed.
