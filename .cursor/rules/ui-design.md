# Aurora UI System

## Brand Direction

Aurora là luxury travel platform mang cảm giác:

- cinematic
- quiet luxury
- editorial
- modern minimal
- premium nhưng không phô trương

Inspirations:

- Aman Resorts
- The Brando

Không làm theo hướng:

- tourist marketplace
- colorful booking app
- overdesign
- glassmorphism nặng
- animation phô diễn

Aurora phải mang cảm giác:
“expensive silence”.

---

## Core Principles

- whitespace rộng rãi
- typography có nhịp thở
- motion mềm và chậm vừa đủ
- UI “sống” nhưng không gây distraction
- performance ưu tiên hàng đầu
- clean code
- maintainable architecture
- component-driven

---

## Design Language

## Layout

Use:

- max-w-7xl
- generous spacing
- py-16 / py-24
- gap-6 / gap-8 / gap-12

Avoid:

- cramped layouts
- nested cards quá nhiều
- excessive gradients
- noisy UI

---

## Color System

## Backgrounds

Primary background:

- #F7F3EC

Secondary background:

- #F8FAF7

Surface:

- #FFFFFF

Soft section background:

- #F2F4F1

---

## Text

Primary:

- #1F2933

Secondary:

- #667085

Muted:

- #98A2B3

White overlay text:

- rgba(255,255,255,0.92)

---

## Accent

Luxury gold:

- #C8A96A

Gold hover:

- #A87F3F

Soft green:

- #5F7F78

Soft teal:

- #6B9080

Avoid:

- neon cyan
- saturated blue
- pure black
- overly dark UI

---

## Typography

## Fonts

Headings:

- Playfair Display
OR
- Cormorant Garamond

Body:

- Inter

Fallback:

- system-ui

---

## Typography Rules

Hero heading:

- large
- elegant
- high contrast
- slightly tighter tracking

Body text:

- readable
- clean
- airy

Avoid:

- too many font weights
- decorative typography
- exaggerated italic

---

## Motion System

Aurora motion should feel:

- cinematic
- smooth
- subtle
- premium

Never flashy.

---

## Animation Rules

Preferred:

- opacity
- translateY
- slight scale
- soft blur reveal

Avoid:

- bounce
- elastic spring
- spinning
- exaggerated parallax
- continuous animation

---

## Timing

Fast:

- 200ms

Standard:

- 300ms

Luxury:

- 500ms–700ms

Easing:

- ease-out

---

## Scroll Behavior

Scrolling must feel:

- fluid
- soft
- uninterrupted

Avoid:

- jumpy transitions
- layout shift
- heavy scroll effects

---

## Hero Section Rules

Hero is highest priority.

Requirements:

- full viewport height
- cinematic imagery
- soft dark overlay
- elegant typography
- subtle motion
- immersive atmosphere

---

## Hero Media

DO NOT use heavy autoplay background video.

Prefer:

- optimized cinematic image
- next/image
- lazy loading

If video exists:

- use only as optional enhancement
- never hurt performance

Must have:

- fallback image
- graceful loading state

---

## Hero Overlay

Use:

- dark gradient overlay
- improved text readability

Avoid:

- overly dark hero
- overly bright hero
- low contrast text

---

## Hero CTA

Primary CTA:

- “Khám phá ngay”

Secondary CTA:

- subtle outline style

CTA motion:

- soft hover lift
- gentle background transition

Avoid:

- aggressive scaling
- glowing effects

---

## Navbar Rules

Navbar style inspired by Aman.

Top state:

- transparent overlay

Scrolled state:

- blurred light surface
- subtle border
- soft shadow

Behavior:

- elegant transitions
- premium hover underline
- smooth state change

Avoid:

- thick borders
- dark navbar
- oversized nav items

---

## Card System

Cards must feel:

- editorial
- breathable
- tactile

Use:

- rounded-2xl
- soft shadow
- hover elevation
- image zoom slightly on hover

Avoid:

- thick borders
- overly colorful tags
- crowded metadata

---

## Buttons

Primary:

- luxury gold accent

Secondary:

- subtle outline

Shape:

- rounded-full
OR
- rounded-xl

Avoid:

- sharp rectangles
- aggressive gradients

---

## Performance Rules

Performance is critical.

Always:

- use next/image
- lazy load below fold
- optimize animations
- animate only transform and opacity
- minimize re-renders

Avoid:

- expensive blur stacking
- continuous video rendering
- massive box shadows
- large JS animation libraries

---

## Responsive Rules

Mobile experience must feel premium.

Requirements:

- clean spacing
- thumb-friendly interaction
- stable typography
- no cramped layouts

Avoid:

- desktop layouts squeezed into mobile
- oversized hero text
- excessive motion on mobile

---

## Engineering Rules

Keep:

- business logic intact
- routes intact
- clean architecture
- readable code

Code should:

- be beginner-friendly
- contain meaningful comments
- be maintainable long-term

---

## Component Philosophy

Every component should:

- have clear responsibility
- be reusable
- avoid duplication
- separate UI and logic cleanly

Prefer:

- composition
- modularity
- scalability

Avoid:

- giant components
- deeply nested JSX
- duplicated styling

---

## Aurora Experience Goal

Users should feel:

- calm
- curiosity
- aspiration
- emotional immersion

The website should feel like:

“a luxury travel magazine that breathes.”
