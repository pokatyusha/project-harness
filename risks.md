# Risks

| ID | Risk | Impact | Status | Mitigation / next action |
|---|---|---|---|---|
| R-001 | YouGile common backlog is reported as created, but the connector has no active authenticated tab | Live task status cannot be reconciled and missing epics cannot be created or linked | Open | Owner opens and keeps the supplied tracker tab logged in; reconcile Sprint 2 statuses before changing scope. |
| R-002 | Obsidian vault location is unknown | Knowledge base cannot be reconciled | Open | Owner supplies vault path or shared workspace. |
| R-003 | Track briefs, owners, and success criteria are not yet recorded | Weekly plan cannot be committed as plan/fact | Open | Confirm inputs during baseline review. |
| R-004 | Verification is local only | Repository quality controls are not enforced remotely | Open | Reassess a CI check after the workflow stabilizes or the first recurring verification failure. |
| R-005 | Parallel tasks may conflict or drift from the base branch | Merge cost rises and work may be duplicated | Open | Apply `workflows/worktree.md` before parallelizing; keep branches short-lived and checks explicit. |
| R-006 | Project skills may become stale or too broad | Agents apply the wrong procedure or ignore the skill | Open | Assign an owner and revision trigger in every skill; keep descriptions specific and validate frontmatter. |
| R-007 | Unmapped or stale source-project context | Cross-project planning may rely on missing or outdated facts | Open | Block collection until a root is mapped; mark each context card with retrieval time, uncertainty, and refresh trigger. |
| R-008 | OpenSpec workflow diverges between project folders | Plans or implementation checks may become inconsistent | Open | Keep the same `spec-driven` schema as the harness when each mapped project is initialized; record any justified deviation in `decisions.md`. |
| R-009 | PPS checkout on `PPS-2` contains local changes and untracked files | Context may differ from `origin/PPS-2`; unapproved work may be overwritten or misrepresented | Open | Treat the mapped folder as read-only; owner identifies the canonical state before any source-project change, OpenSpec initialization, commit, or push. |
| R-010 | Acceptance of the 30-second CoreTeams video and use of the three revision rounds are unknown | Further edits may use the wrong baseline or exceed an agreed review limit | Open | Owner confirms acceptance/rejection and whether shortening counts as a revision; retain all existing versions. |
| R-011 | Presentation structure has ambiguous numbering and its referenced briefs/transcripts have not been reviewed | Slide count, claims, and evidence could be misrepresented at defence | Open | Build a source map from the supplied documents; owner confirms slide count before production. |
| R-012 | Gateway/runner contract, storage, deploy, and React migration are not jointly verified as an E2E path | Defence may present disconnected prototypes instead of a real or honestly diagnosed end-to-end scenario | Open | Reconcile task status; run the defined E2E case; record evidence, blocker, and next step. |
| R-013 | No confirmed Integration Owner | Cross-team integration decisions and dependencies may remain unresolved | Open | Owner names one Integration Owner and records their authority and next integration checkpoint. |
| R-014 | Sprint 2 task statuses and workload counts come from a dated chat snapshot | PM plan/fact and defence status may be stale or inaccurate | Open | Reconcile PPS-135 through PPS-170 in the common backlog before reporting current status. |
