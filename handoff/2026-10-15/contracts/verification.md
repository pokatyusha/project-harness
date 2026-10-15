# Проверка совместимости и реальный E2E

Срез/версии: [README](README.md). Дата локальных прогонов:15.10.2026. Секреты, реальная пользовательская задача и платные model calls не использовались. Код сервисов не исправлялся, PR не сливались.

## Что действительно запущено

| Проверка | Результат | Граница |
|---|---|---|
| Runner `test_protocol.py,test_v0.py,test_gateway.py,test_gateway_client.py` |65passed,1.51s | Реальный parser/translator/client + fake peer, не настоящий gateway/Claude |
| Gateway `test_public_events.py,test_parser.py` |14passed,0.27s | Компонентные проверки текущего legacy формата |
| WEB `domain.test.ts,journey.test.ts` |20passed | Клиентские DTO/journey rules, не HTTP integration |
| `verify_boundaries.py` |10INCOMPATIBLE, exit1 | Реальные функции, in-process FastAPI WS/HTTP routing, статический ORM/DDL; не network deployment |
| `docker info --format '{{.ServerVersion}}'` |daemon unavailable | DockerDesktopLinuxEngine pipe отсутствует; контейнеры/модели не запускались |
| Полный сценарий ниже |BLOCKED / NOT_RUN | Не установлен совместимый gateway/storage и общий готовый стенд |

Прогоны выполнены в свежей изолированной Python3.12.14 venv. Установлены test dependencies из declared ranges, **не production lock**: pytest9.1.1, pytest-asyncio1.4.0, websockets15.0.1, FastAPI0.143.1, Starlette1.8.0, SQLAlchemy2.1.4, greenlet3.5.6, aiosqlite0.22.1, Alembic1.20.0, Pydantic2.14.1, pydantic-settings2.16.0, httpx0.28.1. WEB — Node24.19.0. Нельзя автоматически распространить результат на другие dependency locks/версии сервисов.

Первые runner попытки выявили ограничения Windows temp-path/кодировки cp1251 (7fail/42pass/16errors), затем49pass/16temp-errors. После `-X utf8`, свежего basetemp и разрешённого isolated filesystem/socket доступа финальный повтор дал65pass без изменения production кода. Первый probe import потребовал greenlet; добавлен только в audit venv, затем probes выполнены. Предупреждение TestClient о будущем изменении httpx backend — не провал теста. Эти environment repairs не выдаются за исправление сервиса.

## Как повторить component tests

Подготовить отдельные **чистые** snapshots из закреплённых refs: gateway `backend`, runner `runner`, infra `init.sql`. Не подменять содержимым dirty рабочего дерева. Поставить зависимости в изолированную venv; не запускать production install/DB migration для этого аудита.

Из snapshot runner/runner (PYTHONPATH=src):

```powershell
python -X utf8 -m pytest -q --tb=short -p no:cacheprovider --basetemp=<NEW-EMPTY-AUDIT-TEMP> tests/test_protocol.py tests/test_v0.py tests/test_gateway.py tests/test_gateway_client.py
```

`<NEW-EMPTY-AUDIT-TEMP>` — заменить свежим audit-каталогом; pytest может очистить существующий basetemp, не указывать рабочую папку/данные. Из gateway snapshot (PYTHONPATH=.):

```powershell
python -m pytest -q -p no:cacheprovider backend/tests/test_public_events.py backend/tests/test_parser.py
```

Из WEB B `web-product`:

```powershell
node --experimental-transform-types --test --test-isolation=none test/domain.test.ts test/journey.test.ts
```

Структура для воспроизводимых probes: `<audit>/snapshots/gateway/backend`, `<audit>/snapshots/runner/runner/src`, `<audit>/snapshots/runner/runner/tests/journals`, `<audit>/snapshots/infra/init.sql`.

```powershell
python -X utf8 verify_boundaries.py --snapshots <audit>/snapshots --output <audit>/boundary-results.json
```

Exit1 означает найденное несовпадение. Script не запускает lifespan приложения, миграции/Claude/production DB; не шлёт валидный run.create. Negative checks показывают реальные разрывы в выбранном срезе, но не заменяют полный consumer/provider suite. При исправлении добавить позитивные проверки согласованного контракта, а не ослабить ожидание под legacy поведение.

