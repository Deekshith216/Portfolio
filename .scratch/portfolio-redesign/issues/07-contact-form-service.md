Type: research
Status: resolved

## Question

The user wants a real working contact form, but the site is deployed as a static GitHub Pages build (no backend). What static-friendly form-backend service (e.g. Formspree, EmailJS, Getform, Web3Forms) best fits: free/low-cost tier sufficient for a personal portfolio's traffic, reasonable setup effort, no server required, and reliable delivery to a personal inbox? Recommend one option with the concrete integration approach (what the React form component needs to call/submit to).

## Answer

**Recommendation: Web3Forms.** Most generous free tier of the options compared (250 submissions/month vs. Formspree ~50/month, EmailJS ~200/month; Getform has quietly rebranded to "Forminit" — confirmed via a 301 redirect from getform.io, a reliability flag against it). Lowest setup effort: just request an access key by email, no dashboard/OAuth needed. No client library required — a plain `<form action="https://api.web3forms.com/submit" method="POST">` works, or an equivalent `fetch()` POST from a React handler for inline success/error UI. Required: hidden `access_key` field; optional hidden `subject`/`redirect` fields and a hidden honeypot `botcheck` field for spam protection; visible fields (`name`, `email`, `message`) pass through as-is. Works unmodified on static GitHub Pages hosting.

Full comparison table and sourcing: `.scratch/portfolio-redesign/research/contact-form-service.md` on branch `worktree-agent-aa25915ed47a09979` (isolated worktree, not yet merged into main — grab the file from there when ready to fold it in).
