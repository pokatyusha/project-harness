---
name: journey-evidence-to-backlog
description: Turn a bounded customer journey and supporting evidence into a traceable gap, How Might We question, user story, and candidate backlog item.
---

# Journey evidence to backlog

## Trigger

Use when a user path across two or more touchpoints needs to be understood before Direction 2.5 scope or a pilot-derived backlog candidate is proposed.

## Inputs

- Journey objective, segment, and start/end boundary
- Evidence from research, observation, or verified product context
- Known touchpoints, dependencies, and owner

## Procedure

1. Start from `templates/journey-evidence-to-backlog.md` and fix the journey boundary before mapping steps.
2. Record actions, goals, thoughts or emotions, touchpoints, barriers, and evidence at each step. Preserve customer quotes only when consented and safe to retain.
3. Mark every entry as observed evidence, system evidence, interpretation, or unknown; do not turn an unknown into a task.
4. Where a user barrier may have an operational cause, describe the front-stage experience and back-stage dependency separately.
5. Select one evidenced gap and form a single “How might we” question tied to an observable outcome.
6. Convert it into a user story with acceptance checks, dependencies, and a candidate task. Use `direction-2-5-spec-readiness` before an OpenSpec proposal.
7. Obtain owner confirmation before creating or changing a YouGile task.

## Boundaries

- A journey map is not a metric, proof of causality, or a complete delivery plan.
- Do not infer customer emotion or system behaviour without evidence; retain uncertainty in the map.
- Do not copy personal data, sensitive quotes, or direct identifiers into the repository.

## Done

The result links a bounded journey, its evidence and limitations, one prioritised gap, its HMW question, user story, acceptance checks, and candidate task.

## Ownership and revision

The product or research owner confirms the journey scope and prioritisation. Revise when the journey boundary, evidence, or operating dependency changes.

## Source note

Distilled from the owner-provided learning deck `CJM (2).html`; no source deck content is copied into this repository.
