# Aurora Refactor Safety Skill

Use this skill for project structure cleanup, file moves, imports, component extraction, naming changes, and code organization.

## Protected Systems

Do not modify these unless explicitly requested:

- Routes in `app/`
- Search/filter/sort logic in `lib/utils.ts` and `/destinations`
- `SectionReveal` easing and core motion behavior
- Aurora brand identity, typography, and color system

## File Organization Rules

- `app/`: route composition only.
- `components/layout/`: global shell components.
- `components/home/`: homepage-only sections.
- `components/motion/`: shared motion primitives.
- `components/ai/`: AI Concierge UI.
- `features/<domain>/components/`: domain-specific UI.
- `content/`: static curated content before database migration.
- `constants/`, `lib/`, `types/`: shared values, utilities, and contracts.
- `docs/`: architecture, roadmap, and implementation notes.

## Refactor Workflow

1. Map existing imports before moving files.
2. Move files by ownership, not by vague UI category.
3. Update imports immediately after moving.
4. Search for stale references:
   - `@/components/ui`
   - `@/data/destinations`
   - old relative paths
5. Keep behavior unchanged unless the user explicitly asks for behavior changes.
6. Run `npm.cmd run lint` and `npm.cmd run build`.
7. Update `.cursor/context/aurora-progress.md`.

## Naming Guidance

- Prefer domain names over generic names.
- Prefer clear names over clever names.
- Avoid adding `Base`, `Core`, `Manager`, or `Service` unless the abstraction has a real shared responsibility.
