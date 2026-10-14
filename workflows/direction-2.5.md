# Direction 2.5 — CoreTeams Product Web

## Goal

Produce traceable specifications, acceptance criteria, and research for CoreTeams Product Web.

## Inputs

Product repository, stakeholder brief, existing requirements, and research evidence.

## Procedure

1. Launch the GitHub plugin and inspect the relevant CoreTeams repository, branch, PR, commit, or file before proposing a specification.
2. Inspect the smallest relevant repository files; use the mapped local folder read-only through `multi-project-context` when needed.
3. For a static-to-React request, record a parity baseline before implementation: representative user scenarios, visible outcomes, `localStorage` keys/schema, downloads, error/empty states, and responsive evidence. Do not silently turn the current demo API into a production contract.
4. When the user problem or path is unclear, use `design-thinking-experiment` or `journey-evidence-to-backlog` before narrowing scope.
5. Capture problem, users, constraints, scope, and acceptance criteria.
6. When scope includes a business-model or monetisation claim, use `monetization-unit-model` before making an economic statement.
7. Use `direction-2-5-spec-readiness` before an OpenSpec proposal to make acceptance checks, negative cases, and required human sign-off explicit.
8. After an approved source change, use `react-best-practices` while introducing React components. Use `composition-patterns` only when an observed component boundary needs reuse; avoid speculative abstractions.
9. Use `playwright-skill` to preserve baseline scenarios across desktop and mobile; then use `web-design-guidelines` for the final UI and accessibility audit. Run `react-doctor` only in an environment with Node/npm.
10. Link each claim to a source or label it an assumption.
11. Record product decisions and risks in the root files.

## Done

Specification has verifiable criteria, evidence links, and a linked implementation task.
