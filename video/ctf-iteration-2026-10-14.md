# CTF video — iteration package

Date: 2026-10-14 (Europe/Moscow)  
Status: planning only — do not render, export, publish, or overwrite media without owner confirmation.

## Fixed baseline

| Item | Recorded state | Confidence |
|---|---|---|
| Product | CoreTeams | Chat-sourced context |
| Format | Horizontal 3D clip, transition through the screen, no music | Chat-sourced context |
| Existing versions | Initial version, reported 75-second cut, reported 30-second cut | Versions must be preserved; no local paths are mapped |
| Current version for review | 30-second cut | Its acceptance is **UNKNOWN** |
| Draft / final technical rule | Draft: 720p, 24 fps. Final: 1080p, 30 fps only after content approval | Active decision D-008 |

This record does not verify the actual media contents; it fixes the reported baseline so that the next iteration has an explicit review target.

## Open decisions

1. Accept, reject, or conditionally accept the 30-second cut.
2. State whether shortening to 30 seconds consumed one of the three agreed revision rounds.
3. Confirm the audience and the single intended action after viewing (for example, understand the CTF flow, start a task, or book a demo).
4. Confirm the factual claims and supply the media/project root if visual parity with the existing cut is required.

## Nearest owner action

Review the 30-second cut and respond with: `accept` / `revise`, whether it counts as a revision round, and the target viewer. Until then, use the package below as a proposed next iteration only.

## Proposed 30-second scenario — “From request to resolved CTF task”

Purpose: make the CoreTeams CTF flow legible in one viewing without unverified performance, integration, or security claims.

| Time | Visual / transition | On-screen copy | Sound |
|---|---|---|---|
| 0:00–0:03 | Dark 3D space. A task card appears, isolated; camera begins a slow forward move. | `CTF-задача не должна теряться в потоке` | Low interface pulse; no music |
| 0:03–0:07 | The card opens into a CoreTeams workspace. Roles or participants appear as neutral avatars; a task route begins to form. | `Одна задача — общий контекст` | Soft UI confirmation |
| 0:07–0:12 | Camera passes **through the screen** into the task card. Inside: structured fields, status, and a clear next step—no fictitious metrics. | `Поставить. Передать. Выполнить.` | Three restrained UI ticks |
| 0:12–0:18 | 3D route connects team, CTF runner, and result as labelled abstract nodes. Use “поток задачи”, not a claim of a completed production integration. | `Прозрачный путь от запроса к результату` | Rising data-flow texture |
| 0:18–0:24 | Camera returns through the screen to the workspace; result state is highlighted and the team regains one shared view. | `Команда видит, что делать дальше` | Resolution chime |
| 0:24–0:30 | CoreTeams wordmark/title on the focused task surface; hold sufficient time for reading. | `CoreTeams`<br>`CTF в общем рабочем контексте` | Tail fades to silence |

### Claim guardrails

- Keep copy descriptive of the intended workflow; do not claim speed, adoption, security certification, completed integration, or measured effect unless an owner supplies evidence.
- “CTF runner” may appear as a conceptual route only until the technical contour is verified.
- Do not show personal data, real credentials, customer names, or invented dashboards.

## Generation prompts

Use the same seed/style family across clips where the selected tool supports it. Generate each shot separately; assembly creates the continuity.

### Global visual prompt

`Cinematic premium B2B product film, dark graphite environment, restrained electric-blue and warm amber accents, abstract 3D glass interface panels, clean Russian sans-serif UI placeholders, volumetric soft light, high contrast, shallow depth of field, precise smooth camera movement, 16:9 horizontal, no people faces, no logos except approved CoreTeams title card, no music implied.`

### Shot prompts

1. **Problem card (0:00–0:03)**  
   `A single floating task card in a dark graphite 3D space, subtle blue edge glow, information streams pass around it without connecting, slow camera push-in, premium enterprise product-film style, leave safe central area for Russian text overlay, 16:9.`

2. **Shared workspace (0:03–0:07)**  
   `A clean abstract team workspace resolves around a floating task card: connected status chips, neutral avatar circles, thin luminous route lines converging into one shared context, dark graphite and electric blue, smooth orbital camera, leave upper-left negative space for copy, 16:9.`

3. **Screen transition (0:07–0:12)**  
   `First-person camera travels through a translucent glass product interface into a structured task card, elegant parallax layers, visible status field and next-step icon but no readable fake data, physically plausible depth, dark premium B2B 3D interface, 16:9.`

4. **CTF route (0:12–0:18)**  
   `Inside an abstract task system, three labelled conceptual nodes connect in sequence: team, CTF runner, result; luminous data route animates from left to right, no code screen, no numeric claims, dark graphite background with blue and amber accents, gentle forward tracking camera, 16:9.`

5. **Resolved shared view (0:18–0:24)**  
   `Camera exits a glass product interface back into one calm team workspace; a task changes to a completed-result state and the route resolves into a simple clear path, restrained premium product visual, no fake analytics, 16:9.`

6. **End card (0:24–0:30)**  
   `Minimal dark graphite end card in a subtle 3D interface environment, a softly glowing centered title area, electric-blue edge light, clean empty lower field for final Russian copy, hold stable with very subtle camera drift, 16:9.`

### Negative prompt

`No vertical framing, no upbeat stock footage, no literal hacker imagery, no green code rain, no weapons, no cybercrime motifs, no glitch overload, no crowded UI, no unreadable gibberish text, no fake customer logos, no unverified statistics, no background music, no copyrighted brand marks.`

## Assembly plan

1. **Lock review brief:** owner resolves the three open content decisions above; retain all media unchanged.
2. **Asset pass:** select or generate six shots as 720p/24 fps draft material; record tool, model, seed, prompt version, and output filename outside this repository if paths are sensitive.
3. **Edit:** cut to the timestamps above; add Russian text as editable post-production overlays, not generated in-image text.
4. **Sound:** use only subtle licensed/original UI effects; no music. Keep dialogue-free mix intelligible at low volume.
5. **Draft QA:** review 16:9 framing, copy readability, screen-through transition, claim guardrails, and whether the ending remains visible for at least 3 seconds.
6. **Owner review:** request explicit approve/revise decision and record whether a revision round was spent.
7. **Final gate:** only after approval, prepare the 1080p/30 fps render. Publishing remains a separate explicit owner authorization.

## Review checklist

- [ ] 30-second baseline was accepted or rejected.
- [ ] Revision-round accounting is confirmed.
- [ ] All text uses approved wording and is readable in the final viewing context.
- [ ] No unverified claim or sensitive content appears.
- [ ] No music is present.
- [ ] Existing versions remain preserved.
- [ ] Owner has separately approved final rendering.
- [ ] Owner has separately approved publication, if publication is desired.
