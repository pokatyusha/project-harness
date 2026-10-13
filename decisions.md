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
