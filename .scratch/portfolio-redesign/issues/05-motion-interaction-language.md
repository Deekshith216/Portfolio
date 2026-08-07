Type: grilling
Status: resolved
Blocked by: 01 (resolved)

## Question

Beyond the hero's signature moment, what's the sitewide motion and interaction language? The current site hand-rolls scroll-reveal, animated counters, a marquee, and a hide-on-scroll navbar in vanilla JS with no library. Given "high ambition" was chosen, resolve:

- Which of the existing motion patterns carry forward vs. get replaced?
- Scroll-driven vs. cursor-driven vs. micro-interaction-only — what's the palette of techniques used across sections?
- Whether a motion library gets adopted for the React rebuild (e.g. Framer Motion) or hand-rolled continues.
- Reduced-motion fallback approach (the current site already respects `prefers-reduced-motion`; keep that bar).

Depends on Visual Identity System settling the overall visual tone first. Use `/grilling`.

## Answer

- **Motion library**: adopt **Framer Motion** for the React rebuild — richer scroll/gesture-driven effects and spring physics without hand-rolling the math, standard pairing with React.
- **Carry-forward patterns** (all survive from the current vanilla-JS site, reimplemented with Framer Motion): scroll-reveal (fade/slide-in), animated number counters, the infinite marquee (tech-stack ticker), and the hide-on-scroll navbar.
- **Marquee placement**: stays where it is structurally today — a transitional strip immediately after Hero, before About.
- **Motion paradigm**: scroll-driven + on-load only. Cursor-driven parallax (prototyped in Hero Variant B but not chosen) is retired entirely — one consistent motion language, not two competing ones.
- **Case Study tabs** (ticket 04's Tabbed Deep-Dive): sharp cut with a directional slide on tab switch — no fade/cross-dissolve. Matches the hard-shadow, no-blur visual language from Visual Identity System.
- **Reduced-motion**: keep respecting `prefers-reduced-motion`, same baseline the current site already has — unchanged.

This is now the reference for React Component Architecture (confirms Framer Motion as a dependency) and settles the Case Study tab-transition fog item from ticket 04.
