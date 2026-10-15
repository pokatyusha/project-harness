import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const artifactToolPath = "C:/Users/Екатерина Поварнина/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";
process.env.RUNTIME_NODE_MODULES ??= path.resolve(path.dirname(artifactToolPath), "../../..");
const { Presentation, PresentationFile } = await import(pathToFileURL(artifactToolPath).href);

const outDir = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(outDir, "build");
const previewDir = path.join(buildDir, "previews");
const finalPath = path.join(outDir, "CoreTeams-defence-draft-2026-10-15.pptx");
const finalOutputDir = path.join(outDir, "output");
await fs.mkdir(finalOutputDir, { recursive: true });
const finalizedBuildPath = path.join(finalOutputDir, `validated-${Date.now()}.pptx`);
const W = 1280;
const H = 720;
const C = {
  bg: "#000000",
  white: "#FFFFFF",
  soft: "#D8D8D8",
  muted: "#9A9A9A",
  violet: "#8052FF",
  amber: "#FFB829",
  dim: "#5F5F5F",
};
const font = "Arial";

const slides = [
  {
    kicker: "ЗАЩИТА ПРОЕКТА · 15 ОКТЯБРЯ 2026",
    title: "CoreTeams",
    blocks: [
      { text: "Проверяемый аналитический бриф для решений за пределами экспертизы владельца", x: 72, y: 292, w: 900, h: 132, size: 38, color: C.soft, bold: false },
      { text: "Черновик по доступным материалам. Пользовательские результаты ещё не получены.", x: 76, y: 588, w: 850, h: 34, size: 20, color: C.muted },
    ],
    note: "Это черновик защиты для владельца небольшого бизнеса или человека, который ведёт идею проекта без команды. Мы проверяем узкую продуктовую гипотезу: может ли source-traceable brief помочь сделать следующий шаг по задаче вне собственной экспертизы. Исследовательских сессий и продуктовых результатов пока нет.\nИсточники: S1, S3.",
    source: "S1, S3",
  },
  {
    kicker: "02 · ПРОБЛЕМА",
    title: "Самостоятельный владелец сам собирает решение в незнакомой области",
    blocks: [
      { text: "Найти материалы мало", x: 82, y: 238, w: 390, h: 55, size: 34, color: C.white, bold: true },
      { text: "Нужно понять, какие источники заслуживают доверия и где они расходятся.", x: 82, y: 308, w: 420, h: 112, size: 25, color: C.soft },
      { text: "Проверка отнимает время", x: 690, y: 238, w: 480, h: 55, size: 34, color: C.white, bold: true },
      { text: "Без своей команды владелец перепроверяет выводы и снова собирает документ.", x: 690, y: 308, w: 470, h: 112, size: 25, color: C.soft },
      { text: "Наблюдение из анкеты R02. Один ответ описывает контекст, не частоту проблемы на рынке.", x: 82, y: 565, w: 980, h: 42, size: 19, color: C.amber },
    ],
    note: "По анкете R02 респондент ведёт проект самостоятельно, берёт задачи за пределами своей экспертизы и описывает сложности с постановкой задачи, проверкой результата и повторной сверкой. Это единичное наблюдение для выбора следующего исследования, а не доказательство распространённости проблемы.\nИсточники: S1 (pilot-package.md, разделы Decision and evidence boundary и Baseline before prototype).",
    source: "S1",
  },
  {
    kicker: "03 · ТЕКУЩИЙ СПОСОБ",
    title: "Сейчас R02 совмещает поиск, AI и помощь подрядчика",
    blocks: [
      { text: "Поиск в сети", x: 78, y: 238, w: 260, h: 54, size: 32, color: C.white, bold: true },
      { text: "Собрать материалы по задаче", x: 78, y: 304, w: 270, h: 82, size: 22, color: C.muted },
      { text: "AI и специалист", x: 442, y: 238, w: 320, h: 54, size: 32, color: C.white, bold: true },
      { text: "Получить помощь и сопоставить ответы", x: 442, y: 304, w: 330, h: 82, size: 22, color: C.muted },
      { text: "Повторная сверка", x: 850, y: 238, w: 340, h: 54, size: 32, color: C.white, bold: true },
      { text: "Свести результат в документ со ссылками", x: 850, y: 304, w: 350, h: 82, size: 22, color: C.muted },
      { text: "Так респондент описал несколько разных задач. Длительность из анкеты нельзя считать базовой скоростью одной задачи.", x: 78, y: 560, w: 1050, h: 54, size: 19, color: C.amber },
    ],
    note: "R02 указал поиск в интернете, AI и подрядчика как используемые способы. Также в пакете зафиксированы повторная проверка и итоговые документы со ссылками. Диапазон длительности смешивает разные задачи, поэтому мы не переносим его на будущий baseline.\nИсточники: S1, раздел Decision and evidence boundary.",
    source: "S1",
  },
  {
    kicker: "04 · ПРОТОПЕРСОНА",
    title: "Восемь ответов дали один предварительный профиль целевой аудитории",
    blocks: [
      { text: "R02", x: 78, y: 220, w: 330, h: 112, size: 88, color: C.violet, bold: true },
      { text: "Самостоятельный владелец / основатель. Есть проектная задача вне экспертизы и запрос на документы с источниками.", x: 80, y: 340, w: 510, h: 132, size: 25, color: C.soft },
      { text: "Остальные ответы", x: 700, y: 242, w: 420, h: 50, size: 31, color: C.white, bold: true },
      { text: "R03, R05 и R08 можно рассматривать как контрольные случаи после отдельной проверки критериев.", x: 700, y: 312, w: 450, h: 106, size: 23, color: C.soft },
      { text: "Контакта для R02 нет. Готовность и согласие на сессию не получены.", x: 80, y: 568, w: 930, h: 38, size: 21, color: C.amber, bold: true },
    ],
    note: "В исходной форме восемь ответов. Только R02 однозначно соответствует выбранному контексту владельца/основателя без команды. Воля участвовать не отмечена, контакт отсутствует, согласие на исследовательскую сессию отдельно не собиралось. R03, R05 и R08 не объявляются целевыми пользователями.\nИсточники: S1, разделы Segment, JTBD, and eligibility и Privacy-safe screening inventory.",
    source: "S1",
  },
  {
    kicker: "05 · ЗАДАЧИ ПОЛЬЗОВАТЕЛЯ",
    title: "Три спринта проверяют задачи одного протосегмента",
    blocks: [
      { text: "01 · Решение вне экспертизы", x: 78, y: 224, w: 330, h: 72, size: 27, color: C.white, bold: true },
      { text: "Понять, что подтверждают источники и какой шаг можно сделать дальше.", x: 78, y: 312, w: 332, h: 116, size: 22, color: C.soft },
      { text: "02 · Рынок и позиционирование", x: 470, y: 224, w: 348, h: 72, size: 27, color: C.white, bold: true },
      { text: "Сопоставить внешние данные с допущениями и выбрать полевой тест.", x: 470, y: 312, w: 330, h: 116, size: 22, color: C.soft },
      { text: "03 · Технический выбор", x: 880, y: 224, w: 330, h: 72, size: 27, color: C.white, bold: true },
      { text: "Сравнить подходы или поставщиков до расходов и реализации.", x: 880, y: 312, w: 328, h: 116, size: 22, color: C.soft },
      { text: "Это гипотезы последовательных исследовательских спринтов, а не три подтверждённые персоны.", x: 78, y: 564, w: 1050, h: 42, size: 20, color: C.amber },
    ],
    note: "В пилотном пакете описаны три task-proto гипотезы. Sprint 1 совпадает с предварительным профилем R02, но до допуска нужен конкретный безопасный кейс, доступ к участнику и отдельное согласие. Для Sprint 2 и Sprint 3 нужны свои подходящие участники; R05 и R03 не засчитываются автоматически.\nИсточники: S1, таблица Three sprint task hypotheses и правила advance Sprint.",
    source: "S1",
  },
  {
    kicker: "06 · ПРЕДЛАГАЕМОЕ РЕШЕНИЕ",
    title: "Результат должен показывать вывод, источники и то, что осталось неизвестным",
    blocks: [
      { text: "Вход", x: 78, y: 238, w: 230, h: 42, size: 23, color: C.violet, bold: true },
      { text: "Одна реальная задача и решение, которое предстоит принять", x: 78, y: 292, w: 265, h: 100, size: 22, color: C.soft },
      { text: "Анализ", x: 395, y: 238, w: 230, h: 42, size: 23, color: C.violet, bold: true },
      { text: "Внешние источники, проверка расхождений и ограничения", x: 395, y: 292, w: 270, h: 100, size: 22, color: C.soft },
      { text: "Результат", x: 735, y: 238, w: 230, h: 42, size: 23, color: C.violet, bold: true },
      { text: "Краткий decision brief с вариантами следующего шага", x: 735, y: 292, w: 260, h: 100, size: 22, color: C.soft },
      { text: "Передача", x: 1030, y: 238, w: 190, h: 42, size: 23, color: C.violet, bold: true },
      { text: "ZIP: result.md, sources.csv и metadata.json", x: 1030, y: 292, w: 194, h: 116, size: 21, color: C.soft },
      { text: "Это целевой контракт первого результата, а не подтверждение работающей интеграции.", x: 78, y: 564, w: 1000, h: 42, size: 20, color: C.amber },
    ],
    note: "Пилотный пакет определяет первый артефакт как source-linked decision brief и ZIP с результатом, таблицей источников и метаданными. В данных должно быть видно, где факт, вывод, ограничение или неизвестность. CTF-адаптация навыка, архитектура хранения и полный E2E пока не подтверждены.\nИсточники: S1, разделы Segment, JTBD, and eligibility и ZIP deliverable contract; S3.",
    source: "S1, S3",
  },
  {
    kicker: "07 · ПРЕДЫДУЩИЕ РЕЗУЛЬТАТЫ",
    title: "До пользовательского прогона у нас есть только анкета и план проверки",
    blocks: [
      { text: "Есть", x: 80, y: 238, w: 220, h: 48, size: 29, color: C.violet, bold: true },
      { text: "8 ответов формы\n1 предварительный fit (R02)\nописание baseline и ZIP-контракта", x: 80, y: 304, w: 440, h: 158, size: 25, color: C.soft },
      { text: "Ещё нет", x: 700, y: 238, w: 260, h: 48, size: 29, color: C.amber, bold: true },
      { text: "согласованного участника\nbaseline конкретной задачи\nпилотного результата или замеров", x: 700, y: 304, w: 470, h: 158, size: 25, color: C.soft },
      { text: "Скорость, качество и экономия времени не заявляются.", x: 80, y: 566, w: 880, h: 38, size: 22, color: C.white, bold: true },
    ],
    note: "В переданных материалах не зафиксированы результаты предыдущей защиты. Поэтому слайд показывает единственное имеющееся предварительное свидетельство и честную границу: продуктовых сессий, baseline и пилотных замеров ещё нет. Длительности нескольких разных задач из анкеты не служат сравнительной базой.\nИсточники: S1 (разделы Decision and evidence boundary, Baseline before prototype, Measurement form and comparison); S2.",
    source: "S1, S2",
  },
  {
    kicker: "08 · ТЕКУЩАЯ ПРОВЕРКА",
    title: "В этом спринте проверяем пользу brief и полный путь до ZIP",
    blocks: [
      { text: "Продуктовая гипотеза", x: 78, y: 216, w: 345, h: 50, size: 25, color: C.violet, bold: true },
      { text: "Помогают ли источники, расхождения и открытые вопросы выбрать следующий шаг?", x: 78, y: 278, w: 340, h: 130, size: 23, color: C.soft },
      { text: "Исследование", x: 470, y: 216, w: 290, h: 50, size: 25, color: C.violet, bold: true },
      { text: "Найти подходящего владельца, согласовать сессию и измерить baseline. Пока NOT RUN.", x: 470, y: 278, w: 330, h: 130, size: 23, color: C.soft },
      { text: "Техническая гипотеза", x: 865, y: 216, w: 340, h: 50, size: 25, color: C.violet, bold: true },
      { text: "Путь от задачи до ZIP должен пройти проверку на работающей системе. Интеграция и deploy не подтверждены.", x: 865, y: 278, w: 342, h: 148, size: 22, color: C.soft },
      { text: "Frontend готовность отдельно от CTF, постоянного хранения и деплоя.", x: 78, y: 570, w: 1000, h: 40, size: 20, color: C.amber },
    ],
    note: "План исследования и техническая проверка — разные линии работы. В пилоте user results стоят NOT_RUN. WEB-разработка идёт в изолированном handoff и её проверка не доказывает готовность CTF, серверного сохранения или deployment.\nИсточники: S1; S2 (Current handoff state); S3.",
    source: "S1, S2, S3",
  },
  {
    kicker: "09 · ДЕМО ПЕРВОЙ ПРОТОПЕРСОНЫ",
    title: "Демо покажем после проверки сборки и всего пользовательского пути",
    blocks: [
      { text: "Сценарий будущего демо", x: 78, y: 196, w: 520, h: 44, size: 25, color: C.violet, bold: true },
      { text: "Реальная задача", x: 78, y: 286, w: 260, h: 58, size: 31, color: C.white, bold: true },
      { text: "Подбор источников", x: 382, y: 286, w: 300, h: 58, size: 31, color: C.white, bold: true },
      { text: "Проверяемый brief", x: 730, y: 286, w: 300, h: 58, size: 31, color: C.white, bold: true },
      { text: "Сохранение и ZIP", x: 78, y: 398, w: 310, h: 58, size: 31, color: C.white, bold: true },
      { text: "Открытие проекта", x: 438, y: 398, w: 310, h: 58, size: 31, color: C.white, bold: true },
      { text: "Экранов и пользовательского результата для показа пока нет. Это маршрут приёмки, не запись работающего продукта.", x: 78, y: 566, w: 1070, h: 50, size: 20, color: C.amber },
    ],
    note: "Слайд задаёт проверяемый порядок будущего демо для первого task hypothesis. Доступные источники не дают оснований вставлять скриншот как доказательство: WEB build и реализацию ещё нужно сверить, сохранение и ZIP должны пройти E2E. Не демонстрировать локальную имитацию как пользовательский результат.\nИсточники: S1 (Deployment gate, second message, and E2E check); S3.",
    source: "S1, S3",
  },
  {
    kicker: "10 · АЛЬТЕРНАТИВЫ",
    title: "Первые критерии сравнения задают способы, которые описал R02",
    blocks: [
      { text: "Текущие способы", x: 78, y: 222, w: 365, h: 44, size: 25, color: C.violet, bold: true },
      { text: "Поиск в сети\nAI\nПодрядчик", x: 78, y: 286, w: 300, h: 158, size: 28, color: C.white },
      { text: "Что проверим у CoreTeams", x: 600, y: 222, w: 510, h: 44, size: 25, color: C.violet, bold: true },
      { text: "Насколько понятен следующий шаг\nМожно ли проверить ключевые источники\nЧто осталось неразрешённым", x: 600, y: 286, w: 520, h: 158, size: 23, color: C.soft },
      { text: "Это план сравнения с текущим способом R02. Конкуренты, цены и сравнительные преимущества ещё не исследованы.", x: 78, y: 562, w: 1030, h: 50, size: 20, color: C.amber },
    ],
    note: "R02 назвал поиск, AI и подрядчика. Пилотный протокол предлагает проверять на том же task и decision, с тем же качественным порогом и инструментами, насколько сопоставимы baseline и prototype. Имена конкурентов, их цены и преимущества в подтверждённых данных отсутствуют.\nИсточники: S1 (Decision and evidence boundary; Baseline before prototype; Measurement form and comparison).",
    source: "S1",
  },
  {
    kicker: "11 · МЕТРИКИ",
    title: "Пользовательские результаты и продуктовые метрики пока не измерены",
    blocks: [
      { text: "ДО ПРОТОТИПА", x: 78, y: 236, w: 310, h: 46, size: 23, color: C.violet, bold: true },
      { text: "NOT RUN", x: 78, y: 298, w: 310, h: 64, size: 38, color: C.amber, bold: true },
      { text: "Активное время\nОжидание и паузы\nИсточники и перепроверка", x: 78, y: 380, w: 400, h: 110, size: 22, color: C.soft },
      { text: "С ПРОТОТИПОМ", x: 666, y: 236, w: 360, h: 46, size: 23, color: C.violet, bold: true },
      { text: "NOT RUN", x: 666, y: 298, w: 310, h: 64, size: 38, color: C.amber, bold: true },
      { text: "Завершение задачи\nОшибки и запросы помощи\nПрименимость и проверка источников", x: 666, y: 380, w: 490, h: 110, size: 22, color: C.soft },
      { text: "Пустое значение означает «не собрано», а не ноль.", x: 78, y: 566, w: 820, h: 42, size: 21, color: C.white, bold: true },
    ],
    note: "Пакет определяет отдельные поля для baseline и prototype, включая активное время, ожидание, паузы, работу с источниками, ошибки и оценки участника. Записей сессий пока нет. Ноль запусков не подменяет неизвестные значения в будущей таблице сессий.\nИсточники: S1, разделы Measurement form and comparison и E2E checklist; S2.",
    source: "S1, S2",
  },
  {
    kicker: "12 · ЭКОНОМИКА И ТАРИФ",
    title: "Тариф появится после измерения ценности и себестоимости одного запуска",
    blocks: [
      { text: "Ценность для владельца", x: 80, y: 232, w: 420, h: 48, size: 28, color: C.violet, bold: true },
      { text: "Сравнить активное время, ожидание и переделки на одной задаче до и после прототипа.", x: 80, y: 298, w: 430, h: 124, size: 24, color: C.soft },
      { text: "Себестоимость запуска", x: 670, y: 232, w: 430, h: 48, size: 28, color: C.violet, bold: true },
      { text: "Учесть внешние сервисы, работу оператора, проверку результата, хранение и поддержку.", x: 670, y: 298, w: 440, h: 124, size: 24, color: C.soft },
      { text: "Цена пока не установлена. Нет данных ни для unit economics, ни для сравнения с альтернативами.", x: 80, y: 568, w: 1000, h: 48, size: 21, color: C.amber, bold: true },
    ],
    note: "Слайд фиксирует измерительные входы, а не тарифную рекомендацию. Для одного сопоставимого task нужно записать активную работу, ожидание и rework в обоих режимах, а также прямые затраты на запуск. В текущем пакете чисел себестоимости, готовности платить или цены нет.\nИсточники: S1 (Measurement form and comparison; Dependencies and dates). Значения тарифа отсутствуют.",
    source: "S1",
  },
  {
    kicker: "13 · СЛЕДУЮЩИЙ СПРИНТ",
    title: "Следующий проход требует участника, согласия и проверенного пути",
    blocks: [
      { text: "1 · Найти подходящего владельца", x: 78, y: 222, w: 460, h: 40, size: 23, color: C.white, bold: true },
      { text: "Катя: проверить критерии, получить отдельную готовность и согласие.", x: 78, y: 274, w: 475, h: 76, size: 20, color: C.muted },
      { text: "2 · Закрыть технические условия", x: 650, y: 222, w: 500, h: 40, size: 23, color: C.white, bold: true },
      { text: "Илья: CTF-контракт. Арина: схема хранения. Филипп: CI, сервер и готовность к тесту.", x: 650, y: 274, w: 500, h: 76, size: 20, color: C.muted },
      { text: "3 · Зафиксировать исходный замер", x: 78, y: 396, w: 500, h: 40, size: 23, color: C.white, bold: true },
      { text: "К прототипу перейти после проверки пути и отдельного согласия.", x: 78, y: 448, w: 492, h: 76, size: 20, color: C.muted },
      { text: "Запрошенный срок результатов: 17 октября, 00:59 MSK. Это целевой срок, не подтверждение готовности зависимостей.", x: 650, y: 432, w: 510, h: 78, size: 19, color: C.amber },
    ],
    note: "Пилот запускается только после допуска участника и реального DEPLOYMENT_READY. Согласие на baseline и запрос на prototype session разделены. T0 и срок результатов записаны в передаче; точного часа пятничной задачи Филиппа источники не подтверждают, поэтому здесь он не придуман.\nИсточники: S1 (Deployment gate, second message, and E2E check; Dependencies and dates); S2; S3.",
    source: "S1, S2, S3",
  },
  {
    kicker: "14 · ТЕХНОЛОГИЧЕСКИЙ СТЕК",
    title: "WEB-сборка проходит проверки, а серверный путь ещё требует подтверждения",
    blocks: [
      { text: "React 19.3.0 · Vite 8.3.4 · TypeScript 5.9", x: 78, y: 226, w: 950, h: 66, size: 37, color: C.white, bold: true },
      { text: "Сборка для запуска и 8 модульных проверок прошли", x: 80, y: 305, w: 520, h: 58, size: 22, color: C.violet, bold: true },
      { text: "Браузерные проверки на компьютере и телефоне прошли. API предложен; CTF и сохранение на сервере не подключены.", x: 80, y: 374, w: 510, h: 90, size: 20, color: C.soft },
      { text: "CTF контракт", x: 680, y: 306, w: 250, h: 40, size: 25, color: C.amber, bold: true },
      { text: "Требует подтверждения Ильи", x: 680, y: 356, w: 360, h: 52, size: 21, color: C.soft },
      { text: "Хранилище и деплой", x: 680, y: 432, w: 330, h: 40, size: 25, color: C.amber, bold: true },
      { text: "Архитектура Арины и DEPLOYMENT_READY Филиппа не подтверждены", x: 680, y: 480, w: 480, h: 72, size: 20, color: C.soft },
      { text: "Frontend-проверки не доказывают интеграцию, постоянную запись или готовность деплоя.", x: 80, y: 582, w: 980, h: 38, size: 19, color: C.muted },
    ],
    note: "Владелец подтвердил main React/Vite/TypeScript build, восемь unit checks и ранее пройденные browser checks для desktop/mobile. Версии: React 19.3.0, Vite 8.3.4, TypeScript 5.9, сборка на Node 24.19.0. API adapter предложен; live CTF, серверное сохранение и серверная интеграция не реализованы. Browser draft не является гарантией постоянного хранения.\nИсточники: S3 (HANDOFF-WEB.md); S2 (Current handoff state); S4 (handoff index); S5 (owner verification update, 15.10.2026).",
    source: "S2, S3, S4, S5",
  },
  {
    kicker: "15 · КОМАНДА И СЛЕДУЮЩЕЕ РЕШЕНИЕ",
    title: "Пять ролей ведут от гипотезы к проверяемому пилоту",
    blocks: [
      { text: "Катя", x: 78, y: 210, w: 170, h: 42, size: 26, color: C.violet, bold: true },
      { text: "WEB и метрики", x: 248, y: 210, w: 300, h: 42, size: 24, color: C.white },
      { text: "Илья", x: 78, y: 278, w: 170, h: 42, size: 26, color: C.violet, bold: true },
      { text: "CTF интеграция", x: 248, y: 278, w: 330, h: 42, size: 24, color: C.white },
      { text: "Арина", x: 78, y: 346, w: 170, h: 42, size: 26, color: C.violet, bold: true },
      { text: "Архитектура хранения", x: 248, y: 346, w: 390, h: 42, size: 24, color: C.white },
      { text: "Филипп", x: 680, y: 210, w: 180, h: 42, size: 26, color: C.violet, bold: true },
      { text: "CI, деплой, подключение хранения", x: 862, y: 210, w: 335, h: 72, size: 22, color: C.white },
      { text: "Дмитрий", x: 680, y: 322, w: 180, h: 42, size: 26, color: C.violet, bold: true },
      { text: "Точечная помощь с React только по запросу Кати", x: 862, y: 322, w: 340, h: 78, size: 22, color: C.soft },
      { text: "Следующее решение: проверить WEB, согласовать CTF и storage, затем подтвердить полный путь до приглашения пользователя.", x: 78, y: 536, w: 1080, h: 68, size: 21, color: C.amber, bold: true },
    ],
    note: "Роли взяты из handoff index. Дмитрий остаётся условным резервом и не получает самостоятельных задач без конкретного запроса Кати. Сейчас нужно закрыть обязательные технические материалы и целевой набор участника; публикация Wiki и принятие задач не считаются завершёнными только по наличию локального draft.\nИсточники: S2 (Current handoff state); S4 (индекс передачи, текущая редакция).",
    source: "S2, S4",
  },
];

