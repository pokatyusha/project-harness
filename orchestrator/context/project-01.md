# Project context card

- Project ID: project-01
- Name: PPS — ПП Сбер — осень
- Absolute root: `C:\Users\Екатерина Поварнина\пары мага\PP-Sber-Autumn-2026`
- Repository / branch: `https://github.com/AcryCxde/PP-Sber-Autumn-2026.git` / `PPS-2`
- Retrieval time: 2026-10-14 03:08 +03:00
- Status: READY

## Project card

Direction 2.5 is a CoreTeams React/Vite web prototype (`web-demo`). Its demonstrated journey is: task → context → three clarifications → team → plan confirmation → workspace → revision and approval → result download. The present runtime is a local simulation backed by browser `localStorage`; the production gateway, CTF executor, authorization, cloud storage, and real server-side Run events are not connected.

The mapped checkout is on `PPS-2` at observed commit `8f57135` (2026-10-01). The working tree has local modifications and untracked files, so the current checkout may contain work not present in `origin/PPS-2`; it is not a safe target for unapproved writes.

## Evidence read

| Relative path | Heading / block | Why it matters |
|---|---|---|
| `README.md` | `React workspace и прототип эпика 2.5` | Identifies the current React prototype, specification package, and explicit absence of CTF and production authentication integration. |
| `web-demo/README.md` | `Текущий runtime UI`; `Граница gateway`; `Проверки`; `Ограничения демо` | Defines actual prototype behaviour, integration boundaries, required checks, and limitations. |
| `web-demo/epic-2.5-v3/README.md` | `Спецификации эпика 2.5: как читать пакет` | States that v3 materials are proposed/historical and must not be claimed as v9 implementation or customer acceptance. |
| `web-demo/ARCHITECTURE.md` | `React workspace`; `Связь со спецификациями`; `Граница доказательств` | Separates current React implementation from legacy demos and names the missing integration work. |
| `docs/OPENSPEC-PILOT-BASELINE.md` | `Status`; `Requirements`; `Acceptance checks for Sprint 2` | Supplies pilot baseline requirements, acceptance checks, and dependencies without claiming an implemented outcome. |
| `web-demo/package.json` | `scripts` | Names the project-local build, unit, format, and E2E verification commands. |

No `AGENTS.md` or `CLAUDE.md` was present in the collected manifest.

## File retrieval map

| Priority | Relative path | Question answered | Access status |
|---|---|---|---|
| High | `web-demo/epic-2.5-v3/СВОДКА-ЭПИК-2.5-ДОГОВОРЁННОСТИ.md` | Which product contracts and acceptance criteria need reconciliation with Direction 1? | Not read yet |
| High | `docs/PROJECT-CONTEXT.md` | What project-wide objectives, owners, and constraints govern Direction 2.5? | Not read yet |
| High | `docs/PILOT-INTERACTION-PLAN.md` | What pilot interaction sequence is planned and what remains pending? | Not read yet |
| Medium | `web-demo/src/adapters/gatewayClient.mjs` | Which API/WebSocket contract is already represented in the client? | Not read yet |
| Medium | `web-demo/src/config/scenarios.mjs` | Which Direction 2.5 scenarios and user-visible rules are implemented in the prototype? | Not read yet |
| Medium | `docs/S2-WEB-REACT-2026-10-12.md` | Which current migration and verification claims have evidence? | Not read yet |

## Decisions, risks, dependencies, and unknowns

- Decision D-006 governs this folder: source-project access is read-only until an explicit owner request authorizes source work.
- Risk R-009: the checkout has local changes and untracked files; source facts can diverge from the remote branch.
- Pilot baseline requires consent, safe pseudonymisation, an independent reviewer, a real CoreTeams run, and agreed event names across web, gateway, runner, and storage.
- UNKNOWN: product owner, current priority, confirmed acceptance criteria, production integration scope, and whether this source project should be initialized with OpenSpec.
- OpenSpec root: not present at collection time; no initialization was performed.

## Refresh trigger

Refresh before a specification proposal, an implementation request, a pilot-facing decision, a branch change, or any update to the listed source documents.

## Read-only functional comparison 2026-10-15

Partial refresh for the owner's question about post-CTF functions, previous UI and visual appearance. Read mapped local `web-demo/README.md` and `web-demo/ARCHITECTURE.md`; GitHub plugin verified the remote PPS-2 README and isolated feature `web-app/README.md`/`docs/integration.md`. Source delivery f6eff66 was inspected via `src/App.tsx`, `types.ts`, `api.ts`, `style.css` and its synthetic-result screenshot. Remote PPS-2 README still describes static v9 while the dirty local README describes the React migration; use the local React as the prior-interface baseline, without claiming those edits are remote.

The prior React UI has onboarding, three demo questions, team/plan, revisions, approvals and Markdown export. New `web-app` is an integration subset: browser drafts, context, proposed server project/run/answer/save/ZIP client, manual status refresh and explicit unavailable/error states. It does not preserve team builder, plan approval, revision history, attachments or prior-data import. CTF integration alone does not add these UI features or durable storage/cross-device recovery. Full comparison is a local deliverable registered in `registry.md`; no source code or tracker changed. No UX superiority or user result was established.
