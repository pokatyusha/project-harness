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
