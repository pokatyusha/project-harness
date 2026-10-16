# Confirmed mismatch → fix or accountable task

## Goal

Every confirmed defect, contract mismatch or failed acceptance check leaves an executable next action. An audit report alone is not a completed handoff.

## Confirm before routing

1. Pin the observed source/version, expected behavior and actual evidence. Separate a reproduced defect from a proposed contract criterion or an unverified hypothesis.
2. Read the relevant tracker records and search for an existing matching issue. Reuse it rather than create duplicate work; preserve unrelated completed tasks.
3. Check whether the cause, intended behavior, write scope, existing implementation and acceptance test are known. Missing contract/architecture decisions are inputs to resolve, not permission to invent a replacement.

## Route A — bounded fix

- If enough information is available, name the affected files/behavior and proposed verification, then ask the owner to approve implementation. A direct owner instruction already approving that exact fix is sufficient; do not ask it twice.
- After approval, reuse existing code, make the smallest coherent change, and run the reproducer plus relevant regressions. Use an isolated worktree when the project's worktree gate applies.
- Keep remaining gaps explicit. Approval to fix is not approval to publish, create a PR, deploy, migrate production data or merge; use the separate gates for those actions.

## Route B — prompt tracker follow-up

- If the owner selects task routing, implementation is not approved, or a dependency prevents a safe fix, promptly create/update the matching task under the applicable owner authorization and connector confirmation rules.
- Use a known responsible person from the verified project scope. If ownership is genuinely unknown, request the missing choice; do not assign somebody merely to fill a field.
- Include: source/SHA, expected vs actual behavior, impact, minimal reproduction/test link, ordered steps, output artifact, acceptance checklist, dependencies/reviewers and the very next action.
- Apply an existing sprint flag when its basis is known. Preserve agreed dates; request an estimate instead of inventing a deadline or making another person's commitment.
- If behavior is disputed, make the first step an explicit contract decision and record the accepted criterion before code changes.
- Record the returned task ID and reread its content/owner/status. Assignment is not recipient acceptance or completion.

## Completion and safety

- End with one recorded route per finding: verified fix, assigned follow-up, or a precisely named missing input/permission. A declined or unavailable tracker write must be reported as pending, not claimed created.
- Update local plan/fact and registry links; record decisions and risks only when they change.
- Close a defect only with its agreed acceptance evidence. Do not hide a failing test, claim mock/local tests prove production readiness, or reopen a terminal product Run to make a check green.
- No merge, auto-merge, user outreach or sensitive-data publication is implied by this workflow.
