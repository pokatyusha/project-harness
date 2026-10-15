# CoreTeams tracker task drafts — 2026-10-15

Status: five existing YouGile tasks were updated and verified after connection recovery. The original draft sections below remain instructions; the live audit table at the end supersedes their earlier unknown deadlines and proposed locations. No extra CTF/storage/deploy agent is configured and no duplicate task was created.

Before creating anything, search the live project `76b80f45-37fd-421d-b7a7-81091f788fdb`, board `46311a6f-425b-4adf-bf1d-d00e657a6cae` (“Общий backlog и учебные спринты”), and current Wiki for matching open tasks/pages. Merge into a matching task rather than duplicate it. The local harness already mentions `PPS-185` as a Direction 2.5 backlog item; its current scope and status could not be checked.

The owner and agent executor are separate fields below. Each draft has one human owner. Assignment is not acceptance, and publication is not completion. Record readiness only from the named artifacts and checks.

## 1. WEB delivery and metrics evidence

- Human owner: Катя
- Agent executor: WEB agent (isolated checkout `coreteams-web-handoff`)
- First action: review the WEB handoff materials and provide the acceptance decision / missing evidence by the WEB checkpoint, 2026-10-15 08:03 MSK.
- Inputs: `coreteams-web-handoff/docs/HANDOFF-WEB.md`; `coreteams-web-handoff/web-app/`; approved pilot package.
- Depends on: implementation evidence from WEB; Arina’s storage architecture for server persistence; Ilya’s CTF contract confirmation for backend compatibility.
- Target: WEB checkpoint 2026-10-15 08:03 MSK; final handoff checkpoint 09:03 MSK. These are coordination targets, not proof of completion.
- Outcome: reviewable React/Vite/TypeScript handoff with a clear `WEB_BUILD_READY` or explicit partial status, plus privacy-safe metrics definitions and unavailable-state disclosure.
- Acceptance checks:
  - identify the isolated branch/commit and draft PR, and link the code and handoff notes;
  - show typecheck/build and applicable unit/browser check evidence, or list each missing check;
  - document the implemented versus proposed versus approved API contract; do not treat the history/WebSocket demo gateway as proof of project/save endpoints;
  - show metrics as metadata-only and session-local unless a real collection endpoint is configured; no raw content, prompts, contacts, or participant data in telemetry;
  - distinguish `WEB_BUILD_READY`, `HANDOFF_READY`, `HANDOFF_ACCEPTED`, and `DEPLOYMENT_READY`.
- Completion checklist: reviewed artifacts linked; evidence recorded; unresolved contract questions named; no human acceptance inferred.

## 2. CTF result contract and skill adaptation

- Human owner: Илья
- Agent executor: none configured for CTF; Ilya performs integration outside the four project agents
- First action: compare the existing CTF input/output contract with `coreteams-pilot-result/SKILL.md` and list the smallest missing contract decisions for Katya to confirm.
- Inputs: `deliverables/pilot-2026-10-15/pilot-package.md`; `deliverables/pilot-2026-10-15/SKILL.md`; WEB API notes when available.
- Depends on: Katya’s contract confirmation and Arina’s storage boundaries. Does not depend on user recruitment.
- Target: handoff checkpoint 2026-10-15 09:03 MSK for a contract-gap list; integrated result by 2026-10-17 00:59 MSK (2026-10-16 23:59 Europe/Amsterdam), subject to dependencies.
- Outcome: an adapted CTF skill/contract that produces a source-traceable, privacy-safe result and archive, and marks missing evidence honestly.
- Acceptance checks:
  - cover complete sourced case, no-source case, counterfactual-only case, high-stakes gap, and metadata/privacy failure cases;
  - preserve result sections, source mapping, metadata, manifest/hash rules, and validation behavior from the existing skill;
  - distinguish unknown, not applicable, and zero; do not invent sources, participant facts, measurements, or expert review;
  - specify how API requests, save acknowledgment, ZIP export, and reopen behave only against confirmed contracts; keep unconfirmed endpoints proposed/disabled;
  - add positive/negative/repeat-event examples keyed by `event_id` and `input_revision`; a repeated event returns the existing output without duplicating a result or send action.
- Completion checklist: adapted skill linked; all five cases described; contract gaps answered or marked blocking; no user outreach or research implied.

## 3. Persistent storage architecture

