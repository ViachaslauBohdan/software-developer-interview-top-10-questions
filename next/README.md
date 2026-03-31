# Next.js Interview Essentials (2026)

## Most crucial things to understand

1. Rendering strategies
- SSR, SSG, ISR, and dynamic rendering trade-offs.
- How to choose strategy based on SEO, freshness, and cost.

2. App Router fundamentals
- Nested layouts, route segments, parallel routes, intercepting routes.
- Loading and error UI conventions.

3. React Server Components (RSC)
- Server vs Client Components boundaries.
- What can run on server only, serialization constraints.

4. Data fetching and caching
- `fetch` caching modes, revalidation, route segment config.
- Stale data issues and cache invalidation patterns.

5. Server Actions and mutations
- Mutation flow, optimistic updates, and validation.
- Security implications of server-side mutations.

6. Performance optimization
- Code splitting, image/font optimization, edge vs node runtime.
- Bundle analysis and hydration cost awareness.

7. API layer and backend integration
- Route handlers, middleware, auth/session strategy.
- BFF pattern in Next.js.

8. Deployment and observability
- Vercel/runtime specifics, cold starts, logging, tracing.

## Top interview questions — Middle

1. Compare SSR, SSG, ISR with practical examples.
2. What is the difference between Server and Client Components?
3. How do `loading.tsx` and `error.tsx` work in App Router?
4. Explain revalidation in Next.js and where it can fail.
5. How would you protect a route using middleware?
6. How do route handlers differ from traditional API routes?
7. How do you optimize images and fonts in Next.js?
8. How do you debug hydration mismatch errors?
9. When should a page be dynamic vs static?
10. How do you structure feature folders in a growing Next.js app?

## Top interview questions — Senior

1. How do you design a high-traffic Next.js architecture with mixed rendering modes?
2. How do you define server/client boundaries to minimize hydration and JS bundle size?
3. How do you design caching and revalidation strategy for correctness + performance?
4. How do you approach auth in App Router (session, token, edge constraints)?
5. How do you evaluate Edge runtime vs Node runtime per route?
6. How do you design observability for server actions, route handlers, and middleware?
7. How do you migrate from Pages Router to App Router safely?
8. How do you handle multi-tenant or white-label architecture in Next.js?
9. How do you ensure SEO correctness with dynamic and personalized content?
10. How do you set engineering standards for Next.js code quality at team scale?
