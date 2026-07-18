# Design: Insights Page + Leadership & Recognition Section

**Date:** 2026-07-18
**Status:** Approved
**Applies to:** existing portfolio site (see prior specs of same date)

## Goal

Integrate new verified material: one Medium article, press coverage of the scholarship initiative, NYSC platoon leadership, awards, and speaking engagements.

## 1. Insights page (`insights.html`, new third page)

Nav on all pages becomes: About · Insights · Contact (+ theme toggle). Insights link gets `aria-current` on its own page.

- **— 01 Featured writing** (on `--bg`): eyebrow tag REFLECTIONS; title "The Post-Graduation Epiphany: Shifting from Popularity to True Proximity"; excerpt from the opening ("For years, my phone was a hub of non-stop activity…" — trimmed to ~2 sentences); meta line "July 2026 · 3 min read · Medium"; link "Read on Medium →" to https://medium.com/@joyoabiola/the-post-graduation-epiphany-shifting-from-popularity-to-true-proximity-33dd28b97585. Wide feature block, not a card grid; becomes a list when more articles exist.
- **— 02 In the press** (on `--band`): ruled row for "17 OAU students bag scholarships" (Punch) — context line: scholarships funded through the indigent-students initiative he administered as Financial Secretary; link "Read on Punch →" to https://punchng.com/17-oau-students-bag-scholarships/. External links use rel="noopener" and open in new tab.
- **— 03 Contact** (on `--bg`? — keep strict per-page alternation: bg → band → bg is wrong for contact-band styling; final: feature `--bg`, press `--band`, contact `--bg` with colophon as elsewhere... NO: contact is `.band` on other pages. Decision: feature `--bg`, press `--bg`, contact `--band` — press sits as a subsection under the same rhythm) — FINAL: feature on `--bg`, press on `--band`, contact unbanded (`--bg`) with colophon. Alternation preserved: bg / band / bg.
- Meta/OG tags for the page; title "Insights — Joy Abiola, ACA".

## 2. About: Leadership & Recognition (new — 02 section, on `--band`)

Placed between Experience and Education; renumber: Experience — 01, Leadership & Recognition — 02, Education — 03, Contact — 04. Section band alternation on About becomes: intro bg, experience band, recognition bg, education band, contact bg?? — Simplest consistent: keep alternating strictly in document order: intro (bg), experience (band), recognition (bg), education (band), contact (bg). Contact loses `.band` on About; on Home contact keeps band (alternation there: hero bg, affiliations band, practice bg, contact band). Acceptable: per-page alternation is the rule, not identical contact styling across pages.

Ledger list (reuses timeline grid: tag column left, detail right):

| Tag | Content |
|---|---|
| SERVICE | Scholarships for 17 indigent students — funded through the initiative he ran as Financial Secretary. Link: "As covered by Punch →" |
| SPEAKING | OAU Unplugged — invited speaker, "The Good, The Bad & The Lessons" |
| LEADERSHIP | NYSC Platoon 4, Lagos orientation camp — led the platoon to 15+ camp awards, including Best Platoon on Duty |
| AWARD | Best Student in Advanced Financial Accounting — Obafemi Awolowo University convocation |
| AWARDS | Most Outstanding Class Representative · Most Influential Student · Leadership Award |

## 3. Copy touches

- Merit chip on About: "Best in Financial Accounting" → "Best Student in Advanced Financial Accounting".
- About narrative: add one bridging sentence about convening speakers/brands (Babafemi Ojudu; Money Africa; Dukiya Investments) at the summit.
- Summit attendance stays "2,000+" everywhere (conservative vs the bio's "close to 2,500").
- NYSC individual camp wins (baking, volleyball, etc.) are NOT itemized — summarized as "15+ camp awards".

## 4. Constraints & verification

- No new tokens or JS; reuse ledger/timeline patterns, first-person voice (except tags/meta).
- Verify: all three pages × both modes screenshots; nav consistent everywhere; external links (Medium, Punch) resolve; renumbered section numerals correct per page.
