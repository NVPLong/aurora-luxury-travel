# Aurora Local Skills

This directory contains project-specific AI agent skills for Aurora. These skills are operational rules, not runtime application code.

## Skill Map

- `aurora/`: Core brand, design, frontend, and engineering philosophy.
- `aurora-content/`: Editorial writing and cinematic image curation.
- `agent-quality/`: Karpathy-inspired coding-agent discipline for cautious, simple, verifiable work.
- `aurora-image-audit/`: Destination image validation, exact-location matching, alt text, and media reliability.
- `aurora-refactor-safety/`: Safe refactoring and file organization without breaking routes, filters, or protected systems.
- `aurora-database-design/`: PostgreSQL/Prisma data modeling for destinations, media, users, collections, and itineraries.
- `aurora-concierge-rag/`: AI Concierge, RAG, guardrails, evals, and future agent orchestration.

## Usage Rule

For any non-trivial task, start with:

1. `aurora`
2. `agent-quality`
3. Any domain-specific skill that matches the task

Always keep `.cursor/context/aurora-progress.md` updated after meaningful architectural, content, image, or AI workflow changes.
