# Corridor test packet — CoreTeams prototype v9.2

## Purpose and boundary

- Decision informed: whether a first-time visitor understands the CoreTeams promise and can begin the project-creation path without facilitation.
- Prototype boundary: local interactive demo. It simulates the AI team, time, credits, and prepared outputs; uploaded file contents are not analysed, and projects/feedback remain in the browser.
- Test scope: landing page → “Рассказать о задаче” → optional registration skip → task description → scenario choice → three clarification questions → proposed team. Do not test the simulated work, credits, or quality of generated artefacts as real product behaviour.
- Target evidence: observed first-use behaviour, comprehension, and navigation barriers. This test cannot validate demand, willingness to pay, or the quality of the proposed AI team.
- Session length: 7–10 minutes each; stop early if the participant wishes.

## Checklist before the test

- [x] Legend prepared.
- [x] One bounded scenario and expected path prepared.
- [x] Neutral questions prepared: “What do you see?”, “What do you understand?”, “What would you do next?”.
- [x] Observation sheet prepared below; no participant name, contact, recording, or unconsented quote goes into the harness.
- [ ] Recruit 5–10 people who have not seen the prototype and were not involved in its design. Owner approval is required before inviting or collecting any contact details.
- [ ] Explain voluntary participation, that the interface is being tested rather than the participant, and that they may stop or skip any question.
- [ ] Open `CoreTeams-прототип-v9.2.html` locally; check desktop or participant device, readable zoom, network-independent loading, and keyboard/mouse.
- [ ] Before every participant, start with a clean browser profile or clear the prototype's local storage; the demo stores projects and feedback on the device.
- [ ] Prepare a notes sheet and a timer. Do not record the session without explicit consent.

## Moderator legend

> Спасибо, что помогаете. Мы проверяем прототип CoreTeams, а не вас: здесь нет правильных или неправильных действий. Представьте, что у вас появилась задача, для которой нужны разные специалисты, но пока непонятно, с чего начать. Пожалуйста, проходите так, как сделали бы сами, и по возможности говорите вслух, что замечаете и о чём думаете. Я не буду подсказывать или объяснять интерфейс — если что-то непонятно, это полезно для нас. Можно остановиться или пропустить любой вопрос в любой момент. Прототип демонстрационный: команда и результаты в нём имитируются, а файлы не анализируются.

## Scenario and moderator actions

### Task 1 — understand the offer

**Prompt to participant:** “Вы впервые открыли CoreTeams. Не нажимая ничего, расскажите, что вы здесь видите и как понимаете, чем сервис может помочь.”

- Observe: first element noticed; description of value; whether they infer “AI team around a task”; whether the demo boundary is noticed.
- Ask only after they answer: “Что вы ожидаете получить в итоге?”
- Success signal: participant independently describes bringing a task, receiving help from several roles, and getting one result or next-step plan.
- Barrier signal: perceives it as a generic chatbot, a marketplace of human experts, a finished AI service, or cannot say what action is available.
- Moderator action: silently note wording; do not correct the interpretation.

### Task 2 — start a project

**Prompt to participant:** “Теперь вы хотите разобрать задачу: нужно подготовить план запуска небольшой кофейни рядом с университетом, но вы пока не знаете, что проверить до аренды помещения. Покажите, что бы вы сделали дальше.”

- Expected path: choose “Рассказать о задаче” → optionally skip the demonstration registration → continue to task description.
- On each new screen, ask in this order only if the participant does not verbalise it: “Что вы видите?” → “Что вы понимаете?” → “Что хотите сделать дальше?”
- Observe: whether registration looks compulsory or suspicious; whether the participant knows that it is a demonstration; hesitation or wrong clicks.
- If stuck for 20–30 seconds, say: “Что вы сейчас ищете?” Do not name a control. If they stop, end the task and note it as a block.

### Task 3 — describe the task and select the path

**Prompt to participant:** “Заполните только то, что вы считаете необходимым, чтобы команда начала разбираться с этой задачей. Думайте вслух.”

- Expected path: choose “Бизнес и новая идея” or explain a different choice; give a project name; enter a problem; optionally add context; continue to clarification questions.
- Observe: understanding of “направление”, distinction between project name / problem / context, willingness to add files, and interpretation of the note that files are not analysed.
- Ask after a choice: “Почему вы выбрали именно это направление?”
- Barrier signal: users expect automatic file analysis, cannot decide which field needs which information, or cannot infer the difference between directions.

### Task 4 — understand clarifying questions and the proposed team

**Prompt to participant:** “Ответьте так, как ответили бы для своей задачи, а затем посмотрите на предложенную команду. Расскажите, чего вы от неё ожидаете и что, по вашему мнению, произойдёт дальше.”

- Expected path: answer all three questions → open team proposal → understand role purpose and move to plan.
- Observe: whether multiple choice / own answer / “предложите вариант” are understood; whether suggested answers are recognised as assumptions; whether role cards and the demo warning are understood.
- Ask: “Что здесь является обещанием сервиса, а что — лишь демонстрацией?”
- Success signal: participant identifies that the team is a proposal, not connected specialists, and expects to review a plan before simulated work begins.
- Barrier signal: treats a suggested answer or generated team as a verified fact; expects live expert engagement or real analysis of uploaded files.

## Debrief questions

Ask after the tasks, without defending the design:

1. “Как бы вы одним предложением объяснили CoreTeams коллеге?”
2. “На каком моменте вы сомневались или не понимали, что делать?”
3. “Какой информации вам не хватило, чтобы продолжить уверенно?”
4. “Что вы ожидали бы получить после согласования плана?”
5. “Что в этом прототипе выглядело для вас как реальная функция, а что как демонстрация?”
6. “Если бы вы не продолжили, что стало бы причиной?”

Do not ask “Вам понравилось?” or “Понятна ли эта кнопка?” as the primary question. Ask for the participant’s interpretation and observed next action instead.

## Observation sheet

| Step | Intended action | Observed action / quote | Outcome | Severity | Evidence type |
|---|---|---|---|---|---|
| Landing | Understand offer |  | completed / detour / blocked | critical / important / minor | observed behaviour |
| Start | Begin task path |  | completed / detour / blocked | critical / important / minor | observed behaviour |
| Task description | Choose direction and provide context |  | completed / detour / blocked | critical / important / minor | observed behaviour |
| Clarification | Answer questions and view team |  | completed / detour / blocked | critical / important / minor | observed behaviour |
| Debrief | Explain expectation and demo boundary |  | clear / partial / incorrect | critical / important / minor | stated interpretation |

## After each session and after 5–10 sessions

1. Record only aggregate, consented observations; label each as observed behaviour or stated interpretation.
2. Reset browser state before the next participant.
3. After all sessions, group repeated issues by screen and severity:
   - **Critical:** prevents starting the core path or produces a materially wrong expectation about the service.
   - **Important:** the participant can proceed but with confusion, detours, or an expectation that would harm later trust.
   - **Minor:** wording or visual friction that does not affect task completion.
4. Do not treat a single preference as a product decision. Prioritise issues repeated by at least two participants or a single critical block; preserve what repeatedly works.
5. Record the aggregate result in the sprint hypothesis record as `supported`, `contradicted`, `inconclusive`, or `NOT_RUN`; do not claim real-use validation from this hallway test.
