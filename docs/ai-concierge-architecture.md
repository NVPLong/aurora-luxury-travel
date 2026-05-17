# AI Concierge Architecture

Aurora’s AI Concierge is an editorial-first assistant designed to help users discover destinations through conversation.

## 1. Vision
The concierge is not a generic "help desk." It is a **Curated Guide**. Its personality is calm, expert, and restrained.

## 2. Technical Roadmap

### Phase 1: UI Foundation (Current)
- **Interface**: Side-drawer (`AuroraConciergePanel.tsx`).
- **Interaction**: Floating gold-glow button (`AuroraAssistantButton.tsx`).
- **Logic**: Mock responses using a curated set of prompts.

### Phase 2: RAG & LLM Integration (Planned)
- **Model**: Google Gemini 1.5 Pro (preferred for cinematic/long-context reasoning).
- **Architecture**: **RAG (Retrieval-Augmented Generation)**.
- **Knowledge Base**: Vectorized versions of `content/destinations.ts` and editorial blogs.
- **Vector DB**: Pinecone or Supabase Vector (pgvector).
- **Agent Discipline**: Follow `.skills/aurora-concierge-rag/SKILL.md` for tools, guardrails, and evals.

### Phase 3: Personalization
- **Context Awareness**: Remembers user preferences during the session.
- **Itinerary Generation**: Creates structured markdown itineraries based on conversation.

## 3. Implementation Patterns

### AI Response Flow
1. **User Input**: Captured via `AuroraConciergePanel`.
2. **Context Enrichment**: Combine query with current page context (e.g., if the user is on the Sapa page).
3. **Retrieval**: Fetch relevant destination facts from the Vector DB.
4. **Generation**: LLM generates a response in the **Aurora Editorial Voice**.

### Editorial Voice Guidelines
- Use "we" to represent the Aurora brand.
- Keep responses concise (max 3 sentences).
- Use evocative, non-marketing language.
- *Example*: "Vinh Ha Long is best experienced from the water at dawn, when the limestone karsts appear as silhouettes against the morning mist."

## 4. Scaling Considerations
- **Token Efficiency**: Use prompt caching for system instructions.
- **Latency**: Implement streaming responses to maintain the "cinematic" feel.
- **Privacy**: No PII should be sent to the LLM.
- **VoltAgent Fit**: Introduce VoltAgent only when the Concierge needs typed tools, durable memory, RAG orchestration, guardrails, evals, or trace observability. Do not add it for the current mock-only drawer.