function addText(slide, { text, x = 76, y = 64, w = 1128, h = 58, size = 25, color = C.white, bold = false, align = "left" }) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name: `text-${Math.round(x)}-${Math.round(y)}-${text.slice(0, 28)}`,
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.insets = 0;
  shape.text.style = { fontSize: size, typeface: font, color, bold, alignment: align, verticalAlignment: "middle" };
  return shape;
}

async function writeBlob(target, blob) {
  await fs.writeFile(target, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(previewDir, { recursive: true });
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  for (const [i, item] of slides.entries()) {
    const slide = presentation.slides.add();
    slide.background.fill = C.bg;
    if (i === 0) {
      addText(slide, { text: item.kicker, x: 76, y: 78, w: 900, h: 32, size: 18, color: C.violet, bold: true });
      addText(slide, { text: item.title, x: 70, y: 146, w: 950, h: 140, size: 104, color: C.white, bold: true });
    } else {
      addText(slide, { text: item.kicker, x: 78, y: 47, w: 1050, h: 32, size: 17, color: C.violet, bold: true });
      addText(slide, { text: item.title, x: 78, y: 95, w: 1120, h: 104, size: item.title.length > 64 ? 39 : 43, color: C.white, bold: true });
    }
    for (const block of item.blocks) addText(slide, block);
    if (i > 0) addText(slide, { text: String(i + 1).padStart(2, "0"), x: 1150, y: 668, w: 58, h: 24, size: 15, color: C.dim, align: "right" });
    slide.speakerNotes.text = `${item.note}\nEvidence status: ${item.source}. Черновик, требует обновления по фактическим результатам перед защитой.`;
    slide.speakerNotes.setVisible(true);
    const preview = await presentation.export({ slide, format: "png", scale: 1 });
    await writeBlob(path.join(previewDir, `slide-${String(i + 1).padStart(2, "0")}.png`), preview);
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(previewDir, `slide-${String(i + 1).padStart(2, "0")}.layout.json`), await layout.text(), "utf8");
  }

  const montage = await presentation.export({ format: "webp", montage: true });
  await writeBlob(path.join(previewDir, "contact-sheet.webp"), montage);

  const candidatePath = path.join(buildDir, "candidate.pptx");
  await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

  const skillDir = "C:/Users/Екатерина Поварнина/.codex/plugins/cache/openai-primary-runtime/presentations/26.1013.11914/skills/presentations";
  const finalizer = await import(pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href);
  let finalizerResult = null;
  let finalizerError = null;
  try {
    finalizerResult = await finalizer.finalizePresentation({
      explicitTotalSlideCount: 15,
      workspaceDir: outDir,
      candidatePath,
      finalPath: finalizedBuildPath,
      pythonExecutable: "C:/Users/Екатерина Поварнина/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe",
      integrityValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_package_integrity.py"),
      layoutValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_layout_geometry.py"),
      layoutArgs: ["--expected-slide-size-emu", "12192000,6858000", "--validate-heading-fit"],
      fontPolicy: { basis: "design", families: [font] },
      verifyArtifactToolImport: true,
      receiptPath: path.join(buildDir, "validation.json"),
    });
  } catch (error) {
    finalizerError = String(error);
  }
  const deliverFrom = finalizerResult ? finalizedBuildPath : candidatePath;
  await fs.copyFile(deliverFrom, finalPath);
  const validationStatus = {
    finalizer: finalizerResult ? "passed" : "blocked",
    finalizerError,
    fallback: finalizerResult ? "none" : "artifact-tool render + PPTX re-import + package inventory",
    slideCount: slides.length,
    noteCount: slides.length,
    fontPolicy: { basis: "design", families: [font] },
  };
  await fs.writeFile(path.join(buildDir, "validation-status.json"), JSON.stringify(validationStatus, null, 2), "utf8");
  console.log(`Created ${slides.length} editable slides: ${finalPath}`);
  console.log(JSON.stringify(validationStatus));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
