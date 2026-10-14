# Required plugin routing

## YouGile — planning, tasks, reports, and project context

Launch the YouGile plugin before handling any request that changes or reports project planning, task status, a weekly plan, a PM report, a risk tied to a task, or current project context.

1. Start with a read-only operation: current UI state, board/project lookup, task query, or task details appropriate to the question.
2. Use the returned board and task data as the current status; label any unavailable or non-live evidence `STALE` or `UNKNOWN`.
3. Reconcile the affected `state.md`, `registry.md`, decisions, and risks only after reading the relevant YouGile evidence.
4. Before creating or changing a task, column, checklist, deadline, assignee, board, wiki page, or other YouGile record, show the exact target and obtain explicit owner confirmation.

Do not use a chat snapshot as a substitute for an available YouGile status. If the plugin is unavailable or unauthenticated, report `YOUGILE_UNAVAILABLE`; do not invent tracker facts.

## GitHub — repository facts and harness changes

Launch the GitHub plugin before accessing repository facts, branches, commits, pull requests, files, or permissions.

### `project-harness`

Every change that alters agent behaviour, instructions, workflows, templates, local skills, orchestration, OpenSpec configuration, or verification belongs in `project-harness`.

1. Use the GitHub plugin to verify the target repository and access.
2. Make targeted local edits, run `git diff --check` and `scripts/verify-harness.ps1`.
3. Commit the verified change and synchronize it to the `main` branch; use GitHub plugin evidence to confirm the remote target. A normal local Git commit/push may be used for atomic multi-file changes when the GitHub plugin does not expose an equivalent operation.
4. Before publishing chat-derived, internal, or other non-public project context, obtain separate owner permission for that specific publication.

### CoreTeams source repository

For every request that touches or reads `https://github.com/AcryCxde/PP-Sber-Autumn-2026.git`, start with the GitHub plugin: inspect the repository, then only the needed branch, PR, commit, or file. The mapped local source folder remains read-only and is accessed through `multi-project-context` only after this GitHub check. Source-project commits, pushes, pull requests, issue mutations, or other external changes require explicit owner confirmation.

## Current connected targets

- YouGile project `ПП Сбер - осень`, board `Общий backlog и учебные спринты`.
- `pokatyusha/project-harness`, branch `main`.
- `AcryCxde/PP-Sber-Autumn-2026`, default branch `master`; PPS working branch `PPS-2` is registered in `orchestrator/projects.toml`.
