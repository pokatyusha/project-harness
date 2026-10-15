<!-- WEB-B-DRAFT-2026-10-15 -->
## Цель
Перенести новую React-версию CoreTeams в `PPS-2` для ревью и дальнейшей интеграции.

**CoreTeams — Рабочее пространство с AI-командой для сложных задач вне одной экспертизы.**

**Только draft. Ничего не сливать, auto-merge не включать.**

## Ветки и состав
- Base: `PPS-2` — проверенный SHA `aa9bb424c739d5618d0ff6fee56ba32090ee3d28`.
- Head: `codex/coreteams-v92-product-workspace-2026-10-15` — `8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7`.
- Основной пользовательский кандидат B: `web-product/`.
- Ветка наследует A: `web-app/` остаётся минимальным integration reference, не подменяет B.
- Проверенный diff этой пары содержит **60 added files**: `docs/`2, `web-app/`27, `web-product/`31. Это PR A+B, а не только одной папки B.
- Ветки diverged (5 ahead / 1 behind при последней сверке). В базе появился Storage ADR; его нужно сохранить и согласовать, а не потерять при обновлении базы. История и исходный dirty PPS checkout не переписывались.

## Что сделано
- Объяснение продукта и подписанный пример перед первой задачей.
- Задача/контекст и реальные вводные файлы, подготовительные вопросы, выбор AI-ролей и согласование плана.
- Рабочее пространство: этапы/материалы, диалог фасилитатора, документы и immutable versions, доработка, approval, save/ZIP/reopen и actual usage по предлагаемому контракту.
- Opt-in «Замер пути»: baseline / только интерфейс / через CoreTeams.
- Пошаговый ручной журнал привычного способа: действие, инструмент, время, затруднение, итог и формат результата.
- Локальное сохранение и восстановление замеров; active/wait/pause/unobserved раздельно; JSON/CSV сессий и шагов; сопоставление одинаковой задачи/участника.
- Русские исходы, явный выбор итога шага/задачи, подтверждение прекращения; отсутствие save-маркера не заменяется нулём или успешным результатом.
- Без скрытой отправки промтов/ответов/контактов/файлов в аналитику. Продуктовых кредитных/токенных квот не добавлено; технические/provider safety controls не отменяются.

## Граница готовности
- V2 API — **PROPOSED**, `VITE_CTF_V2_ENABLED=false` по умолчанию. Настроенный URL сам по себе не доказывает доступность.
- Реальные CTF, file extraction, фактическое назначение ролей, серверная долговечность, общий deploy и целевые парные пользовательские результаты не подтверждены.
- Research server storage — отдельное **предложение**; текущий журнал локальный, выгрузка приватная. Локальное согласие нельзя молча перенести на серверный сбор.
- Storage ADR в `PPS-2` опубликован как Proposed, не Accepted/Implemented.
- Fixture/browser проверки не реальный E2E. Повторное решение задачи даёт learning effect, поэтому разница времени не доказывает причинный эффект.
- Реальные исследовательские выгрузки и контакты в PR не включены.

## Выполненные локальные проверки на head8ab6c2a
- [x] 20 unit tests (domain + study).
- [x] TypeScript/typecheck и production build.
- [x] Full desktop/mobile browser smoke.
- [x] Изолированный API-fixture: реальные multipart bytes/hash, retry с прежним ID, вопрос/ответ того же Run, версии/approval/ZIP.
- [x] Status-browser1440/390: русские подписи, причины отсутствующего времени, сохранность исторической записи, отмена/подтверждение прекращения.
- [x] A `web-app` не изменён относительно `f6eff6652600645245064817cced8510140503ee`.
- [x] Синтетические test-results и реальные частные журналы не коммитились.

Это ранее выполненные **локальные** проверки той же ревизии, не заявление о зелёном GitHub CI.

## Чеклист до готовности к слиянию / интеграции
- [ ] Катя/команда подтвердили состав переноса A+B и проверили полный Files changed.
- [ ] Назван уполномоченный merge owner; проверены актуальные rules/required checks и способ merge. Не предполагать правила из отсутствия CI.
- [ ] Новая база PPS-2/Storage ADR учтена в изолированном checkout; конфликты разрешены без потери чужих изменений и без force/reset грязного исходного checkout.
- [ ] Дмитрий + Илья + Арина согласовали один gateway/WS↔B V2↔storage mapping: IDs, auth, файлы/hash, роли/этапы, lifecycle, question/answer/resume, versions/approval/save acknowledgement/unknown/retry/ZIP/reopen/usage.
- [ ] Согласованы no-product-quota требования против credits/limit_reached в Proposed ADR; provider safety сохраняется.
- [ ] Арина подтвердила actual persistence/receipt, revision/conflict/recovery и connection contract для Филиппа.
- [ ] Проверки повторены на актуальной интеграционной ревизии; результаты CI/ревью подтверждены, а не выведены из локального pass.
- [ ] Филипп подготовил воспроизводимые build/CI/deploy, безопасное окружение, общий контролируемый URL и rollback.
- [ ] Илья с командой провёл реальный technical E2E: start → вопрос/ответ → доработка → сохранённый результат → ZIP → reopen после restart.
- [ ] Если принят server research scope: отдельно согласованы auth/access, обновлённое согласие, idempotent ingestion/receipt, retention/export/delete. Иначе сохранить честный local-only режим.
- [ ] Пользовательская проверка запускается отдельно после технической готовности, целевого участника/согласия и baseline. NOT_RUN не заменяется fixture-результатом.
- [ ] Явное разрешение владельца на merge получено отдельно; этот draft такого разрешения не даёт.

## Как воспроизвести
Проверено с Node24.19.0 + pnpm11.25.0; minimum package Node>=22.12.

Из `web-product/`:
```sh
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm build
pnpm preview
```
Для sandbox EPERM unit runner: `node --experimental-transform-types --test --test-isolation=none test/domain.test.ts test/journey.test.ts`.
Browser/fixture setup и ограничения: [verification.md](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/verification.md).

## Связанные задачи и документы
YouGile: PPS-139/165 (Катя), PPS-169/170 (Дмитрий), PPS-138/137 (Илья), PPS-167/136/135 (Арина), PPS-166/142 (Филипп). Этот PR не закрывает их автоматически и не означает принятие людьми.

- [Полная передача WEB и критерии](https://github.com/pokatyusha/project-harness/blob/main/handoff/2026-10-15/web-transfer-wiki.md)
- [Порядок PR/merge](https://github.com/pokatyusha/project-harness/blob/main/handoff/2026-10-15/owner-pr-merge.md)
- [V2 contract](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/ctf-v2-contract.md)
- [Journey metrics](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/journey-metrics.md)
- [Research storage — PROPOSED](https://github.com/AcryCxde/PP-Sber-Autumn-2026/blob/8ab6c2a0f062ab9dd7ee719d9056fcc2c89c75a7/web-product/docs/research-storage-proposal.md)

