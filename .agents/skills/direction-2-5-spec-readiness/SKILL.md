---
name: direction-2-5-spec-readiness
description: Prepare a CoreTeams Direction 2.5 change for OpenSpec by making product intent, context, acceptance checks, negative cases, and human sign-off explicit.
---

# Direction 2.5 specification readiness

## Trigger

Use before proposing a durable CoreTeams Product Web change from an idea, tracker task, research finding, or integration need. It prepares an OpenSpec proposal; it does not implement code or claim production readiness.

## Inputs

- Verified repository and tracker context
- Product problem, research evidence, and constraints
- Owner or decision-maker for scope and sign-off

## Procedure

1. Follow the GitHub and YouGile routing in `orchestrator/plugin-routing.md` before using repository or task facts.
2. Start from `templates/spec-readiness.md`; express the intended user outcome before discussing a solution.
3. Mark every statement as repository/tracker evidence, research evidence, assumption, or decision needed.
4. Define scope, non-goals, interface or data boundaries, and acceptance checks that an independent reviewer can observe.
5. Add negative scenarios, invariants, and failure behaviour alongside the happy path.
6. Name the human decision and sign-off owner, then hand the reviewed record to `openspec-propose` for the durable change proposal.

## Boundaries

- A local simulation, stub, or test contour is not production integration.
- Do not infer live status, repository state, or user evidence without the required plugin check.
- Do not modify source code, branches, PRs, or tracker tasks through this skill.

## Done

The record makes the user outcome, evidence, scope, acceptance checks, negative cases, dependencies, and required sign-off explicit enough to propose in OpenSpec.

## Ownership and revision

The relevant product owner or integration owner approves scope. Revise when repository context, research evidence, acceptance checks, or dependencies change.

## Source note

Distilled from the owner-provided learning deck `День_из_жизни_разработчика_аналитика_и_тестировщика.pdf`; no source deck content is copied into this repository.
