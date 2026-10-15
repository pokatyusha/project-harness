# Границы взаимодействия: как есть, а не новый API

Версии и ссылки C-01…C-10: [реестр](README.md). Обозначение `?` — поле можно опустить; `| null` — явный null допустим, это не то же самое. Поля ниже обязательны, если не указано обратное. «Не определено» означает пробел исходного договора, а не разрешение выбрать произвольно.

## B-01 — React B → предполагаемый HTTP backend

Вызывающая сторона: `web-product` Катя; ожидаемая принимающая: gateway Дима. Фактического обработчика этих маршрутов в проверенном gateway нет. Источник: C-06 и точный клиентский код; C-07 — иной минимальный proposed API A, не подмена B.

### Запросы и ответы

База — абсолютный HTTP(S) URL из `VITE_CTF_API_URL`, вызовы только при `VITE_CTF_V2_ENABLED=true`. Суффиксы ниже относительны к базе; `/api` не добавлять второй раз.

| Метод / суффикс | Передаваемые поля | Ожидаемый ответ |
|---|---|---|
| POST `projects` | `clientProjectId,title,goal,context,scenario,teamNote: string`; `answers:string[]`; `team:string[]` role IDs; `stages:{id,title,goal:string}[]` | `{id:nonempty string}`. Метаданные файлов упомянуты в тексте proposal, но `projectPayload()` в коде их не отправляет; реальные файлы отдельным запросом |
| POST `projects/{p}/files` | multipart `file:bytes` с filename; `clientFileId:string`; `sha256:string` | `{id:nonempty string,sha256:string}` с точным совпадением хеша. Серверная проверка/сканирование/извлечение и момент долговременной записи ещё не согласованы |
| POST `projects/{p}/runs` | Поля постановки выше + `fileIds:string[]` подтверждённых загрузок | `Run` ниже |
| GET `projects/{p}/runs/{r}` | Нет body | `Run` того же запуска, монотонная `revision` |
| POST `projects/{p}/runs/{r}/answers` | `questionId:string, answer:string` | `Run` того же ID. Это один текст ответа B; C-01 ожидает словарь по текстам всех вопросов — нужен согласованный mapping, не прямая пересылка |
| POST `projects/{p}/runs/{r}/messages` | `text:string,stageId:string,artifactId?:string` | `Run`; доработка создаёт новую неизменяемую версию |
| POST `projects/{p}/runs/{r}/artifacts/{a}/approve` | `artifactId:string,version:int` | `Run`; право/актуальность сохранённой версии проверяет сервер, пока не реализовано |
| GET `projects/{p}/runs/{r}/artifacts/{a}/zip` | Нет body | ZIP bytes; клиент проверяет MIME `application/zip` или `application/octet-stream` и PK signature, не полноту архива |

`Run`: `id:nonempty string`, `revision:int>=0`, `status:running|clarification|review|completed|failed`, `stageId:nonempty string`, `messages:Message[]`, `artifacts:Artifact[]`, `question?:{id,text:nonempty string}` (обязательно при clarification), `usage?:Usage`.

`Message`: `id:nonempty string`, `role:user|facilitator|system`, `text:string`, `at:parseable datetime string`.

`Artifact`: `id,documentId,stageId,title:nonempty string`, `version:int>=1`, `content:string`, `saved:boolean`, `savedAt?:parseable datetime` (обязателен при saved=true), `approved?:boolean`. IDs уникальны, комбинация stage+document+version уникальна, старые bytes/history не должны меняться. Наличие timestamp в JSON не доказывает серверную запись.

`Usage`: опциональные измеренные `inputTokens,outputTokens,requests:int>=0`, `computeSeconds,cost:finite number>=0`, `currency:nonempty string` обязательна при cost. Отсутствие — неизвестно, не ноль; UI timer не источник compute/cost. Агрегированные разрешённые usage требуют mapping, C-02 не разрешает выкладывать внутренние costs/tokens в публичную ленту автоматически.

