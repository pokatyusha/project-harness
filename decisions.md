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
