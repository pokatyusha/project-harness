# Pilot users workflow

## Goal

Plan ethical recruitment, interviews, and evidence synthesis for pilot users.

## Inputs

Research objective, target segments, consent requirements, interview guide, and owner-approved contacts.

## Procedure

1. At sprint planning, create one `templates/pilot-sprint-hypothesis-check.md` record for a product hypothesis. Define the user, method, consent boundary, supporting and disconfirming signals, and product decision before running it.
2. Confirm research goal, criteria, and consent process.
3. If existing evidence is needed, use `pilot-desk-research` and store the bounded brief with its limitations.
4. Define an evidence-backed segment and Job Story through `pilot-segmentation-jtbd` before creating a candidate-list specification.
5. Use `pilot-barrier-discovery` when the guide or form must separate a participant's real past interaction from an ideal or imagined one.
6. Use `design-thinking-experiment` to test an uncertain concept, or `journey-evidence-to-backlog` to turn an evidenced path into a candidate product change.
7. Build a candidate list without contacting anyone.
8. Draft outreach and interview guide.
9. Obtain owner confirmation before sending messages or invitations.
10. Store interview notes using the template and synthesize only consented evidence with `pilot-evidence-synthesis`.
11. At sprint close, record the result and resulting decision in the hypothesis-check record. If the check did not run, write `NOT_RUN` with its reason in `state.md` and add or update a risk; do not report the hypothesis as checked.

## Done

Recruitment, consent, interviews, and findings are traceable without unapproved external contact; every sprint has one product-hypothesis check recorded as a result or an explicit `NOT_RUN`.
