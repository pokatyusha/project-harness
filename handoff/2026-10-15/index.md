# CoreTeams — индекс передачи

Владелец: Катя. Ревизия: 4. Основание: задание и уточнения владельца15.10.2026. Время запуска и сроки: [execution record](../../orchestrator/launch-2026-10-15.md). Актуальные [полный Wiki-ready пакет](web-transfer-wiki.md), [PR/merge владельца](owner-pr-merge.md), [агенты](agent-dispatch.md); прежнее сравнение A/B: [web-candidates.md](web-candidates.md).

**CoreTeams — Рабочее пространство с AI-командой для сложных задач вне одной экспертизы.** Название неизменно. Фокус спринта: проверка пути пользователя.

Статус: `PARTIAL_HANDOFF` — WEB8ab6c2a опубликован;6карточек дополнены и перечитаны без смены владельцев/сроков/статусов. Полный текст для Wiki готов, но текущий Wiki APIUnknown tool после refresh: новая Wiki-запись не подтверждена. Новый Storage ADR опубликован как Proposed; принятие/реализация storage, PR/merge rules, реальные CTF/деплой и пользовательские результаты не подтверждены.

Дополнение PR: [draft #11](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/11) создан агентом после входа владельца в Codex browser и проверен плагином: basePPS-2/headB8ab6c2a, draft:true, merged:false, auto_merge:null. Описание,7 прежних локальных проверок и12 незакрытых gates сохранены. Ниже прежние create-PR403 описывают историю, не отсутствие текущего PR. Слияния, готовности CTF/storage/deploy и принятия людьми это не подтверждает.

## Единственные источники пакета

Контрактная сверка15October: [единый реестр существующих источников и SHA](contracts/README.md), [все границы](contracts/boundaries.md), [матрица двух сторон](contracts/compatibility.md), [проверки/реальный E2E](contracts/verification.md). Текущий вердикт INCOMPATIBLE:65runner/14gateway/20web selected component tests passed,10negative probes подтвердили разрывы. Это не новая схема и не acceptance; real E2E BLOCKED/NOT_RUN, source PR/task/Wiki mutations отсутствуют в этом проходе.

PR #11/review sync: [Wiki PPS-159](https://ru.yougile.com/team/3f3c9f205187/ПП-Сбер-__dash__-осень/Wiki/PPS-159) дополнена через UI и перечитана после reload; PPS-169/138/167/166 содержат PR-ссылку и проверки по направлениям, итоговые metadata сохранены. [Протокол и полный текст проверок](pr-11-yougile-review.md). Это выполненная публикация дополнения PR, не утверждение, что весь ранее подготовленный r4 packet уже в Wiki. PR draft, no merge; человеческое принятие UNKNOWN.

| Часть | Результат | Факт / обязательный вход |
|---|---|---|
| WEB | [React/Vite/TypeScript](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/codex/coreteams-react-handoff-2026-10-15/web-app), commit `f6eff6652600645245064817cced8510140503ee` | Типы, сборка,8unit и desktop/mobile/browser-fixture проверки прошли. PR-плагин вернул403; [создать PR](https://github.com/AcryCxde/PP-Sber-Autumn-2026/compare/PPS-2...codex/coreteams-react-handoff-2026-10-15?expand=1). Исходный dirty PPS не изменён |
| WEB B — пользовательский путь v9.2 | [web-product8ab6c2a](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product), [полная передача](web-transfer-wiki.md) | A сохранён; B с онбордингом/файлами/ролями/планом/документами/версиями, consented local baseline/interface/prototype и русскими явными исходами.20unit/build/fullbrowser/status1440/390pass; V2 proposed/off, CTF не подключён. B PRdiff включаетA+B/docs60файлов, база обновилась и diverged |
| Илья — CTF | [Интеграционный контракт](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/integration.md), [skill результата](../../.agents/skills/coreteams-pilot-result/SKILL.md) | PPS-138 обновлена; операции proposed, подтверждение Ильи отсутствует |
| Филипп — CI и сервер | [Сборка и сервер](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/deployment.md) | PPS-166 обновлена; срок15.10 15:00:02 сохранён, расхождение с ориентиром пятницы отмечено. Нужны CTF и архитектура Арины |
| Арина — архитектура хранения | [Proposed ADR в новой PPS-2](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/aa9bb424c739d5618d0ff6fee56ba32090ee3d28/web-demo/epic-2.5-v3/--main.zip), [research storage proposal](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/research-storage-proposal.md) | PPS-167 r4 записана/перечитана; архитектурное предложение есть, Accepted/Implemented/actual connection не доказаны; срок сохранён09:03:08MSK15.10 |
| Катя — метрики | [B журнал/шаги/согласие/выгрузка](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/journey-metrics.md) | PPS-165 r4 записана/перечитана; B журнал долговечен только в браузере, JSON/CSV private handoff. A session-only reference отдельно. Server receipt и реальные исследовательские пары не подтверждены |
| Дмитрий — gateway | [Задачи текущего спринта](team-sprint-2-tasks.md) | PPS-170 review контракта и PPS-169 подключение runner. Помощь Кате с React отдельно и условно, не подменяет gateway |
| Пилот | [Сценарий, 3 спринта, ZIP, сообщения, baseline и E2E-чеклист](pilot-package.md) | Подходящий контактный участник в опросе не найден; требуется целевой добор. Замеры `NOT_RUN` |
| Презентация | [PPTX-черновик r2](presentation/CoreTeams-defence-draft-2026-10-15-r2.pptx), [motion-план](presentation/motion-plan.md), [источники](presentation/slide-notes-source-map.md) |15редактируемых слайдов; название/определение, путь и роли уточнены. Рендер/повторный импорт/финализатор и проба редактирования прошли. Числа E2E ожидаются |
| Задачи и Wiki | [Применённый live-аудит](task-drafts.md) | PPS-139/165/138/167/166 обновлены и перечитаны; Project Hub `ab681161-45e0-4aa4-b34a-3ed006f6489a` дополнен без новой страницы. Принятие людьми не получено |

Публикация ссылок завершена15.10.2026 03:39MSK: все пять задач и существующий Hub содержат WEB commit f6eff66 и harness package f88e046; запись перечитана плагином. Ответственные, дедлайны, колонки и выполненность не изменены.

Дополнение03:57MSK: [четыре задачи команды](team-sprint-2-tasks.md) сверены с текущими направлениями и Sprint2. После восстановления соединения дополнены и перечитаны PPS-169/138/167/166; сроки, исполнители, колонки, выполненность и цвет сохранены. Предыдущие записи03:39 сохраняют отдельный подтверждённый статус. Локальный React preview открыт владельцу на `http://127.0.0.1:4190/`; это не общий сервер.

## Приёмка передачи

- Подготовка frontend проверяется отдельно от интеграции и деплоя.
- `HANDOFF_READY` допускается только при доступных и проверенных обязательных материалах. При отсутствии архитектуры Арины — частичная передача с адресным блокером.
- Для каждого получателя отмечаются отдельно: документ опубликован, инструментом передан, получатель принял, работа выполнена.
- Тест пользователя запускается после реального технического E2E и `DEPLOYMENT_READY`, наличия baseline конкретного участника и согласия.
- Контакты, сырые ответы, внутренние промпты и записи исследования не входят в этот индекс или пользовательский ZIP.