- Human owner: Арина
- Agent executor: none configured for storage; Arina provides the architecture outside the four project agents
- First action: inspect the WEB persistence model and pilot package, then write the proposed server-storage boundary and unresolved decisions.
- Inputs: `coreteams-web-handoff/web-app/src/storage.ts`; `coreteams-web-handoff/web-app/src/api.ts`; `coreteams-web-handoff/docs/HANDOFF-WEB.md`; `deliverables/pilot-2026-10-15/pilot-package.md`.
- Depends on: WEB request/response proposals; CTF artifact contract from Ilya.
- Target: handoff checkpoint 2026-10-15 09:03 MSK for interface and blockers; final package target 2026-10-17 00:59 MSK, subject to owner review.
- Outcome: a reviewable architecture decision for durable project/run/artifact storage and pilot access; this is not an implementation or proof that storage is connected.
- Acceptance checks:
  - define project, run, artifact, and version ownership and the authorization boundary;
  - specify create/start/clarification/answer/save/ZIP/reopen contracts, idempotency, correlation IDs, retries, timeout/unknown outcome behavior, and error states;
  - state where data lives, retention/deletion expectations, access control, and which fields must never enter logs/metrics;
  - identify the test environment and the evidence required to claim persistent storage is connected;
  - label every interface as implemented, proposed, or approved and list decisions requiring owner confirmation.
- Completion checklist: architecture note linked; open decisions named; no claim of connected storage or deployment readiness without E2E evidence.

## 4. CI for the isolated React handoff

- Human owner: Филипп
- Agent executor: none configured for CI/deploy; Filipp performs this work
- First action: inspect the live task for any exact CI deadline; if none is available, agree the target with the owner before setting a tracker deadline.
- Inputs: isolated `coreteams-web-handoff/web-app/` branch, package manifest and lockfile, WEB handoff checklist.
- Depends on: stable WEB branch and reproducible local commands.
- Target: coordinate with Filipp’s reported Friday 2026-10-16 guidance; exact time is unknown here and must come from the live task. Do not invent a time.
- Outcome: repeatable CI checks for the handoff branch with logs attached to the task/PR.
- Acceptance checks: clean install from lockfile; typecheck; production build; relevant unit tests; browser/E2E check if the runtime supports it; failures visible and actionable; no secrets or private pilot data in logs.
- Completion checklist: workflow and run linked; checks pass or each blocker is recorded; no merge/deploy implied.

## 5. Deployment candidate and readiness evidence

- Human owner: Филипп
- Agent executor: none configured for CI/deploy; Filipp performs this work
- First action: read the live task and capture its exact target/deadline and deployment environment; the currently available planning note gives Friday 2026-10-16 only, without a verified time.
- Inputs: WEB build/CI evidence; Arina’s approved storage boundary; Ilya’s confirmed CTF contract; pilot environment requirements.
- Depends on: CI pass; a real server candidate; connected persistent storage; privacy-safe access route.
- Target: Friday 2026-10-16 guidance only; exact time remains unresolved pending live task evidence. The final requested overall result is 2026-10-17 00:59 MSK, but that is not substituted as Filipp’s deadline.
- Outcome: a deployment candidate and a truthful readiness record.
- Acceptance checks: environment/version and access path recorded; test account and privacy-safe input route work; server responds to the confirmed contract; technical E2E covers create → run/clarification → result → explicit save acknowledgment → ZIP → reopen; errors and known limitations are visible; evidence is linked.
- Completion checklist: mark `DEPLOYMENT_READY` only when the full gate passes; otherwise report partial/blocker and evidence. No participant session is implied.

## 6. Connect storage and prepare pilot access

- Human owner: Филипп
- Agent executor: none configured for CI/deploy; Filipp performs this work
- First action: verify the live task scope and deadline, then agree the test environment and access procedure with Arina.
- Inputs: Arina’s architecture decision; approved API contract; deployment candidate; privacy-safe pilot package.
- Depends on: tasks 2, 3, and 5; explicit test credentials/access path supplied through an approved private channel.
- Target: before the relevant live Filipp deadline (currently only Friday 2026-10-16 is known; exact time unresolved). User-results deadline remains 2026-10-17 00:59 MSK.
- Outcome: connected persistent storage and a controlled test route usable for a technical E2E; this is not participant recruitment or outreach.
- Acceptance checks: test project persists across reload/reopen; server save acknowledgment matches stored artifact/version; ZIP retrieves the saved artifact; authorization boundaries and failure states are checked; no participant identifiers or raw response data are copied into the tracker/wiki; access credentials stay out of task text and logs.
- Completion checklist: link E2E evidence and access owner; `DEPLOYMENT_READY` only if the full gate passes; no claim of user results.