## Обязательные контрактные тесты после согласования

Это acceptance plan; пометка PENDING, если нет отдельного результата выше.

| Граница | Минимальная проверка обеих сторон | Статус в этом срезе |
|---|---|---|
| Runner↔gateway | valid/invalid v, hello auth/project binding, welcome ack, multiple events per journal_seq, replay/dedup event_id, cursor после restart | Отдельный runner suite PASS; настоящий gateway handshake несовместим, остальные joint cases PENDING |
| Gateway→runner commands | stable run ID, message duplicate, fork answers exact keys/multi-select, stale question, rejected reason, stop semantics, ack≠save | Runner unit PASS; настоящий gateway producer PENDING |
| Gateway→web | allowlisted typed envelope, safe redaction, query cursor/replay/gaps, waiting active uniqueness, statuses/DTO, multiple questions, no raw secret/hidden reasoning |4projection probes incompatible; полный consumer suite PENDING |
| Files/storage | exact uploaded bytes/hash, immutable versions, unique IDs/mapping, commit+remote+metadata receipt, failed/unknown save, retry no duplicate, stale version, safe path | PENDING; нет согласованного bytes channel |
| DB/config | ORM vs DDL/migrations, upgrade existing volume без потери, connection driver/schema/secret names, owner isolation | Static mismatch confirmed; real migration/wiring PENDING |
| ZIP/recovery | реальные required members/hash/source refs, correct version bytes, authorized download, clean browser hydrate, same IDs/revision after reconnect | PENDING; legacy text download не ZIP |
| Access/failure | unauthenticated/other-user read/write/download denial, revoked session/CSRF, disconnect before/after ack, provider/DB/storage outage | PENDING; никаких participant secrets |

## Реальный сквозной сценарий — только на готовом стенде

Prerequisites: Integration Owner и владельцы приняли версии/mapping; есть общий build manifest SHA/config; стенд доступен; test actor/project authorization; runner и реальная storage связаны; model access разрешён и безопасно настроен. Полный технический прогон использует синтетическую не-конфиденциальную задачу и файл, не данные участника. Платные calls/учётные данные не запрашиваются и не используются автоматически.

| Шаг | Действие | Нужное доказательство / PASS |
|---|---|---|
|1| Войти и создать задачу с контекстом, реальным input file, командой/планом | Actor/project ID, SHA input bytes, server upload/hash receipt; права проверены сервером |
|2| Запустить через web → gateway → runner | Один run ID и operation ID, ack durable inbox, accepted/started trace; не локальная симуляция |
|3| Получить действительный вопрос фасилитатора | Событие question ID/options, waiting/clarification на экране; второй активный запуск запрещён |
|4| Ответить в web | Тот же Run; command/fork ID и dictionary mapping; accepted event; повтор не дублирует ответ, устаревший вопрос отклонён |
|5| Получить результат и следующую версию при доработке | Реальные runner artifacts, stage/document/version IDs; старая версия неизменна, роли/usage только фактические |
|6| Сохранить | Bytes попали в согласованное хранилище, Git remote commit при принятом ADR, metadata transaction + artifact.saved receipt. completed строго после подтверждённых необходимых saves |
|7| Скачать | Авторизованный ZIP нужной версии; полный manifest/member/hash validator и совпадение read-back bytes. Передача browser download сама не доказывает файл на диске пользователя |
|8| Восстановить | Reload/disconnect/reconnect и чистый browser profile/server hydration: тот же проект/run, вопрос/история/версии без пропусков/дублей; не только прежний localStorage |
|9| Проверить отказ | Другой actor не читает/не скачивает; connection loss не даёт ложный completed; recovery не создаёт повторного Run/version |

Для отчёта: дата/окружение и SHA всех сервисов, synthetic case ID, шаг→trace event IDs/seq/HTTP, storage receipt/commit/hash, download/read-back, restart evidence, фактические ошибки, verdict каждого шага. Секреты/raw prompts/личные данные в публичный отчёт не включать. Пока эти evidence отсутствуют, **DEPLOYMENT_READY=false / REAL_E2E=NOT_RUN**. После технического PASS отдельно проводить consented baseline↔CoreTeams исследование; технический прогон не является замером пользователей.
