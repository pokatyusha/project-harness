# Agent rules

## Mission

Maintain project context and move five tracks forward: PM, Direction 2.5, video, presentations, and pilot users.

## First minute

- Active CoreTeams handoff: `orchestrator/launch-2026-10-15.md` and `handoff/2026-10-15/index.md`; restore T0 and readiness evidence before resuming. Its explicit owner execution request permits isolated WEB source work and named PM tracker/Wiki updates; retain the original dirty PPS checkout.
- Durable state: `state.md`, `registry.md`, `decisions.md`, `risks.md`, `metrics.md`, and `tokens.md`.
- Owner launch guide: `Agent.md`; it explains how to open this repository as the primary local Codex project without duplicating these instructions.
- Repeatable work: `workflows/`; reusable records: `templates/`.
- Project-local skills: `.agents/skills/`; load only a skill whose description matches the task.
- Skill allocation by track: `orchestrator/skill-map.md`; load its narrowest listed skill before the associated procedure.
- Multi-project configuration and retrieval prompts: `orchestrator/`.
- Required YouGile and GitHub plugin routing: `orchestrator/plugin-routing.md`.
- Change specifications: `openspec/`; use the target phrases in `orchestrator/interaction.md`.
- Read the relevant state block and one workflow before acting.
- Verify a completed change with the commands below, then record the fact, decision, or risk.

## Sources of truth

- Repository files and the team's Obsidian vault are authoritative.
- Chat is only a communication channel; durable work belongs in files.
- Read only the heading or block needed for a task. Do not re-summarize a file when a link is enough.

## Operating rules

- Make targeted edits: a line or a block, never a whole-document rewrite without a reason.
- Record every decision in `decisions.md`, every risk in `risks.md`, and plan/fact in `state.md`.
- Sync task status with YouGile and code/PR status with GitHub.
- Launch YouGile before planning, task, report, or project-context work; launch GitHub before repository or branch access. Follow `orchestrator/plugin-routing.md` for the permitted read/write sequence.
- Commit every verified agent-function change to `project-harness` and synchronize it to `main`; obtain owner permission before publishing chat-derived or other non-public project context.
- Do not send emails, invitations, publish content, or contact people without owner confirmation.
- In every sprint, check at least one product hypothesis with users. Record the hypothesis, method, consent boundary, decision rule, result or `NOT_RUN`, and resulting decision; never replace a missing user check with an inferred conclusion.
- Keep command output to errors and the useful tail.
- At session end, update `state.md` and `registry.md`.
- Before reporting a change as complete, run `git diff --check` and `scripts/verify-harness.ps1`.
- When the same operation has been used three times, package it as a focused workflow or skill with a clear input, output, and verification step.
- Capture the first and second use of a potential skill with `templates/skill-canvas.md`; do not create broad speculative skills.
- Keep secrets, passwords, API keys, and participant identifiers out of the repository.
- Parallel work requires a separate branch and worktree only after the task passes the readiness gate in `workflows/worktree.md`.
- Keep parallel tasks small; record their Definition of Done, checks, merge owner, and cleanup condition before starting.
- Retrieve context from project folders only through `.agents/skills/multi-project-context/SKILL.md`, after its required GitHub check and only after configured root paths are filled.
- Direction 2.5 defaults to `coreteams-web-development`: prioritise a bounded web build, bug fix, refactor, test, or UI review. Switch to product research, specification, hypothesis work, or OpenSpec only when the owner asks for it or a concrete web change cannot proceed without it.
- For every CoreTeams defence, use the owner-approved 15-part sequence in `workflows/presentations.md` unless the owner explicitly replaces it. Before building a concrete deck, ask the owner to choose native PowerPoint animation or a motion plan.
- Use OpenSpec for durable changes to the harness or a mapped product project: explore/propose before implementation, then apply, verify, and archive as separate owner requests.
- For a Direction 2.5 static-to-React migration, first preserve a scenario and data-contract baseline; then use `react-best-practices` while building, `composition-patterns` only when reusable UI boundaries emerge, `playwright-skill` for parity evidence, and `web-design-guidelines` for the final UI audit. Run `react-doctor` only where Node/npm are available.

## Commands

```powershell
git diff --check
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\verify-harness.ps1
```

## Reply format

One-line status → done → owner input needed → file links.