### Поведение, безопасность, повторы, сохранение

- Состояния B не покрывают queued/waiting_for_input/outcome_unknown напрямую; `clarification` не переименовывает состояние сервера сама. `completed` без durable receipt недопустим по общей цели контрактов.
- 30 s timeout; POST с `Idempotency-Key` и `X-Correlation-ID`, сохранённым ID и исходным body. Автоматического повтора POST нет; ручной повтор сохраняет ключ. Дедупликация actor+project+key/changed-body conflict — требование proposal, не проверенная серверная функция. GET не получает эти заголовки от этого кода автоматически.
- Serial polling 2.5 s, остановка на ошибке. Stale revision игнорируется, mutation старой версии/чужой run ID отвергаются. Это поведение клиента, не гарантия БД.
- Cookie `credentials:same-origin`. Собственной реализации login/auth/CSRF тут нет. Cross-origin cookies/CORS/CSRF не настроены и не предполагаются готовыми. Секреты не размещать в VITE env.
- 401/403 → безопасное сообщение о доступе; иной HTTP/timeout/невалидный JSON/DTO → неподтверждённый исход, не успех. Общий machine-readable error envelope пока не согласован.
- Подтверждения create ID/upload hash/savedAt не заменяют запись/commit/read-back сервера. Cross-device list/get/hydration отсутствуют; повторное открытие локального snapshot — не серверное восстановление.

## B-02 — Browser legacy → действующий gateway

Вызывающий: browser legacy client; принимающий: gateway `demo-gateway`. Это существующая другая поверхность C-03, не реализация B-01. Транспорт HTTP REST + WS `/ws`.

### WS команды

- `run.create`: `type="run.create"`, `client_request_id:UUID string`, `content:nonempty string`, `conversation_id?:UUID string|null`, `context_mode?:resume|reset` (default resume). Ответы acceptance/error и публичные события; запуск вызывает локальный Claude subprocess, не runner remote. Невалидные команды дают `command.error`, в том числе `invalid_command`; отсутствие полей/неправильные UUID не образует Run.
- `run.subscribe`: `type="run.subscribe"`, `run_id:UUID string`, `after_seq?:int>=0` (не bool, default0). Невалидное значение → `command.error{code:invalid_subscription}`. История/подписка возобновляются курсором; unique client_request_id/repository acceptance существуют, но ещё не доказана сквозная exactly-once обработка четырьмя сервисами.
- В этой версии нет принятого browser answer command для C-01 `fork_answer`; произвольный текст/legacy путь не использовать как эквивалент структурированному ответу.

### HTTP history и скачивание

| Маршрут после `/api` | Параметры / response |
|---|---|
| GET `conversations` | `limit:int1..100=50`, `offset:int>=0=0` → `ConversationRead[]` |
| GET `conversations/{id}/messages` | → `MessageRead[]`, 404 если нет диалога |
| GET `conversations/{id}/events` | `offset:int>=0=0,limit:int1..500=500` → `EventRead[]`, 404 если нет диалога |
| GET `runs/{id}/events` | `after_seq:int>=0=0,limit:int1..500=100` → `EventRead[]`, 404 если нет запуска |
| GET `runs/{id}/events/{event_seq:int}/file` | Persisted UTF-8 text snapshot bytes; octet-stream + attachment filename; 404 если нет content/артефакта, 413 если truncated/слишком большой |

`ConversationRead`: `id,title,status,context_state:string`, `active_run_id?:string|null= null`, `created_at,updated_at:datetime`. `MessageRead`: `id,conversation_id,role,kind,content:string`, `run_id:string|null` (поле обязательно), `sequence:int`, `created_at:datetime`. `EventRead`: `run_id:string,seq:int,type:string,payload:object,created_at:datetime`. Внутри payload — результат legacy projection; это не полный envelope C-02.

