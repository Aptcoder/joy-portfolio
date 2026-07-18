# Design: Joy Abiola, ACA — Portfolio Site

**Date:** 2026-07-18
**Status:** Approved for planning
**Note:** Joy Abiola is male — all site copy uses he/him.

## Purpose & Audience

A two-page portfolio site for Joy Abiola, ACA — investment analyst at Zedcrest Wealth, Lagos. Primary goal: **career growth**. The site must persuade a recruiter or senior finance professional spending 60–90 seconds that Joy is a rising, credible analyst. Tone is honest early-career confidence: no "corporate briefing" / "global deployment" advisory-firm language from the original wireframe.

Out of scope (deliberately cut): Insights/blog section (no articles exist yet; add later when 2–3 real pieces are ready), contact form (direct links only), any backend or build tooling.

## Architecture

Static site, no build step:

```
index.html      — Home (the pitch)
about.html      — About / Experience (the dossier)
styles.css      — shared styles, all tokens as CSS variables
main.js         — theme toggle + scroll reveals (small, vanilla)
assets/         — portrait, favicon, CV PDF
```

Deployable to any static host (GitHub Pages / Netlify / Vercel).

## Visual System

Locked with the user via visual companion mockups:

- **Typography:** Archivo (headings, labels, buttons, nav) + Spectral (body serif). Google Fonts. Strict scale, ≤5 sizes. Tight letter-spacing on headings, tabular numerals for all stats.
- **Light mode (default):** cool near-white background `#fcfcfd`, zinc neutrals for text hierarchy, deep green accent `#1e5c46`.
- **Dark mode:** charcoal `#101418`, muted jade accent `#8fbfa8` (chosen over vivid emerald and deep-green-holds variants).
- **Tokens:** all colors/spacing/type sizes as CSS variables under `:root` and `[data-theme="dark"]`. Toggle sets `data-theme` on `<html>`, persists to `localStorage`; default light, saved choice wins.
- **Surfaces:** hairline borders and background shifts, not shadows. Consistent border radii. WCAG AA contrast in both modes.

## Page 1: Home (`index.html`)

1. **Header** — name-as-wordmark left ("Joy Abiola, ACA"), links: About, Contact (anchor to contact section), theme toggle, one CTA button "Get in touch" (anchors to the contact section on the current page).
2. **Hero** — split layout. Left: kicker line (ASSOCIATE CHARTERED ACCOUNTANT · LAGOS), headline ("Precision financial leadership for African markets." or similar), two-line subhead, primary button "View experience" → about.html, text link "Get in touch". Right: professional portrait, subtle duotone treatment to sit in the palette. Below: hairline-ruled stat row — 100% compliance record · 2,000+ delegates managed · ACA, ICAN.
3. **Affiliations ribbon** — text-based row (no logo images): Zedcrest Wealth, Africa Plus Partners, AFEX, ICAN, Obafemi Awolowo University. Muted gray Archivo caps.
4. **Competencies** — three numbered columns: 01 Investment Analysis, 02 Corporate Finance, 03 Audit & Compliance. Three short factual bullets each.
5. **Contact section / footer** — shared component: "Get in touch" heading, email, LinkedIn, "Download CV (PDF)", "Lagos, Nigeria". Reused identically on both pages.

## Page 2: About (`about.html`)

1. **Intro** — narrative paragraph; leadership quote set apart as Spectral italic pull-quote; merit callout: Best in Financial Accounting.
2. **Timeline** — two-column ruled rows, dates left, detail right:
   - Zedcrest Wealth — Investment Analyst / Financial Advisor (2024–present)
   - Africa Plus Partners — Private Equity Analyst Intern
   - AFEX Capital Markets — Commodities & Structured Finance Analyst Intern
   - Education: OAU Accounting; ICAN (ACA)
3. **Impact** — the three stats restated with one line of context each.
4. **Contact section** — shared component.

## Motion & Detail

- One staggered fade-up reveal on page load (hero elements), 150–250ms, ease-out. CSS-only.
- Subtle hover states on links/cards; visible focus rings.
- `prefers-reduced-motion: reduce` disables reveals/transitions.

## Content Inventory

### Copy drafted during implementation (in the site's voice, from wireframe source material)

