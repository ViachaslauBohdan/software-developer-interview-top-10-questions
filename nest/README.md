# NestJS Interview Essentials (2026)

## Most crucial things to understand

1. Core architecture
- Modules, controllers, providers, dependency injection container.
- Why Nest encourages clear boundaries and testability.

2. Dependency injection and scopes
- Singleton, request-scoped, transient providers.
- Custom providers (`useClass`, `useFactory`, `useValue`).

3. Request lifecycle
- Middleware -> Guards -> Interceptors -> Pipes -> Controller -> Filters.
- Picking the right extension point for each concern.

4. Validation and transformation
- DTO patterns with `class-validator` and `class-transformer`.
- Input sanitation and contract safety.

5. Error handling and contracts
- Exception filters, domain errors, consistent API response format.

6. Persistence and transactions
- TypeORM/Prisma integration patterns.
- Transaction boundaries and repository abstraction.

7. Cross-cutting concerns
- Logging, caching, rate limiting, auth, and policy-based authorization.

8. Testing and maintainability
- Unit tests for providers, e2e tests for modules/routes.
- Dynamic modules and scalable monorepo patterns.

## Top interview questions — Middle

1. Explain how dependency injection works in NestJS.
2. What are modules in Nest and how should they be organized?
3. Difference between middleware, guards, interceptors, and pipes.
4. How do you implement request validation with DTOs?
5. How do global pipes/filters/interceptors affect app behavior?
6. How do you structure a feature module with controller + service + repository?
7. How do you handle async errors and custom exceptions?
8. How do you test a service with mocked dependencies?
9. How do you add authentication using Passport/JWT in Nest?
10. How do you make API responses consistent across endpoints?

## Top interview questions — Senior

1. How do you design a modular NestJS architecture for many teams/features?
2. How do you decide provider scopes and avoid request-scope performance issues?
3. How do you implement advanced authorization (RBAC/ABAC/policies)?
4. How do you design observability (logs, metrics, tracing) in Nest apps?
5. How do you approach transactions and eventual consistency with Nest services?
6. How do you design reusable dynamic modules for platform capabilities?
7. How do you structure multi-tenant Nest backends safely?
8. How do you optimize cold start and throughput in container/serverless setups?
9. How do you migrate legacy Express codebase to Nest incrementally?
10. How do you enforce architecture constraints and code standards in a Nest monorepo?
