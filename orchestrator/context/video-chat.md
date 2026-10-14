# Chat context card — Video and presentation

- Source ID: video-chat
- Track: Video — CTF; supporting context for Presentations
- Source: owner-provided context extracted from a Codex chat
- Retrieval time: 2026-10-14
- Status: READY (chat-sourced; requires owner confirmation where noted)

## Project card

The product is CoreTeams. The video brief is a horizontal 3D clip without music, using a transition through the screen. A 75-second and a 30-second version are reported as created; acceptance of the 30-second version is UNKNOWN. The initial video version remains preserved while further work is deferred.

The latest presentation request supersedes version 3.2 as the working target. It requires the owner-defined sequence: cover, client pain, JTBD, AS IS, TO BE, competitors, value validation, product hypotheses, Katya's web demo, architecture, technical hypotheses, technical demo, stack, metrics, team, and calendar plan. The exact slide count is UNKNOWN because the supplied numbering repeats after item 10.

## Evidence read

| Source | Relevant block | Why it matters |
|---|---|---|
| Owner-provided video chat context | `Подтверждённые факты` | Records video format, reported versions, and the presentation v3.2 handoff. |
| Owner-provided video chat context | `Цель и ожидаемый результат` | Records the current presentation structure and confirmed cover text. |
| Owner-provided video chat context | `Решения для фиксации` | Records draft/final render parameters, version preservation, and presentation-priority decision. |
| Owner-provided video chat context | `Риски и блокеры` | Records scope ambiguity and unverified content/technical claims. |

## Artifact inventory

| Artifact | Observed status | Location policy |
|---|---|---|
| CoreTeams video, 75 seconds | Reported as created | Local video workspace; absolute path intentionally not stored in Git. |
| CoreTeams video, 30 seconds | Reported as created; acceptance UNKNOWN | Local video workspace; absolute path intentionally not stored in Git. |
| Presentation v3.2 | Reported as created and superseded by a later structure | Local presentation workspace; embedded-video playback unverified. |
| Presentation v3.1 and source briefs/transcripts | Referenced in source chat | Not yet read by the harness. |

## Decisions, risks, dependencies, and unknowns

- D-008: preserve media versions; use 720p/24 fps for drafts and 1080p/30 fps only after approval.
- D-009: the latest explicit presentation structure is the source for the next deck revision.
- R-010: acceptance of the 30-second video and its effect on the three revision rounds are UNKNOWN.
- R-011: presentation slide count and source-document evidence are incomplete; no technical readiness claim may be added without verification.
- UNKNOWN: actual contents of the five referenced source documents, confirmed team roles, technical-demo owner/status, and defence deadline.

## File retrieval map

| Priority | Source | Question answered | Access status |
|---|---|---|---|
| High | Owner-supplied TZ files and meeting transcripts | Which claims, roles, and requirements are evidence-backed for the 16-section presentation? | Not read yet |
| High | Local `storyboard.md` | What scenes, claims, and assets define the current video version? | Path not mapped |
| Medium | Local presentation v3.2 | What is reusable and what conflicts with the current requested structure? | Path not mapped |
| Medium | Rendered 30-second video | Does the delivered output match the recorded brief and require another revision? | Acceptance pending |

## Refresh trigger

Refresh when the owner accepts or rejects the 30-second cut, supplies the media/project root, confirms the slide count, or provides source briefs/transcripts for review.