## 7. Conditional React help (do not activate yet)

- Human owner if triggered: Дмитрий
- Agent executor: WEB coordinates; Dmitry supplies human assistance after the activation condition
- Activation condition: Катя identifies a concrete reproducible frontend blocker and explicitly requests help; include the minimal reproduction and the remaining WEB deadline.
- First action after activation: reproduce the named issue in the isolated WEB checkout and propose one bounded fix.
- Inputs/dependencies: the specific issue, branch/commit, reproduction steps, and Katya’s request.
- Target: only after activation; no deadline is set in this draft.
- Outcome: a narrow fix or a clear blocker report without expanding the WEB scope.
- Acceptance checks: issue reproduced; bounded change reviewed; relevant check evidence linked; no duplicate task if an existing WEB task can contain it.
- Completion checklist: leave this as a conditional draft unless and until the activation condition is met. Do not assign, notify, or mark active beforehand.

## Live YouGile audit — 2026-10-15

Project `ПП Сбер - осень` (`76b80f45-37fd-421d-b7a7-81091f788fdb`), common board `Общий backlog и учебные спринты` (`46311a6f-425b-4adf-bf1d-d00e657a6cae`), and Wiki board `d1ff2df0-83c5-4f8f-9727-57101b9fac64` were read. The following existing tasks match the requested work; update these records rather than creating duplicates:

| Task | Human owner / current state | Verified deadline after update (Europe/Moscow) | Applied update |
|---|---|---|---|
| PPS-139 — S2 Web: onboarding → React workspace | Катя; На ревью / демо | 2026-10-15 08:03:08 | Handoff evidence, contract status, dependencies, and pending publication link recorded. |
| PPS-165 — Product events and metrics | Катя; К взятию | 2026-10-15 09:03:08 | Metadata-only/session-local metric limits and integration dependencies recorded. |
| PPS-138 — S2 First real E2E Run | Илья; К взятию | 2026-10-15 18:00:02 (preserved) | CTF/result/save/ZIP contract checkpoint recorded for 09:03; current E2E deadline preserved. Agent executor: none configured. |
| PPS-167 — Storage interface + infra handoff | Арина; В работе | 2026-10-15 09:03:08 | Storage contract, decision evidence, and handoff dependency recorded. Agent executor: none configured. |
| PPS-166 — CI/CD + deploy common contour on VPS | Филипп; В работе | 2026-10-15 15:00:02 (preserved) | Storage connection, controlled technical access, E2E gate, and Friday-target discrepancy recorded. Agent executor: none configured. |

No separate conditional React-support task for Дмитрий was found among the relevant open tasks. Do not create, assign, activate, or notify him without Katya’s concrete blocker request. Current live assignments already match the named human owners; task descriptions can record `Agent executor` separately. Preserve current completion and board states.

One existing Wiki index is `CoreTeams — Project Hub для заказчика` (page `ab681161-45e0-4aa4-b34a-3ed006f6489a`); existing React evidence page is `S2 Web React workspace и результаты проверки` (page `47ec1805-8cf5-45e6-8cae-4ce789d41da1`). The hub was appended once with the handoff index; no duplicate page was created.

## Cross-task gates

`frontendReady` is evidence that the frontend package is buildable and reviewable. `handoffPartial` records missing mandatory inputs. `handoffAccepted` requires recipient acknowledgment. `DeploymentReady` requires real server execution, connected persistent storage, a candidate environment, and full technical E2E. `userResults` require a separate consenting participant, baseline before prototype, comparable task, and measured artifacts. None implies another.

No survey respondents are contacted by these drafts. The pilot package states that there is no confirmed eligible contact/consent and that the three sprint groupings are hypotheses, not validated segments.

## Role trigger check (current execution)

- `START-v1` → this PM package and the handoff index above.
- `VIDEO_REQUEST` → outside PM scope; no tracker or Wiki write.
- Repeated `START-v1` → return these existing drafts; create no duplicate tasks.
