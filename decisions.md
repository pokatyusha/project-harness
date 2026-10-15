# Decisions

## D-001 — Separate harness repository

- Date: 2026-10-13
- Status: active
- Decision: keep the operating context in a standalone repository named `project-harness`, not inside `PP-Sber-Autumn-2026`.
- Rationale: separates cross-functional planning and research artefacts from product code while retaining explicit registry links.
- Owner: project owner

## D-002 — Authoritative sources

- Date: 2026-10-13
- Status: active
- Decision: repository files and Obsidian are sources of truth; chat is a communication channel.
- Rationale: supplied operating rule.
- Owner: project owner

## D-003 — Incremental harness controls

- Date: 2026-10-13
- Status: active
- Decision: use a concise `AGENTS.md` entry point and a deterministic local verifier before adding hooks or CI.
- Rationale: the harness now needs rules and a clear pass/fail check; no recurring failure yet justifies more automation.
- Owner: project owner

## D-004 — Gate parallel work before creating a worktree

- Date: 2026-10-13
- Status: active
- Decision: create a task worktree only after independence, Definition of Done, checks, merge ownership, and cleanup have been recorded.
- Rationale: parallelism increases throughput only when it does not create hidden dependencies, stale branches, or unchecked merges.
- Owner: project owner

## D-005 — Package skills from proven project practice

- Date: 2026-10-14
- Status: active
- Decision: maintain project-local skills in `.agents/skills/`; capture a practice after its first and second use and package it on the third repeat, unless the owner explicitly requests earlier packaging.
- Rationale: retains reusable operating knowledge without filling the repository with speculative or overly broad skills.
- Owner: project owner

## D-006 — Four read-only project context slots

- Date: 2026-10-14
- Status: active
- Decision: configure four explicit project slots in `orchestrator/projects.toml`; collect source-project context only after the owner maps an absolute root and marks the slot ready.
- Rationale: supports cross-project planning while preventing invented paths, accidental source-project writes, and uncontrolled context collection.
- Owner: project owner

## D-007 — OpenSpec for durable change planning

- Date: 2026-10-14
- Status: active
- Decision: use OpenSpec's `spec-driven` workflow for durable changes to `project-harness` and, after mapping and explicit owner authorization, to source projects; initialize it separately in each mapped source project rather than sharing a mutable cross-project change directory.
- Rationale: provides a reviewable boundary between discovery, specification, implementation, verification, and archival without bypassing the four-project read-only policy.
- Owner: project owner

## D-008 — Preserve video versions and gate final rendering

- Date: 2026-10-14
- Status: active
- Decision: preserve existing media versions; use 720p/24 fps for draft renders and render 1080p/30 fps only after the owner approves the content.
- Rationale: the chat context records deferred video revision and three bounded revision rounds; version preservation prevents loss of a reviewable baseline.
- Owner: project owner

## D-009 — Latest owner presentation structure takes precedence

- Date: 2026-10-14
- Status: active
- Decision: use the latest owner-specified sequence as the target structure for the next CoreTeams presentation revision; do not infer its exact slide count until confirmed.
- Rationale: the earlier v3.2 deck was reportedly delivered before a later, stricter sequence was supplied.
- Owner: project owner

## D-010 — Sprint 2 is governed by one evidence-backed E2E path

- Date: 2026-10-14
- Status: active
- Decision: prioritise one CoreTeams path from web through gateway, runner/CTF, storage, and back to web over expansion of isolated features; if it is incomplete, report the actual blocker and next step at defence.
- Rationale: the supplied PM context identifies the full user path, not disconnected prototypes, as the Sprint 2 outcome.
- Owner: project owner

## D-011 — Mainline delivery uses reviewed squash merges

- Date: 2026-10-14
- Status: active
- Decision: keep `master` as the main branch and merge work through feature branch → PR → review → squash.
- Rationale: supplied PM context records this as the agreed collaboration workflow.
- Owner: project owner

## D-012 — Sprint 2 runtime boundaries

