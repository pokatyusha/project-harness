# State

Updated: 2026-10-13 (Europe/Moscow)

## Week focus

Create the shared operating baseline: confirm scope, owners, and source locations for all five tracks. This is a draft focus pending owner confirmation.

## Tracks

| Track | Status | Nearest action | Plan / fact |
|---|---|---|---|
| PM | Setup | Confirm team, milestones, and reporting cadence | Plan: baseline. Fact: no team inputs recorded yet. |
| Direction 2.5 — CoreTeams Product Web | Setup | Read existing project docs and confirm the expected outcome | Plan: map specifications, criteria, research. Fact: project repository linked; scope not yet extracted. |
| Video — CTF | Setup | Obtain audience, duration, format, and source materials | Plan: scenario → prompts → assembly. Fact: brief not yet provided. |
| Presentations | Setup | Obtain defence date, rubric, and prior materials | Plan: outline and texts. Fact: requirements not yet provided. |
| Pilot users | Setup | Confirm research objective, target group, and consent process | Plan: list → outreach draft → interviews → findings. Fact: no contacts or research brief recorded. |

## Blockers

- YouGile tracker must be available to its connector before epics can be created and linked.
- Obsidian vault path and ownership map have not yet been supplied.

## Harness maturity

L2 — concise rules, reusable workflows, and a repeatable local pass/fail verifier are present. Hooks and CI are deliberately deferred until a concrete recurring need appears.

## Parallel work

No task worktrees are active. A worktree is permitted only for a task that passes `workflows/worktree.md`; its plan/fact record must use `templates/parallel-task.md`.

## Project-local skills

The project-local skill source is `.agents/skills/`. `project-skill-authoring` is active to capture and package proven practices. No speculative operational skills have been created.

## Session log

- 2026-10-13: initialized the separate repository `project-harness`, registered the supplied project repository, and pushed the harness to `https://github.com/pokatyusha/project-harness` (`main`).
- 2026-10-13: applied the supplied harness guidance: normalized the agent entry point to `AGENTS.md` and added the local verifier; the verifier passed.
- 2026-10-13: applied the worktree guidance as a parallel-work gate; no additional worktree was created because no eligible task has been selected.
- 2026-10-14: added a project-local skill authoring workflow and canvas; the structure is ready to retain proven practices across sessions.
