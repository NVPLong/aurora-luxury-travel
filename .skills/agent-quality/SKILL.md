# Agent Quality Skill

Use this skill for all non-trivial coding, refactoring, architecture, debugging, and product decisions in Aurora.

Inspired by the Karpathy-style coding-agent guidance: think before coding, keep solutions simple, make surgical changes, and verify the result.

## Core Principles

### 1. Think Before Coding

- State assumptions when the task is ambiguous.
- Read the existing code before deciding.
- Surface tradeoffs when there are multiple valid approaches.
- Ask only when a wrong assumption would create real project risk.

### 2. Simplicity First

- Do not add abstractions for one-off code.
- Do not add libraries unless they clearly reduce complexity.
- Prefer the smallest change that satisfies the goal.
- Remove accidental complexity when it is inside the requested scope.

### 3. Surgical Changes

- Keep edits close to the task.
- Do not rewrite unrelated files.
- Do not change protected logic unless explicitly requested.
- Preserve user changes in the worktree.

### 4. Goal-Driven Execution

- Define success criteria before implementation.
- Verify with the smallest reliable checks.
- For Aurora UI/logic changes, run `npm.cmd run lint` and `npm.cmd run build`.
- Update the progress journal for meaningful changes.

## Aurora-Specific Guardrails

- Do not change routes unless explicitly requested.
- Do not break search, filter, or sort behavior.
- Do not turn Aurora into a generic travel marketplace.
- Prefer readable code a first-year CS student can follow.
- Keep the design aligned with "Expensive Silence."
