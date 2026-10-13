---
name: project-skill-authoring
description: Create or revise a narrow project-local skill when a project operation is repeated or needs stable outputs and safety bounds. Do not use for one-off tasks or generic advice.
---

# Project skill authoring

## Outcome

Add a maintainable skill under `.agents/skills/` that preserves a proven project practice without duplicating generic guidance.

## Inputs

- The repeated operation and evidence from one or more completed runs.
- The intended output, acceptance check, owner, and review trigger.
- Relevant workflow, template, decision, or risk records.

## Procedure

1. Read the matching workflow and the smallest relevant state block.
2. Capture the operation in `templates/skill-canvas.md` after its first and second use.
3. On the third repeat, or when the owner explicitly requests it, create one narrowly scoped skill folder with a `SKILL.md`.
4. Write a description that says both when to apply the skill and what result it produces.
5. Include only task-specific inputs, steps, prohibitions, templates, and a verifiable completion condition. Link large references instead of copying them.
6. Record the skill owner and a revision trigger in the skill and `decisions.md`.
7. Extend `scripts/verify-harness.ps1` only when the new skill creates a stable structural invariant.

## Boundaries

- Keep unrelated operations in separate skills.
- Do not encode secrets, personal pilot-user data, or permission to contact people.
- Do not create a skill solely because a task was mentioned once.

## Verification

Run the skill validator, then the repository verifier. Confirm the description is specific enough to distinguish the skill from adjacent workflows.
