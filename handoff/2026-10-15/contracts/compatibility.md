# Сверка контрактов с обеими реализациями

Срез SHA: [реестр](README.md). Метки: **совпадает** — проверенный локальный пункт; **нужна правка** — формат/поведение расходится; **не реализовано** — в проверенной стороне нет необходимой функции. Отсутствие функции не исправлено этим аудитом.

## Матрица

| Связь / пункт | Производитель / вызывающая сторона | Принимающая / читающая сторона | Вердикт и владелец |
|---|---|---|---|
| B-01 create project | B POST `/api/projects` | Gateway не имеет маршрута, probe HTTP404 | **Не реализовано** в gateway; Дима+Катя принимают mapping, не создают новый конкурирующий API |
| B-01 file/run/answer/message/approve/ZIP | Клиентские request/validation функции существуют | Нет project routes/Run B snapshot в gateway | **Не реализовано** на сервере; Дима+Арина+Илья+Катя; 404-probe выполнен только для create, остальные найдены по route/code audit |
| B-03 runner hello | PR #10 генерирует v1 hello | Настоящий app `/ws` отвечает command.error/invalid_command, не welcome | **Не реализовано** в gateway; Дима, Илья сверяет C-02 §11 |
| B-03 replay/heartbeat | Client/journal/ack parser реализованы и unit-tested | Нет совместимого hello/event receiver, durable cursor/heartbeat path для runner | **Не реализовано** на gateway; Дима. Фейковый gateway в runner tests не заменяет интеграцию |
| B-04 command parser/inbox | Синтетические команды по C-01 | Runner parser/ack/client tests проходят | **Совпадает** в выбранных runner tests; отправитель gateway **не реализован**, общий путь не принят |
| ID domain | Runner принимает `run-1` | Gateway run.subscribe требует UUID, отвергает `run-1` | **Нужна правка/уточнение общего домена** Дима+Илья+Катя; UUID допустим обоим, не утверждаем невозможность согласования |
| Public types | Runner выдаёт facilitator.question / user.answer.accepted / artifact.created | Gateway projector превращает их в legacy.redacted | **Нужна правка** Дима, сверка Илья;3 прямых probe. role/progress тоже не в allowlist, но отдельный runtime probe для них не запускался |
| Public payload/version | Runner event nested payload text/role_id | Gateway ожидает legacy flat content/role, schema_version, теряет текст | **Нужна правка** Дима; message.created probe подтверждает несовпадение payload. B тоже не читает v0 stream напрямую: Катя подключает согласованный adapter |
| Вопрос/ответ | Runner question list/options/multi-select + dictionary answers | B question{id,text}/answer:string; gateway answer bridge нет | **Нужна правка** mapping обеих сторон; Илья+Дима+Катя, без потери нескольких вопросов или вариантов |
| Waiting | C-02 waiting_for_input активен | Gateway ACTIVE_RUN_STATUSES/unique index только pending/running | **Нужна правка** Дима; probe+model read. B clarification нуждается в явном отображении, не механическом переименовании |
| Терминальность | C-02 completed только после всех artifact.saved | Gateway CLI result/exit0 финализирует без этого gate | **Нужна правка** Дима+Арина; статический code audit, реальный crash/save race не прогонялся |
| Durable files | Runner local checkpoint/metadata | Канал bytes→storage отсутствует в C-02 §11.11; отдельного storage API в ADR PR #7 нет | **Не реализовано / не определено** Илья+Арина+Дима; нельзя закрыть green UI или local commit |
| БД | Gateway ORM5tables и runs fields | PR #9 DDL не содержит conversations/events/messages и3runs fields | **Нужна правка** Арина+Дима, конфиг/миграции Филипп;2static-probes, реальная миграция не запускалась |
| Download | Gateway legacy text snapshot endpoint | B ждёт immutable version ZIP | **Нужна правка** Арина+Дима+Катя; legacy endpoint сам по себе реализован, не ZIP exporter |
| Auth | B same-origin credentials; runner Bearer token client | Проверенные gateway routes/WS не реализуют нужную owner/project/runner auth | **Не реализовано** для целевого контура; Дима+Арина+Филипп. Непроверенный reverse proxy не считается защитой |
| Reopen | B browser persistence + GET known run | Server list/get/full hydration/cross-device в B API не реализованы | **Не реализовано** для server restore; Катя+Арина+Дима |
| Wiring | Runner initiates WS, B configured HTTP client | Compose PR #9 only DB; согласованный connection manifest отсутствует | **Не реализовано** как проверенный deployment; Филипп с владельцами services |
| Историческая WEB contractVersion1.0 | PPS-2 camelCase/underscore event proposal | Runner dot types/snake_case + gateway schema_version + B snapshots | **Нужна правка/решение mapping** Дима+Катя+Илья, не пятый event schema. Исторический документ сам не доказывает acceptance |

## Выполненные проверки

- Runner: **65 passed** — protocol/v0/gateway/gateway_client selected tests.
- Gateway: **14 passed** — public_events/parser selected tests.
- WEB B: **20 passed** — domain/journey unit tests.
- Межграничные probes: **10/10 показали несовместимость**; намеренный exit1, [машинный результат](boundary-results.json), [код](verify_boundaries.py). Четыре event probes и два DB probes — связанные симптомы, не10независимых причин.
- Docker daemon: недоступен, named pipe DockerDesktopLinuxEngine не найден. Общий реальный стенд/CTF/storage read-back не проверены. **REAL_E2E=BLOCKED/NOT_RUN**, не FAILED после якобы выполненного сценария и не PASS.

Отдельные зелёные component tests подтверждают только соответствующие компоненты. Они не опровергают красные boundary probes и не означают, что сервисы сейчас совместимы. Прогоны локальные и изолированные; это не GitHub CI и не пользовательский эксперимент.

## Порядок закрытия без дублирования работы

1. Ревью C-01/C-02 PR #10 и C-04 ADR: явно принять/поправить существующие пункты и unresolved questions. Зафиксировать одну версию/compatibility policy и Integration Owner. Пока принятие UNKNOWN.
2. Закрывать разрывы на соответствующих сторонах: runner-facing gateway, безопасная public projection/answer mapping, storage bytes/receipt/DB migration, затем единый web adapter и wiring. Это порядок зависимостей, не сроки или новый согласованный scope.
3. Перезапустить consumer/provider boundary tests; затем общий real E2E из [verification.md](verification.md). Сохранить trace/receipts/checksum/read-back. Обновлять конкретные строки матрицы, не объявлять все сервисы готовыми по одному тесту.
4. Только после technical E2E + DEPLOYMENT_READY + baseline/согласия конкретного участника — пользовательская сессия. Не отправлять участникам и не сливать PR без отдельного разрешения.
