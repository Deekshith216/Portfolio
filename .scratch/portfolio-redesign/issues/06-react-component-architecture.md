Type: grilling
Status: resolved
Blocked by: 02 (resolved)

## Question

Given the decision to actually build the site in React (Vite + Tailwind are already declared in `package.json` but unused), how should the app be structured? Resolve:

- Folder/component layout (per-section components, shared layout shell, etc.).
- How design tokens (color, type scale, spacing from Visual Identity System) map into Tailwind config vs. component-level styles.
- Migration approach from the current single `index.html` — rewrite from scratch informed by content, or port section-by-section.
- Whether any current vanilla-JS behavior (IntersectionObserver reveals, nav highlighting) gets reimplemented as React hooks/components or replaced by a library decided in Motion & Interaction Language.

Depends on Section Architecture settling what sections/components actually need to exist. Use `/grilling`.

## Answer

- **Migration approach**: full rewrite from scratch, informed by the existing content — not a section-by-section port. The redesign changed layout/sections/motion enough that porting piecemeal would fight the old structure.
- **Language**: plain JavaScript (`.jsx`), not TypeScript. `@types/react`/`@types/react-dom` (currently installed but unused) get dropped.
- **Design tokens**: live in Tailwind v4's `@theme` block in `index.css` — colors, DM Sans/Playfair Display, spacing scale from the Kinetic Maximal Type spec (ticket 01). Single source of truth, no separate `:root` CSS-variable layer.
- **Motion mechanics**: shared custom hooks (`useScrollReveal`, `useHideOnScroll`) wrapping Framer Motion (ticket 05) — one implementation per pattern, reused across section components, not repeated inline.
- **New dependency**: `framer-motion` needs adding to `package.json` (not yet present).

**Folder structure:**

```
src/
  main.jsx                    — mount point
  App.jsx                     — renders Nav, all sections in order, Footer
  index.css                   — Tailwind import + @theme block (design tokens)
  components/
    layout/
      Nav.jsx                 — full nav, uses useHideOnScroll + active-link highlight
      Footer.jsx
    sections/
      Hero.jsx                — Scroll-Triggered Reveal Collage (ticket 03)
      Marquee.jsx             — tech-stack ticker, between Hero and About
      About.jsx
      Skills.jsx
      CaseStudies.jsx         — renders CaseStudyTabs
      OtherWork.jsx
      Journey.jsx
      Contact.jsx             — Web3Forms integration (ticket 07) lives here
    shared/
      CaseStudyTabs.jsx       — data-driven, sharp directional-slide transition (ticket 04, 05)
      StatCounter.jsx         — animated count-up, reused wherever stats appear
  hooks/
    useScrollReveal.js
    useHideOnScroll.js
  data/
    caseStudies.js            — the 3 GenAI projects (title, problem, approach, tags, link)
    otherWork.js
    journey.js
```

Section order in `App.jsx` matches Section Architecture (ticket 02): Nav → Hero → Marquee → About → Skills → CaseStudies → OtherWork → Journey → Contact → Footer.

This was the last open ticket on the map — the redesign spec is now complete and ready to hand off for implementation.
