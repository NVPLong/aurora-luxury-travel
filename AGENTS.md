# Aurora - Agent Rules

**Aurora** is a cinematic luxury editorial travel platform.

---

## Mandatory Reading For All AI Agents

Before making any decisions or starting UI/design work, always read these files first:

1. `SKILLS.md` - the full design philosophy, color system, typography rules, motion rules, and engineering constraints.
2. `.skills/README.md` - the local skill map and when to use each project skill.
3. `.skills/aurora-content/SKILL.md` - the rules for editorial writing, image curation, and cinematic atmosphere.
4. `.cursor/context/aurora-progress.md` - the live project journal: what has been done, what is in progress, open tasks, and constraints.

Do not skip this step. Decisions made without reading these files will conflict with the established Aurora direction.

For non-trivial work, also read `.skills/agent-quality/SKILL.md` before editing. Then load the domain skill that matches the task:

- Image/content changes: `.skills/aurora-image-audit/SKILL.md`
- Refactors/file moves: `.skills/aurora-refactor-safety/SKILL.md`
- Database/backend modeling: `.skills/aurora-database-design/SKILL.md`
- AI Concierge/RAG/agent work: `.skills/aurora-concierge-rag/SKILL.md`

---

## Brand Identity

- **Name**: Aurora
- **Direction**: Luxury editorial travel platform - cinematic minimalism, quiet luxury, premium but restrained
- **Tone**: Calm, immersive, refined, editorial, design-first
- **Inspiration**: Aman Resorts, The Brando
- **Feel**: "A luxury travel magazine that breathes."
- **NOT**: This project is no longer "VietTravel". Do not use outdated branding, cyan-heavy palettes, or tourist-marketplace framing.

---

## Core Principles

- Clarity over decoration
- Simplicity over complexity
- Consistency over randomness
- Readability over density
- Atmosphere over feature-richness
- Restraint over expression

---

## Design Rules Summary

For full detail, read `SKILLS.md`.

- **Backgrounds**: `#F7F3EC`, `#F8FAF7` - light luxury cream palette.
- **Accents**: `#C8A96A` gold, `#5F7F78` soft green.
- **Text**: `#1F2933` main, `#667085` secondary.
- **Avoid**: neon cyan, saturated blue, pure black, glassmorphism, startup SaaS UI.
- **Cards**: `bg-white`, `rounded-2xl`, soft shadow, subtle hover lift.
- **Motion**: only when it adds calm, never for decoration. `duration-300 ease-out` standard.
- **Spacing**: generous - `py-16`, `py-20`, `gap-6` to `gap-12`.
- **Typography**: serif headings (`font-serif`, `tracking-[-0.02em]`), light body, strong hierarchy.

---

## UX Rules

- Always handle loading, empty, and error states.
- Use clear, editorial-quality labels. Avoid vague words like "More" or "Click here".
- Make primary actions obvious.
- Keep UI scannable within 2 seconds.
- Whitespace is part of the design. Never fill it unnecessarily.

---

## Engineering Constraints

- Do not change routes.
- Do not remove search/filter/sort logic.
- Do not change business logic unless explicitly asked by the user.
- Keep code readable for a first-year CS student.
- Use Tailwind CSS.
- Use `next/image` for all images.
- Add Vietnamese comments for important logic sections.
- After significant code changes, run:
  - `npm.cmd run lint`
  - `npm.cmd run build`

---

## What Makes Aurora Different From A Generic Travel Site

| Generic Travel Site | Aurora |
|---|---|
| Feature-heavy, busy UI | Design-first, restrained |
| Booking widget dominant | Editorial storytelling dominant |
| Colorful, noisy cards | Quiet, breathable cards |
| Emoji icons | Lucide icons, subtle containers |
| Aggressive CTAs | Calm, spacious CTAs |
| Dense metadata | Curated, minimal facts |
