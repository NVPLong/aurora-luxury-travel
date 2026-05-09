# Aurora Architecture Overview

This document provides a high-level map of the Aurora technical ecosystem. It is designed to guide both human developers and AI agents through the project's structural evolution.

## 1. System Intent
Aurora is a **design-first editorial travel platform**. Unlike marketplaces, its architecture prioritizes visual storytelling, atmosphere, and conversational discovery over transactional density.

## 2. Core Pillars

| Pillar | Focus | Technology |
|---|---|---|
| **Frontend** | Immersive Stillness | Next.js 15, Tailwind CSS, Framer Motion |
| **Intelligence** | Quiet Concierge | Gemini/OpenAI (Planned), RAG, Vector Search |
| **Data** | Editorial Quality | Current: Mock JSON; Future: PostgreSQL + Prisma |
| **Media** | Cinematic Clarity | next/image, Cloudinary (Planned) |

## 3. Structural Layers

### Phase 1: The Editorial Foundation (Current)
- **Routing**: Next.js App Router (Static & Dynamic).
- **Styling**: Atomic Tailwind CSS with a strict Aurora design system.
- **State**: React Server Components (RSC) for content, Client Components for interaction.
- **Animation**: `SectionReveal` system using Framer Motion with custom luxury easings.

### Phase 2: The Conversational Layer (In Progress)
- **AI Concierge**: Floating UI anchor leading to an editorial side-panel.
- **Mock Intelligence**: Pattern-based responses to define the AI's "voice" before backend integration.

### Phase 3: The Modular Backend (Planned)
- **API Strategy**: REST or GraphQL layer for destination retrieval.
- **Persistence**: Relational database for destinations, itineraries, and user collections.
- **RAG Implementation**: Vectorizing destination descriptions for semantic search.

## 4. Scalability Principles
- **Design-First**: Every feature must pass the "Quiet Luxury" audit before implementation.
- **API-First**: Frontend should remain decoupled from data sources.
- **Modular Components**: Avoid giant page files; extract logic into domain-specific components.
- **Beginner-Accessible**: Code must remain readable and maintainable for junior engineers.

## 5. Documentation Map
For detailed specifics, refer to:
- [Frontend Architecture](file:///e:/My_Antigravity/Long-Antigravity/Web_Travel/docs/frontend-architecture.md)
- [AI Concierge Strategy](file:///e:/My_Antigravity/Long-Antigravity/Web_Travel/docs/ai-concierge-architecture.md)
- [Backend & Database Roadmap](file:///e:/My_Antigravity/Long-Antigravity/Web_Travel/docs/backend-roadmap.md)
- [Technical Debt & Constraints](file:///e:/My_Antigravity/Long-Antigravity/Web_Travel/docs/technical-debt.md)
