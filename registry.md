# Registry

Updated: 2026-10-14 (Europe/Moscow)

## Repositories

| Name | Role | Location | Default branch | Access / status |
|---|---|---|---|---|
| project-harness | Project operating context | https://github.com/pokatyusha/project-harness | `main` | Separate personal repository; local checkout at `C:\\Users\\Екатерина Поварнина\\Desktop\\агент-обвязка проекта\\project-harness`; GitHub plugin is required for harness-function changes; OpenSpec uses the `spec-driven` schema; local verifier passed on 2026-10-14; no task worktree active; project skills live in `.agents/skills/`. |
| PP-Sber-Autumn-2026 | Main project repository | https://github.com/AcryCxde/PP-Sber-Autumn-2026 | `master` | GitHub plugin verified access on 2026-10-14 (`pull` and `push`); it is required before reading repository facts. PPS checkout is mapped as `project-01` on `PPS-2`; it has local modifications and untracked files, so no source writes are permitted without owner confirmation. |

## Work trackers and knowledge base

| System | Purpose | Location | Status |
|---|---|---|---|
| YouGile | Project tracker | https://ru.yougile.com/team/3f3c9f205187/ПП-Сбер-__dash__-осень/Общий-backlog-и-учебные-спринты | Active authenticated board verified on 2026-10-14: `ПП Сбер - осень` / `Общий backlog и учебные спринты`; plugin is required before planning, task, report, or context work. |
| Obsidian | Durable project knowledge | Not supplied | Awaiting vault path / shared workspace. |
| Codex video chat | Video and presentation context | `orchestrator/context/video-chat.md` | READY (chat-sourced); local asset paths are deliberately not stored in Git. |
| Codex PM chat | PM context and Sprint 2 task snapshot | `orchestrator/context/pm-chat.md` | READY (chat-sourced); live tracker reconciliation required. |
| Owner-provided learning materials | Source-derived methods for PM, Direction 2.5, presentations, and Pilot users | `orchestrator/skill-map.md` | PDF, HTML, and image learning materials were reviewed on 2026-10-14; methods were distilled without copying source files or their local location. Byte-identical HTML variants are tracked once. |
| Founder skill | Optional public methods for market, economic, and launch questions | https://github.com/Jakeschincariol/founder-skill | Already available in the environment as `founder-*`; no duplicate installation. Its simulated and financial outputs are bounded in `orchestrator/skill-map.md`. |
| Presentation visual reference | Dark void / restrained accent inspiration for defence-slide design | https://styles.refero.design/style/e5f5f8cf-e68d-4ed1-bbf5-6b67569af648 | Owner-provided tokens are adapted in `.agents/skills/presentation-visual-motion/`; no third-party layouts, logo, or visual assets are copied. |
| Knowledge Cat PPT | Personal production and QA skill for presentation decks | `~/.codex/skills/knowledge-cat-ppt-skill` | Installed from https://github.com/gnipbao/knowledge-cat-ppt-skill on 2026-10-14. It selects the presentation output lane and QA; project styling and animation boundaries remain in `presentation-visual-motion`. |
| React migration skills | Personal coding and QA skills for the Direction 2.5 static-to-React path | `~/.codex/skills/react-best-practices`, `composition-patterns`, `web-design-guidelines`, `playwright-skill` | Installed from Vercel Agent Skills and `lackeyjb/playwright-skill` on 2026-10-14. Use order and boundaries are in `orchestrator/skill-map.md`; Playwright setup and React Doctor require a Node/npm-capable runtime. |

## Multi-project orchestration

| Project slot | Root | Context card | Status |
|---|---|---|---|
| project-01 — PPS | `C:\\Users\\Екатерина Поварнина\\пары мага\\PP-Sber-Autumn-2026` | `orchestrator/context/project-01.md` | READY; branch `PPS-2`; OpenSpec not initialized |
| project-02 | Not mapped | `orchestrator/context/project-02.md` | MAPPING_REQUIRED; OpenSpec pending root |
| project-03 | Not mapped | `orchestrator/context/project-03.md` | MAPPING_REQUIRED; OpenSpec pending root |
| project-04 | Not mapped | `orchestrator/context/project-04.md` | MAPPING_REQUIRED; OpenSpec pending root |
