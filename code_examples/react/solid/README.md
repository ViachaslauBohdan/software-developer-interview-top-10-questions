# SOLID in React — examples

Each file shows **one principle** with a small, interview-friendly React pattern.

| Principle | File | Idea in React |
|-----------|------|----------------|
| **S** — Single Responsibility | [`S-single-responsibility.tsx`](S-single-responsibility.tsx) | One component/hook = one reason to change (split UI vs data vs formatting). |
| **O** — Open/Closed | [`O-open-closed.tsx`](O-open-closed.tsx) | Extend behavior via **composition / props / slots**, not by editing core component source every time. |
| **L** — Liskov Substitution | [`L-liskov-substitution.tsx`](L-liskov-substitution.tsx) | Implementations are **swappable** when they honor the same contract (props + behavior expectations). |
| **I** — Interface Segregation | [`I-interface-segregation.tsx`](I-interface-segregation.tsx) | **Small prop surfaces**; do not force consumers to depend on huge objects they do not use. |
| **D** — Dependency Inversion | [`D-dependency-inversion.tsx`](D-dependency-inversion.tsx) | High-level UI depends on **abstractions** (injected functions/context), not concrete API modules. |

These are **teaching snippets**, not a full app. Copy patterns into your codebase as needed.
