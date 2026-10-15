# CoreTeams — индекс передачи

Владелец: Катя. Ревизия: 1. Основание: задание владельца 15.10.2026. Время запуска и сроки: [execution record](../../orchestrator/launch-2026-10-15.md). Заменённой ревизии нет.

Статус: `PARTIAL_HANDOFF` — WEB-код и пакет опубликованы, задачи и Wiki обновлены; PR, контракт CTF, архитектура хранения, принятие людьми и реальные CTF/хранилище/деплой ещё не подтверждены.

## Единственные источники пакета

| Часть | Результат | Факт / обязательный вход |
|---|---|---|
| WEB | [React/Vite/TypeScript](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/codex/coreteams-react-handoff-2026-10-15/web-app), commit `f6eff6652600645245064817cced8510140503ee` | Типы, сборка,8unit и desktop/mobile/browser-fixture проверки прошли. PR-плагин вернул403; [создать PR](https://github.com/AcryCxde/PP-Sber-Autumn-2026/compare/PPS-2...codex/coreteams-react-handoff-2026-10-15?expand=1). Исходный dirty PPS не изменён |
| Илья — CTF | [Интеграционный контракт](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/integration.md), [skill результата](../../.agents/skills/coreteams-pilot-result/SKILL.md) | PPS-138 обновлена; операции proposed, подтверждение Ильи отсутствует |
| Филипп — CI и сервер | [Сборка и сервер](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/deployment.md) | PPS-166 обновлена; срок15.10 15:00:02 сохранён, расхождение с ориентиром пятницы отмечено. Нужны CTF и архитектура Арины |
| Арина — архитектура хранения | [Требования WEB](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/storage-requirements.md) | PPS-167 обновлена; архитектура и инструкция подключения отсутствуют, срок09:03:08MSK15.10 |
| Катя — метрики | [События и идентификаторы](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/metrics.md) | PPS-165 обновлена; клиентский session-only журнал реализован, серверное принятие/хранение не подтверждены |
| Дмитрий — помощь React | [Узкая инструкция](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/codex/coreteams-react-handoff-2026-10-15/web-app/docs/help-reproduction.md) | Без конкретного блокера/запроса Кати не активируется; самостоятельные правки WEB не назначены |
| Пилот | [Сценарий, 3 спринта, ZIP, сообщения, baseline и E2E-чеклист](pilot-package.md) | Подходящий контактный участник в опросе не найден; требуется целевой добор. Замеры `NOT_RUN` |
| Презентация | [PPTX-черновик](presentation/CoreTeams-defence-draft-2026-10-15.pptx), [motion-план](presentation/motion-plan.md), [источники](presentation/slide-notes-source-map.md) |15редактируемых слайдов; рендер/повторный импорт/финализатор прошли. Числа E2E ожидаются |
| Задачи и Wiki | [Применённый live-аудит](task-drafts.md) | PPS-139/165/138/167/166 обновлены и перечитаны; Project Hub `ab681161-45e0-4aa4-b34a-3ed006f6489a` дополнен без новой страницы. Принятие людьми не получено |

## Приёмка передачи

- Подготовка frontend проверяется отдельно от интеграции и деплоя.
- `HANDOFF_READY` допускается только при доступных и проверенных обязательных материалах. При отсутствии архитектуры Арины — частичная передача с адресным блокером.
- Для каждого получателя отмечаются отдельно: документ опубликован, инструментом передан, получатель принял, работа выполнена.
- Тест пользователя запускается после реального технического E2E и `DEPLOYMENT_READY`, наличия baseline конкретного участника и согласия.
- Контакты, сырые ответы, внутренние промпты и записи исследования не входят в этот индекс или пользовательский ZIP.
