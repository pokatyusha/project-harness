# Worktree workflow

## Goal

Run genuinely independent implementation, review, hotfix, or experiment tasks without mixing their files or verification state.

## Readiness gate

Create a worktree only if every answer is yes:

- The task does not alter the same code or data as another active task.
- Acceptance criteria and the Definition of Done are written before work starts.
- The task is small enough for a short-lived branch; otherwise decompose it first.
- Required checks produce a clear pass/fail result.
- A merge owner and merge order are known.
- A cleanup condition is recorded.

If any answer is no, work sequentially or revise the task; do not create a parallel worktree.

## Procedure

1. Record the gate in `templates/parallel-task.md` and link its tracker item.
2. Create one branch and one worktree from the agreed base revision.
3. Work only in that worktree; do not share one checkout with another active agent.
4. Run the task's checks, commit the result, and open or update the GitHub PR.
5. Merge only through the agreed reviewer and merge order.
6. After a merged or abandoned task is clean and safely preserved, remove its worktree under the repository cleanup policy.

## Guardrails

- Never use a worktree to bypass review or checks.
- Do not parallelize coupled tasks, common test-environment work, or tasks without a clear DoD.
- Keep branches short-lived; rebase or merge from the agreed base as the team policy requires.
- Do not delete a worktree containing uncommitted work.

## Done

The merged result has passed checks, the tracker has plan/fact, and the worktree has a recorded cleanup outcome.
