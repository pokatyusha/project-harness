# Dala-inspired presentation tokens

## Status and scope

This is a project adaptation of the owner-provided style reference and tokens. It guides newly designed defence slides; it does not license or reproduce the reference site’s layouts, assets, logo, or animated particle field.

## Color roles

| Token | Value | Slide use |
|---|---|---|
| Void | `#000000` | Full-slide canvas and negative space |
| Bone white | `#ffffff` | Headlines and primary body text |
| Ash gray | `#9a9a9a` | Secondary labels and source context |
| Silver mist | `#bdbdbd` | Supporting text when contrast remains sufficient |
| Electric iris | `#8052ff` | One primary accent, key active state, or small emphasis |
| Saffron spark | `#ffb829` | Small label or precise textual emphasis |
| Deep verdant | `#15846e` | Rare secondary accent in a diagram or abstract visual |

Use the void as the only broad surface. Do not create dark-gray panels, colored slide backgrounds, shadows, or decorative borders. In the supplied CSS, `--surface-deep-verdant-tint: #15846` is incomplete; this reference normalizes it to the explicitly supplied valid color `#15846e`.

## Type and layout

- Preferred family: PPNeueMontreal if available and licensed; fallback: Inter.
- Use visual hierarchy through scale and spacing rather than bold display type. Display/headlines use regular weight; body uses extra-light only when the actual display keeps it legible, otherwise regular.
- Presentation adaptation: cover 72–96 pt; section heading 48–60 pt; slide heading 32–44 pt; body 20–24 pt; caption/source 14–16 pt. Do not mechanically reuse small web text sizes.
- Use a 6 pt base spacing unit; prefer 12, 18, 24, 36, 60, 96, and 120 pt rhythms where the slide size allows.
- Keep a spacious, asymmetric two-column composition when the content supports it. For dense evidence, use an editable chart/table with enough whitespace rather than a card grid.

## Composition library

| Slide role | Composition | Motion default |
|---|---|---|
| Cover | One oversized statement and one abstract visual or accent | Headline fade, then visual fade |
| Section | Number or short section label with large type | Single fade on click |
| Key claim | One claim plus one supporting piece of evidence | Claim first, evidence next |
| Comparison | Two clearly separated columns with shared baseline | Columns appear in reading order |
| Chart or table | Native editable evidence, one highlighted conclusion | Evidence static, annotation appear |
| Process | Direct left-to-right or top-to-bottom sequence | One step per click only when pacing matters |
| Closing | One conclusion and next action | Static or one fade |

## Motion grammar

- Default entrance: `Fade` or `Appear`, 0.25–0.5 seconds, ease-out when available.
- Use click triggers for defence pacing. Avoid auto-advance unless the owner explicitly asks for a timed video-style sequence.
- Reveal labels before the evidence they explain; reveal a comparison baseline before variants.
- Use a single, non-looping abstract motion asset only when it supports the message. It must be original, licensed, or generated for the deck.
- Keep an equivalent static slide reading order for every animated sequence.

## Avoid

- Copies of the Dala logo, constellation/brain field, screenshots, page navigation, or component layouts.
- Multiple filled violet controls, violet background blocks, rainbow decoration, or several competing accents.
- Cards, shadows, thick borders, dense dashboard layouts, tiny web-scale text, and motion that exists only for decoration.