Auth: в просмотренных REST dependencies/WS endpoint нет установленной principal/owner проверки. Наличие отдельной защиты reverse proxy не проверено и не подразумевается. Доступ второго пользователя обязан стать негативным тестом. Ошибки параметров HTTP422; общий error-format с B-01 не согласован. GET можно повторять; курсоры/дедуп не означают подтверждения byte storage.

`artifact.saved` здесь подтверждает legacy snapshot, записанный gateway в его БД; не подтверждает Git remote/ADR receipt или корректный ZIP. По exit0/result gateway может финализировать completed без save gate C-02. Состояние waiting_for_input не включено в ACTIVE_RUN_STATUSES и частичный unique index; это разрыв с C-02, не повод автоматически создать ещё один Run.

## B-03 — Runner → gateway: подключение, события, heartbeat

Вызывающий соединение: runner Ильи; принимающий: gateway Димы. C-01/C-02. Runner client реализован; совместимый принимающий endpoint в проверенном gateway **не реализован**. Не направлять его вслепую на browser `/ws`.

- Исходящий WS URL `GATEWAY_URL`; JSON UTF-8, envelope `{v:1,type:string,...}`. Bearer project token из secret file; токен не включать в документы/браузер. Проверка токена/привязки проекта на gateway пока отсутствует в этой реализации.
- `hello`: `project_id,runner_version:string`, `session_id:string|null`, `last_seq:int` → `welcome{acked_seq:int>=0}`. Последний — durable gateway journal cursor проекта, не frontend seq. `parse_welcome` проверяет type/cursor, но не v: полноту version negotiation нужно согласовать/проверить.
- `event`: `journal_seq:int`, `event:{event_id:UUID string,project_id,run_id:string,occurred_at:RFC3339 UTC string,type:enum C-02,payload:object}`. Runner не добавляет `schema`/публичный `seq`: это обязанность gateway после durable append. Один journal_seq может содержать несколько events; дедуп по event_id, не только по journal_seq. Требуется согласовать атомарность cursor для всех событий одной journal row; не доказано кодом gateway.
- `heartbeat`: `phase:idle|working|awaiting_answer|failed`, `health:ok|stalled|crashed`, `last_progress_at:number Unix seconds`, `turn_id:null` в текущем wire code. Каждые10s; отсутствие>30s по proposal даёт unknown, но healthy awaiting_answer не timeout задачи.
- Reconnect 1,2,4,8,16,30s; локальный journal fsync до отправки, replay rows после welcome.acked_seq, event IDs стабильны. Это at-least-once. Cursor ack — запись событий, **не подтверждение результата/артефакта**.

### Публичный envelope C-02 — уже существующий, не новый

Gateway должен выдавать `schema:"events.v0",event_id:UUID string,project_id,run_id:string,seq:int>=1,occurred_at:RFC3339 UTC,type:enum,payload:object`. Поля обязательны. В реальном legacy gateway сейчас `schema_version:1` и иной payload.

| type | Payload C-02 / смысл |
|---|---|
| `run.accepted` | `client_request_id` → queued; создаёт gateway |
| `run.started` | `{}` → running |
| `role.started` | `role_id,role_instance_id:string,title:string|null` |
| `role.completed` | `role_id,role_instance_id:string,outcome:completed|failed` |
| `message.created` | `role_id:string|null,text:string` |
| `facilitator.question` | `question_id:string,questions:{text:string,header:string|null,options:{label:string,description:string|null}[],multi_select:boolean,allow_custom:boolean}[]` → waiting_for_input |
| `user.answer.accepted` | `question_id:string,answers:map<string,string>` → running |
| `progress.updated` | `stage:interrupted|recovering|working`; у working `attempt:int,context_restored:boolean` по translator, не UI percent/ETA |
| `artifact.created` | `artifact_id:string,path:relative string,commit_sha:string,role_id:string|null`; это metadata после checkpoint, не bytes/receipt |
| `artifact.saved` | `artifact_id,version_id,size_bytes,download` по C-02; создаёт gateway после storage подтверждения. Полная wire-типизация/форма download и её auth требуют совместного уточнения; не выдуманы в этом реестре |
| `run.completed` | `{}`; gateway удерживает до сохранения всех созданных артефактов |
| `run.failed` | `code:string,retryable:boolean`; подтверждённый провал |
| `run.outcome_unknown` | `code:string`; исход неизвестен, не completed |

