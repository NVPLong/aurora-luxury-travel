# Aurora — Cinematic Luxury Travel Platform

> A design-first travel editorial experience. Quiet luxury. Cinematic atmosphere. Future-ready AI concierge.

**Aurora** is a luxury editorial travel platform inspired by the stillness of Aman Resorts and the restrained elegance of The Brando. It presents curated global destinations as immersive editorial experiences — breathable, cinematic, and premium without being loud.

The project is built as a strong technical foundation for future AI integration, evolving toward a fully personalized travel concierge in upcoming versions.

![Version](https://img.shields.io/badge/Version-1.0-C8A96A?labelColor=1F2933)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)

---

## What Aurora Is

Aurora is not a booking platform. It is an **editorial destination discovery experience** — closer to a luxury travel magazine than a marketplace.

| Design Principle | Aurora Direction |
|---|---|
| Visual tone | Cinematic minimalism, quiet luxury |
| Typography | Serif headings, airy body text, strong hierarchy |
| Color palette | Cream (#F7F3EC), luxury gold (#C8A96A), soft green (#5F7F78) |
| Motion | Restrained — only when it adds calm |
| Whitespace | Intentional — part of the design, not empty filler |
| Inspiration | Aman Resorts, The Brando |

---

## Features

| Feature | Description |
|---|---|
| **Cinematic Hero** | Full-viewport image hero with editorial typography and restrained motion. |
| **Destination Discovery** | Curated destination cards with smart **search, filter, and sort**. |
| **Editorial Detail Pages** | Immersive destination pages with storytelling hierarchy and quick-fact sidebars. |
| **Filter System** | Filter by region, travel style, and budget. |
| **Empty States** | Graceful, well-copy-written empty state when no results match. |
| **Responsive Design** | Fully optimized from mobile to desktop — premium feel at every breakpoint. |
| **AI-Ready Architecture** | Codebase structured to integrate AI-powered itinerary recommendations in V2. |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open your browser at: **http://localhost:3000**

### Other Commands

```bash
npm run build   # Build an optimized production bundle
npm run start   # Serve the production build locally
npm run lint    # Run ESLint to catch code issues
```

---

## Project Structure

The directory structure is intentionally flat and beginner-friendly. Each folder has a single clear responsibility:

```
Web_Travel/
│
├── app/                          # Next.js App Router — all pages live here
│   ├── layout.tsx                # Root layout: wraps every page with Navbar + Footer
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles and Aurora utility classes
│   ├── destinations/
│   │   ├── page.tsx              # Destinations list with search / filter / sort
│   │   └── [id]/page.tsx         # Dynamic detail page per destination
│   └── about/page.tsx            # About page — brand vision and AI roadmap
│
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── ui/                       # SearchBar, FilterPanel, DestinationCard, EmptyState…
│   └── home/                     # FeaturedDestinations, StatsSection, WhyChooseUs
│
├── data/                         # Mock destination data (replaced by API/DB in V2)
├── types/                        # TypeScript interfaces and union types
├── constants/                    # Filter options, budget labels, sort options
├── lib/                          # Pure utility functions: search, filter, sort logic
└── public/                       # Static assets (images, icons)
```

---

## How the Filter System Works

This is useful to understand before touching `destinations/page.tsx` or `lib/utils.ts`:

```
User visits /destinations
       ↓
destinations/page.tsx  (Client Component — uses useState)
       ↓  useState(DEFAULT_FILTER)
       ↓
User types search / clicks a filter button
       ↓  handleFilterChange({ ... })
       ↓  setFilters(prev => ({ ...prev, ...updates }))
       ↓
applyFilters(destinations, filters)  →  lib/utils.ts
   ├── matchesFilters()    → region / category / budget
   ├── matchesSearch()     → full-text keyword match
   └── sortDestinations()  → rating / name A–Z / name Z–A
       ↓
Renders DestinationCard grid  OR  EmptyState
```

> **Important:** Do not remove or rewrite this filter logic. It is the core interaction layer of the platform.

---

## Tech Stack

| Technology | Role |
|---|---|
| **Next.js 15** | App Router, server components, static generation (SSG) for destination pages. |
| **TypeScript** | Strict typing across all components, data models, and utility functions. |
| **Tailwind CSS** | Utility-first styling. Aurora's design system is built entirely in Tailwind. |
| **Framer Motion** | Subtle, cinematic entrance animations on the Hero section. Used sparingly. |
| **lucide-react** | Consistent, professional icon set — no emoji icons. |
| **next/image** | Automatic image optimization for every destination photo. |
| **next/link** | Client-side navigation without full page reloads. |

---

## Roadmap

### ✅ Version 1 — The Foundation (Current)
- [x] Curated global destination mock data
- [x] Smart search, filter, and sort
- [x] Cinematic Hero section
- [x] Editorial destination detail pages
- [x] Responsive design across all breakpoints
- [x] Aurora light luxury design system

### 🔨 Version 2 — AI Concierge
- [ ] AI travel advisor chatbot (OpenAI API)
- [ ] Personalized itinerary generation
- [ ] Real-time weather and travel advisory API
- [ ] Interactive destination maps

### 🔮 Version 3 — Community & Data
- [ ] Authentication (NextAuth.js)
- [ ] Saved collections and favorites
- [ ] Real database (PostgreSQL + Prisma)
- [ ] Editorial reviews and sharing
- [ ] Admin dashboard

---

## Design Philosophy

Aurora follows a strict design philosophy documented in `SKILLS.md`. Key principles:

- **Restraint over expression** — luxury comes from what you remove, not what you add
- **Typography-first** — hierarchy and spacing do more work than color
- **Atmosphere over features** — the site should feel like somewhere, not just show information
- **Reliable before flashy** — handle every loading, empty, and error state before adding animation

All AI agents working on this project **must** read `SKILLS.md` and `.cursor/context/aurora-progress.md` before making any UI decisions.

---

*Built with intention. Designed for stillness.*