- Date: 2026-10-14
- Status: active
- Decision: treat React as the target working UI, do not use the runner container as permanent user storage, use VPS/IP for the initial test contour, and defer Open WebUI own/hybrid research beyond the current E2E milestone.
- Rationale: retains the operational boundaries needed to complete and honestly demonstrate the first integration path.
- Owner: project owner

## D-013 — PM ownership and durable records

- Date: 2026-10-14
- Status: active
- Decision: assign each executable task one primary owner, record shared work as a dependency, and keep project context and markdown decisions in Wiki/Git.
- Rationale: enables an auditable plan/fact view without dispersing authoritative information across chat messages.
- Owner: project owner

## D-014 — Mandatory YouGile and GitHub plugin routing

- Date: 2026-10-14
- Status: active
- Decision: launch YouGile before planning, task, report, or project-context work; launch GitHub before accessing repository facts or the CoreTeams source repository; record every verified change to agent behaviour in `project-harness`.
- Rationale: makes live tracker and repository evidence the starting point for agent work while keeping durable operating rules versioned in the harness.
- Owner: project owner

## D-015 — Allocate source-derived methods by delivery track

- Date: 2026-10-14
- Status: active
- Decision: package the methods from the three newest owner-provided learning decks as narrowly scoped project-local skills: desk research and segmentation/JTBD for Pilot users, and specification readiness for Direction 2.5. Do not copy the decks or treat them as evidence of project facts.
- Rationale: the methods are reusable and owner-requested, while the decks are learning material rather than a project source of truth.
- Owner: project owner

## D-016 — Extend skill allocation with evidence, journey, and experiment methods

- Date: 2026-10-14
- Status: active
- Decision: add project-local skills for evidence-artifact review, a bounded design-thinking experiment, a journey-to-backlog handoff, and monetisation/unit framing. Allocate them respectively to PM/presentations, Direction 2.5/Pilot users, Direction 2.5/Pilot users, and Direction 2.5/presentations. Reuse the already available Founder skills only for explicitly requested business questions and retain their simulation and input-data limits.
- Rationale: the owner supplied reusable methods that improve traceability from user evidence to product scope while avoiding a duplicate external skill installation or unsupported product claims.
- Owner: project owner

## D-017 — Presentation design uses an adapted dark token system

- Date: 2026-10-14
- Status: active
- Decision: use `presentation-visual-motion` for new defence-slide visual direction and motion planning. It adapts the owner-provided dark token system for projector-readable slides, keeps evidence editable, and treats the linked style reference as inspiration rather than a template or asset source.
- Rationale: establishes consistent visual hierarchy and purposeful animation without copying a third-party site or compromising readability.
- Owner: project owner

## D-018 — Owner selects animation delivery mode per concrete deck

- Date: 2026-10-14
- Status: active
- Decision: before building a concrete presentation, the owner chooses either native PowerPoint animation or a slide-by-slide motion plan. The agent may claim native animation only after verifying that the chosen output lane preserved it.
- Rationale: keeps the visual intent, deliverable format, and verification claim aligned; a motion plan remains useful when the production lane cannot reliably produce editable native animation.
- Owner: project owner

## D-019 — Staged skill routing for the CoreTeams React migration

- Date: 2026-10-14
- Status: active
- Decision: for a static-to-React change in Direction 2.5, preserve a scenario and `localStorage` baseline first; then use React best practices during implementation, composition patterns only for proven reusable boundaries, Playwright for scenario parity, and a web-design audit at the end. React Doctor remains conditional on a working Node/npm runtime.
- Rationale: the current v9 UI is a browser-local static implementation, so behavioural evidence must precede refactoring and the required tools should be used only in their narrow phase.
- Owner: project owner

## D-020 — Canonical v10 defence and sprint user-check cadence

- Date: 2026-10-14
- Status: active
- Decision: treat `CoreTeams-по-структуре-2026-10-02-v10.pptx` as the canonical latest defence. In every sprint, check at least one product hypothesis with users and retain the hypothesis, method, consent boundary, support/disconfirm rule, result or `NOT_RUN`, and resulting product decision.
- Rationale: the owner confirmed the latest deck and requires recurring user validation. A planned, imagined, or unrun check is not evidence that a product hypothesis was validated.
- Owner: project owner

