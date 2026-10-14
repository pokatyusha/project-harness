---
name: pilot-barrier-discovery
description: Design or review pilot research that distinguishes time-consuming barriers from a real past interaction from counterfactual expectations about an ideal future interaction.
---

# Pilot barrier discovery

## Trigger

Use when an interview guide, form, or sprint hypothesis check must reveal where a user loses time or effort in a workflow. Use it before recruitment or before interpreting existing responses. It does not validate demand or authorize outreach.

## Inputs

- Product hypothesis and decision to inform
- Target segment and consent boundary
- Whether the participant has a relevant real interaction to reconstruct

## Procedure

1. Create or update `templates/pilot-sprint-hypothesis-check.md`; state the decision rule before collecting evidence.
2. Route a participant who has completed a relevant real task through their last case: trigger and goal, then source discovery, source selection, reading or extraction, synthesis, validation, and decision. For each actual step, ask what happened, what delayed or complicated it, the workaround or alternative, and any observable time or effort signal.
3. Route a participant without that interaction through an ideal-flow prompt: desired result, minimum conditions for trying the product, and where the proposed flow must fit. Mark every result from this route as a counterfactual expectation, not an observed barrier.
4. For each candidate barrier, retain only the aggregate fields: stage, observation, evidence type, time or effort signal if known, workaround, limitation, and candidate product intervention.
5. Hand consented aggregate findings to `pilot-evidence-synthesis`; hand an evidenced journey gap to `journey-evidence-to-backlog`.

## Boundaries

- A barrier is observed only when it is tied to a real interaction or product-session observation; a preference, ideal flow, or simulated answer remains counterfactual.
- Do not lead a participant toward a preferred feature or manufacture a problem from a hypothetical answer.
- Do not contact people, collect identifiers, or retain raw responses without owner approval and consent.
- Do not store participant names, contacts, raw recordings, or unconsented quotes in the harness.

## Done

The guide has a real-interaction route and a counterfactual route, each finding is labelled by evidence type, and the result can inform one bounded product decision without overstating certainty.

## Ownership and revision

The research or product owner approves recruitment, consent, and any external test. Revise when the target segment, product hypothesis, or journey boundary changes.

## Source note

Distilled from owner-approved customer methodology and aggregate pilot-research context recorded on 2026-10-14; no participant data or source transcript is copied.
