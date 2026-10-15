# Катя — что сделать с PR и переносом CoreTeams WEB

Дата:15.10.2026, Europe/Moscow. Основание: read-only GitHub/YouGile audit и явная просьба владельца. Это безопасный рекомендованный порядок; отсутствующие правила репозитория не выдумываются.

## 1. Открыть draft PR, не нажимать merge

Уже выполнено агентом по явному запросу владельца: [draft PR #11](https://github.com/AcryCxde/PP-Sber-Autumn-2026/pull/11). Проверено GitHub GET: open/draft:true, basePPS-2aa9bb424/headB8ab6c2a, merged:false, auto_merge:null. Полное описание и checklist опубликованы; отдельные review requests не отправлялись. Не создавать второй PR по инструкции ниже.

Повторяемый fallback при create-PR403: проверить отсутствие дубля через плагин → открыть точную compare-пару в Codex browser → при Sign in передать вход владельцу, не запрашивать секреты в чате → заполнить [готовое описание](draft-pr-body.md) → выбрать Draft → отправить один раз → проверить Draft/base/head/body через UI и плагин GET → прикрепить PR к чату и обновить записи. Не менять разрешения приложения, не извлекать credentials и не нажимать merge/ready-for-review/auto-merge. При неясном результате отправки сначала искать существующий PR, а не отправлять повторно.

[Сравнение PPS-2 ← WEB B](https://github.com/AcryCxde/PP-Sber-Autumn-2026/compare/PPS-2...codex/coreteams-v92-product-workspace-2026-10-15?expand=1).

- Base: `PPS-2` (не master/main). Head: `codex/coreteams-v92-product-workspace-2026-10-15`.
- Проверенный head: `8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7`. Перед созданием сверить текущий head; не ссылаться на старый4915d25 как последний код.
- Название, например: `CoreTeams: React workspace B и замеры пользовательского пути`.
- Ветка наследует более ранний A; подтверждённый compare включает60added files: docs/2, web-app/27, web-product/31. Проверь **Files changed** целиком, а не только web-product. Если команде нужен отдельный B-only PR, сначала договориться о базе/составе, не удалять A и не переписывать историю автоматически.
- Раньше плагин возвращал403 при создании PR. Текущий аудит открытых PR не нашёл. Наличие push permission не гарантирует create-PR capability. Если UI не позволяет — нужен участник с нужными правами; нельзя считать compare URL созданным PR.

## 2. Вставить описание

```markdown
## Что меняется
- CoreTeams: рабочее пространство с AI-командой для сложных задач вне одной экспертизы.
- B: пример/онбординг, контекст/файлы, вопросы, выбор AI-ролей и плана,
  этапы/документы/immutable versions, доработка/approval/save/ZIP/usage.
- Opt-in baseline/interface/prototype: ручной дневник привычного способа,
  интервалы/события, JSON/CSV, русские статусы и явное завершение.
- A сохранён как reference. Исследовательские данные в PR не входят.

## Проверено локально
- 20 unit tests, typecheck/build.
- Full desktop/mobile/API-fixture suite и status-browser1440/390.
- Это не зелёный CI и не реальный пользовательский E2E.

## Ограничения / блокеры
- V2 gateway/storage/CTF mapping proposed; integration flag default false.
- PPS-2 содержит новый Storage ADR со статусом Proposed; ветки diverged.
- Реальные CTF/storage/research server/deploy/paired user measurements не подтверждены.
- Требуются review Дмитрия/Ильи/Арины/Филиппа и решение по составу переноса.

## Как проверить
Проверенный runtime: Node24.19.0 + pnpm11.25.0; package minimum Node>=22.12.
Из web-product: pnpm11; frozen install, pnpm test,
pnpm typecheck, pnpm build; затем pnpm preview (локальный4192).
Браузерные сценарии/fixture и границы описаны в docs/verification.md.
При sandbox EPERM unit: node --experimental-transform-types --test
--test-isolation=none test/domain.test.ts test/journey.test.ts.

## Документы
web-product/docs/ctf-v2-contract.md
web-product/docs/journey-metrics.md
web-product/docs/research-storage-proposal.md (PROPOSED)
```

## 3. Review по направлениям

- Дмитрий: согласованный gateway/WS↔V2 mapping, IDs, auth, retries/unknown, файл/Run/сохранение.
- Илья: фактический CTF lifecycle, роли/вопрос/ответ/версии/usage и реальный E2E.
- Арина: новый Storage ADR, версия документа/commit_sha, actual-save receipt, восстановление, права, research-data scope/согласие/retention/delete.
- Филипп: build/CI, окружение/общий URL/доступ, соединение компонентов и повторяемость deploy/rollback.
- Катя: пользовательский путь и правильная интерпретация замеров. Не заменять техническую приёмку обещанием пользы.

Это рекомендованные ревьюеры по ответственности, не доказательство обязательного числа GitHub approvals. Не отправлены личные сообщения/review requests от имени пользователя.

## 4. Учесть обновившуюся базу

Живая PPS-2 при аудите: `aa9bb424c739d5618d0ff6fee56ba32090ee3d28`; локальный origin/PPS-2 устарел (`8f57135`). Новый ADR лежит в ZIP, статус Proposed, не рабочая реализация. Не потерять его при разрешении конфликтов.

Обновление refs/базы и разбор конфликтов выполнять только в изолированном checkout/worktree, сохраняя чужие изменения. Исходный PPS-2 dirty — не запускать там reset/rebase/checkout-перезапись. При необходимости нового integration branch/worktree заранее записать scope, DoD, проверку, merge owner и cleanup по workflows/worktree.md. Сейчас новые worktrees не создавались.

Не предписываем rebase/squash/merge-commit: реальный разрешённый merge method/required checks/branch protection **UNKNOWN**, их нужно посмотреть в UI/GitHub settings или уточнить у владельца репозитория. Нет обязательных policy-файлов в проверенном дереве и доступных результатов CI — это не отменяет возможные правила GitHub.

## 5. Когда можно сливать

- Состав PR и новая база проверены; конфликтов нет, новый ADR сохранён.
- Команда согласовала один контракт и semantic mapping, включая ошибку/unknown и no-product-quota против credits/limit_reached в ADR.
- Проверки повторены на актуальной интеграционной ревизии; GitHub показывает требуемые checks/approvals либо владелец явно определил их правила. Отсутствие checks не выдаётся за pass.
- Известно, кто имеет право merge, и этот человек одобрил слияние по установленной политике.
- Не включать `VITE_CTF_V2_ENABLED=true` только ради демонстрации. Черновой frontend может обсуждаться/ревьюиться до интеграции, но не считаться готовым сервисом.

Только уполномоченный человек выполняет merge. После него Филипп разворачивает утверждённую сборку; Илья/Дмитрий/Арина проверяют реальный E2E и persistence; Катя запускает добровольные пользовательские сессии. Нет прямого push в master/main, force-push или обхода review. PR/деплой не означает результат исследования.

## Что нужно решить Кате

1. Подтвердить состав переноса: B как основной продуктовый кандидат, A как reference; проверить Files changed.
2. Открыть draft PR через ссылку либо дать repo-owner создать его, если403 сохраняется. Передать фактический URL PR для привязки к обвязке.
3. Назвать уполномоченного merge owner и согласовать недостающие review/check правила, не назначая себя admin автоматически.
4. Согласовать приватный канал/retention/согласие исследования и первого целевого участника. Серверный сбор — отдельная согласованная реализация, не текущий факт.

Полный пакет и адресные DoD: [web-transfer-wiki.md](web-transfer-wiki.md).