Коды из C-02: failure result_error/checkpoint_failed/resume_limit/disk_full/artifact_save_failed; unknown heartbeat_lost/artifact_save_unknown/state_corrupt. Не более одного terminal event, он последний. Raw prompts/tool IO/thinking/secret/session_id не проходят в публичную ленту. Пользовательские safe role/message события нельзя терять под видом фильтрации всех неизвестных типов.

## B-04 — Gateway → runner: commands и ack

Команда идёт в уже открытом исходящем WS runner; C-01. Принимающий parser/inbox runner реализован, отправляющая сторона gateway для этого протокола **не реализована**.

- `{v:1,type:"command",id:string,kind:"message",text:nonempty string}`. ID `[0-9A-Za-z_-]{1,64}`, он же turn_id/run_id. UUID — допустимое подмножество, но gateway subscription требует только UUID; общий домен необходимо явно закрепить, это не доказательство несовместимости любых UUID.
- `kind:"fork_answer"`: тот же command envelope, новый command `id`, `fork_id:nonempty string`, `answers:map<string,string>`. Ключи — точные `questions[].text`; multi-select labels через `", "`. Новый ответ не создаёт новый Run.
- `kind:"stop"`: envelope с id, без text/answers; останавливает контейнер. Это **не** согласованная отмена Run: после рестарта ход может продолжиться.
- Ответ `{v:1,type:"command_ack",id:string|null,status:accepted|rejected,reason?:string}`. accepted = durable inbox file, не completion/save. rejected parse error / `unknown_fork` / `answers_mismatch`.
- Повтор с тем же ID дедуплицируется inbox. message: at-least-once доставка до ack + идемпотентное исполнение (state до processed). fork_answer/stop: at-most-once исполнение по C-01; после restart старый question_id не переиспользовать, ждать новый вопрос. Gateway не должен слепо ретраить устаревший fork_answer.
- Авторизация наследует project-scoped connection B-03; отдельная end-user→project проверка на gateway необходима, сейчас не доказана. Таймаут command ack/общая error-модель для web не определены совместно.

## B-05 — Gateway → БД / предполагаемое хранилище

Факт: SQLAlchemy async repository gateway обращается к БД напрямую; отдельного вызова storage service в этом коде не найдено. Default SQLite aiosqlite, `DATABASE_URL` может задаваться конфигурацией. Предложение C-04 — PostgreSQL metadata + Git files; SQL C-05 — третья конкретная схема, несовпадающая с ORM.

- Реальный ORM: `conversations,runs,messages,events,artifacts`. `runs` включает `conversation_id,client_request_id,next_event_seq`, статусы pending/running и terminal; artifact ID int, `run_id:string(36),event_seq:int,path:string,content:text|null,size_bytes:int|null,truncated:boolean`.
- C-05 init.sql: `users,projects,runs,artifacts,containers`; нет conversations/messages/events и трёх полей runs выше. artifacts UUID/git refs вместо legacy text snapshot. Нельзя объявить их совместимыми только потому, что обе используют таблицу runs.
- C-04 Proposed: project owner UUID, metadata/schema version; materials metadata/Git references; runs UUID; events UUID/project/run/sequence+JSONB; artifacts UUID/Git path/40-character commit SHA/size; internal ctf_files. HTTP paths/методы/body/error/retry/receipt для работающего storage API не заданы. **Не определено**, кто будет вызывать отдельный сервис, или останется общий repository/library слой; не рисовать несуществующее соединение.
- C-04 auth — server session/ownership join, service keys внутренние; это не реализованная безопасность legacy routes. Точные разрешения, transient DB errors/retry/конкурентные записи/retention/delete должны быть согласованы в исходном ADR/контракте. DB commit legacy ≠ Git commit+push+metadata receipt C-04.
- DB init SQL для нового volume не является миграцией существующей БД. Подтвердить upgrade и read-back отдельно; существующие данные не очищать ради прохождения теста.

