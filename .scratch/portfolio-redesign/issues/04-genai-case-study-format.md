Type: prototype
Status: resolved
Blocked by: 01 (resolved), 02 (resolved)

## Question

What does the distinct, more prominent treatment for the GenAI/LLM projects (Smart Study Assistant, Smart Text Summarizer, FAQ Knowledge Assistant) look like — both structurally and visually? Needs to cover:

- Content structure: problem / approach / stack / outcome fields, or some other case-study shape? Note this may require writing new content beyond what exists today (flag as fog if so).
- Visual treatment: how it differs from the plain project-card treatment the non-GenAI project (Naukri Auto-Updater) keeps.
- How many case studies get the full treatment vs. a lighter version.

Depends on Visual Identity System (visual language to apply) and Section Architecture (whether case studies get their own section or live inside Work). Use `/prototype` (UI variant).

## Answer

**Winner: Variant B — Tabbed Deep-Dive.** Three variants were prototyped (Full-bleed Stacked Story, Tabbed Deep-Dive, Asymmetric Grid Collage), all using real content pulled from the existing project descriptions (no fabricated metrics) — at `.scratch/portfolio-redesign/prototypes/case-study-format.html` (`?variant=A|B|C`). User picked B outright.

Case Studies section spec going forward:

- **Interaction pattern**: a pill-tab row (one tab per case study: Smart Study Assistant, Smart Text Summarizer, FAQ Knowledge Assistant) switches which case study is shown — one at a time, not a long scroll or a grid of three. Compact footprint, deliberate viewing rather than skim.
- **Content structure per case study**: Problem statement set as a large italic pull-quote (the hook), then an "Approach" label + paragraph, then tech-stack tags, then a "View source →" link.
- **Content source**: problem/approach text is derived from the real one-line descriptions already in `index.html` — not invented outcomes or metrics. Flagging for fog: if richer per-project narrative (e.g. more detail on approach, or an actual outcome/impact line) is wanted later, that's new copy to write, not a structural decision.
- **Selected-tab styling**: solid dark fill on the active tab, outline-only on inactive tabs — consistent with the Kinetic Maximal Type language (solid blocks over soft states).

This is now the reference for React Component Architecture (a `CaseStudyTabs` component with 3 data entries) and Motion & Interaction Language (tab-switch transition style still undecided — a fog item for that ticket).
