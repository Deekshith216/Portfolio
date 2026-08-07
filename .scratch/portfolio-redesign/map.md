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

## Not yet specified

- Exact copy/wording changes needed to support new section structure or case-study format (depends on Section Architecture + Case Study Format resolving first).
- Specific micro-interactions and easing/timing values (depends on Motion & Interaction Language resolving first).
- Final component prop APIs / state management approach inside the React app (depends on React Component Architecture resolving first).
- Accessibility pass specifics (contrast, focus states, reduced-motion fallbacks) beyond the "respect prefers-reduced-motion" baseline already in the current site.
- SEO/meta tag and social-preview-card treatment for the redesigned site.
- Whether "Skills" and "Journey" survive as standalone sections or get folded/reshaped — depends on Section Architecture ticket.

## Out of scope

*(none identified yet)*
