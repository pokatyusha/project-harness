# PM workflow

## Goal

Maintain a traceable plan, decomposition, statuses, risks, and plan/fact.

## Inputs

Team roster, milestones, decisions, YouGile task state, and repository changes.

## Procedure

1. Launch the YouGile plugin and read the relevant board, task, or status data.
2. Read the relevant track block in `state.md`.
3. Reconcile task status with YouGile; label data from chat or an unavailable tracker `STALE` or `UNKNOWN`.
4. Add decisions and risks when they appear.
5. Update only affected plan/fact blocks.
6. Before assigning parallel work, apply the readiness gate in `workflows/worktree.md`.

Before mutating YouGile, obtain confirmation of the exact tasks and fields. See `orchestrator/plugin-routing.md`.

## Done

Every active item has an owner, acceptance criterion, next action, and tracker link. Parallel items additionally have a Definition of Done, merge owner, and cleanup condition.
