# PM workflow

## Goal

Maintain a traceable plan, decomposition, statuses, risks, and plan/fact.

## Inputs

Team roster, milestones, decisions, YouGile task state, and repository changes.

## Procedure

1. Launch the YouGile plugin and read the relevant board, task, or status data.
2. Read the relevant track block in `state.md`.
3. Reconcile task status with YouGile; label data from chat or an unavailable tracker `STALE` or `UNKNOWN`.
4. Use `evidence-artifact-review` before sharing a status or plan/fact summary that contains material claims.
5. Add decisions and risks when they appear.
6. Update only affected plan/fact blocks.
7. Before assigning parallel work, apply the readiness gate in `workflows/worktree.md`.
8. Route each confirmed defect or incompatibility through `workflows/mismatches.md`: an approved bounded fix or a tracked follow-up with an owner and verification. Do not finish with an unowned findings list.

Before mutating YouGile, follow the owner-authority and connector-confirmation rules in `orchestrator/plugin-routing.md`. A direct request already confirmed for the same target/scope does not need a redundant question; unrelated mutations remain out of scope.

## Done

Every active item has an owner, acceptance criterion, next action, and tracker link. Parallel items additionally have a Definition of Done, merge owner, and cleanup condition.
