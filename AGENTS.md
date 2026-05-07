# Aurora – Agent Rules

**Aurora** is a cinematic luxury editorial travel platform.

---

## ⚠️ Mandatory Reading for All AI Agents

Before making ANY decisions or starting ANY UI/design work, you MUST ALWAYS read **both** of these files first:

1. `SKILLS.md` — the full design philosophy, color system, typography rules, motion rules, and engineering constraints
2. `.cursor/context/aurora-progress.md` — the live project journal: what has been done, what is in progress, open tasks, and constraints

**Do not skip this step.** Decisions made without reading these files will conflict with the established Aurora direction.

---

## Brand Identity

- **Name**: Aurora
- **Direction**: Luxury editorial travel platform — cinematic minimalism, quiet luxury, premium but restrained
- **Tone**: Calm · Immersive · Refined · Editorial · Design-first
- **Inspiration**: Aman Resorts · The Brando
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

## Design Rules (Summary)

For full detail, read `SKILLS.md`. Quick summary:

- **Backgrounds**: `#F7F3EC`, `#F8FAF7` — light luxury cream palette
- **Accents**: `#C8A96A` (gold), `#5F7F78` (soft green)
- **Text**: `#1F2933` (main), `#667085` (secondary)
- **Avoid**: neon cyan, saturated blue, pure black, glassmorphism, startup SaaS UI
- **Cards**: `bg-white`, `rounded-2xl`, soft shadow, subtle hover lift
- **Motion**: only when it adds calm, never for decoration. `duration-300 ease-out` standard.
- **Spacing**: generous — `py-16`, `py-20`, `gap-6` to `gap-12`
- **Typography**: serif headings (`font-serif`, `tracking-[-0.02em]`), light body, strong hierarchy

---

## UX Rules

- Always handle: loading · empty · error states
- Use clear, editorial-quality labels — no vague words like "More", "Click here"
- Make primary actions obvious
- Keep UI scannable within 2 seconds
- Whitespace is part of the design — never fill it unnecessarily

---

## Engineering Constraints

- **Do not** change routes
- **Do not** remove search/filter/sort logic
- **Do not** change business logic unless explicitly asked by the user
- Keep code readable for a first-year CS student
- Use Tailwind CSS
- Use `next/image` for all images
- Add Vietnamese comments for important logic sections
- After significant code changes, run:
  - `npm run lint`
  - `npm run build`

---

## What Makes Aurora Different from a Generic Travel Site

| Generic Travel Site | Aurora |
|---|---|
| Feature-heavy, busy UI | Design-first, restrained |
| Booking widget dominant | Editorial storytelling dominant |
| Colorful, noisy cards | Quiet, breathable cards |
| Emoji icons | Lucide icons, subtle containers |
| Aggressive CTAs | Calm, spacious CTAs |
| Dense metadata | Curated, minimal facts |
