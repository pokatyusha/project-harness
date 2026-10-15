# CoreTeams — единый реестр существующих контрактов

Срез: 15.10.2026, Europe/Moscow. Вердикт по проверенным версиям: **НЕСОВМЕСТИМО**. Реальный сквозной прогон: **BLOCKED / NOT_RUN**.

Это индекс уже существующих документов и проверка реализаций, **не новая схема API**, не принятие предложений и не разрешение на слияние. Источником каждого формата остаётся документ/код по закреплённому SHA. Изменять следует исходный контракт с его владельцами, а не создавать параллельную спецификацию здесь. Реестр пока находится в личном `project-harness`; переноса в общую ветку, записи этого пакета в YouGile и принятия командой в этом проходе не было.

## Как пользоваться

Обновление16October: WEB-владелец поручил применить16–21 в B; [ce8b6f4](https://github.com/AcryCxde/PP-Sber-Autumn-2026/commit/ce8b6f4259f682f74e128fcce12e0290e02f9186) реализует клиентскую часть,35unit/type/build/desktop/mobile fixture checks PASS. [Проверки/ограничения](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/ce8b6f4259f682f74e128fcce12e0290e02f9186/web-product/docs/verification.md), [существующее B-предложение обновлено на месте](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/ce8b6f4259f682f74e128fcce12e0290e02f9186/web-product/docs/ctf-v2-contract.md). Joint service mapping/approval metadata остаются открыты; backend не менялся, реальный E2E NOT_RUN. PR11 draft/unmerged. Закреплённый срез15October ниже не переписан и не повышен до совместимости из-за frontend-тестов.

Дополнение15October: Катя согласовала [короткие ответы WEB16–21](web-answers-16-21.md), включая новую попытку доработки после terminal и отдельное одобрение версии. Точный текст отправлен одним комментарием в PPS-138 и перечитан плагином. Это принято web-владельцем, но ещё не всеми сторонами и не реализовано. Срез несовместимости ниже сохраняется; новых service tests/merge нет.

1. Найти связь в [каталоге границ](boundaries.md), затем открыть указанный ниже исходный контракт.
2. Проверить обе стороны по [матрице совместимости](compatibility.md). «Совпадает» относится только к указанному пункту и версиям, не ко всему сервису.
3. После согласованной правки повторить [контрактные проверки и сквозной сценарий](verification.md). Приложить SHA обеих сторон и доказательство, прежде чем менять вердикт.

## Закреплённые реализации

Все SHA проверены через GitHub и прочитаны в изолированных снимках. Ветки — навигация, не фиксация версии.

| Компонент / роль | Версия среза | Статус |
|---|---|---|
| Общий `master` | [`1ee2950c601677b87fd45d56a946f57f03b61d42`](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/1ee2950c601677b87fd45d56a946f57f03b61d42) | Общая исходная база; не содержит всех изменений открытых PR |
| WEB baseline `PPS-2` | [`aa9bb424c739d5618d0ff6fee56ba32090ee3d28`](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/aa9bb424c739d5618d0ff6fee56ba32090ee3d28) | Исторические спецификации/демо; не реализация React B |
| WEB B — Катя | [`8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7`](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product), [draft PR #11 → PPS-2](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/11) | Клиент реализован, V2 API proposed и выключен по умолчанию; PR не слит |
| Gateway — Дима | [`2f9d85051d99a559262473060fd572f0ee21a942`](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/2f9d85051d99a559262473060fd572f0ee21a942/backend), `demo-gateway` | REST history + browser WS + локальный Claude subprocess; не runner-сервер из PR #10 |
| Runner — Илья | [`2e2516673090b2ffb3b790b18533a6929007b65d`](https://github.com/AcryCxde/PP-Sber-Autumn-2026/tree/2e2516673090b2ffb3b790b18533a6929007b65d/runner), [PR #10](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/10) | В том числе WS client и v0 translator; открытый PR в master, не общий деплой |
| Хранение — Арина | [`579bd005fe662d18172ab78979bcaf6199ab23a5`](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/tree/579bd005fe662d18172ab78979bcaf6199ab23a5), [PR #7](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/7) | ADR Proposed; работоспособный отдельный storage API этим PR не подтверждён |
| Инфраструктура — Филипп | [`c287193dccd95b655a43ef47650db5e99fc14739`](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/tree/c287193dccd95b655a43ef47650db5e99fc14739), [PR #9](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/9) | Compose/SQL/Dockerfile; не доказательство совместного запуска четырёх сервисов |

## Контракты: один указатель на каждый источник

| ID | Исходный документ / версия | Применение и граница доказательства |
|---|---|---|
| C-01 | [Runner protocol, PR #10](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2e2516673090b2ffb3b790b18533a6929007b65d/docs/2.4/protocol.md), wire `v=1` | Runner↔gateway: hello/welcome, команды/ack, events/heartbeat/replay. Документ и код runner есть; gateway endpoint не реализован в проверенной версии |
| C-02 | [Public events v0, PR #10](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2e2516673090b2ffb3b790b18533a6929007b65d/docs/contracts/events-v0.md), `schema=events.v0` | Уже содержит открытые вопросы и §11 требований к gateway. Черновик на согласование; fixture синтетические. Не создавать вместо него ещё один event schema |
| C-03 | [Gateway protocol snapshot](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2f9d85051d99a559262473060fd572f0ee21a942/docs/2.4/protocol.md), [events snapshot](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2f9d85051d99a559262473060fd572f0ee21a942/docs/contracts/events-v0.md) | Документы лежат и на gateway-ветке; само наличие не означает реализацию. Фактический формат задают [main.py](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2f9d85051d99a559262473060fd572f0ee21a942/backend/main.py#L699), [schemas.py](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2f9d85051d99a559262473060fd572f0ee21a942/backend/schemas.py), [public_events.py](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/2f9d85051d99a559262473060fd572f0ee21a942/backend/public_events.py#L83) |
| C-04 | [ADR-001 storage, PR #7](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/blob/579bd005fe662d18172ab78979bcaf6199ab23a5/docs/adr/ADR-001-storage.md), Proposed | PostgreSQL metadata + Git files, ownership, состояние/сохранение. Это архитектурное предложение, не HTTP/OpenAPI-контракт работающего сервиса |
| C-05 | [SQL](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/blob/c287193dccd95b655a43ef47650db5e99fc14739/init.sql), [Compose](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/blob/c287193dccd95b655a43ef47650db5e99fc14739/docker-compose.yml), PR #9 | Фактический DDL/config сверять с ORM gateway и ADR; пока не объявлять согласованной миграцией |
| C-06 | [WEB B V2 proposal](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/ctf-v2-contract.md) | Потребности богатого UI, не принятый backend API. Точные отправляемые поля: [api.ts](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/src/api.ts), [App.tsx](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/src/App.tsx#L426), [domain.ts](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/src/domain.ts#L151) |
| C-07 | [WEB A integration](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-app/docs/integration.md), [storage requirements](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-app/docs/storage-requirements.md) | Старший по истории, минимальный клиент A; тоже proposed. A и B не объявляются двумя обязательными production API. Сопоставлять при решении о единственном адаптере |
| C-08 | [Pilot result ZIP](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-app/docs/pilot-result-contract.md), [research storage proposal](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/research-storage-proposal.md) | Предложение состава результата; хранение исследовательских данных отдельно proposed. Не подтверждает ZIP exporter или серверный сбор метрик |
| C-09 | [PPS-2: индекс эпика 2.5](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/aa9bb424c739d5618d0ff6fee56ba32090ee3d28/web-demo/epic-2.5-v3/README.md), [сводка](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/aa9bb424c739d5618d0ff6fee56ba32090ee3d28/web-demo/epic-2.5-v3/СВОДКА-ЭПИК-2.5-ДОГОВОРЁННОСТИ.md), пример `contractVersion=1.0` | Исторические access/state/event/auth/error требования. Индекс прямо запрещает переносить слово «согласовано» на реализацию v9. CamelCase/underscore events не равны C-02 dot/snake-case. Проценты/ETA и продуктовые лимиты не вводить автоматически из исторического примера |
| C-10 | [PPS-2 demo architecture](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/aa9bb424c739d5618d0ff6fee56ba32090ee3d28/web-demo/ARCHITECTURE.md), [server.js](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/aa9bb424c739d5618d0ff6fee56ba32090ee3d28/web-demo/server.js) | Отдельный локальный симулятор REST/SSE; v9 к нему не подключён, `x-demo-user` подставляется клиентом. Не production gateway, не средство обхода интеграционных блокеров |

Перечень относится к указанным refs/открытым PR и доступным файлам; не утверждает, что непереданных локальных контрактов команды нет. Вложенный `--main.zip` в PPS-2 не заменяет версионируемый исходный ADR C-04. При новом документе добавить ссылку/версию и отношение к существующему источнику: уточняет / заменяет после принятия / исторический. Не объявлять замену самостоятельно.

## Чего ждать от владельцев

Это чеклист ревью по направлениям, **не новые отправленные задачи** и не согласованные сроки.

| Кто | Что подтвердить / исправить | Результат ревью |
|---|---|---|
| Дима — gateway | C-01/C-02 §11 против gateway; runner endpoint/auth, handshake, replay/dedup, active waiting, безопасная проекция, маршруты web и save gate | SHA gateway + «принимаю / предлагаю правку» к существующим контрактам; проходящие boundary-тесты |
| Илья — runner | Закреплённая версия C-01/C-02, command/run ID, question/answers semantics, replay cursor, checkpoints и передача байтов | SHA runner + ответы на открытые вопросы C-02, без второго документа-схемы |
| Арина — хранение | C-04 против ORM/DDL; callable write/read interface, bytes→Git→push→metadata→receipt, IDs/versions, auth/удаление/recovery | Подтверждённая реализация/миграция или точное «не реализовано»; durable receipt и read-back |
| Катя — web | Отображение существующих событий/состояний в B, question/multi-question answers, файлы/этапы/версии, авторизация, server restore | Один согласованный mapping/adapter в исходном контракте; отсутствие ложного saved/completed |
| Филипп — соединения | Общий manifest SHA, URLs/WS paths/reverse proxy, секреты без публикации, DATABASE_URL/миграции/volumes, readiness | Доступный стенд и подтверждённые соединения; не только поднятая БД |

Нужны совместное решение о mapping и один Integration Owner. WEB-позиция16–21 принята Катей и отправлена; принятие другими владельцами, деплой и пользовательские результаты не подтверждены. PR #11 не сливать.
