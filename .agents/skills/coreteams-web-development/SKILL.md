---
name: coreteams-web-development
description: Implement, fix, refactor, test, or review a focused CoreTeams Product Web change; use for frontend delivery, not for standalone product research or presentation work.
---

# CoreTeams Product Web development

## Trigger

Use for a concrete CoreTeams web change: a bug, interface behaviour, visual polish, responsive layout, frontend refactor, React migration slice, browser test, or code review. In Direction 2.5, this is the default skill unless the owner explicitly asks for research, a hypothesis, a specification, or OpenSpec planning.

## Inputs

- The user-visible web outcome or defect
- Relevant source-project branch and permitted write scope
- Existing acceptance signal, scenario, or reproducible steps

## Procedure

1. Launch GitHub and inspect the smallest relevant source files, branch, and existing changes before making a claim about the web app. Use the mapped PPS folder only through `multi-project-context` and as read-only context until the owner explicitly authorises a source write.
2. Frame the work as one web outcome: expected behaviour, affected route or component, visible success condition, and a bounded non-goal. Ask for only the missing detail that blocks a safe implementation.
3. When the request is a static-to-React change, preserve the current scenario, `localStorage` behaviour, download/error/empty states, and responsive baseline before changing the implementation.
4. After explicit approval to edit the source project, make the smallest coherent code change. Use `react-best-practices` while editing React; use `composition-patterns` only where a proven reusable component boundary exists.
5. Verify the changed user path with the narrowest available check. Use `playwright-skill` for browser scenario parity when its runtime is ready; use `web-design-guidelines` for a requested or final UI/accessibility audit.
6. Report the changed behaviour, checks actually run, unverified cases, and the next decision. Record a durable risk or decision in the harness only when it changed.

## Boundaries

- Do not convert a request for a web edit into a broad product-research task, deck task, or speculative redesign.
- Do not invent backend contracts, production integrations, test results, or user validation.
- Do not write to PPS, create a pull request, or change a YouGile task without the owner's explicit request for that named external action.
- A web implementation does not validate a product hypothesis; keep the sprint user check separate.

## Done

The requested web outcome is implemented or precisely diagnosed, its acceptance signal is checked where possible, and the report distinguishes verified behaviour from assumptions or unrun checks.

## Ownership and revision

The project owner authorises source-project writes and accepts the resulting web change. Revise this skill when the verified CoreTeams architecture, test runtime, or source-write policy changes.
