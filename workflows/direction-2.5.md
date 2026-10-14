# Direction 2.5 — CoreTeams Product Web

## Goal

Deliver bounded, verified web changes for CoreTeams Product Web. Research and specification support a web change when needed; they are not the default output.

## Inputs

Product repository, stakeholder brief, existing requirements, and research evidence.

## Procedure

1. Launch GitHub and load `coreteams-web-development`; inspect the relevant CoreTeams repository, branch, PR, commit, or file before proposing a web change.
2. State the bounded web outcome, visible acceptance signal, affected route or component, and non-goal. Inspect only the necessary source files; use the mapped local folder read-only through `multi-project-context` when needed.
3. For a static-to-React request, record a parity baseline before implementation: representative user scenarios, visible outcomes, `localStorage` keys/schema, downloads, error/empty states, and responsive evidence. Do not silently turn the current demo API into a production contract.
4. If the owner has explicitly authorised a source write, implement the smallest coherent change. Otherwise, return a diagnosis, edit plan, and exact approval needed.
5. After an approved source change, use `react-best-practices` while introducing React components. Use `composition-patterns` only when an observed component boundary needs reuse; avoid speculative abstractions.
6. Verify the affected path with the narrowest available check. Use `playwright-skill` for scenario parity across desktop and mobile when its runtime is ready; use `web-design-guidelines` for a requested or final UI and accessibility audit. Run `react-doctor` only in an environment with Node/npm.
7. Use `design-thinking-experiment`, `journey-evidence-to-backlog`, `monetization-unit-model`, or `direction-2-5-spec-readiness` only when the owner explicitly opens research, monetisation, specification, or OpenSpec work, or when a documented uncertainty blocks the web change.
8. Link each claim to a source or label it an assumption. Record only changed product decisions and risks in the root files.

## Done

The requested web outcome is implemented or precisely diagnosed, its acceptance signal and checks are traceable, and unverified behaviour is explicit.
