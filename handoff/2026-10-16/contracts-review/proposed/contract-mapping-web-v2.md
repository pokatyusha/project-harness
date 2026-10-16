# Сверка контрактов: runner ↔ gateway ↔ web V2

**Статус:** черновик для согласования. Задачи PPS-170 / PPS-138 и общий mapping. Согласуют Дмитрий (gateway), Арина (хранение), Катя (web), Илья (runner).
**Дата исходной сверки:** 2026-10-15. **Дополнение на ревью:** 2026-10-16. Документ сопоставляет источники, код этим патчем не меняется. «Не найдено» относится к закреплённому снимку, а не ко всем возможным веткам.

## Источники и обозначения

| Метка | Что | Где |
|---|---|---|
| **R-proto** | протокол runner ↔ gateway | `docs/2.4/protocol.md` (ветка `facilitator-question-resume`, слитая с master `1ee2950`) |
| **V0** | публичная лента events v0, §11 «Что требуется от gateway» | `docs/contracts/events-v0.md` (там же) |
| **R-code** | клиент и адаптер runner | `runner/src/ctrunner/gateway.py`, `runner/src/ctrunner/v0.py` (там же) |
| **GW** | реальный gateway из PR #4 | `backend/main.py`, `backend/public_events.py`, `backend/repository.py`, `backend/models.py`, `backend/api/history.py`, `backend/config.py` (master `1ee2950`) |
| **W-B** | предложение web V2 («B») | `origin/codex/coreteams-v92-product-workspace-2026-10-15` (`8ab6c2a`): `web-product/docs/ctf-v2-contract.md`, `web-product/src/api.ts`, `web-product/src/domain.ts`, `web-product/docs/journey-metrics.md`, `web-product/docs/research-storage-proposal.md` |
| **W-A** | предложение web («A», react handoff) | `origin/codex/coreteams-react-handoff-2026-10-15` (`f6eff66`): `web-app/docs/integration.md` |
| **ADR** | Storage ADR-001, Proposed | [PR #7, fork KolbasnyaAr, head 5b9b5f7456750f2d4eae83f621e63969c83262ca](https://github.com/KolbasnyaAr/PP-Sber-Autumn-2026/blob/5b9b5f7456750f2d4eae83f621e63969c83262ca/docs/adr/ADR-001-storage.md); правки ниже относятся к предложению на ревью, не к уже принятому ADR |

Ссылки вида `файл:N` — номер строки в указанной ветке/коммите.

### Дополнение 2026-10-16: границы подтверждения и приоритет

Исходный аудит §1–3 сохранён как исторический снимок 15 октября. Утверждения «не найдено в W-B» в нём относятся к `8ab6c2a`, не к текущему WEB. Для WEB16–21 актуален [B ce8b6f4259f682f74e128fcce12e0290e02f9186](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/ce8b6f4259f682f74e128fcce12e0290e02f9186/web-product/docs/ctf-v2-contract.md). Runner-семантика сверяется с [events.v0 f9dca8e57e778543a29d98ef704e466ab8fb3776](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/f9dca8e57e778543a29d98ef704e466ab8fb3776/docs/contracts/events-v0.md). Строки gateway ниже не переаудированы и не становятся совместимыми от изменения документа.

**Подтверждено Катей:** WEB16–21 и запись через gateway. Илья также подтвердил WEB16–21; это не принятие всего нового ADR/mapping и не согласие Димы/Арины. **На ревью:** изменения ADR и общая реализация связей. Нет общего Accepted, доказательства сервера/хранения или реального E2E. PR #11 остаётся draft, не сливать.

**Обновление источников перед публикацией:** проверены существующие ветки runner: [input/usage/hash8bfe889](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8bfe889928c8b2755eb3545eee4758162e7bde0e/docs/contracts/events-v0.md), [ZIP builder d7db14a](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/d7db14afffee64d2dea86076bf7358931c6ee40f/docs/2.4/result-package.md), [fork/WSS61d4853](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/61d48533365234e14f95ed90bc3fddb7f5e7a28e/runner/README.md), [isolation8be086c](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8be086cf8fa69d0a32c06c755af4ec396d7ee395/docs/2.4/isolation-matrix.md). Там есть расширенный events.v0 и сборщик ZIP; их не требуется писать заново. Наличие веток/документов и заявленных локальных проверок не означает включение в общий контур или реальный E2E. Исходные пункты22–25 ниже — историческая формулировка плана; обновление этого блока уточняет их текущий статус.

| Граница | Единое правило для ревью | Что не закрыто |
|---|---|---|
| runner → gateway → 2.3 | Gateway/адаптер 2.3 — durable writer; runner создаёт локальный checkpoint. artifact.created ≠ сохранение | Способ получения bytes точного commit, auth, checksum/размер, executable interface |
| events.v0 → ADR → WEB | waiting_for_input; полный snake_case-конверт; questions[]; один последний терминал. UI camelCase — явная проекция | Сверка кода gateway и DTO WEB, контрактные тесты |
| timeout → reconciliation | outcome_unknown терминален. Сверяется operation, закрытый Run не переоткрывается и не получает поздние события | DTO отдельного аудита/чтения позднего результата; политика без скрытого запуска модели |
| документ → версии → approve | Stable documentId, immutable versionId, новый Run для явной доработки после completed; receipt одобрения отдельно от Run | Миграции, ownership, конкурентная нумерация, повторное открытие, ZIP и replay |

Не заменять закреплённый старый v0 незаметно. Расширения runner22–25 уже присутствуют в исходной ветке8bfe889; выбрать совместимый общий SHA, проверить поддержку gateway/WEB и сохранить источник один. Это принятие/подключение существующей работы, а не задание написать её заново.


## 1. Краткий вывод

- **Совместимо:** `run_id` (формат runner `[0-9A-Za-z_-]{1,64}` — `docs/2.4/protocol.md:83` — принимает UUID gateway, `backend/models.py:77`); идемпотентность создания по `client_request_id` (`backend/repository.py:147-205`); replay по `seq` (`backend/api/history.py:109`, `backend/main.py:543-619`); один Run проходит через вопрос и ответ (`docs/contracts/events-v0.md:28`, `docs/2.4/protocol.md:83-84`) — это то, что нужно W-B (`ctf-v2-contract.md:19`).
- **Не совместимо:** реальный gateway вообще не говорит с runner — он сам запускает `claude` через `subprocess` (`backend/main.py:76-108,407-412`), эндпоинта для runner, `hello`/`welcome`, приёма `event`, команды ответа нет (`grep` по `backend/` не находит). Публичная проекция превращает `facilitator.question`, `user.answer.accepted`, `progress.updated`, `artifact.created`, `role.*` в `legacy.redacted` (`backend/public_events.py:165-172`). Web B ждёт HTTP-проекты/снимки Run/ZIP/approve (`ctf-v2-contract.md:15-22`), gateway отдаёт только WS `run.create`/`run.subscribe` и GET истории (`backend/main.py:738,798`, `backend/api/history.py:44-131`).
- **Блокирует реальный E2E (по убыванию):** (1) серверная часть для runner в gateway (V0 §11, п. 1–10); (2) нет понятия «проект», `stageId`, версий документа, ZIP, `sha256`, usage ни в gateway, ни в runner; (3) нет auth/ownership у клиентского API gateway; (4) HTTP-слой для web или WS-клиент в web; (5) неопределён канал содержимого артефактов из тома runner в хранилище 2.3 (`docs/contracts/events-v0.md:152`, п. 11); ADR хранения лежит в PR #7, в этом документе не разобран.
- Web имеет два несогласованных между собой варианта (W-A и W-B): разные маршруты сохранения, форма Run и набор статусов (`integration.md:9-16` и `ctf-v2-contract.md:15-24`). Нужен один.

## 2. Таблица по этапам пути

Статусы: **подтверждено** — есть в коде/контракте и согласуется с web; **предложено** — описано только в документе, кода нет, либо только со стороны web; **отсутствует** — нигде не найдено; **конфликт** — стороны описывают по-разному.

| # | Этап | Web V2 ожидает | Gateway сейчас | Runner сейчас | Статус | Владелец решения |
|---|---|---|---|---|---|---|
| 1 | Создать проект | `POST projects` с `clientProjectId`, title, goal, context, scenario, ответами подготовки, ролями, этапами, метаданными файлов → `{id}` (`ctf-v2-contract.md:15`; `api.ts:95-100`). В W-A тоньше: `{clientProjectId,title}` (`integration.md:11`) | Сущности «проект» нет. Диалог (`Conversation`) создаётся неявно первым `run.create` без `conversation_id`, title = начало промпта (`backend/repository.py:231-238`, `76-81`; `backend/models.py:34-62`). Отдельного create нет | `project_id` — идентификатор контейнера/тома `proj-<id>` (`docs/2.4/spec.md:48`), приходит в `hello` (`docs/2.4/protocol.md:21`). Создания проекта нет | отсутствует; конфликт имён project/conversation | Дима (маршрут, соответствие project ↔ conversation ↔ том), Арина (хранение метаданных) |
| 2 | Загрузка входных файлов | `POST projects/{id}/files`, FormData, `clientFileId`, `sha256`; ответ `{id,sha256}` (`ctf-v2-contract.md:16`; `api.ts:101-120`) | Не найдено | Не найдено: единственные команды `message`/`fork_answer`/`stop` (`docs/2.4/protocol.md:80-84`); файлы в `/workspace/project` runner не принимает по протоколу | отсутствует | Дима, Арина, Илья |
| 3 | Старт Run | `POST projects/{id}/runs`, ответ — снимок Run `{id,revision,status,stageId,question?,messages,artifacts,usage?}` (`ctf-v2-contract.md:17,24`) | WS `run.create{conversation_id?, client_request_id(UUID), content, context_mode}` (`backend/main.py:738-796`); ответ — поток событий, снимка нет. Запуск через локальный `claude` (`main.py:407-412`) | Команда `message{id, text}`; `id` = `run_id` = `turn_id`, выбирает gateway (`docs/2.4/protocol.md:83`). Ответ `command_ack accepted\|rejected` (`:26`) | конфликт (транспорт и форма ответа) | Дима |
| 4 | `running` | `status=running`, опрос раз в 2.5 с (`ctf-v2-contract.md:24,32`) | `run.accepted` → `run.started` (`backend/repository.py`, `main.py:402-405`); статусы `pending/running/...` (`backend/models.py:82`) | `turn_started` → `run.started`, роли `role.started/completed`, `message.created`, `progress.updated` (`docs/contracts/events-v0.md:39-47`) | предложено (runner → web не проходит через gateway) | Дима |
| 5 | `waiting_for_input` / вопрос | `status=clarification`, `question:{id,text}` (`ctf-v2-contract.md:24`; `domain.ts:152-170`) — один текст | Статуса `waiting_for_input` нет; активны только `pending/running` (`backend/repository.py:25`). `facilitator.question` режется в `legacy.redacted` (`public_events.py:165-172`). Команды ответа нет (`main.py:738,798` — только create/subscribe) | `facilitator.question{question_id, questions[]{text,header,options[],multi_select,allow_custom}}` (`docs/contracts/events-v0.md:45`; `runner/src/ctrunner/v0.py:163,382`); `phase=awaiting_answer` в heartbeat (`docs/2.4/protocol.md:30`) | конфликт: runner отдаёт структурированные вопросы (1..n), web ждёт один `{id,text}`; gateway не пропускает | Катя (форма вопроса), Дима (статус, проекция) |
| 6 | Ответ в тот же Run | `POST .../runs/{runId}/answers {questionId, answer}` → тот же Run (`ctf-v2-contract.md:19`) | Нет | `command{kind:fork_answer, id:<новый>, fork_id:<question_id>, answers:{текст вопроса: метка/свой текст}}`; ключи должны точно совпасть с `questions[].text`, multi-select склеивается `", "` (`docs/2.4/protocol.md:84,86`). После рестарта runner вопрос задаёт заново с новым `question_id`, старый → `rejected unknown_fork` (`:100,171`, V0 §11 п. 8) | предложено (контракт runner есть, gateway и web не подогнаны) | Дима (HTTP/WS → `fork_answer`), Катя (`answer` строка → `answers` map) |
| 7 | Результат: документы + immutable версии | Артефакт `{id, documentId, stageId, version(int≥1 в stage+document), title, content, saved, savedAt?, approved?}`; старые байты не меняются (`ctf-v2-contract.md:20,26`; `domain.ts:56-66`) | Артефакт = успешный `Write` из потока CLI, только текст (`main.py:438-453,336-369`); `Edit`/`MultiEdit` не учитываются. Модель `Artifact(id:int, run_id, event_seq, path, content, size_bytes, truncated)` (`models.py:169-190`). Нет `artifact_id`, `version`, `documentId`, `hash` | `artifact.created{artifact_id=uuid5(sha:path), path, commit_sha, role_id}` после checkpoint (`runner/src/ctrunner/v0.py:262-270`); только метаданные, содержимое не передаётся (`docs/contracts/events-v0.md:77,152`) | конфликт: три разных идентификатора документа/версии; `stageId`/`title`/`version` нигде не определены | Арина (ID версий), Дима, Катя |
| 8 | Сохранить + подтверждение | `saved=true` только после подтверждённой записи в хранилище, `savedAt` обязателен; `approve` — отдельный POST (`ctf-v2-contract.md:21,26`). В W-A сохранение — `POST projects/{id}/artifacts {runId,resultId}` → `{saved,artifactId,version,savedAt}` (`integration.md:15,18`) | `artifact.saved{path,size_bytes,num_lines,truncated}` эмитится сразу после вставки в свою БД SQLite (`main.py:357-369`; `public_events.py:115-128`; `config.py:14`), без `artifact_id`/`version_id`/`download` | V0: `run.completed` держится до `artifact.saved` от 2.3 (`docs/contracts/events-v0.md:65`; п. 10 §11); `artifact.saved` вида `{artifact_id, version_id, size_bytes, download}` (`:49`) | конфликт; approve в V0 отсутствует; хранилище 2.3 не описано (ADR не найден) | Арина, Дима, Катя |
| 9 | ZIP | `GET .../artifacts/{artifactId}/zip` — ZIP подтверждённой immutable версии; клиент проверяет MIME и сигнатуру `PK` (`ctf-v2-contract.md:22`; `api.ts:128-171`) | Только `GET /api/runs/{run_id}/events/{event_seq}/file`: текст, `application/octet-stream`, 413 для усечённого/>10 МБ (`history.py:131-180`; `config.py:22-25`) | Не найдено | отсутствует | Арина (состав пакета), Дима (эндпоинт), Катя |
| 10 | Повторное открытие / список | В W-B серверного read/list нет: reopen — из локального снапшота браузера (`ctf-v2-contract.md:36`; `integration.md:24`); межустройственный список требует утверждённого API | `GET /api/conversations` (id, title, status, context_state, active_run_id, даты), `.../messages`, `.../events` (`history.py:44-106`). Без фильтра по владельцу | Не найдено | предложено (данные есть, owner-фильтра и project-семантики нет) | Дима, Арина, Катя |
| 11 | Usage | Необязательный `usage{inputTokens,outputTokens,requests,computeSeconds,cost,currency}` на Run; пропущено = неизвестно, 0 = измерено 0 (`ctf-v2-contract.md:28`; `journey-metrics.md:39`) | `Run.cost_usd`, `duration_ms`, `turns` пишутся в БД (`models.py:95-97`; `repository.py:558`), в API и в `run.completed` не выходят (`public_events.py:129-139`). Токенов нет | Токены и стоимость сознательно не публикуются (`docs/contracts/events-v0.md:75`) | отсутствует | Илья, Дима, Арина |
| 12 | Ошибки / unknown / retry | Статусы `running\|clarification\|review\|completed\|failed`; `outcome_unknown` нет (`domain.ts:78`). Ошибки HTTP: 401/403 → «нет доступа», прочее → «исход не подтверждён» (`api.ts:73-78`). Автоповтора POST нет; повтор с тем же ключом и телом (`ctf-v2-contract.md:32`) | Терминалы `run.completed/failed/outcome_unknown` с `error_code`, `retryable`, `can_reset_context` (`public_events.py:140-163`). Ошибки команд — WS `command.error{code,message,retryable}` (`main.py:196-216`); `idempotency_conflict`, `conversation_busy`, `gateway_busy` (`repository.py:190,260`; `main.py:724,790`) | `run.failed{code,retryable}` (`v0.py:355-362`), `run.outcome_unknown{state_corrupt}`; `heartbeat_lost` публикует gateway (`docs/contracts/events-v0.md:66`) | конфликт: у web нет состояния «исход неизвестен» | Катя, Дима |

## 3. Конфликты и пробелы по полям и идентификаторам

### 3.1 Идентификаторы

| Понятие | Web V2 | Gateway | Runner / V0 | Проблема |
|---|---|---|---|---|
| project | серверный `id` из `POST projects`, плюс `clientProjectId` (`ctf-v2-contract.md:15`) | `conversation_id` (UUID, `models.py:37`), создаётся неявно | `project_id` — непрозрачная строка, том `proj-<id>` (`spec.md:48`; `events-v0.md:27`) | Не определено: один project = один conversation = один том? Gateway при `run.create` без `conversation_id` создаёт новый диалог (`repository.py:231`); том runner к нему не привязан. Не найдено, где и кем создаётся `project_id` для runner |
| request | заголовки `Idempotency-Key`/`X-Correlation-ID` на каждый POST (`api.ts:58`), область — actor+project (`ctf-v2-contract.md:32`) | `client_request_id` — **UUID**, уникален глобально, в теле WS-команды (`main.py:743-747`; `models.py:83-87`) | `client_request_id` в `run.accepted` (`events-v0.md:40`) | Ключи файлов, ответов, approve (`fileId`, op UUID) gateway не знает; область уникальности глобальная, а не actor+project |
| run | `Run.id` один на весь цикл вопрос/ответ/правки (`ctf-v2-contract.md:19-20`) | `Run.id` = uuid4, один на команду пользователя (`models.py:77`) | `run_id` = `turn_id` = `id` команды `message` (`protocol.md:83`); терминальное событие последнее, после него событий нет (`events-v0.md:64`) | Web: `POST .../messages` и «доработка» идут **в тот же Run** и порождают новую версию (`ctf-v2-contract.md:20`). V0: Run закрыт терминалом, новая команда = новый Run. Конфликт модели |
| turn | не используется | не используется | `turn_id` внутреннее, = `run_id` | совместимо; наружу не нужен |
| event | нет | `Event.id` (int) и `(run_id, seq)`; **`event_id` в модели нет** (`models.py:147-166`) | `event_id` — ключ дедупликации (`events-v0.md:68`; `v0.py:309,323`) | Дедупликация по `event_id` в gateway не реализована |
| document / version | `documentId` группирует версии; `Artifact.id` — id версии; `version` — int, уникален в (stage, document) (`ctf-v2-contract.md:26`) | `Artifact.id` (int), ключ `(run_id,event_seq)` (`models.py:172`); версии нет | `artifact_id = uuid5(commit_sha:path)` — меняется с каждым коммитом (`v0.py:268`); `version_id` в `artifact.saved` задаёт 2.3, в fixture строка `"v1"` (`fixtures/happy.v0.jsonl`, строка `artifact.saved`) | Нужна одна схема: `documentId` (стабильный по пути в проекте), `versionId` (выдаёт хранилище), `version` (целое). Runner-овый `artifact_id` — id снимка, не документа |
| stage | `stageId` обязателен в Run и Artifact, должен соответствовать согласованному плану (`ctf-v2-contract.md:24`; `domain.ts:152-165`) | не найдено | не найдено (есть только роли) | Откуда берётся `stageId` — не определено |

### 3.2 Содержимое, хеш, роли

- **Байты и хеш.** Web шлёт `sha256` на загрузку и требует его эхо (`api.ts:117`). В gateway нет приёма файлов; у `Artifact` нет поля хеша (`models.py:169-190`); у `artifact.created`/`artifact.saved` нет `sha256` (`events-v0.md:48-49`). Только текст: `content: Text`, при скачивании `encode("utf-8")` (`history.py:163`), бинарные файлы невозможны. Web B ожидает содержимое версии прямо в снимке (`content: string`, `ctf-v2-contract.md:26`), V0 запрещает содержимое в ленте (`events-v0.md:77`).
- **Роли и этапы.** Web: выбранные роли и `teamNote`, редактируемые этапы (`ctf-v2-contract.md:15`); W-B также требует проверки ролей по реестру CTF и отчёта о недоступных (`:36`). Runner знает только `role_id = subagent_type` из `.claude/` проекта (`events-v0.md:87`, `spec.md:49`); команда `message` несёт только `text` (`protocol.md:82`). Передачи ролей/этапов в runner **не найдено**. Сообщения web: `role ∈ user|facilitator|system` (`domain.ts` `Message`), V0: `message.created{role_id|null, text}` (null = фасилитатор), gateway: `role:"claude"` (`public_events.py:221`; `main.py:459`).
- **Сообщения пользователя.** V0 не публикует постановку пользователя, она «в истории сообщений gateway» (`events-v0.md:75`); gateway кладёт сообщение внутрь `run.accepted` (`public_events.py:94-101`) и отдаёт `GET .../messages` (`history.py:67-82`). Для web (`messages[]` с `at`) источник один — история gateway; формат id/ролей не совпадает (`MessageRead.role` — строка, `schemas.py:19-29`).

### 3.3 Формат ленты

Три разных формата одной ленты:

1. V0: `{schema:"events.v0", event_id, project_id, run_id, seq, occurred_at, type, payload}` (`events-v0.md:18-21`).
2. Gateway WS: плоский объект `{type, schema_version, ...поля, conversation_id, run_id, seq}` (`main.py:159-166`).
3. Gateway REST: `{run_id, seq, type, payload, created_at}` (`schemas.py:32-39`; `history.py:33-41`).

`schema_version` (число) против `schema` (строка), нет `event_id`, нет `project_id`, `created_at` вместо `occurred_at`. V0 §9 п. 1 просит решение Димы — оно не зафиксировано.

### 3.4 Usage

- Правило web: неизвестное — не 0 (`ctf-v2-contract.md:28`; `journey-metrics.md:39`). Источника токенов в runner/V0 нет (`events-v0.md:75`). Gateway хранит `cost_usd` как `Numeric | None` (`models.py:96`), но в API не выводит; при отсутствии `result` пишет `None` (`main.py:381-383`) — совместимо с «неизвестно». Риск: любой сериализатор, превращающий `None` в 0.
- `computeSeconds`, `requests`, `currency` не найдены нигде на стороне gateway/runner. `duration_ms` ≠ `computeSeconds` (разные смыслы, нужно решение).

### 3.5 Идемпотентность и retry без второго Run

- **Создание Run.** Gateway: повтор `client_request_id` с тем же телом возвращает старый Run (`idempotent_replay`), с другим — `idempotency_conflict` (`repository.py:147-205`; `main.py:301-308`); при перегрузе существующий запрос всё равно допускается (`main.py:764-775`). Это совпадает с V0 п. 7 (`events-v0.md:70`) и с требованием web.
- **Что не покрыто.** Область ключа — глобальная, не actor+project (`models.py:83-87`; `ctf-v2-contract.md:32`). Для ответа, `messages`, `approve`, загрузки файла идемпотентности в gateway нет (команд нет).
- **Ответ на вопрос.** Runner подтверждает `fork_answer` до исполнения (at-most-once, `protocol.md:170`), `duplicate` в `command_ack` не различается (`protocol.md:26,101`). После рестарта runner `question_id` меняется, ответ на старый → `rejected unknown_fork` (`protocol.md:100,171`). Web B хранит исходное тело и повторяет с тем же ID (`ctf-v2-contract.md:32`), т. е. в таком случае получит ошибку без объяснения; web должен перечитать вопрос.
- **Один активный Run на диалог** обеспечивает частичный уникальный индекс только по `pending/running` (`models.py:68-74`); при добавлении `waiting_for_input` его надо расширить (V0 §11 п. 4). Иначе во время вопроса возможен второй Run.
- **Повтор на живом соединении.** `GatewayClient` при обрыве шлёт всё с `journal_seq > acked_seq` (`gateway.py:222-223`); gateway обязан схлопывать по `event_id` — этого сейчас нет (п. 3.1).

### 3.6 Auth и ownership

- **Gateway для клиентов:** проверки аутентификации, владельца, CORS/CSRF в `backend/` не найдено. `GET /api/conversations` отдаёт все диалоги всем (`history.py:44-64`); `WS /ws` принимает соединение без проверки (`main.py:877-879`).
- **Runner → gateway:** Bearer-токен на проект, файл `/run/secrets/gateway_token` (`protocol.md:12`; `gateway.py:211`), проверка на сервере — требование V0 §11 п. 1, кода нет.
- **Web B:** cookie `same-origin`, без токенов в env (`api.ts:63`; `ctf-v2-contract.md:9`). Кросс-доменный вариант (CORS/CSRF) «должен быть спроектирован» (`:9`). Изоляция tenant/actor — «обязательный live gate» (`:36`), реализации нет.
- **Сопоставление `actor` ↔ project ↔ том runner** не найдено.

### 3.7 Прочее

- **Транспорт web.** Web делает только HTTP (GET опрос раз в 2.5 с, POST) (`api.ts:32-94`; `ctf-v2-contract.md:32`). Gateway принимает команды только по WS; REST только на чтение. Нужен либо REST-слой, либо WS-клиент в web.
- **Снимок Run.** `revision` монотонный (`ctf-v2-contract.md:18`), у gateway снимка нет; потенциально `revision = последний seq`.
- **Окно подписки.** WS-подписка живёт `subscription_window_seconds = 15` с, затем `replay.complete{terminal:false}` и надо переподписываться (`config.py:27`; `main.py:602-614`). Для SSE/WS-режима web это отдельный протокол.
- **Прерывание/«heartbeat_lost».** Gateway помечает `heartbeat_lost` при `CancelledError` (остановка процесса gateway) (`main.py:522-525`), хотя heartbeat от runner он не получает вовсе — семантика кода расходится с V0 п. 3.
- **Отмена.** `stop` останавливает контейнер runner, ход после рестарта продолжается (`session.py:287-289` как `Exit.STOPPED`; V0 §9 п. 2). Web отмены Run не запрашивает (не найдено в `ctf-v2-contract.md`).
- **Метрики web.** Дедупликация save/approval по immutable version ID без счёта на polling/reload (`journey-metrics.md:35`); подтверждение сохранения должно быть видно клиенту. Хеши и имена файлов в метрики не попадают (`:43`). `research-storage-proposal.md` относится к отдельному исследовательскому хранению (`study`/`research_event`, `:9`), не к продуктовым проектам; продуктового хранения Арины там нет.

## 4. Вопросы

Формат: кому — вопрос (самодостаточно) — предложение ответа по умолчанию.

### Дмитрию (gateway)

1. **Эндпоинт для runner.** Сейчас gateway сам запускает `claude` через subprocess (`backend/main.py:407-412`), эндпоинта для `hello`/`event`/`command` нет. Реализуешь серверную часть по `docs/contracts/events-v0.md` §11 (WS с Bearer-токеном на проект, `welcome{acked_seq}`, приём `event`, `command_ack`) и когда? *По умолчанию:* да, отдельный маршрут `/runner/ws`; старый subprocess-путь остаётся флагом `GATEWAY_EXECUTOR=local|runner`, E2E идёт через `runner`.
2. **Формат ленты.** Gateway хранит `schema_version` без `event_id`/`project_id`. Переходим на V0 (`schema:"events.v0"`, `event_id`, `occurred_at`) и храним `UNIQUE(event_id)` для дедупликации? *По умолчанию:* да, добавить колонку `event_id` и `project_id`; REST и WS отдают полный V0-конверт; `schema_version` убирается.
3. **Статус `waiting_for_input` и проекция.** Добавляем `waiting_for_input` в активные статусы (индекс `uq_runs_one_active_per_conversation`, `backend/models.py:68-74`) и пропускаем через `public_events` типы `facilitator.question`, `user.answer.accepted`, `progress.updated`, `artifact.created`, `role.*`? *По умолчанию:* да, как в V0 §11 п. 4–5.
4. **Команды web → gateway.** Актуальный B использует HTTP-команды проекта/Run/answers и отдельный approve. Явная доработка после completed — новый `POST .../runs` в том же проекте с привязкой к исходной версии; старый `.../messages` не продолжает терминальный Run. Нужна REST-проекция существующего runner protocol, не второй конкурирующий протокол. Точные маршруты и DTO проверяет Дмитрий по текущему W-B; они не реализованы этим mapping.
5. **Проект = диалог?** Предлагаю: `project_id` (runner/том) = `conversation_id` gateway = `id` из `POST projects`; `POST projects` создаёт Conversation и привязывает том. Подходит? *По умолчанию:* да, один идентификатор (UUID) на всё, `clientProjectId` хранится как ключ идемпотентности создания.
6. **Auth и ownership.** Как gateway определяет actor (cookie-сессия, токен) и фильтрует `/api/conversations`, `/ws`, `.../events`, `.../file`, ZIP? Сейчас проверок нет (`backend/api/history.py:44-64`). *По умолчанию:* cookie-сессия того же origin (как ждёт web, `api.ts:63`), `owner_id` в `Conversation`, фильтр во всех чтениях, 404 на чужое; CORS/CSRF не открываем.
7. **Идемпотентность.** Web шлёт `Idempotency-Key` на каждый POST (`api.ts:58`), у gateway ключ только `client_request_id` (UUID). Принимаешь `Idempotency-Key` для всех мутаций с областью (actor, project) и отказом при другом теле? *По умолчанию:* да; для `run` ключ = `client_request_id`, для остальных новая таблица ключей.
8. **Ответ на вопрос.** WEB передаёт `questionId` и `answers: Record<string,string>` по точным `questions[].text`; multi-select соединяется `", "`. Gateway переводит в `fork_answer` с новым command id и текущим `fork_id`, **в том же Run**. `unknown_fork` требует перечитать новый вопрос, без автоматического переноса старого ответа; `answers_mismatch` не маскируется успешным ответом. Нужны DTO и тест нескольких вопросов/рестарта.
9. **Снимок Run.** Подтверждаешь `GET projects/{id}/runs/{runId}` как свёртку ленты, с `revision = последний seq`? *По умолчанию:* да, снимок строится сервером сворачиванием V0 по таблице §3 (`events-v0.md:38-52`).
10. **`heartbeat_lost`.** Сейчас в коде `CancelledError` → `heartbeat_lost` (`backend/main.py:522-525`). Заменить на `backend_restarted` и реально считать heartbeat runner (30 с)? *По умолчанию:* да.

### Арине (хранение)

11. **ADR хранения.** База ревью — ADR-001 из PR #7, fork `KolbasnyaAr`, head `5b9b5f7` (Proposed), не прежний `579bd00`/архив. В предложенных §2.1/2.5–2.8/3.1/5.1–5.2 сведены durable writer, events.v0, terminal/reconciliation и версии/approval. Арина подтверждает модель и миграции; статус Proposed сохраняется до общего ревью.
12. **Идентификаторы документа и версии.** Предложение §2.8 ADR: стабильный документ = (project, logical_path), не путь с run_id; `artifacts.id = version_id`, `version > 0` монотонен в документе, `UNIQUE(document_id, version)`. `source_artifact_id` сохраняет runner ID (`uuid5(commit_sha:path)`), а wire `artifact.saved.artifact_id` остаётся ID runner. WEB artifactId — alias storage versionId, не смешивать. Нумерация и повтор operation транзакционны; нужны миграции и тест конкуренции.
13. **Содержимое и сохранение.** Катя подтвердила запись через gateway/адаптер 2.3; runner не пишет в центральные PostgreSQL/Git-as-Storage. Gateway получает bytes **точного immutable checkpoint**, проверяет hash/size/path и подтверждение central commit/БД. Механизм получения bytes ещё открыт: не считать текущую ФС или metadata event передачей файла. Базовый `artifact.saved` содержит `artifact_id, version_id, size_bytes, download`; hash хранится в version metadata, расширение wire — только через исходный events contract. `run.completed` удерживается до подтверждения каждого artifact.created. Арина и Дмитрий согласуют интерфейс/ошибки/идемпотентность, Илья — checkpoint и передачу.
14. **Список и повторное открытие.** Будет ли у 2.3 чтение «мои проекты → Run → документы → версии» (cross-device)? *По умолчанию:* да, gateway отдаёт `GET projects`, `GET projects/{id}/runs`, `.../artifacts` из 2.3.
15. **ZIP и usage.** Кто собирает пакет ZIP (состав: итог, источники, манифест с checksums по `integration.md:18`), из какой версии? И хранит ли 2.3 usage Run (токены, requests, compute, cost, currency) с различием «нет данных» и 0? *По умолчанию:* ZIP собирает gateway из подтверждённой версии 2.3 на лету; usage — nullable-поля, `NULL` = неизвестно.

### Кате (web)

16. **Один вариант контракта.** Подтверждено Катей: W-B — основа продукта и текущей интеграции; W-A остаётся референсом/сравнением, не второй нормативный API. Текущий W-B — ce8b6f4; согласование сервером остаётся обязательным.
17. **Неизвестный исход и восстановление.** Подтверждено Катей и реализовано на стороне B ce8b6f4: outcome_unknown показывается отдельно, без автоповтора; interrupted/recovering/working — progress, а не новые terminal states. Gateway различает свой подтверждённый terminal event и клиентский сетевой сбой. После любого terminal никакого completed/failed/artifact.saved в том же Run, даже после сверки operation. Нужны совместные негативные тесты.
18. **Вопрос фасилитатора.** Подтверждено Катей; B ce8b6f4 поддерживает группу questions[] с header/options/multi_select/allow_custom и точный answers map. Gateway явно мапит snake_case V0 ↔ camelCase WEB; ответ продолжает тот же Run, unknown_fork перечитывает вопрос. Не сворачивать группу в одну строку и не подтверждать ответ до runner ACK.
19. **Этап, роли и вводные.** Подтверждено Катей: WEB передаёт выбранный stageId/роли/вводные. Gateway проверяет этап по сохранённому плану, роли по действующему реестру/возможностям runner, файлы по владельцу и наличию подтверждённых bytes, затем фиксирует принятый выбор. Простое echo запроса или упоминание роли в prompt не доказывает её выполнение; нужны реальные role events. Точный перевод входа — совместно с п.22, неизвестные/недоступные роли сообщать явно.
20. **Доработка после завершения.** Подтверждено Катей; реализовано на стороне B ce8b6f4: явная доработка completed-результата — **новый Run в том же проекте**, parentRunId/sourceVersionId ссылаются на исходный Run/версию. Стабильный documentId связывает immutable-версии; старый Run и результат не перезаписываются. Ответ фасилитатору — прежний Run. Retry/approval не создают новый Run. Поля хранения в ADR §2.8 — предложение для совместной реализации.
21. **Сохранение и одобрение.** Подтверждено Катей; B ce8b6f4 различает durable saved и approval receipt. saved — только подтверждённая gateway/2.3 версия; approve — отдельная авторизованная идемпотентная metadata-запись конкретной versionId (§2.8 ADR). Receipt `{receiptId, artifactId: versionId, version, approved:true, approvedAt}` возвращается и перечитывается отдельно, не изменяя terminal Run/status/revision. **Не добавлять artifact.approved в закрытую ленту Run.** Новая версия не наследует одобрение; до durable save receipt запрещён.

### Решения по runner (владелец 2.4)

Эти пункты относятся к стороне runner. Они приняты по умолчанию и реализуются, когда Дима и Арина закроют свои вопросы.

22. **Роли, этапы и файлы во входе.** Команда `message` получает необязательные поля `roles[]`, `stage` и `input_files[]` (пути в `/workspace/project`). Runner фиксирует роли и этап в промпте и пишет их в журнал. Файлы кладёт в том gateway до команды, runner их только читает.
23. **Usage.** Новое событие `usage.reported` с nullable-полями перед терминальным событием. Runner публикует только факты из `result` SDK. Если данных нет, поле пустое, а не 0. Нужно обновить `events-v0.md:75`.
24. **Артефакты.** `artifact.created` дополняется `size_bytes` и `sha256` файла на момент `commit_sha`. Gateway сверяет прочитанное с записанным.
25. **Рестарт при вопросе.** Отдельного события «вопрос устарел» не добавляем. Gateway снимает вопрос по `progress.updated{interrupted}` (V0 §11 п. 4). Ответ на старый `question_id` по-прежнему получает `rejected unknown_fork`.

## 5. Что дальше

1. Арина / Дмитрий / Илья ревьюят ADR + этот mapping по закреплённым версиям. Подтвердить либо адресно поправить storage writer, terminal/reconciliation, DTO и связь source_artifact_id → version_id. Катя принимает WEB-проекцию. Не считать отсутствие ответа согласием.
2. Зафиксировать в **существующих** исходных контрактах недостающий bytes-channel, auth, подтверждения, чтение версий/receipt и версионируемые расширения22–25. Не заводить параллельную схему.
3. Сверить обе реализации каждой границы: совпадает / нужна правка / не реализовано, с commit/file и тестом. Этот патч меняет только документы; исходный аудит §1–3 не является свежим PASS.
4. Контрактные проверки: replay/dedup, активное ожидание, вопросы/ответы, все файлы до completed, timeout/late-confirm после outcome_unknown, crash между Git/БД, immutable versions, отдельный approval, ownership и повторы.
5. Затем реальный сценарий: контекст/файлы → выбор команды → уточнение/ответ → исполнение → durable save → download/ZIP → повторное открытие с другого сеанса → явная доработка в новом Run → одобрение конкретной версии. До доказательств сервера/сохранения/восстановления — E2E NOT_RUN, не DEPLOYMENT_READY.
6. Проверки gateway↔runner и storage-adapter на локальном стенде не обязаны ждать внешнего deploy, если доступен runtime; fake/fixture PASS не заменяет реальное соединение. PR #11 оставить draft; никаких слияний этим пакетом.
