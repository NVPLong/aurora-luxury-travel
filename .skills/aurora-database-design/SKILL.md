# Aurora Database Design Skill

Use this skill when planning or implementing Aurora's database, Prisma schema, backend fetchers, migrations, or persistent content model.

## Database Direction

Recommended stack:

- PostgreSQL
- Prisma
- Supabase Postgres or Vercel Postgres
- Cloudinary for media storage
- pgvector later for RAG if needed

## Core Entities

Start with:

- `Destination`
- `DestinationImage`
- `EditorialMoment`
- `JourneyStep`
- `Region`
- `Category`
- `TravelBudget`

Plan for:

- `User`
- `SavedCollection`
- `SavedCollectionItem`
- `Itinerary`
- `ItineraryDay`
- `ChatSession`
- `ChatMessage`
- `UserPreference`

## Modeling Principles

- Keep editorial content structured, not scattered in JSON blobs.
- Store image attribution and focal-point metadata.
- Avoid premature booking-commerce entities unless Aurora explicitly moves into booking.
- Use enums only when values are stable.
- Preserve slug/id compatibility with current routes.

## Migration Path

1. Keep `content/destinations.ts` as source of truth.
2. Design Prisma schema.
3. Add seed script from current content.
4. Add typed server fetchers.
5. Move pages from direct static imports to fetchers.
6. Add admin/content workflows later.

## Verification

- Database changes need schema validation, seed test, TypeScript checks, lint, and build.
- Document entity changes in `docs/database-strategy.md` and `.cursor/context/aurora-progress.md`.
