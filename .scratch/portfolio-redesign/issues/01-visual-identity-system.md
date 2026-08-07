Type: prototype
Status: resolved

## Question

What is the specific bold visual identity for the redesign, within the "stay light, no dark mode" constraint? Needs to cover:

- Typography: keep or evolve the Playfair Display + DM Sans pairing; what's the scale/hierarchy that reads as bold rather than safe?
- Color: how does the current palette (`#faf8f4` bg, `#c1440e` burnt-orange accent, `#2d5a3d` green accent, `#1a1612` text) evolve to feel striking rather than just "warm neutral"?
- Spacing/grid system: what layout grid gives room for asymmetry and confident whitespace?
- Iconography/graphic elements: given no custom photography/illustration budget, what typographic or geometric devices carry visual interest (e.g. oversized numerals, rules, texture from type itself)?

This is the highest-leverage ticket — Hero, Motion, and Case Study Format all build on whatever's decided here. Use `/prototype` (UI variant) to produce a rough concrete artifact (style-tile or key-screen mock) to react to, not just a written description.

## Answer

**Winner: Variant C — Kinetic Maximal Type.** Three variants were prototyped (Editorial/Oversized Numerals, Mono-Grid Technical, Kinetic Maximal Type) at `.scratch/portfolio-redesign/prototypes/visual-identity.html` (switchable via `?variant=A|B|C`). User picked C outright, no mixing.

The visual identity system going forward:

- **Typography**: DM Sans at heavy/black weight (900) used oversized as a background graphic device (not just headline text) — the type itself is the texture. Playfair Display *italic* reserved for a secondary "stamped" headline treatment: set on a solid dark chip, slightly rotated, sitting above the background type. DM Sans (regular/medium) for body copy.
- **Color**: burnt-orange (`#c1440e`) and green (`#2d5a3d`) both get promoted from "accent" to **solid fill/block** color — full-color project cards, solid geometric shapes (e.g. a floating circle) — not just text highlights or thin accents. Base stays light (`#faf8f4` bg, `#1a1612` for text and the dark headline chip).
- **Spacing/layout**: layered, overlapping composition (z-index stacking of background type, shapes, and foreground content), intentional slight rotation on key elements (headline chip, project card) for kinetic energy — offset just enough to feel alive, not chaotic. Keep negative space around the loud elements so it doesn't tip into clutter.
- **Graphic devices** (no photography/illustration budget): oversized background type as the primary texture; solid-color geometric shapes (circles/blocks) as depth cues; hard, offset drop-shadows (no blur) on cards for a collage/sticker feel; stat numbers rendered with text-stroke + colored shadow for a "loud numeral" treatment instead of plain digits.

This is the reference spec that Hero Section Design, Motion & Interaction Language, GenAI Case Study Format, and React Component Architecture should build on.
