# How to work with the project harness

## One message, one active track

Start a request with one switch phrase and a short goal. I will read the relevant state block and workflow, make only durable file changes needed for that request, and return a one-line status with links. If several tracks are involved, begin with `Оркестратор:` and name the desired result.

| You write | I switch to / do |
|---|---|
| `PM: <goal>` | Launch YouGile, then plan, decompose, reconcile plan/fact, statuses, and risks. |
| `2.5: <goal>` | Launch GitHub, then work on CoreTeams Product Web research, requirements, specifications, and acceptance criteria. |
| `2.5 React: <goal>` | Launch GitHub, then plan or execute an approved static-to-React migration: scenario/storage baseline → React implementation → Playwright parity → UI audit. No source-project write occurs without a separate explicit owner request. |
| `Видео: <goal>` | CTF video: brief, script, prompts, asset list, assembly plan. |
| `Презентации: <goal>` | Defence: outline, slide texts, evidence, visual direction, and rehearsal checklist. For a concrete deck, I will ask the owner to choose `native PowerPoint animation` or `motion plan` before production. |
| `Пилоты: <goal>` | Pilot users: research plan, interview guide, outreach drafts, synthesis. |
| `Пилоты: гипотеза спринта <hypothesis>` | Create or update the sprint hypothesis-check record: user, method, consent boundary, support/disconfirm rule, fact, and next decision. |
| `Оркестратор: <goal>` | A question spanning two or more tracks or one of the four mapped project folders. |

## Fast operational phrases

| You write | Result |
|---|---|
| `Статус` | Current short status across the five tracks, blockers, and next actions. |
| `Неделя` | Draft or update the weekly plan from `templates/weekly-plan.md`. |
| `Контекст project-0N: <question>` | Launch GitHub, then retrieve the smallest relevant read-only context after that project's root is mapped and marked ready. |
| `Забор файлов project-0N: <goal>` | Show the exact planned files and paths before collecting a context card. |
| `Решение: <statement>` | Record a confirmed decision in `decisions.md`; I will ask only if its scope is materially unclear. |
| `Риск: <statement>` | Add or update a risk in `risks.md`. |
| `Только прочитай: <goal>` | Analyse without editing files or external systems. |
| `Черновик: <goal>` | Create an internal draft only; no external communication or publication. |
| `Выполни: <goal>` | Implement the named internal change and run the stated checks. |
| `Анимация колоды: native PowerPoint` | Produce and verify native slide animations when the selected authoring tool can preserve them. |
| `Анимация колоды: motion plan` | Produce a slide-by-slide animation plan and static reading order; do not claim the delivered deck contains native animation. |
| `Внешнее действие: <description> — разрешаю` | Carry out the named email, invitation, publication, or third-party update after showing the final target and scope. |

## OpenSpec phrases

Use OpenSpec when a change needs a reviewable specification before implementation. It is already initialized in `project-harness`; a source project needs its real mapped root and a separate initialization before it can use these phrases.

| You write | Result |
|---|---|
| `OpenSpec explore <target>: <idea>` | Investigate the idea without changing product code. |
| `OpenSpec propose <target>: <change>` | Create proposal, delta specification, design, and implementation tasks; planning only. |
| `OpenSpec apply <target>: <change>` | Implement an existing approved OpenSpec change. |
| `OpenSpec verify <target>: <change>` | Compare the implementation with the approved OpenSpec artifacts and required checks. |
| `OpenSpec archive <target>: <change>` | Archive a completed, verified change after owner confirmation. |

`<target>` is either `project-harness` or `project-01` through `project-04`. Before a project is mapped, I will return `MAPPING_REQUIRED` instead of assuming a folder or touching its files.

## Mapping the four folders

Send one line per project in this format:

```text
project-01 | <name> | <absolute local folder> | <repository URL> | <branch>
```

After all four mappings are supplied, I will update `orchestrator/projects.toml`, collect only the relevant read-only context, and initialize OpenSpec in an individual project only when you explicitly request it.