## D-021 — Direction 2.5 defaults to CoreTeams web delivery

- Date: 2026-10-15
- Status: active
- Decision: make a bounded CoreTeams Product Web build, bug fix, refactor, test, or UI review the default outcome of `2.5:`. Product research, specification, monetisation, and OpenSpec work are used only on the owner's explicit request or when a documented uncertainty blocks the web change.
- Rationale: the owner needs this module to concentrate on web development and edits without turning every request into broad product discovery.
- Owner: project owner

## D-022 — Fixed CoreTeams defence sequence

- Date: 2026-10-15
- Status: active
- Decision: every CoreTeams defence follows the owner-approved 15-part sequence in `workflows/presentations.md`, from product title through team. The eighth part explicitly separates user findings, product hypotheses, and technical hypotheses under test; the ninth begins with a demo for the first persona.
- Rationale: gives every defence a stable narrative while preserving an honest boundary between verified results and planned validation.
- Owner: project owner

## D-023 — Bounded WEB handoff and role separation

- Date: 2026-10-15
- Status: active
- Decision: execute the owner-requested React/Vite/TypeScript WEB handoff in an isolated feature checkout, with four scoped agents and at most two active worker packages. Катя owns WEB/metrics; Илья integrates CTF; Арина designs storage; Филипп connects storage, CI and server; Дмитрий provides conditional React assistance only.
- Rationale: the five-hour frontend checkpoint and six-hour handoff precede team integration, server deployment and actual user E2E. Preserve the immutable clock in `orchestrator/launch-2026-10-15.md` and the owner's quota reserve.
- Owner: project owner

## D-024 — Defence draft output mode

- Date: 2026-10-15
- Status: active
- Decision: create one editable PPTX draft with a separate motion plan, following the canonical 15-part defence structure.
- Rationale: explicit owner choice for this concrete draft; user measurements remain pending until consented E2E results exist.
- Owner: project owner

## D-025 — Immutable CoreTeams identity and user-journey sprint focus

- Date: 2026-10-15
- Status: active
- Decision: retain exactly `CoreTeams — Рабочее пространство с AI-командой для сложных задач вне одной экспертизы` across modules. The current defence checks the user journey, not a renamed brief product. Prepare team tasks only after live Sprint2/ownership audit: Дмитрий gateway (PPS-169/170), Илья runner/CTF (PPS-137/138), Арина storage (PPS-167/136/135), Филипп infra (PPS-166/142). Conditional React help is additional, not Дмитрий's main role.
- Rationale: explicit owner clarification and current tracker evidence; avoid duplication or assigning work outside each person's direction.
- Owner: project owner

## D-026 — Retain v9.2 product journey and offer two WEB candidates

- Date: 2026-10-15
- Status: active
- Decision: preserve minimal A unchanged and build separate product B around the owner-supplied v9.2: explanation/example first, context/full input files, facilitator questions, participatory AI-role choice/plan, simplified Codex-like stage/artifact/version workspace. Show actual CTF consumption without product quotas; unknown values stay unknown. Offer A/B for team review through existing tracker records/Hub; no merge or deployment implied.
- Rationale: owner explicitly requires these functions and reports prior prototype praise. That qualitative report is not a measured UX superiority or validated user result. B frontend is implemented and tested; live CTF, file extraction, validated role assignment and server storage require team integration.
- Owner: Катя; technical contract reviewed by Дмитрий/Илья/Арина/Филипп.

## D-027 — Hide technical CTF mentions only after connection

- Date: 2026-10-15
- Status: active requirement; implementation deferred until real integration
- Decision: only after actual CTF connection, remove CTF-specific explanatory labels from the user-facing CoreTeams interface and use product-level wording. Until connection, retain existing preparation/unavailable warnings. Keep technical CTF identifiers and contracts in code/documentation; retain honest errors, unknown measurements and labelled examples after connection.
- Rationale: owner explicitly corrected the timing to «После подключения!». A configured API URL, fixture or local frontend is not proof of connection. No frontend copy changed in this session.
- Owner: project owner

