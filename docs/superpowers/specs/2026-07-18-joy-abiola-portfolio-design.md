# Design: Joy Abiola, ACA — Portfolio Site

**Date:** 2026-07-18
**Status:** Approved for planning

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

## Content & Placeholders

Real copy written in the site's voice during implementation. Placeholders, each marked with an HTML comment for easy swapping:

- Email address
- LinkedIn URL
- CV PDF (`assets/cv-joy-abiola.pdf`)
- Portrait image (`assets/portrait.jpg`)

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
