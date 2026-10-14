# Chat context card — PM

- Source ID: pm-chat
- Track: PM
- Source: owner-provided context extracted from a Codex chat
- Retrieval time: 2026-10-14
- Status: READY (chat-sourced; tracker reconciliation required)

## Project card

The current Sprint 2 outcome is one demonstrable and evidence-backed CoreTeams E2E flow:

`web → gateway → runner / CTF → storage → web`

The expected user path is `create project → start → running → waiting_for_input → answer → running → artifact_saved → completed → download`. The protection against misleading evidence is explicit: if the whole path is not assembled, the defence must show plan/fact, evidence, blocker, and next action rather than present disconnected prototypes as an E2E product.

The snapshot names 15 Sprint 2 work items. Their `OPEN` / `DONE` values and workload counts are chat-state only and must not be treated as current tracker status.

## Evidence read

| Source | Relevant block | Why it matters |
|---|---|---|
| Owner-provided PM chat context | `Подтверждённые факты`; `Цель и ожидаемый результат` | Records the Sprint 2 E2E goal, expected state path, Git workflow, and defence evidence format. |
| Owner-provided PM chat context | `Текущие задачи и статусы` | Preserves a dated task/owner/action snapshot for later tracker reconciliation. |
| Owner-provided PM chat context | `Решения для фиксации` | Records delivery and operating decisions requiring durable tracking. |
| Owner-provided PM chat context | `Риски и блокеры`; `Неизвестное` | Separates known delivery risks from facts that require live verification. |

## Sprint 2 task snapshot

| Task | Chat status | Role / next action | Verification state |
|---|---|---|---|
| PPS-170 — gateway review and conflicts | OPEN | Complete review and agree gateway ↔ runner mapping | UNKNOWN |
| PPS-143 — `events v0` contract | OPEN | Fix a shared commands/events contract | UNKNOWN |
| PPS-142 — architecture and VPS deployment scheme | OPEN | Define runtime and service boundaries | UNKNOWN |
| PPS-144 — E2E case and expected artifact | OPEN | Fix one cross-team scenario | UNKNOWN |
| PPS-167 — storage interface and infrastructure handoff | OPEN | Hand off a concrete storage connection scheme | UNKNOWN |
| PPS-139 — onboarding to React workspace | OPEN | Move the working user flow to React | UNKNOWN |
| PPS-169 — gateway/runner and real event stream | OPEN | Connect without manual run start | UNKNOWN |
| PPS-137 — facilitator question and resume | OPEN | Pass question/answer through the same Run | UNKNOWN |
| PPS-136 — artifact save and restore | OPEN | Store a real artifact outside the runner container | UNKNOWN |
| PPS-165 — product events and path metrics | OPEN | Fix events and time-to-result | UNKNOWN |
| PPS-166 — CI/CD and VPS deploy | OPEN | Deploy a reproducible test contour | UNKNOWN |
| PPS-138 — first real E2E Run | OPEN | Exercise the full happy path | UNKNOWN |
| PPS-135 — project restoration after repeat login | OPEN | Check run/history/artifact restoration | UNKNOWN |
| PPS-164 — Sprint 2 defence package | OPEN | Assemble evidence and team status | UNKNOWN |
| PPS-141 — storage ADR | DONE | Use as implementation basis | UNKNOWN (not independently read) |

The deferred `Open WebUI own/hybrid` decision is not a Sprint 2 E2E blocker.

## Decisions, risks, dependencies, and unknowns

- D-010: one E2E path is the primary Sprint 2 outcome; feature expansion is secondary.
- D-011: `master` is the main branch; feature branch → PR → review → squash is the delivery path.
- D-012: React is the target working UI, runner storage is temporary only, and VPS/IP is sufficient for the initial test contour.
- D-013: each executable task has one primary owner; collaboration is a recorded dependency; durable markdown lives in Wiki/Git.
- R-012: gateway/runner/event contract, storage, deploy, and React migration jointly threaten a full E2E demonstration.
- R-013: a single Integration Owner is not named in the supplied context.
- R-014: chat task statuses and workload counts may be stale relative to the common backlog.
- UNKNOWN: live gateway-to-master integration, real E2E status, storage persistence, test deployment, React migration status, pilot activity, and defence-readiness evidence.

## File retrieval map

| Priority | Source | Question answered | Access status |
|---|---|---|---|
| High | YouGile board `Общий backlog и учебные спринты` | What are the actual `done / in progress / blocked` statuses for PPS-135 through PPS-170? | Requires authenticated active tab |
| High | Wiki page `Созвон 06.10 — план Спринта 2 к защите 16.10` | Which plan/fact commitments and owners were agreed for defence? | Not connected |
| High | PPS source repository, `master`, `demo-gateway`, and `romanov` branches | Is an integration path present in code or PRs? | Only PPS-2 folder is mapped; other branches not reviewed |
| Medium | Wiki pages PPS-156, PPS-157, PPS-159, PPS-160 | What are the current E2E criteria, architecture, PR changes, and risks? | Not connected |

## Refresh trigger

Refresh immediately after tracker reconciliation, branch/PR review, an integration test run, or a decision assigning the Integration Owner.