- **Hero:** kicker (ASSOCIATE CHARTERED ACCOUNTANT · LAGOS), headline, 2-line subhead, button labels.
- **Stat row (Home) / Impact (About):** three stats with context lines — 100% regulatory compliance across audited frameworks; 2,000+ delegates and professionals managed at finance summits; Financial Secretary, large-scale campus budget management. (ACA · ICAN shown as the third hero stat.)
- **Affiliations ribbon:** Zedcrest Wealth, Africa Plus Partners, AFEX, ICAN, Obafemi Awolowo University.
- **Competencies (3 bullets each):**
  - 01 Investment Analysis — macro & micro modeling; portfolio optimization; buy/sell-side due diligence.
  - 02 Corporate Finance — capital structuring; strategic allocation; financial forecast modeling.
  - 03 Audit & Compliance — statutory accounting; regulatory compliance; internal controls.
- **About intro:** narrative paragraph (OAU accounting alumnus, driven by structural accuracy and value creation); pull-quote: "Financial leadership is not merely about tracking value — it is about architecting the frameworks that create it."; merit callout: Best in Financial Accounting (further honors available if wanted: Most Outstanding Class Representative, Most Influential Student, Leadership Award — one callout max, use sparingly).
- **Timeline entries (role, company, 1–2 bullets each) — per LinkedIn profile (source of truth over wireframe):**
  - Zedcrest Group — Investment Analyst (February 2026 – present): end-to-end lifecycle of investment transactions and portfolio movements; settlement efficiency and 100% regulatory compliance in financial reporting.
  - Africa Plus Partners Nigeria Limited — Asset Operation Management Intern (November 2024 – January 2026): supporting operational efficiency of investee companies and operating assets across the asset life cycle.
  - AFEX — Credit Operations Intern (September – October 2023): analyst shadowing and data entry on firm financials (keep bullet modest and honest).
  - Leadership: Financial Secretary, Great Ife Students' Union, OAU (March 2022 – July 2023): union accounts and budget preparation/presentation; organized the Financial Independence & Literacy Summit (2,000+ attendees); scholarships for 17 students via the indigent student fund. Class Governor, OAU (2019–2024): coordinated a class of 404 students.
  - Education & certifications: B.Sc. Accounting, Obafemi Awolowo University (2019–2024); ACA, ICAN; AAT West Africa; Financial Modeling & Valuation Analysis (FMVA).
- **Contact section:** heading, location line "Lagos, Nigeria", link labels.
- **Meta:** page titles, meta descriptions, Open Graph tags for both pages.

All drafted copy is subject to Samuel's/Joy's review — dates, role titles, and stat claims especially, since they must be factually accurate.

### Supplied by Samuel (placeholders until then, each marked with an HTML comment)

- Email address — the LinkedIn PDF lists `legbetistephen1@gmail.com`, which appears to belong to someone else; confirm the correct contact email before launch
- CV PDF (`assets/cv-joy-abiola.pdf`)
- Portrait image (`assets/portrait.jpg`) — professional photo exists
- Favicon source (can be generated from a simple "JA" monogram if none provided)

### Resolved from LinkedIn profile (2026-07-18)

- LinkedIn URL: `linkedin.com/in/joy-abiola-a35699190`
- All role titles and date ranges (see timeline above)
- Hero stat corroboration: 100% regulatory compliance (Zedcrest role description); 2,000+ attendees (Financial Independence & Literacy Summit)

### Wireframe claims dropped as unsupported by LinkedIn

- "Private Equity Analyst Intern" at Africa Plus Partners (actual: Asset Operation Management Intern)
- "Commodities & Structured Finance Analyst" at AFEX (actual: Credit Operations Intern, 2 months)
- "Investment Analyst / Financial Advisor since 2024" at Zedcrest (actual: Investment Analyst since February 2026)
- Home hero kicker/subhead must reflect the operations-and-analysis reality, not advisory-firm framing

## Verification (manual checklist, no test suite)

- Both pages render correctly in both modes; toggle persists across pages/reloads.
- Mobile breakpoint (~640px): hero stacks (portrait above text), columns collapse, nav stays usable.
- Keyboard navigation works; focus visible throughout.
- Lighthouse accessibility pass; AA contrast in both modes.
- All internal links and anchors resolve; placeholder comments present.

## Decisions Log

| Decision | Choice |
|---|---|
| Primary goal | Career growth (recruiters/senior professionals) |
| Insights/blog | Cut until real articles exist |
| Structure | Two pages: Home + About/Experience |
| Contact | Direct links only (email, LinkedIn, CV) — no form |
| Stack | Plain HTML/CSS + minimal vanilla JS |
| Visual direction | C's palette + B's typography, light/dark modes |
| Dark accent | Muted jade `#8fbfa8` |
| Default mode | Light |
| Portrait | Professional photo available; split hero |
| Composition | Approach 1 "Pitch + Dossier", light numbered-section seasoning |
