# CLAUDE.md

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs — the "AI slop" aesthetic. Avoid this, but aim for professional polish, not artistic experimentation. The target: interfaces that look like a mature product team designed them (Linear, Stripe, Vercel, Notion) — precise, restrained, intentional.

Typography: Avoid default stacks (Arial, system fonts) but choose refined, professional typefaces — quality grotesques and workhorse sans-serifs (e.g. Geist, Söhne-like alternatives, IBM Plex Sans, Untitled Sans-style neutrals) or a serif only for editorial contexts. Establish a strict type scale (no more than 4–5 sizes), deliberate font weights, and tight letter-spacing on headings. Typography quality comes from hierarchy and spacing, not novelty.

Color & Theme: Restrained, cohesive palettes. Neutrals (warm or cool grays — pick one temperature and commit) should do 90% of the work, with ONE accent color used sparingly for primary actions and key states. Use CSS variables for a proper token system (background layers, borders, text hierarchy, accent). Meet WCAG AA contrast. Avoid purple-gradient-on-white and rainbow palettes.

Layout & Hierarchy: This is where professionalism is won or lost. Use a consistent spacing scale (4/8px based), generous whitespace, clear alignment to a grid. Every screen needs an obvious visual hierarchy: what's primary, secondary, tertiary. Dense data UIs get tighter spacing and smaller type; marketing pages get more air. Borders and background shifts (not shadows everywhere) to define surfaces.

Motion: Subtle and fast (150–250ms, ease-out). Micro-interactions on hover/focus/press, smooth state transitions. No decorative animation on business surfaces — motion should communicate causality, not delight for its own sake. Prefer CSS-only; Motion library for React when complexity warrants.

Backgrounds: Mostly solid or near-solid with subtle depth — faint gradients, hairline borders, soft layered surfaces. Atmospheric/textured backgrounds only on marketing or hero sections, never behind dense content.

Details that signal quality: consistent border radii, visible focus states, real empty/loading/error states, tabular numbers for data, icons from one set at one weight, dark mode via tokens if applicable.

Avoid both failure modes:
- AI slop: default fonts, purple gradients, cookie-cutter card grids, evenly-spread timid color
- Over-designed: decorative display fonts, heavy animation, novelty layouts that hurt scanability

When in doubt, choose the more restrained option executed precisely.
</frontend_aesthetics>
