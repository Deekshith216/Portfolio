Type: grilling
Status: open
Blocked by: 02

## Question

Given the decision to actually build the site in React (Vite + Tailwind are already declared in `package.json` but unused), how should the app be structured? Resolve:

- Folder/component layout (per-section components, shared layout shell, etc.).
- How design tokens (color, type scale, spacing from Visual Identity System) map into Tailwind config vs. component-level styles.
- Migration approach from the current single `index.html` — rewrite from scratch informed by content, or port section-by-section.
- Whether any current vanilla-JS behavior (IntersectionObserver reveals, nav highlighting) gets reimplemented as React hooks/components or replaced by a library decided in Motion & Interaction Language.

Depends on Section Architecture settling what sections/components actually need to exist. Use `/grilling`.
