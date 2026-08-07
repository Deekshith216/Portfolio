Label: wayfinder:map

# Portfolio UI/UX Redesign

## Destination

A UI/UX redesign spec for Deekshith H Gatty's portfolio: a bold, striking visual and interaction direction, specified in enough detail to hand off for implementation as a real React (Vite + Tailwind) app — replacing the current single-file vanilla HTML/CSS/JS site. Covers visual identity, section architecture, motion language, a distinct case-study treatment for the GenAI/LLM projects, a working contact form, and prominent resume access.

## Notes

- **Domain**: personal portfolio site for a software developer targeting dev + gen-AI engineering roles. Actively applying now — favors decisions that are fast to execute *well* over the most ambitious idea in every ticket, but the user explicitly wants high ambition on signature moments (see Decisions so far).
- **Skills to consult**: `/grilling` + `/domain-modeling` for grilling-type tickets; `/prototype` for prototype-type tickets (UI variant of the skill); `/research` for research-type tickets.
- **Current state** (from codebase survey): live site is a single ~1600-line `index.html` with inline CSS/JS, deployed to GitHub Pages via `gh-pages` from a `dist/` build. React 19 + Vite 7 + Tailwind 4 are declared in `package.json` but entirely unused (no `src/`, no mount point). Existing token system: `--bg:#faf8f4`, `--accent:#c1440e` (burnt orange), `--accent-alt:#2d5a3d` (dark green), `--text-primary:#1a1612`; fonts Playfair Display + DM Sans. Sections today: Hero / About / Skills / Work / Journey / Contact. 4 projects, 3 of them GenAI/LLM-based (Smart Study Assistant, Smart Text Summarizer, FAQ Knowledge Assistant) + 1 automation bot (Naukri Auto-Updater).
- **Standing preferences**: stay light-mode (no dark mode) — push boldness through typography/layout/motion instead; no custom photography or illustration budget — design is type/layout/motion-driven; nothing is off-limits on content or stack changes; keep the GenAI projects visually spotlighted over the automation project.
- **Priority order when multiple tickets are unblocked**: Hero + first impression first, since that's what a recruiter sees in the first few seconds.

## Decisions so far

- [Contact Form Service](issues/07-contact-form-service.md) — Web3Forms: best free tier, no client library, plain POST works on static GitHub Pages hosting. Details on branch `worktree-agent-aa25915ed47a09979`.
- [Visual Identity System](issues/01-visual-identity-system.md) — Kinetic Maximal Type: oversized DM Sans background type as texture, burnt-orange/green promoted to solid color blocks (not just accents), layered/rotated composition, hard offset shadows. Reference spec for Hero, Motion, Case Study Format, and React Component Architecture.
- [Hero Section Design](issues/03-hero-section-design.md) — Scroll-Triggered Reveal Collage: fragmented headline flies in on load, scroll reveals stats + a project "peek" card, background type parallaxes on scroll. Establishes scroll-driven reveal as a confirmed motion technique for the site.
- [Section Architecture & Content Placement](issues/02-section-architecture.md) — Hero → About → Skills → Case Studies → Other Work → Journey → Contact. Case Studies (3 GenAI projects) split from Other Work (automation bot); resume is hero-CTA-only; Contact gets a full section with form + direct links.
- [GenAI Case Study Format](issues/04-genai-case-study-format.md) — Tabbed Deep-Dive: pill-tabs switch between the 3 case studies one at a time, each showing a pull-quote problem statement, approach paragraph, stack tags, and a source link.
- [Motion & Interaction Language](issues/05-motion-interaction-language.md) — Framer Motion adopted; scroll-reveal, counters, marquee, hide-on-scroll nav all carry forward; cursor parallax retired; Case Study tabs use a sharp directional slide, no fade.
- [React Component Architecture](issues/06-react-component-architecture.md) — Full rewrite (not ported), plain JS (`.jsx`), Tailwind v4 `@theme` tokens, Framer Motion via shared hooks (`useScrollReveal`, `useHideOnScroll`). Full folder structure and section order specified — this was the last open ticket.

**All tickets resolved — the map's destination is reached.** The redesign spec (visual identity, hero, section architecture, case-study format, motion language, contact form service, and component architecture) is complete and ready to hand off for implementation.

## Not yet specified

- Exact copy/wording changes needed to support new section structure or case-study format (depends on Section Architecture + Case Study Format resolving first).
- Specific micro-interactions and easing/timing values (depends on Motion & Interaction Language resolving first).
- Final component prop APIs / state management approach inside the React app (depends on React Component Architecture resolving first).
- Accessibility pass specifics (contrast, focus states, reduced-motion fallbacks) beyond the "respect prefers-reduced-motion" baseline already in the current site.
- SEO/meta tag and social-preview-card treatment for the redesigned site.
- Copy for the "Other Work" section and the Contact closing line — needs actual writing, not just structural placement.
- Exact scroll/anchor behavior for the shared "Work" nav entry pointing at two sections (Case Studies + Other Work) — trivial implementation detail for whoever builds `Nav.jsx`.
- Richer per-case-study narrative (deeper approach detail, an actual outcome/impact line) if wanted beyond the current one-line-derived copy — new content to write, not a structural decision.

## Out of scope

*(none identified yet)*
