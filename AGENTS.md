# Agent rules

## Mission

Maintain project context and move five tracks forward: PM, Direction 2.5, video, presentations, and pilot users.

## First minute

- Durable state: `state.md`, `registry.md`, `decisions.md`, `risks.md`, `metrics.md`, and `tokens.md`.
- Repeatable work: `workflows/`; reusable records: `templates/`.
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
- Do not send emails, invitations, publish content, or contact people without owner confirmation.
- Keep command output to errors and the useful tail.
- At session end, update `state.md` and `registry.md`.
- Before reporting a change as complete, run `git diff --check` and `scripts/verify-harness.ps1`.
- When the same operation has been used three times, package it as a focused workflow or skill with a clear input, output, and verification step.
- Keep secrets, passwords, API keys, and participant identifiers out of the repository.
- Parallel work requires a separate branch and worktree only after the task passes the readiness gate in `workflows/worktree.md`.
- Keep parallel tasks small; record their Definition of Done, checks, merge owner, and cleanup condition before starting.

## Commands

```powershell
git diff --check
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\verify-harness.ps1
```

## Reply format

One-line status → done → owner input needed → file links.
