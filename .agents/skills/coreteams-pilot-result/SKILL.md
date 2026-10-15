---
name: coreteams-pilot-result
description: Produce a privacy-safe, source-traceable CoreTeams task result and run ZIP for a real pilot task; preserve evidence limits and distinguish participant facts from assumptions.
---

# CoreTeams pilot result

Use this skill to create the user-facing result for a bounded business/project research task and package the result for a CoreTeams pilot. It is a content and export contract for adaptation into CTF; it does not authorize recruitment, contact, data collection, external publication, or CTF execution.

## Inputs

- A specific user task and intended decision or deliverable.
- User-approved scope, non-confidential inputs, and any constraints.
- External sources actually consulted, with URLs, dates, publishers/authors, and the claims they support.
- Project, task, run, phase, build/version, environment, operator, and pseudonymous participant IDs.
- Consent state and the version of the consent text for a research session; a contact record is not consent.
- Known missing inputs, uncertainty, expert review requirements, and safety or domain boundaries.

If the task, decision, or source set is missing, ask for the smallest missing input or produce a clearly marked limited result. Never fill gaps with invented facts, research, participant characteristics, or measurements.

## Result format

Create UTF-8 Markdown `result.md`, a UTF-8 CSV `sources.csv`, UTF-8 JSON `metadata.json`, and a UTF-8 JSON `manifest.json`, then place them in the ZIP structure and naming convention in `../../../handoff/2026-10-15/pilot-package.md`.

`result.md` must contain these sections in a readable order:

1. **Decision requested** — the question the analysis is meant to help answer.
2. **Short answer** — a bounded conclusion or an explicit statement that evidence is insufficient.
3. **What the evidence says** — concise findings, each mapped to source IDs such as `[S1]` that resolve in `sources.csv`.
4. **Comparison or reasoning** — criteria and tradeoffs used to reach the conclusion; show disagreement rather than hiding it.
5. **Unknowns and limitations** — what sources do not establish, stale/weak evidence, missing data, and any scope limits.
6. **Recommended next step** — an actionable option, check, or question; label recommendations as recommendations.
7. **Expert review / escalation** — name what requires a qualified professional or owner decision; state explicitly when the output is not expert advice.
8. **Contributions** — briefly describe which areas of expertise the analysis used; distinguish automated analysis from verified human review.
9. **Sources** — source IDs and titles, consistent with `sources.csv`.

For a non-research result, adapt headings only when a section truly does not apply; write `Not applicable` with a short reason rather than silently omitting a required limitation or escalation check.

## Evidence and language rules

- Separate sourced facts, participant/user self-report, observed session behavior, system measurements, interpretation, recommendation, assumption, and unknown. Mark each claim or table row with an evidence type where the distinction could be unclear.
- Cite external factual claims inline by stable source ID. Each source row needs title, publisher, author if available, publication date if available, access date, direct URL, claim IDs, source type, and limitations. Prefer primary/authoritative materials for material claims and include a counterpoint when a consequential decision has plausible alternatives.
- A search snippet, unsourced AI output, or uncited draft is not a source. Never invent URLs, dates, credentials, quotes, participant identity, or evidence.
- Distinguish a verified fact from an assumption explicitly (for example `Fact [S1]`, `Assumption`, `Interpretation`, or `Unknown`). If evidence conflicts, report the conflict and its effect on the recommendation.
- Do not claim a qualified expert reviewed an output unless metadata or approved source material verifies it. Flag legal, tax, medical, investment, safety, and similarly consequential decisions for authorized professional review.
- Use concise paraphrases. Do not place identifying quotations, contact details, confidential input, raw recordings, or raw form responses in result or public ZIP.
- If data is insufficient, say what is known, what is missing, what decision cannot be supported, and the next evidence needed. Do not present a plan as a completed measurement or a small convenience sample as representative.

## Metadata and archive

Build the ZIP as specified in `../../../handoff/2026-10-15/pilot-package.md`:

- Name: `coreteams_<project-id>_<task-id>_<run-id>_<phase>_<build-version>.zip` using stable, filesystem-safe IDs.
- Members: `manifest.json`, `result.md`, `sources.csv`, and `metadata.json`.
- Metadata must identify project/task/run, phase (`baseline` or `prototype`), build/version, environment, creation time with timezone, operator ID, pseudonymous participant ID if used, descriptive input scope, consent state/text version when a participant is involved, result schema version, and limitations.
- The manifest must record each payload member's filename, media type, byte length, SHA-256, and schema version. Exclude manifest.json itself from its file list: a self-hash cannot be stable. Hash the exact bytes in the archive.
- Keep contacts in a separate private local store only when specifically needed and approved. Never include them in the result, CSV, metadata, manifest, ZIP, or public pilot packet.
- Do not include source documents or participant materials unless the owner and participant explicitly authorized that specific inclusion. Prefer URLs and concise notes.

## Checks before handoff

Confirm required members exist and parse; metadata and filename agree; all external factual claims have resolvable source IDs and direct URLs; source dates/access dates and limitations are present where available; no source IDs are orphaned; all included files are UTF-8; hashes and byte sizes match; and the archive contains no contacts, raw responses, secrets, temporary files, or unauthorized documents. If any check fails, correct the package or clearly report the missing data; never synthesize missing evidence.

Run `python scripts/validate_zip.py <archive>` from this skill folder for structural checks. The manifest's `files` list uses `filename`, `media_type`, `byte_size`, `sha256`, and `schema_version`; it lists payload files only. This check does not establish source truth, actual consent, expert review, useful content, or CTF integration. Test the helper with `python scripts/test_validate_zip.py`; these are isolated synthetic fixtures, never pilot results.

## Validation inputs

Use these cases when adapting this contract to CTF:

1. **Complete sourced case:** a one-person business owner asks whether to pursue one bounded, non-high-stakes decision; provides two conflicting authoritative sources and one secondary source. Expected: brief cites claims by stable IDs, explains conflict and limits, and recommends a next check without claiming professional review.
2. **No sources:** user asks for a market conclusion but supplies no source set and external research has not run. Expected: result says evidence is insufficient, lists the minimum needed research, contains no invented claims/citations, and ZIP has a valid empty `sources.csv` plus limitation.
3. **Counterfactual only:** respondent imagines a future task but has no recent real case. Expected: label statements as counterfactual expectations; do not label as an observed barrier or baseline.
4. **High-stakes gap:** legal/tax or investment decision with no qualified source. Expected: narrow process summary only, explicit expert escalation, no advice or confident conclusion.
5. **Metadata mismatch / privacy leak:** phase in filename differs from metadata, hash is wrong, or an input contains an email/phone. Expected: fail validation and block export until repaired; do not copy contact data to any ZIP member.

## Limits

This skill formats an analytical result; it does not conduct research merely by being invoked, validate a product hypothesis, establish demand, or make causal claims about time saved. Baseline and prototype results must be separately observed and paired only when they concern the same participant and task; repeated-task learning limits causal attribution. If no run occurred, record `NOT_RUN` or no measurement rather than a fabricated result.
