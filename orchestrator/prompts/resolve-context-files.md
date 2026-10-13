# Prompt — targeted file retrieval plan

Replace the variables before use:

- `{{QUESTION}}` — the exact cross-project question.
- `{{PROJECT_IDS}}` — configured projects that may be relevant.
- `{{CONTEXT_INDEX}}` — normally `orchestrator/context-index.md`.

```text
You are planning a read-only, cross-project context retrieval.

Question: {{QUESTION}}
Candidate projects: {{PROJECT_IDS}}
Context index: {{CONTEXT_INDEX}}

1. Read the context index and the selected projects' context cards.
2. Select the smallest set of projects that can answer the question. If none is fresh enough, state which project needs refresh and why.
3. Return a retrieval plan, not an implementation, with one row per file or titled block:
   project ID | absolute root + relative path | heading/block | question answered | priority | access status.
4. Prefer rules, state, decisions, risks, specifications, and docs. Read code only if those sources cannot answer the question.
5. Exclude secrets, personal data, dependency folders, build outputs, and unrelated source trees.
6. Do not edit source projects, write external messages, create tasks, or make status claims without evidence.

Finish with one status: READY, REFRESH_REQUIRED, MAPPING_REQUIRED, or BLOCKED.
```
