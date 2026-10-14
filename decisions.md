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
