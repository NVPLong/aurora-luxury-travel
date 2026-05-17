# Aurora Concierge RAG Skill

Use this skill when designing or implementing Aurora's AI Concierge, RAG, prompt architecture, agent tools, guardrails, evals, or future VoltAgent integration.

## Product Direction

The Concierge is not a chatbot widget or generic support agent. It should feel like a quiet editorial guide that understands place, pace, atmosphere, and travel intent.

## Recommended Integration Path

1. Keep the current UI mock until content and database are reliable.
2. Add a Next.js server route for Concierge requests.
3. Add typed retrieval from curated destination data.
4. Add RAG over destination content.
5. Add guardrails for factuality, geography, tone, and unavailable booking claims.
6. Add evals before adding multi-agent workflows.

## VoltAgent Use Cases

Consider VoltAgent when Aurora needs:

- Durable agent memory.
- Tool registry with typed tools.
- RAG orchestration.
- Guardrails.
- Evals.
- Workflow traces and observability.
- Multiple specialized agents.

Do not add VoltAgent only for the current mock drawer. The dependency is justified when Concierge becomes a real backend product surface.

## Initial Tools To Design

- `searchDestinations`
- `getDestinationBySlug`
- `recommendDestinationsByMood`
- `draftItinerary`
- `explainImageSource`
- `saveCollection` after auth exists

## Guardrails

- Do not invent destinations, prices, hotel availability, visas, or transportation schedules.
- Say when information is not available.
- Keep copy calm, editorial, and English-first.
- Do not use aggressive sales language.

## Evals

Create eval cases for:

- Exact destination factuality.
- Tone consistency with Aurora.
- Refusal to invent booking details.
- Correct use of retrieved content.
- Helpful itinerary structure without marketplace noise.
