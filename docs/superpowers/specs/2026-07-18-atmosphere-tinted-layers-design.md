# Design: Whisper-Level Atmosphere — Tinted Layers

**Date:** 2026-07-18
**Status:** Approved
**Applies to:** the existing two-page portfolio site (see 2026-07-18-joy-abiola-portfolio-design.md)

## Goal

Remove the flatness of the current all-one-background pages without leaving the professional, restrained brief. Chosen direction (via visual companion): **B — Tinted layers**. Whisper-level intensity: depth you feel more than see.

## Changes

### 1. Section bands

Two new tokens:

- `--band` — a barely-green-cast neutral one step off the page background.
  - Light: `#f6f7f6` (tune by eye; must stay clearly lighter than `--surface` usage on chips/portrait so surfaces still read on top of it)
  - Dark: `#141a18`
- Bands are full-bleed (background on the `<section>`, content stays in `.wrap`). Existing hairline rules remain the section grammar at band edges.

Alternation:

- **Home:** hero `--bg` → affiliations `--band` → practice areas `--bg` → contact `--band`
- **About:** intro `--bg` → experience `--band` → education `--bg` → contact `--band`

### 2. Hero wash

One soft top-down gradient on the hero section only:

- `--wash` token: light `rgba(30, 92, 70, 0.035)`, dark `rgba(143, 191, 168, 0.04)`
- `background: linear-gradient(180deg, var(--wash), transparent 60%)` layered over the section background. No other gradients anywhere.

### 3. Section-head numerals

Section heads (`.section-head h2` and the contact heading) gain a preceding numeral in Archivo: `— 01` style, accent color, `--text-xs`, letterspaced. Numbering is per-page document order (real sequence information). The practice-area pillars keep their existing 01/02/03 indices — the section numerals echo that grammar one level up.

## Constraints

- No new JS, no motion changes, no new fonts.
- All additions via the two new tokens + small CSS; both themes covered.
- WCAG AA contrast must hold on band backgrounds.

## Verification

- Screenshot pass, both pages × both modes.
- Check: bands subliminal but present; merit chip / portrait / contact rows still legible on `--band`; numerals align with heading baselines; mobile unaffected.
