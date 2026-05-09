# Backend Roadmap — Aurora

Transitioning from a static editorial platform to a dynamic global travel ecosystem.

## 1. Modular Architecture
- **Phase 1**: Next.js Route Handlers (Serverless).
- **Phase 2**: Microservices for AI Reasoning and Vector Search if scaling demands it.

## 2. API-First Strategy
- All data fetching must be typed via TypeScript interfaces.
- Standardized error responses and loading states (SWR or React Query recommended for client-side fetching).

## 3. Planned Services
- **Auth**: Secure user profiles via NextAuth.js.
- **Search**: Meilisearch or Algolia for high-performance destination discovery.
- **AI**: Gateway for Gemini API with rate limiting and prompt safety layers.
