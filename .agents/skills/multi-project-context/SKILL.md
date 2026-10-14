---
name: multi-project-context
description: Collect or refresh minimal read-only context from one of four configured project folders for cross-project planning. Use after a project root is configured; do not use to edit a source project.
---

# Multi-project context

## Trigger

Use when the orchestrator needs current facts, a file retrieval plan, or a context refresh from a configured project.

## Inputs

- `orchestrator/projects.toml`.
- One project ID: `project-01` through `project-04`.
- The intended planning question or cross-project task.

## Procedure

1. Read the selected project block. If `root` is empty or `status` is not `ready`, stop and report `MAPPING_REQUIRED`.
2. Launch the GitHub plugin and inspect the configured repository before accessing its local source folder. Read only the repository, branch, PR, commit, or file needed for the question; record unavailable GitHub facts as `UNKNOWN`.
3. Use `orchestrator/prompts/collect-project-context.md` for an initial context card or `orchestrator/prompts/resolve-context-files.md` for a targeted retrieval plan.
4. Read the project’s rules and context files before any other files. Start from the common paths in `projects.toml`; open code only when it is necessary to answer the stated question.
5. Save the resulting context card only under the configured `context_file` in this harness. Include source paths, retrieval time, GitHub evidence, and uncertainty.
6. Update `orchestrator/context-index.md` with freshness and status. Record cross-project decisions or risks in the root logs.

## Boundaries

- Source projects are read-only: do not edit, commit, push, open a PR, or contact people from this skill.
- Do not collect secrets, personal pilot-user data, build output, dependency folders, or entire source trees by default.
- Do not treat absent or stale context as a fact; mark it `UNKNOWN` or `STALE`.
- Do not access a project whose root is not explicitly configured.

## Verification

The context card is ready only when it names the project root, retrieval time, files read, open uncertainties, and the next minimal files to retrieve. The context index must point to the card.

## Owner and revision

Owner: project owner. Review when all four roots are mapped, after five context collections, or when a source project changes its documentation layout.
