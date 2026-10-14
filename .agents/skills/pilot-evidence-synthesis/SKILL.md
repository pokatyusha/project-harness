---
name: pilot-evidence-synthesis
description: Consolidate consented pilot forms, interviews, and observed sessions into an aggregate evidence record that keeps observed barriers separate from counterfactual expectations and unknowns.
---

# Pilot evidence synthesis

## Trigger

Use after a consented pilot form, interview, or observed session when findings must inform a product decision, backlog candidate, or sprint hypothesis result. It is not a substitute for running a user check.

## Inputs

- Research question or sprint hypothesis record
- Consented source material handled outside this repository
- Segment, method, sample, and missing-data information

## Procedure

1. Start from `templates/pilot-evidence-synthesis.md` and record the source types, response count, collection period, and material missing data.
2. Code each aggregate observation by journey stage: source discovery, selection, reading or extraction, synthesis, validation, or decision. Label it as observed behaviour, user self-report, system evidence, counterfactual expectation, interpretation, or unknown.
3. Record time or effort signals and workarounds only when the source supports them. Preserve contradictory evidence and do not turn response count into a population claim.
4. Separate repeated observed barriers from counterfactual expectations that need a later test. Identify the smallest candidate product intervention only after that separation.
5. Update the linked sprint hypothesis check as supported, contradicted, inconclusive, or `NOT_RUN`; record a durable decision or risk only when the evidence changes it.
6. Route an evidenced journey gap through `journey-evidence-to-backlog`; owner confirmation is still required before creating or changing a YouGile task.

## Boundaries

- Keep raw recordings, transcripts, contact details, and identifiable quotes outside the repository.
- Do not combine hypothetical answers with observed behaviour when estimating a barrier, success rate, or demand.
- Do not report a small, convenience, or incomplete sample as representative; state its limitation instead.

## Done

The aggregate record names its sample and limitations, labels evidence consistently, preserves uncertainty, and links a bounded next decision without storing personal data.

## Ownership and revision

The research or product owner confirms the decision and any follow-up test. Revise when the research question, segment, source set, or consent boundary changes.

## Source note

Distilled from owner-approved customer methodology and aggregate pilot-research context recorded on 2026-10-14; no participant data or source transcript is copied.
