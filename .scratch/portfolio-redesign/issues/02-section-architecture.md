Type: grilling
Status: resolved

## Question

Given the user is open to restructuring (not locked to the current Hero / About / Skills / Work / Journey / Contact), what should the section list, order, and purpose be for the redesigned site? Specifically resolve:

- Does "Work" split into a distinct featured case-study area (for the GenAI/LLM projects) versus a lighter-weight list for other projects (e.g. Naukri Auto-Updater)?
- Do "Skills" and "Journey" survive as standalone sections, get merged into About, or get reshaped entirely?
- Where does resume access live (nav item, hero CTA, dedicated section, footer) — the user wants it prominent.
- Where does the contact form live and what's its scope in the page flow (this doesn't need to wait on the Contact Form Service ticket — placement/prominence can be decided independently of which backend service is used).

Use `/grilling` + `/domain-modeling` — this sets the information architecture that React Component Architecture and GenAI Case Study Format both depend on.

## Answer

**Section order**: Hero → About → Skills → Case Studies → Other Work → Journey → Contact.

- **Case Studies**: a distinct, full-spotlight section for the 3 GenAI/LLM projects (Smart Study Assistant, Smart Text Summarizer, FAQ Knowledge Assistant) — feeds directly into GenAI Case Study Format (ticket 04).
- **Other Work**: its own smaller section for everything else (currently just Naukri Auto-Updater) — visible, clearly a lighter tier, not folded into Case Studies.
- **Skills** and **Journey** both stay standalone sections — not merged into About.
- **Resume access**: hero CTA only (confirmed in ticket 03) — no nav item, no footer repeat. Don't dilute the single ask.
- **Nav**: full nav mirroring every major section — Work (shared entry for Case Studies + Other Work), About, Skills, Journey, Contact.
- **Contact**: a full section with real visual weight — the Web3Forms form (ticket 07) plus direct links (email, LinkedIn, GitHub) and a closing line. Not a bare footer form.

This is the information architecture GenAI Case Study Format and React Component Architecture both build on.
