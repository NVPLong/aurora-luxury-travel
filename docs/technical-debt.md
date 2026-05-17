# Backend & Database Roadmap

Aurora is currently a static frontend project. This roadmap outlines the transition to a dynamic, scalable backend.

## 1. Backend Architecture (Planned)
- **Framework**: Next.js API Routes (Route Handlers) or a standalone Node/Go service if high concurrency is needed.
- **Approach**: API-First. The frontend should interact with the data layer only via typed fetchers.
- **Authentication**: NextAuth.js or Clerk for user collections and favorites.

## 2. Database Strategy
- **Provider**: PostgreSQL (hosted on Vercel Postgres or Supabase).
- **ORM**: Prisma for type-safe database access.
- **Entity Plan**:
  - `Destination`: Name, description, location, region, imagery, editorial facts.
  - `Collection`: User-saved destinations.
  - `User`: Profiles and preferences.
  - `ChatSession`: History for the AI Concierge.

## 3. Media & Assets
- **Current**: Static assets in `/public/images`.
- **Future**: Cloudinary or AWS S3 for dynamic image hosting.
- **Optimization**: Continued use of `next/image` with remote patterns.

---

# Deployment Strategy

## 1. Primary Platform
- **Vercel**: Optimized for Next.js 15, providing automatic CI/CD and edge caching.

## 2. CI/CD Workflow
- **Branching**: `main` for production, `dev` for feature integration.
- **Checks**: Every PR must pass:
  - `npm run lint`
  - `npm run build`
- **Preview Deploys**: Generated for every commit to a non-main branch.

## 3. Environment Management
- `.env.local`: Local development.
- Vercel Env Vars: Production keys (Gemini API, DB URLs).

---

# Technical Debt & Constraints

## 1. Current Debt
- **Mock Data**: `content/destinations.ts` is hardcoded. Needs migration to a DB.
- **Wording**: Some legacy "VietTravel" or purely "Vietnam" focused strings may remain in comments or metadata.
- **Animation Performance**: Heavy use of `framer-motion` on many elements can impact low-end mobile devices.

## 2. Protected Systems
The following systems are **core** to Aurora and should not be modified without explicit instruction:
- **Filter/Search Logic**: Found in `lib/utils.ts`.
- **Design System Tokens**: Colors and fonts in `tailwind.config.js` and `SKILLS.md`.
- **SectionReveal Component**: The primary motion engine.

## 3. Future Expansion Path
- **Global Expansion**: Moving beyond Vietnam to include global luxury destinations.
- **Social Integration**: Ability to share curated "Trip Collections."
- **Interactive Maps**: Mapbox or Google Maps integration for destination proximity.