## D-028 — Consented local journey measurements in React B

- Date: 2026-10-15
- Status: implemented and technically verified; real user measurements NOT_RUN
- Decision: add opt-in, locally persisted baseline/prototype/interface sessions to B, paired only by explicitly entered pseudonymous participant/task codes. Keep manual active/wait/pause classification, unknown recovery gaps, saved task-result selection, ratings, metadata-only events and private JSON/CSV export. Do not invent a server analytics sink or collect task/file/prompt/contact content. Do not treat fixture/UI-only/unfinished/interrupted runs as comparable result evidence.
- Rationale: owner explicitly requested journey collection for comparison with the current way of doing the same task after CTF connection. Local observation is immediately usable; real prototype evidence still requires integration/deployment and consent. Repeated-task learning prevents causal attribution.
- Evidence: source branch `codex/coreteams-v92-product-workspace-2026-10-15`, commit `213b4c4028ecc293c4b0913c563bf365ff7f43eb`;17 unit tests, build and extended desktop/mobile/fixture browser checks pass. A unchanged. Source published; this harness session record remains local pending separate context publication.
- Owner: Катя conducts research; gateway/storage team separately agrees any future server ingestion and retention.

## D-029 — Make baseline steps usable and keep server storage proposed

- Date: 2026-10-15
- Status: baseline journal/instructions implemented; server integration PROPOSED
- Decision: add an explicit manual baseline step journal (action/tool, timestamps, barrier/outcome, result format), inline distinction between baseline/interface/CoreTeams and private export handoff. Capture categories, not raw task text or external-app surveillance. Add per-step JSON/CSV export and retain v1-session compatibility. Server research storage is a separate proposed consented/authenticated/receipt-backed integration, not automatic upload under existing local consent.
- Evidence: published source98cc10a;19unit/type/build and full desktop/mobile/fixture suite pass. No server endpoint, participant data, tracker mutation or user E2E created. Local preview4192 rebuilt; A untouched. Harness record local-only.
- Rationale: owner correctly noted that the earlier baseline was only a timer/markers; asked how data would be analysed and whether it could join server storage. Today the researcher receives exports through an agreed private channel; future server ingestion requires explicit updated consent and an agreed storage/API/deletion contract.
- Owner: Катя; proposed storage/gateway/infra review by Арина/Дмитрий/Филипп, not a new assignment or sent message.

## D-030 — Explain outcomes without rewriting research history

- Date: 2026-10-15
- Status: implemented; source8ab6c2a published
- Decision: Russian outcome labels and missing-save reasons, separate elapsed time, diagnostic finish disclosure, explicit step/session outcomes and stop confirmation. Preserve original enum/data and never invent a save timestamp or promote an interrupted attempt to success.
- Evidence:20unit/type/build/fullbrowser/status-browser1440/390 pass. Authorized local diagnostic export was inspected privately; no actual participant IDs, journal contents or exports enter published documentation.
- Owner: project owner

## D-031 — Consolidate WEB handoff and review before merge

- Date: 2026-10-15
- Status: owner-authorized documentation/task reconciliation; external receipts tracked in state/registry
- Decision: consolidate current B/metrics/privacy/storage proposal and owner PR checklist, extend six existing cards rather than create migration duplicates, and explicitly delegate read-only PM/Git/evidence reviews. Do not merge, request external reviews, change deadlines/owners or start coupled backend implementations automatically.
- Rationale: owner requested full Wiki fixation and teammate/agent handoff. Live PPS-2 nowaa9bb424contains a Proposed Storage ADR; local base is stale and branch diverges. Required GitHub checks/approvals/merge method UNKNOWN. Reconcile one real contract and preserve ADR before integration.
- Evidence: `handoff/2026-10-15/web-transfer-wiki.md`, `owner-pr-merge.md`, `agent-dispatch.md`. Wiki read/list tools currently returnUnknown tool even after owner refresh; tasks remain accessible. Wiki update is not complete until write/readback succeeds.
- Owner: Катя; actual merge owner and agreed backend contract still to be named/confirmed.
