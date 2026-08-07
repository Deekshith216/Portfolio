Type: prototype
Status: resolved
Blocked by: 01 (resolved)

## Question

What should the hero section actually look and feel like — the single highest-priority decision per the user (first 3 seconds a recruiter sees). Needs to cover layout, headline/positioning copy treatment, and the signature on-load/on-scroll motion moment, built on whatever typography/color/spacing system Visual Identity System resolves.

Use `/prototype` (UI variant) to produce a working rough build of the hero, not just a description — this is a "how should it look/behave" question.

## Answer

**Winner: Variant C — Scroll-Triggered Reveal Collage.** Three variants were prototyped (Stacked Marquee Entrance, Split Asymmetric/Cursor Parallax, Scroll-Triggered Reveal Collage), all sharing the Kinetic Maximal Type visual language and differing only in composition + motion trigger — at `.scratch/portfolio-redesign/prototypes/hero-section.html` (`?variant=A|B|C`). User picked C outright.

Hero spec going forward:

- **Layout**: headline breaks into 3 separate fragments (not one solid block) — a dark chip-style fragment, a plain-text fragment, and an accent-colored fragment — stacked with the giant background type ("AI.") behind them.
- **Entrance motion**: the 3 headline fragments fly in from different directions (left, right, top) staggered by ~0.25s each, followed by subhead and CTAs fading up. This is the only variant that spends its on-load budget on the headline itself rather than stats.
- **Scroll motion (the signature choice)**: this is the one hero variant that ties motion to *scroll*, not just load — as the visitor scrolls past the hero, the stats block reveals (fade+translate) and a project "peek" card slides up from the bottom edge, while the giant background type parallaxes upward slower than scroll speed for depth. This establishes scroll-driven reveal as a confirmed technique for the site (feeds into Motion & Interaction Language, ticket 05 — not a full answer to that ticket, just a precedent it should stay consistent with).
- **Content confirmed in the mock**: name, "Software Engineer — AI systems & automation" positioning, 2+/4+/8+ stats, primary CTA "View Work" + secondary "Résumé" (placement/mechanism for résumé access still belongs to Section Architecture, ticket 02 — this only confirms a CTA slot exists in the hero).

This is now the reference for Motion & Interaction Language and React Component Architecture.