## B-06 — Runner filesystem/Git → storage → gateway → download

У runner есть локальный Git `commit_turn()` и checkpoint; `artifact.created` передаёт path+commit metadata. **Канал фактических bytes из project volume в storage не определён** — C-02 §11.11 прямо это фиксирует. Прямой upload runner→storage, shared-volume reader gateway или иной канал пока не выбран, ни один не объявляется фактом.

- C-04 требует сохранения файла в Git/remote и metadata, затем artifact_saved. Runner local commit не делает этого автоматически; gateway legacy text snapshot — другое хранение.
- IDs не сведены: runner stable ID(commit+path), ADR UUID, legacy int; нужен подтверждённый mapping к project/run/document/version, checksum/size/remote commit и безопасному download. Полная структура receipt/error и retry/reconciliation при неизвестном push не определена работающим API.
- C-08 описывает ZIP `result.md,sources.csv,metadata.json,manifest.json`; manifest hashes только payload members, не самого себя. Предложение не доказывает реализацию exporter. Клиентский PK check недостаточен для валидного результата.
- Auth на write/read/download, запрет чужого project/run, immutable version, changed-body конфликт, safe path и повтор после timeout должны проверяться обеими сторонами. save receipt → read-back exact bytes → download checksum, лишь затем completed. При неизвестном сохранении не угадывать success/failure и не создавать дубль версии.

## B-07 — Конфигурация соединений (Филипп)

Это проверка конфигурации реальных B-01…B-06, не пятый бизнес-сервис. C-05 Compose поднимает БД, но не связывает web/gateway/runner/storage в проверенный стек.

Нужен manifest: точные SHA, публичный origin/API base, runner WS endpoint, proxy upgrade/TLS, internal DNS/ports, DATABASE_URL driver/schema/migration version, project volume + Git remote, secret **names** (не значения), session/ownership scope, CORS/CSRF, health/readiness и корректное восстановление после рестарта. Значения и конкретные соединения пока UNKNOWN, не подставлены предположениями. Секреты из примерного compose не переносить в документы или frontend. Никакого отключения provider safety/rate/storage bounds под требование «без продуктовых лимитов».

## B-08 — Исторический demo API (не интеграция)

C-10: Node `server.js` принимает GET projects, GET/POST project runs, GET events/stream/artifact. POST run body содержит непустой `task` (код приводит к string), optional `simulateUnknown`/`simulateFailure` truthy flags; требуется Idempotency-Key, иначе400. Idempotency cache не изолирован по actor/project. Демонстрационные IDs — prefix+UUID; safeRun: `id,projectId,status,task,createdAt,updatedAt:string`. Event: `eventId,projectId,runId,createdAt,type:string,sequence:int,payload:object`; SSE не делает автоматический replay истории. Artifact — демонстрационный Markdown, запись JSON-файла, не C-04;404 при чужом проекте/отсутствии результата. Новая имитация возвращает201, повтор200, queued→running→completed|failed|unknown либо limit_reached. GET history/download повторяемы; durable production receipt не реализован.

`x-demo-user`/default identity подменяется клиентом; это не auth. v9 UI не вызывает этот API и не SSE client. Состояния/ошибки/ограничения симулятора не принимаются за ответы runner. Контур внесён, чтобы случайно не принять похожие `/api/projects/...` за реализацию B-01; production-компатибельность с ним не проверялась и не требуется обходным путём.
