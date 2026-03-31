# React Interview Essentials (2026)

## Most crucial things to understand

1. Rendering model and reconciliation
- How React builds and updates the virtual tree.
- Keys, identity, and why incorrect keys break UI state.

2. State management fundamentals
- Local state with `useState`, complex state with `useReducer`.
- Lifting state up and avoiding duplicated sources of truth.

3. Effects and synchronization
- `useEffect` for external systems only (network, subscriptions, timers).
- Newer hooks like `useLayoutEffect`, `useInsertionEffect` and when they are (not) appropriate.
- Cleanup logic, stale closures, and dependency correctness.

4. Performance and memoization
- `React.memo`, `useMemo`, `useCallback`: when they help and when they hurt.
- `useTransition`, `useDeferredValue` for scheduling expensive updates.
- Rendering bottlenecks, list virtualization, and avoiding unnecessary re-renders.

5. Component & UX design
- Presentational vs container patterns (or feature-oriented slices).
- Designing accessible, reusable UI components and design-system primitives.
- Thinking in user flows, empty/loading/error states, and microcopy.

6. Data fetching & server components (modern React)
- Suspense-ready architecture concepts, loading/error boundaries.
- Caching libraries (TanStack Query/SWR) and server-state vs client-state.
 - React Server Components basics and where they fit (especially with frameworks like Next).

7. Error handling and resilience
- Error boundaries, graceful degradation, fallback UX.

8. Testing strategy
- Unit tests for logic/hooks, integration tests for flows.
- RTL-first mindset: test user behavior, not implementation details.

## Top interview questions — Middle

1. What causes a React component to re-render?
2. Explain how `useEffect` dependencies work and common mistakes.
3. Difference between `useMemo` and `useCallback` with real examples.
4. When should you use `useReducer` instead of `useState`?
5. Why are keys important in lists and what problems come from index keys?
6. Controlled vs uncontrolled form components: trade-offs and use-cases.
7. How do you structure reusable custom hooks safely?
8. How would you debug a component that re-renders too often?
9. What is prop drilling and what are practical alternatives?
10. How do you test async UI behavior in React Testing Library?
11. How do you design a reusable, accessible form component (inputs, errors, validation messages)?
12. How and when would you use modern hooks like `useTransition` or `useDeferredValue` in UX-heavy flows?

## Top interview questions — Senior

1. How do you design a scalable React architecture for a large product?
2. How do you decide boundaries between client state, server state, and URL state?
3. Explain trade-offs of global state tools (Context, Redux Toolkit, Zustand, Jotai).
4. How do you profile and optimize render performance at scale?
5. How do you organize feature ownership and component APIs across teams?
6. How do you introduce Suspense and streaming gradually in an existing app?
7. How do you design robust error boundaries and recovery UX?
8. How do you prevent regressions in a fast-moving frontend codebase?
9. What are your rules for abstraction to avoid over-engineering?
10. How do you mentor middle engineers on React internals and architecture decisions?
11. How would you design a React UI and component API for a design system that multiple teams consume?
12. How do you reason about Server Components vs Client Components boundaries in a React-based stack?
13. How do you leverage modern hooks (`useTransition`, `useDeferredValue`, `useSyncExternalStore`, `useInsertionEffect`) in a real-world architecture?
