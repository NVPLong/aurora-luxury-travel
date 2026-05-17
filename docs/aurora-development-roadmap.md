# Aurora Development Roadmap

This roadmap keeps Aurora focused as a luxury editorial travel platform: calm discovery first, booking and automation later.

## 1. Current Structure

- `app/`: Next.js routes only. Keep route files thin and focused on page composition.
- `components/layout/`: Global shell components such as `Navbar` and `Footer`.
- `components/home/`: Homepage editorial sections.
- `components/motion/`: Shared motion primitives such as `SectionReveal` and hero motion wrappers.
- `components/ai/`: Concierge interface components.
- `features/destinations/components/`: Destination list, filters, cards, detail modules, and discovery sections.
- `content/`: Static editorial content for V1, currently `content/destinations.ts`.
- `constants/`, `lib/`, `types/`: Shared configuration, utility logic, and TypeScript contracts.

## 2. Immediate Stabilization

1. Keep destination filtering/search in `lib/utils.ts` until a typed data service replaces it.
2. Finish image curation with stable, exact-location media and meaningful alt text.
3. Add loading, empty, and error states for every future data-driven surface.
4. Reduce page-file size by moving destination detail sections into feature components.

## 3. Content And Media Layer

1. Move from ad hoc external URLs to Cloudinary or Vercel Blob.
2. Store image metadata: source, license, focal point, alt text, destination ID, and usage context.
3. Create editorial content rules for destination copy, signature moments, and journey rhythm.
4. Add a lightweight content validation script before migrating to the database.

## 4. Backend Roadmap

1. Add Prisma with PostgreSQL for `Destination`, `DestinationImage`, `EditorialMoment`, and `JourneyStep`.
2. Add typed server-side fetchers so pages do not import raw content directly.
3. Add admin-only content workflows later; avoid building a CMS too early.
4. Keep Vercel as the primary deployment target unless traffic or AI workloads require separation.

## 5. AI Concierge Roadmap

1. Replace mock responses with a server route that calls an LLM.
2. Use RAG over curated destination content before adding user personalization.
3. Store session preferences only after the base recommendations are accurate.
4. Recommended stack: PostgreSQL + pgvector first, then Pinecone only if search scale demands it.

## 6. Supporting Tools

- **Media**: Cloudinary for transformations, focal crops, and licensing metadata.
- **Database**: Supabase Postgres or Vercel Postgres with Prisma.
- **AI**: Gemini or OpenAI through server routes; keep prompts and retrieval logic versioned.
- **Agent Framework**: Consider VoltAgent when Concierge needs durable memory, typed tools, RAG orchestration, guardrails, evals, and production tracing. Do not add it while the AI layer is still only a mock drawer.
- **Quality**: ESLint, TypeScript strict, `npm run build`, and a small content audit script.
- **Analytics**: Vercel Analytics or PostHog once core flows are stable.

## 7. Senior Recommendation

Build in this order: content reliability, destination data model, AI retrieval, saved collections, then itinerary planning. Aurora should not become a noisy booking marketplace; its moat is editorial trust, exact imagery, and a concierge that feels curated rather than generic.
