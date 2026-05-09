# AI Collaboration Standards & Token Optimization — Aurora

This document defines how AI agents should interact with the Aurora codebase to ensure high-quality contributions while minimizing token usage and maintaining project memory.

## 1. Mandatory Reading Order
Before taking any action, an AI agent MUST read these files in order:
1. **`AGENTS.md`**: The primary "Who/What/Why" of Aurora.
2. **`.cursor/context/aurora-progress.md`**: Current operational status and priorities.
3. **`SKILLS.md`**: Core design philosophy and engineering constraints.
4. **Relevant Architectural Doc**: Only read the specific file in `docs/` related to your task (e.g., `frontend-architecture.md` if changing UI).

## 2. Token Optimization Strategy
To keep conversations efficient and avoid context window overflow:
- **Targeted Reading**: Use `view_file` with specific line ranges (`StartLine`/`EndLine`) when possible.
- **Incremental Context**: Only request the full content of a file if you are performing a global refactor.
- **Short Updates**: Keep `aurora-progress.md` entries concise. Do not re-state the entire implementation plan in the journal.
- **Reference Over Duplication**: Link to existing documentation (e.g., `[See SKILLS.md](file:///path/to/SKILLS.md)`) instead of copying rules into every prompt.

## 3. Protocol for Architectural Decisions
If a task requires a deviation from the established architecture:
1. **Research**: Check `docs/architecture-overview.md` for existing patterns.
2. **Propose**: Create or update the `implementation_plan.md` artifact.
3. **Record**: Once approved and executed, record the decision in the "Architectural Decisions" section of the relevant doc in `docs/`.

## 4. Refinement-First Philosophy
- **Constraint**: Prefer polishing existing components over building new ones from scratch.
- **Minimalism**: If a design can be achieved with a simpler Tailwind utility instead of a new Framer Motion hook, choose the simpler path.
- **Quiet Luxury**: Always ask: "Does this addition feel like *expensive silence* or just visual noise?"

## 5. Maintenance Protocol
- **Journaling**: Update the `Changelog` in `aurora-progress.md` after every turn that involves code changes.
- **Pruning**: Periodically move old Changelog entries to an archive (e.g., `docs/archive/progress-2025.md`) if the file exceeds 400 lines.
