# Frontend Architecture — Aurora

Aurora’s frontend is designed for "expensive silence"—a balance of high-performance rendering and cinematic motion.

## 1. Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 2. Design System Integration
The design system is codified in `SKILLS.md` and `tailwind.config.js`.

### Core Tokens
- **Background**: `bg-aurora-background` (#F7F3EC)
- **Serif Font**: `font-serif` (Lora) — for editorial headers.
- **Sans Font**: `font-sans` (Inter) — for body and UI.
- **Accent**: `text-aurora-accent` (#C8A96A)

## 3. Component Architecture

### Layout Strategy
- `app/layout.tsx`: Global wrapper containing `Navbar`, `Footer`, and the `AuroraAssistantButton`.
- `components/layout/`: Shared structural components.
- `components/home/`: Homepage-only editorial sections.
- `components/layout/`: Global shell elements such as navigation and footer.
- `components/motion/`: Shared Framer Motion primitives used across pages.
- `features/destinations/components/`: Destination listing, detail, filter, and discovery UI.
- `content/`: Curated editorial content that is still static in V1.

### Interaction Patterns
- **Server Components (Default)**: Used for all static content and initial page loads to optimize LCP.
- **Client Components ('use client')**: Reserved for interactive filters, AI panel state, and Framer Motion wrappers.

## 4. Animation Philosophy
Animations must be **restrained**.

- **Easing**: Custom `luxuryEasing` defined as `[0.16, 1, 0.3, 1]`.
- **System**: Use `SectionReveal.tsx` to wrap content blocks.
- **Rules**:
  - Max vertical displacement: `20px`.
  - Prefer `opacity` and `blur` over heavy transforms.
  - Stagger children to create a "discovery" effect.

## 5. Performance Standards
- **Image Optimization**: Always use `next/image` with proper `sizes` and `priority` for Hero assets.
- **Fonts**: Self-hosted or optimized Google Fonts imports via `globals.css`.
- **Bundle Size**: Avoid heavy 3rd-party libraries. Stick to `framer-motion` for all movement.

## 6. Development Workflow
1. Define shared types in `types/`.
2. Keep curated static content in `content/` until the database migration.
3. Build route-specific UI in `features/<domain>/components/`.
4. Keep generic motion/layout primitives in `components/`.
5. Implement page orchestration in `app/`.
6. Audit for "Quiet Luxury" aesthetics.
