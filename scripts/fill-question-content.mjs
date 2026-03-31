import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();

const roots = [
  'react',
  'next',
  'node',
  'nest',
  'aws',
  'security',
  'web/src/questions/react',
  'web/src/questions/next',
  'web/src/questions/node',
  'web/src/questions/nest',
  'web/src/questions/aws',
  'web/src/questions/security',
  'web/src/questions/css'
];

const levels = ['junior', 'middle', 'senior'];

function inferTech(filePath) {
  if (filePath.includes('/react/')) return 'react';
  if (filePath.includes('/next/')) return 'next';
  if (filePath.includes('/node/')) return 'node';
  if (filePath.includes('/nest/')) return 'nest';
  if (filePath.includes('/aws/')) return 'aws';
  if (filePath.includes('/security/')) return 'security';
  if (filePath.includes('/css/')) return 'css';
  return 'react';
}

function answerFor(tech, level, question) {
  const q = question.toLowerCase();
  if (tech === 'react') return reactAnswer(q, level, question);
  if (tech === 'next') return nextAnswer(q, level, question);
  if (tech === 'node') return nodeAnswer(q, level, question);
  if (tech === 'nest') return nestAnswer(q, level, question);
  if (tech === 'aws') return awsAnswer(q, level, question);
  if (tech === 'security') return securityAnswer(q, level, question);
  if (tech === 'css') return cssAnswer(q, level, question);
  const byLevel = {
    junior: 'Give a simple definition, one practical use-case, and one short example.',
    middle: 'Explain trade-offs, typical mistakes, and show a small production-style snippet.',
    senior: 'Cover architecture decisions, scaling trade-offs, and operational impact.'
  };
  return byLevel[level];
}

function specificFallback(question) {
  const clean = question.replace(/\?$/, '');
  return `For "${clean}", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.`;
}

function reactAnswer(q, level, question) {
  if (q.includes('re-render')) return 'Re-renders happen when local state changes, parent passes new props, or consumed context updates.';
  if (q.includes('useeffect')) return 'Use `useEffect` to sync with external systems; include all reactive dependencies and cleanup subscriptions/timers.';
  if (q.includes('usememo') || q.includes('usecallback')) return '`useMemo` memoizes computed values, `useCallback` memoizes function identity to reduce unnecessary child renders.';
  if (q.includes('usereducer')) return 'Use `useReducer` when state transitions are complex, event-driven, or need predictable action-based updates.';
  if (q.includes('keys')) return 'Stable keys preserve element identity across list changes and prevent state mixups during reorder/insert/remove.';
  if (q.includes('controlled vs uncontrolled')) return 'Controlled inputs give predictable validation/state sync; uncontrolled can be simpler for basic forms and refs.';
  if (q.includes('custom hooks')) return 'Keep custom hooks focused, deterministic, and explicit about dependencies and returned API shape.';
  if (q.includes('debug')) return 'Use React DevTools Profiler, component memo boundaries, and prop/state diffing to isolate expensive render paths.';
  if (q.includes('prop drilling')) return 'Prefer composition first, then Context or dedicated state stores when shared state spans many branches.';
  if (q.includes('testing library')) return 'Test behavior visible to users: loading, async success/error states, and interactive flows.';
  if (q.includes('accessible form')) return 'Design reusable fields with labels, `aria-*` semantics, clear errors, and predictable validation UX.';
  if (q.includes('usetransition') || q.includes('usedeferredvalue')) return 'Use scheduling hooks to keep urgent interactions responsive while deferring heavy recalculation/render work.';
  if (q.includes('scalable react architecture')) return 'Scale React by organizing by features, separating domain/UI/state concerns, enforcing boundaries, and standardizing conventions across teams.';
  if (q.includes('client state, server state, and url state')) return 'Store each state type where it naturally belongs: local UI in component, remote cache in query layer, navigation state in URL.';
  if (q.includes('global state tools')) return 'Choose global state by complexity: Context for low-frequency shared data, RTK/Zustand/Jotai for high-frequency and larger domains.';
  if (q.includes('profile and optimize')) return 'Measure before optimizing: profile commits, reduce render surface, virtualize large lists, and memoize only proven hot paths.';
  if (q.includes('component apis across teams')) return 'Create stable component contracts, semantic props, strict typing, versioning rules, and cross-team ownership.';
  if (q.includes('suspense') || q.includes('streaming')) return 'Adopt Suspense incrementally around isolated data islands with clear loading/error boundaries.';
  if (q.includes('error boundaries')) return 'Use granular error boundaries around risky features and provide user recovery paths, retries, and telemetry.';
  if (q.includes('prevent regressions')) return 'Combine typed contracts, integration tests, visual checks, and performance budgets in CI for safe iteration.';
  if (q.includes('abstraction')) return 'Abstract only after repeated patterns emerge and keep APIs narrow to avoid over-generalized components.';
  if (q.includes('mentor')) return 'Mentor through code reviews, profiling sessions, and architecture discussions tied to real production scenarios.';
  if (q.includes('design system')) return 'Design system APIs should optimize consistency, accessibility, and composability with strict typed variants.';
  if (q.includes('server components vs client components')) return 'Keep data-heavy, non-interactive rendering on server components and isolate interactivity in client leaves.';
  if (q.includes('usesyncexternalstore') || q.includes('useinsertioneffect')) return 'Use advanced hooks only when architecture needs them: external store consistency and style injection ordering.';
  return specificFallback(question);
}

function nextAnswer(q, level, question) {
  if (q.includes('observability') && q.includes('server actions')) return 'Use structured logs with correlation IDs across middleware, route handlers, and server actions, then aggregate in centralized tracing/metrics.';
  if (q.includes('data ownership') && q.includes('bff')) return 'Keep orchestration and response composition in BFF handlers, while domain rules and writes stay in downstream services.';
  if (q.includes('design caching and revalidation strategy')) return 'Define cache keys/tags by domain, separate public/personalized data, and trigger explicit invalidation after mutations.';
  if (q.includes('debug hydration mismatch')) return 'Ensure server/client render determinism, move browser-only values into client effects, and isolate unstable UI to client components.';
  if (q.includes('route handlers differ from traditional api routes')) return 'Route handlers are App Router native, support Web `Request/Response`, and align with segment/runtime/caching controls.';
  if (q.includes('preferred over img')) return '`next/image` provides automatic optimization, responsive sizing, lazy loading, and better Core Web Vitals defaults.';
  if (q.includes('purpose of link')) return '`next/link` enables client-side navigation with prefetch support, avoiding full page reloads.';
  if (q.includes('use client')) return '`use client` marks a component to run in the browser so it can use hooks, events, and DOM APIs.';
  if (q.includes('layout.tsx')) return '`layout.tsx` defines shared UI shell for route segments and persists between page navigations.';
  if (q.includes('route groups')) return 'Route groups organize routes without affecting URL structure, useful for separate layouts or app sections.';
  if (q.includes('dynamic route segments')) return 'Dynamic segments like `[id]` map URL parts to `params` for route-level data fetching.';
  if (q.includes('not-found.tsx')) return '`not-found.tsx` handles 404 UI for a segment, while `error.tsx` catches runtime errors with reset support.';
  if (q.includes('prefetching')) return 'Next.js prefetches linked routes in viewport to speed up client-side transitions; tune based on traffic and cache behavior.';
  if (q.includes('metadata in layout and page')) return 'Layout metadata applies to nested routes; page metadata can override per-leaf route for SEO granularity.';
  if (q.includes('navigate programmatically')) return 'Use `useRouter()` from `next/navigation` and call `router.push()`/`router.replace()`.';
  if (q.includes('page route in next.js app router')) return 'A route is created by folder segments under `app/` with `page.tsx` as the leaf entry.';
  if (q.includes('difference between static and dynamic content')) return 'Static content is generated ahead of time and cached; dynamic content is rendered per request/user context.';
  if (q.includes('fetch data in a basic next.js page')) return 'In App Router, fetch on the server in page components and use caching/revalidate controls as needed.';
  if (q.includes('create an api route handler')) return 'Create `app/api/<name>/route.ts` and export HTTP methods like `GET`/`POST` returning `Response`.';
  if (q.includes('next.js and how is it different from plain react')) return 'Next.js adds routing, server rendering, data fetching, API routes, and production optimizations on top of React.';
  if (q.includes('ssr, ssg, isr')) return 'SSR renders on each request, SSG at build time, and ISR regenerates static output after revalidation.';
  if (q.includes('server and client components')) return 'Server Components reduce client JS by rendering on server; Client Components handle browser interactivity.';
  if (q.includes('loading.tsx') || q.includes('error.tsx')) return '`loading.tsx` renders fallback during segment fetch; `error.tsx` isolates runtime failures with reset support.';
  if (q.includes('revalidation')) return 'Use time-based or tag/path revalidation and ensure mutation paths trigger cache invalidation explicitly.';
  if (q.includes('middleware')) return 'Middleware executes before route resolution for auth, redirects, and edge checks but should stay lightweight.';
  if (q.includes('route handlers')) return 'Route handlers are file-based HTTP endpoints in App Router and integrate cleanly with server runtime features.';
  if (q.includes('optimize images and fonts')) return 'Use `next/image` and `next/font` for automatic optimization, better caching, and improved web vitals.';
  if (q.includes('when should a page be dynamic vs static')) return 'Use static for public mostly-stable pages; use dynamic for per-user, frequently changing, or auth-dependent responses.';
  if (q.includes('structure feature folders')) return 'Organize by feature/domain and keep UI, data, and server actions together to reduce cross-module coupling.';
  if (q.includes('server actions work')) return 'Server Actions execute on server, reduce API boilerplate, but require careful auth, validation, and error boundaries.';
  if (q.includes('optimistic ui')) return 'Use optimistic state update on submit, rollback on failure, and reconcile with revalidated server state.';
  if (q.includes('parallel routes')) return 'Parallel routes render multiple named slots simultaneously, ideal for dashboards/modals with independent data loading.';
  if (q.includes('intercepting routes')) return 'Intercepting routes render route content in current layout context (e.g., modal over list) without losing navigation state.';
  if (q.includes('cache tags and revalidatetag')) return 'Tag related fetches and call `revalidateTag` after mutations to refresh only affected cache slices.';
  if (q.includes('high-traffic next.js architecture')) return 'Mix SSG/ISR for cacheable pages with dynamic rendering for personalized views, plus strict caching and observability.';
  if (q.includes('server/client boundaries')) return 'Push data fetching and heavy logic to server components; keep client components minimal and interactive only.';
  if (q.includes('auth in app router')) return 'Centralize auth checks in middleware/route handlers and use secure session cookies with server-side validation.';
  if (q.includes('migrate from pages router')) return 'Migrate route-by-route, keeping Pages and App routers side-by-side until feature parity is reached.';
  if (q.includes('multi-tenant')) return 'Resolve tenant from host/path, isolate data access by tenant ID, and enforce tenant-aware authorization on every request.';
  if (q.includes('seo correctness')) return 'Generate metadata server-side, use canonical tags, and ensure crawlable HTML for content-critical routes.';
  if (q.includes('engineering standards')) return 'Enforce lint/type/test/build gates in CI and standardize routing/data/caching conventions across teams.';
  if (q.includes('rollout strategy')) return 'Roll out breaking changes behind feature flags, canary routes, and monitoring with rollback playbooks.';
  if (q.includes('data ownership between bff')) return 'Keep orchestration and presentation shaping in BFF handlers while domain logic remains in downstream services.';
  if (q.includes('cache poisoning')) return 'Separate public/private caches, vary by auth/locale keys, and avoid caching personalized responses globally.';
  if (q.includes('multi-region next.js')) return 'Use region-local execution and data replicas with latency-aware routing and clear consistency model.';
  if (q.includes('control hydration cost')) return 'Measure hydration budget per route, move logic server-side, and isolate interactivity to small client islands.';
  if (q.includes('hydrate') || q.includes('hydration')) return 'Hydration mismatches happen when server and client output differ; avoid non-deterministic render values on server.';
  if (q.includes('edge runtime')) return 'Use Edge for low-latency lightweight logic; use Node runtime for heavy libs, DB drivers, or native dependencies.';
  return specificFallback(question);
}

function nodeAnswer(q, level, question) {
  if (q.includes('what is node.js')) return 'Node.js is a JavaScript runtime on V8 for building servers, CLIs, and event-driven backend services.';
  if (q.includes('what is npm')) return 'npm is Node’s package manager; `package.json` defines scripts, dependencies, and project metadata.';
  if (q.includes('require and import differ')) return '`require` is CommonJS runtime loading, while `import` is ESM syntax with static analysis and tree-shaking support.';
  if (q.includes('simple http server')) return 'Use Node `http` module or frameworks like Express/Fastify to define routes and start listening on a port.';
  if (q.includes('synchronous and asynchronous')) return 'Synchronous code blocks execution; asynchronous code schedules work and keeps event loop responsive.';
  if (q.includes('callbacks')) return 'Callbacks are function arguments run later; nesting many can hurt readability and error handling.';
  if (q.includes('async/await')) return '`async/await` makes promise-based flows readable and centralizes error handling with `try/catch`.';
  if (q.includes('environment variables')) return 'Read env vars from `process.env`; validate required values at startup and never hardcode secrets.';
  if (q.includes('what is express')) return 'Express is a minimal web framework for routing, middleware, and HTTP APIs on Node.js.';
  if (q.includes('handle errors in an api endpoint')) return 'Wrap async handlers, propagate to centralized error middleware, and return consistent safe error responses.';
  if (q.includes('event loop')) return 'Node uses an event loop for async I/O; promise microtasks run before next macrotask phase callbacks.';
  if (q.includes('nexttick')) return '`process.nextTick` runs before microtask drain of next phase and can starve I/O if overused.';
  if (q.includes('streams')) return 'Streams process large payloads incrementally, lowering memory pressure and enabling backpressure-aware pipelines.';
  if (q.includes('idempotent')) return 'Idempotent endpoints produce same final state for repeated requests with same identifier/payload.';
  if (q.includes('graceful shutdown')) return 'Stop accepting new traffic, complete in-flight requests, close resources, then exit with health checks updated.';
  return specificFallback(question);
}

function nestAnswer(q, level, question) {
  if (q.includes('what is nestjs')) return 'NestJS is a TypeScript-first Node framework built around modules, DI, and structured architecture patterns.';
  if (q.includes('controller and service')) return 'Controllers handle transport layer requests; services contain business logic reusable across controllers.';
  if (q.includes('basic get endpoint')) return 'Define a controller with `@Get()` decorator and return DTO/JSON from a service.';
  if (q.includes('what are dtos')) return 'DTOs define API contracts and validation rules for request/response payloads.';
  if (q.includes('validate request body')) return 'Use DTO classes + `ValidationPipe` to enforce schema and reject malformed input.';
  if (q.includes('what is a guard')) return 'Guards run before handlers to allow/deny execution based on authn/authz policies.';
  if (q.includes('handle exceptions')) return 'Throw framework exceptions or custom exceptions and map them with global exception filters.';
  if (q.includes('unit test for a service')) return 'Use `@nestjs/testing` to instantiate providers with mocked dependencies and assert service behavior.';
  if (q.includes('dependency injection')) return 'Nest DI resolves providers from module context and injects them via constructor for testable architecture.';
  if (q.includes('modules')) return 'Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.';
  if (q.includes('guards') || q.includes('interceptors') || q.includes('pipes')) return 'Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.';
  if (q.includes('dynamic modules')) return 'Dynamic modules expose configurable providers via `forRoot/forFeature` patterns to enable reusable platform capabilities.';
  return specificFallback(question);
}

function awsAnswer(q, level, question) {
  if (q.includes('what is aws lambda')) return 'AWS Lambda is serverless compute that runs code on demand without managing servers, billed per execution duration.';
  if (q.includes('what is amazon ec2')) return 'EC2 provides virtual servers with full OS/runtime control, ideal for long-running or specialized workloads.';
  if (q.includes('what is amazon api gateway')) return 'API Gateway is a managed API front door for routing, auth, throttling, and monitoring.';
  if (q.includes('basic triggers')) return 'Lambda can be triggered by API Gateway, SQS, SNS, EventBridge, S3, DynamoDB Streams, and more.';
  if (q.includes('iam role')) return 'IAM roles grant temporary permissions to AWS resources without embedding static credentials.';
  if (q.includes('cloudwatch logs')) return 'CloudWatch Logs stores Lambda execution logs for debugging, metrics extraction, and alerting.';
  if (q.includes('what is aws step functions')) return 'Step Functions orchestrate distributed workflows with explicit state transitions and retries.';
  if (q.includes('deploy code changes')) return 'Deploy with CLI/CDK/SAM pipelines, publish versions, and route traffic via aliases.';
  if (q.includes('synchronous and asynchronous lambda invocation')) return 'Sync invocation waits for result (API use-cases); async queues event and returns immediately.';
  if (q.includes('what is a lambda cold start')) return 'Cold start is initialization latency when a new execution environment boots before handling a request.';
  if (q.includes('lambda vs ec2')) return 'Choose Lambda for event-driven elastic workloads; choose EC2 for persistent processes and full runtime control.';
  if (q.includes('api gateway')) return 'API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.';
  if (q.includes('step functions')) return 'Step Functions orchestrate distributed tasks with retries, branching, timeouts, and failure handling.';
  if (q.includes('cold start')) return 'Reduce cold start impact with smaller bundles, runtime tuning, and provisioned concurrency for latency-sensitive paths.';
  return specificFallback(question);
}

function securityAnswer(q, level, question) {
  if (q.includes('authentication vs authorization')) return 'Authentication verifies identity; authorization decides what that identity is allowed to access.';
  if (q.includes('what is xss')) return 'XSS injects malicious scripts into trusted pages; prevent it with escaping, CSP, and sanitization controls.';
  if (q.includes('what is csrf')) return 'CSRF tricks authenticated browsers into unintended requests; mitigate with SameSite cookies and anti-CSRF tokens.';
  if (q.includes('validate input even if frontend')) return 'Client validation improves UX only; backend validation is mandatory because clients are untrusted.';
  if (q.includes('password hashing')) return 'Hash passwords with slow one-way algorithms (bcrypt/argon2) plus salts; never store plaintext passwords.';
  if (q.includes('httponly') || q.includes('secure cookie')) return 'HttpOnly blocks JS token access, Secure restricts cookie to HTTPS, reducing token theft risk.';
  if (q.includes('https protect')) return 'HTTPS encrypts transport and integrity in transit, but not application logic bugs or stolen credentials endpoints.';
  if (q.includes('cors in simple terms')) return 'CORS is browser-enforced cross-origin policy that controls which frontends can call your APIs.';
  if (q.includes('rate limiting')) return 'Rate limiting caps request volume per identity/IP to reduce abuse, brute-force, and accidental overload.';
  if (q.includes('what is a secret')) return 'A secret is sensitive credential material (keys/tokens/passwords) that must live in secure secret stores.';
  if (q.includes('xss')) return 'Prevent XSS with output encoding, strict CSP, sanitization for rich text, and avoiding unsafe DOM injection APIs.';
  if (q.includes('csrf')) return 'Mitigate CSRF with SameSite cookies, anti-CSRF tokens, and server-side origin/referrer validation.';
  if (q.includes('injection')) return 'Prevent injections via parameterized queries, strict schema validation, and never concatenating untrusted input.';
  if (q.includes('secrets')) return 'Use secret managers, runtime injection, scoped access, and rotation policies with audit trails.';
  return specificFallback(question);
}

function cssAnswer(q, level, question) {
  if (q.includes('specificity')) return 'Specificity controls which CSS rules win; keep selectors simple and avoid accidental overrides.';
  if (q.includes('flexbox')) return 'Flexbox is best for one-dimensional alignment and spacing across rows or columns.';
  if (q.includes('grid')) return 'CSS Grid is ideal for two-dimensional layout where rows and columns are controlled together.';
  if (q.includes('responsive')) return 'Responsive CSS combines fluid sizing, breakpoints, and content-first layout adjustments.';
  if (q.includes('accessibility')) return 'Accessible CSS includes clear focus styles, sufficient contrast, and reduced-motion support.';
  if (q.includes('performance')) return 'CSS performance improves when you reduce costly paint operations and avoid layout thrashing.';
  if (q.includes('container query')) return 'Container queries let components adapt by parent size, improving reuse across page contexts.';
  if (q.includes('design token')) return 'Design tokens centralize visual decisions so themes and components stay consistent across products.';
  return specificFallback(question);
}

function nextExample(question) {
  const q = question.toLowerCase();
  if (q.includes('observability') && q.includes('server actions')) {
    return `const t0 = Date.now();
try {
  // route handler / action logic
} finally {
  console.log(JSON.stringify({ traceId, route: '/api/orders', ms: Date.now() - t0 }));
}`;
  }
  if (q.includes('data ownership') && q.includes('bff')) {
    return `// app/api/dashboard/route.ts (BFF)
export async function GET() {
  const [user, orders] = await Promise.all([usersSvc.me(), ordersSvc.list()]);
  return Response.json({ user, orders }); // composed view model
}`;
  }
  if (q.includes('preferred over img')) {
    return `import Image from 'next/image';
export default function Hero() {
  return <Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />;
}`;
  }
  if (q.includes('purpose of link')) {
    return `import Link from 'next/link';
export default function Nav() {
  return <Link href="/dashboard">Go to dashboard</Link>;
}`;
  }
  if (q.includes('use client')) {
    return `'use client';
import { useState } from 'react';
export function Counter() { const [n, setN] = useState(0); return <button onClick={() => setN(n + 1)}>{n}</button>; }`;
  }
  if (q.includes('layout.tsx')) {
    return `// app/dashboard/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section><Sidebar />{children}</section>;
}`;
  }
  if (q.includes('route groups')) {
    return `app/
  (marketing)/page.tsx
  (dashboard)/dashboard/page.tsx
// Parentheses group routes without changing URL paths.`;
  }
  if (q.includes('dynamic route segments')) {
    return `// app/products/[id]/page.tsx
export default function ProductPage({ params }: { params: { id: string } }) {
  return <p>Product ID: {params.id}</p>;
}`;
  }
  if (q.includes('loading.tsx') || q.includes('error.tsx')) {
    return `// app/dashboard/loading.tsx
export default function Loading() {
  return <p>Loading dashboard...</p>;
}

// app/dashboard/error.tsx
'use client';
export default function Error({ reset }: { reset: () => void }) {
  return <button onClick={reset}>Try again</button>;
}`;
  }
  if (q.includes('not-found.tsx') || (q.includes('error.tsx') && !q.includes('loading.tsx'))) {
    return `// app/products/not-found.tsx
export default function NotFound() { return <h2>Product not found</h2>; }
// app/products/error.tsx catches runtime errors for this segment.`;
  }
  if (q.includes('prefetching')) {
    return `import Link from 'next/link';
<Link href="/dashboard" prefetch>Dashboard</Link>
// Route is prefetched when link enters viewport.`;
  }
  if (q.includes('metadata in layout and page')) {
    return `// app/layout.tsx
export const metadata = { title: 'Base' };
// app/blog/page.tsx
export const metadata = { title: 'Blog' };`;
  }
  if (q.includes('navigate programmatically')) {
    return `'use client';
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/checkout');`;
  }
  if (q.includes('fetch data in a basic next.js page')) {
    return `export default async function Page() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`;
  }
  if (q.includes('difference between static and dynamic content')) {
    return `// Static (build time)
export const dynamic = 'force-static';

// Dynamic (request time)
// export const dynamic = 'force-dynamic';`;
  }
  if (q.includes('page route in next.js app router')) {
    return `// app/products/page.tsx
export default function ProductsPage() {
  return <h1>Products</h1>;
}`;
  }
  if (q.includes('next.js and how is it different from plain react')) {
    return `// Next.js gives file-based routing and server rendering out of the box:
// app/about/page.tsx -> route /about
export default function About() { return <h1>About</h1>; }`;
  }
  if (q.includes('create an api route handler')) {
    return `// app/api/health/route.ts
export async function GET() {
  return Response.json({ ok: true });
}`;
  }
  if (q.includes('ssr, ssg, isr')) {
    return `// SSR (request-time)
export const dynamic = 'force-dynamic';

// SSG (build-time)
export const dynamic = 'force-static';

// ISR (static + periodic refresh)
export const revalidate = 60;`;
  }
  if (q.includes('server and client components')) {
    return `// Server Component (default)
export default async function Page() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  return <pre>{JSON.stringify(posts)}</pre>;
}`;
  }
  if (q.includes('middleware')) {
    return `import { NextResponse } from 'next/server';
export function middleware(req: Request) {
  const ok = req.headers.get('cookie')?.includes('session=');
  return ok ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.url));
}`;
  }
  if (q.includes('revalidation')) {
    return `await fetch('https://api.example.com/catalog', {
  next: { revalidate: 300, tags: ['catalog'] }
});
// After mutation on server action/route handler: revalidateTag('catalog')`;
  }
  if (q.includes('route handlers differ')) {
    return `// app/api/users/route.ts
export async function GET() {
  return Response.json([{ id: 1, name: 'Ann' }]);
}
export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ created: true, body }, { status: 201 });
}`;
  }
  if (q.includes('optimize images and fonts')) {
    return `import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function Hero() {
  return <Image className={inter.className} src="/hero.jpg" alt="Hero" width={1200} height={600} priority />;
}`;
  }
  if (q.includes('hydration mismatch')) {
    return `'use client';
import { useEffect, useState } from 'react';
export default function Clock() {
  const [now, setNow] = useState('');
  useEffect(() => setNow(new Date().toISOString()), []);
  return <p>{now}</p>;
}`;
  }
  if (q.includes('when should a page be dynamic vs static')) {
    return `// Public docs/blog -> static + ISR
export const revalidate = 3600;

// Personalized dashboard -> dynamic
// export const dynamic = 'force-dynamic';`;
  }
  if (q.includes('structure feature folders')) {
    return `app/
  (marketing)/page.tsx
  (app)/dashboard/page.tsx
features/
  billing/{ui,server,actions.ts}`;
  }
  if (q.includes('high-traffic next.js architecture')) {
    return `// SEO/public: cache-friendly ISR
export const revalidate = 300;

// Personalized routes: request-time render
// export const dynamic = 'force-dynamic';`;
  }
  if (q.includes('server/client boundaries')) {
    return `// Server component fetches heavy data:
export default async function Page() {
  const report = await getReport();
  return <InteractiveChart initialData={report.points} />; // client component
}`;
  }
  if (q.includes('server actions work')) {
    return `'use server';
export async function createPost(formData: FormData) {
  // validate + persist on server
}
// invoke from <form action={createPost}>`;
  }
  if (q.includes('optimistic ui')) {
    return `'use client';
const [items, setItems] = useState(initial);
setItems((prev) => [...prev, optimisticItem]); // optimistic
await createItemAction(data); // rollback on error`;
  }
  if (q.includes('parallel routes')) {
    return `app/dashboard/@analytics/page.tsx
app/dashboard/@activity/page.tsx
// both slots render in the same layout concurrently.`;
  }
  if (q.includes('intercepting routes')) {
    return `app/feed/page.tsx
app/feed/@modal/(..)photo/[id]/page.tsx
// photo opens as modal while keeping feed context.`;
  }
  if (q.includes('cache tags and revalidatetag')) {
    return `await fetch('/api/posts', { next: { tags: ['posts'] } });
// after mutation
// revalidateTag('posts');`;
  }
  if (q.includes('caching and revalidation strategy')) {
    return `await fetch('https://api.example.com/catalog', {
  next: { tags: ['catalog'], revalidate: 600 }
});
// after admin update
// revalidateTag('catalog')`;
  }
  if (q.includes('auth in app router')) {
    return `// app/api/me/route.ts
export async function GET(req: Request) {
  const hasSession = req.headers.get('cookie')?.includes('session=');
  return hasSession ? Response.json({ ok: true }) : new Response('Unauthorized', { status: 401 });
}`;
  }
  if (q.includes('edge runtime')) {
    return `// Lightweight geo/auth checks:
export const runtime = 'edge';
// For heavy Node APIs use: export const runtime = 'nodejs';`;
  }
  if (q.includes('observability')) {
    return `const t0 = Date.now();
try {
  // handler logic
} finally {
  console.log(JSON.stringify({ route: '/api/orders', ms: Date.now() - t0 }));
}`;
  }
  if (q.includes('migrate from pages router')) {
    return `// Keep both during migration:
// pages/legacy.tsx (old)
// app/new/page.tsx (new)
// Move route-by-route and retire pages/* gradually.`;
  }
  if (q.includes('multi-tenant')) {
    return `// middleware.ts
export function middleware(req: Request) {
  const host = new URL(req.url).host;
  const tenant = host.split('.')[0];
  return new Response(null, { headers: { 'x-tenant': tenant } });
}`;
  }
  if (q.includes('seo correctness')) {
    return `export async function generateMetadata() {
  return {
    title: 'Product',
    description: 'SEO-safe server-rendered metadata',
  };
}`;
  }
  if (q.includes('engineering standards')) {
    return `// package.json scripts
{
  "scripts": { "lint": "next lint", "typecheck": "tsc --noEmit", "test": "vitest run" }
}`;
  }
  if (q.includes('rollout strategy')) {
    return `if (process.env.NEXT_PUBLIC_NEW_CHECKOUT === '1') {
  return <NewCheckout />;
}
return <LegacyCheckout />;`;
  }
  if (q.includes('data ownership between bff')) {
    return `// BFF route handler
export async function GET() {
  const [user, orders] = await Promise.all([usersSvc.me(), ordersSvc.list()]);
  return Response.json({ user, orders }); // composed view model
}`;
  }
  if (q.includes('cache poisoning')) {
    return `await fetch('/api/profile', {
  cache: 'no-store', // personalized
});
// keep shared cache only for public, anonymous content`;
  }
  if (q.includes('multi-region next.js')) {
    return `// region-aware runtime choice
export const runtime = 'edge';
// route through global edge, read from nearest replica when possible`;
  }
  if (q.includes('control hydration cost')) {
    return `// keep chart client-only; fetch/prepare data on server
export default async function Page() {
  const data = await getData();
  return <ChartClient data={data} />;
}`;
  }
  return `export default function Page() {
  return <main>Next.js page</main>;
}`;
}

function reactExample(question) {
  const q = question.toLowerCase();
  if (q.includes('useeffect')) {
    return `useEffect(() => {
  const id = setInterval(load, 1000);
  return () => clearInterval(id);
}, [load]);`;
  }
  if (q.includes('usememo') || q.includes('usecallback')) {
    return `const visible = useMemo(() => items.filter(i => i.active), [items]);
const onSave = useCallback(() => save(id), [id]);`;
  }
  if (q.includes('keys')) {
    return `{todos.map((t) => <TodoRow key={t.id} todo={t} />)}`;
  }
  if (q.includes('scalable react architecture')) {
    return `// feature-first boundaries
src/
  features/billing/{ui,api,state}
  features/auth/{ui,api,state}
  shared/{ui,lib}`;
  }
  if (q.includes('client state, server state, and url state')) {
    return `const [panelOpen, setPanelOpen] = useState(false); // client state
const { data } = useQuery({ queryKey: ['orders'], queryFn: fetchOrders }); // server state
router.push(\`?tab=\${tab}\`); // URL state`;
  }
  if (q.includes('server components vs client components')) {
    return `// Server component
export default async function Page() {
  const product = await getProduct();
  return <BuyButton productId={product.id} />; // client component
}`;
  }
  if (q.includes('design system')) {
    return `type ButtonProps = { variant: 'primary' | 'ghost'; size: 'sm' | 'md' | 'lg' };
export function Button({ variant, size, ...rest }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button data-variant={variant} data-size={size} {...rest} />;
}`;
  }
  if (q.includes('useinsertioneffect') || q.includes('usesyncexternalstore')) {
    return `const snapshot = useSyncExternalStore(store.subscribe, store.getSnapshot);
useInsertionEffect(() => injectCriticalCss(theme), [theme]);`;
  }
  if (q.includes('use transition') || q.includes('usetransition') || q.includes('usedeferredvalue')) {
    return `const [isPending, startTransition] = useTransition();
const deferred = useDeferredValue(query);
startTransition(() => setQuery(next));
const results = useMemo(() => filter(items, deferred), [items, deferred]);`;
  }
  return `function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`;
}

function nodeExample(question) {
  const q = question.toLowerCase();
  if (q.includes('event loop')) {
    return `setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('microtask'));`;
  }
  if (q.includes('nexttick')) {
    return `process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise microtask'));
setImmediate(() => console.log('setImmediate'));
// Typical order: nextTick -> promise -> setImmediate`;
  }
  if (q.includes('streams')) {
    return `import { createReadStream } from 'node:fs';
createReadStream('large.csv').pipe(process.stdout);`;
  }
  if (q.includes('validation')) {
    return `import { z } from 'zod';
const Body = z.object({ email: z.string().email() });
app.post('/users', (req, res) => res.json(Body.parse(req.body)));`;
  }
  return `app.get('/items/:id', async (req, res, next) => {
  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }
});`;
}

function nestExample(question) {
  const q = question.toLowerCase();
  if (q.includes('dependency injection')) {
    return `@Injectable()
class UsersService {}

@Controller('users')
class UsersController {
  constructor(private readonly usersService: UsersService) {}
}`;
  }
  if (q.includes('dto') || q.includes('validation')) {
    return `class CreateUserDto {
  @IsEmail() email!: string;
  @MinLength(8) password!: string;
}`;
  }
  if (q.includes('guard')) {
    return `@UseGuards(AuthGuard('jwt'))
@Get('me')
me(@Req() req: any) {
  return req.user;
}`;
  }
  return `@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}`;
}

function exampleFor(tech, question) {
  if (tech === 'react') return reactExample(question);
  if (tech === 'next') return nextExample(question);
  if (tech === 'node') return nodeExample(question);
  if (tech === 'nest') return nestExample(question);
  if (tech === 'security') return securityExample(question);
  if (tech === 'css') return cssExample(question);
  return awsExample(question);
}

function awsExample(question) {
  const q = question.toLowerCase();
  if (q.includes('lambda vs ec2')) {
    return `// Lambda: handler called per request
export const handler = async () => ({ statusCode: 200, body: 'hello from lambda' });

// EC2: long-running Node server
app.listen(3000, () => console.log('running on EC2 instance'));`;
  }
  if (q.includes('api gateway') && q.includes('lambda')) {
    return `// Example Lambda handler behind API Gateway HTTP API
export const handler = async (event) => {
  const name = event.queryStringParameters?.name ?? 'world';
  return { statusCode: 200, body: JSON.stringify({ message: \`hello \${name}\` }) };
};`;
  }
  if (q.includes('step functions')) {
    return `// Fragment of Step Functions state machine (Amazon States Language)
{
  "Comment": "Simple two-step flow",
  "StartAt": "Validate",
  "States": {
    "Validate": { "Type": "Task", "Resource": "arn:aws:lambda:REGION:ACCT:function:validate", "Next": "Process" },
    "Process": { "Type": "Task", "Resource": "arn:aws:lambda:REGION:ACCT:function:process", "End": true }
  }
}`;
  }
  if (q.includes('sqs') || q.includes('sns')) {
    return `// Lambda subscribed to SQS queue
export const handler = async (event) => {
  for (const record of event.Records) {
    const payload = JSON.parse(record.body);
    // handle message
  }
};`;
  }
  return `// Basic Lambda handler
export const handler = async () => {
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};`;
}

function securityExample(question) {
  const q = question.toLowerCase();
  if (q.includes('xss')) {
    return `// React auto-escapes strings in JSX
const userInput = "<img src=x onerror=alert(1) />";
return <p>{userInput}</p>; // rendered as text, not HTML

// If HTML is required, sanitize first (DOMPurify)
// const clean = DOMPurify.sanitize(dirtyHtml);`;
  }
  if (q.includes('csrf')) {
    return `// Backend CSRF token check (express-style)
app.post('/transfer', csrfMiddleware, (req, res) => {
  // token validated by middleware
  res.sendStatus(204);
});

// Cookie settings
// Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax`;
  }
  if (q.includes('credentials') || q.includes('cookie')) {
    return `// Prefer HttpOnly Secure cookies for session tokens
res.cookie('session', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
});`;
  }
  if (q.includes('injection') || q.includes('sql')) {
    return `// Parameterized query (no string concatenation)
await db.query('SELECT * FROM users WHERE email = $1', [email]);`;
  }
  if (q.includes('validation')) {
    return `import { z } from 'zod';
const Body = z.object({ email: z.string().email(), age: z.number().int().min(18) });
app.post('/users', (req, res) => res.json(Body.parse(req.body)));`;
  }
  if (q.includes('rate limiting') || q.includes('brute-force')) {
    return `import rateLimit from 'express-rate-limit';
app.use('/auth/login', rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));`;
  }
  if (q.includes('cors')) {
    return `app.use(cors({
  origin: ['https://app.example.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));`;
  }
  if (q.includes('password hashing')) {
    return `import bcrypt from 'bcryptjs';
const hash = await bcrypt.hash(password, 12);
const ok = await bcrypt.compare(password, hash);`;
  }
  if (q.includes('https')) {
    return `// Enforce HTTPS at reverse proxy / gateway
// Add Strict-Transport-Security header (HSTS)
res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');`;
  }
  if (q.includes('secret')) {
    return `// Load from secret manager/env, never hardcode
const dbPassword = process.env.DB_PASSWORD;
if (!dbPassword) throw new Error('Missing DB_PASSWORD');`;
  }
  return `// Security headers baseline
import helmet from 'helmet';
app.use(helmet());`;
}

function cssExample(question) {
  const q = question.toLowerCase();
  if (q.includes('flexbox')) {
    return `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}`;
  }
  if (q.includes('grid')) {
    return `.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1rem;
}`;
  }
  if (q.includes('responsive')) {
    return `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`;
  }
  if (q.includes('specificity')) {
    return `.btn { color: #111; }
.btn-primary { color: #fff; background: #2563eb; }`;
  }
  if (q.includes('container query')) {
    return `.shell { container-type: inline-size; }
@container (min-width: 42rem) {
  .card { grid-template-columns: 1fr 1fr; }
}`;
  }
  return `.button:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}`;
}

async function processFile(filePath) {
  const fullPath = path.join(repoRoot, filePath);
  const text = await readFile(fullPath, 'utf8');
  const questionMatch = text.match(/export const question = "([\s\S]*?)" as const;/);
  const levelMatch = text.match(/export const level = '(junior|middle|senior)' as const;/);
  if (!questionMatch || !levelMatch) return;

  const question = questionMatch[1];
  const level = levelMatch[1];
  const tech = inferTech(`/${filePath}`);
  const answer = answerFor(tech, level, question);
  const example = exampleFor(tech, question);

  const updated = text
    .replace(/export function answer\(\): string \{[\s\S]*?\n\}/, `export function answer(): string {\n  return ${JSON.stringify(answer)};\n}`)
    .replace(
      /export function shortExample\(\): string \{[\s\S]*?\n\}/,
      `export function shortExample(): string {\n  return ${JSON.stringify(example)};\n}`
    );

  await writeFile(fullPath, updated, 'utf8');
}

async function walkAndProcess() {
  for (const root of roots) {
    for (const level of levels) {
      const dir = path.join(repoRoot, root, level);
      let files = [];
      try {
        const { readdir } = await import('node:fs/promises');
        files = await readdir(dir);
      } catch {
        continue;
      }
      for (const file of files) {
        if (!file.endsWith('.ts')) continue;
        await processFile(path.join(root, level, file));
      }
    }
  }
  console.log('Updated answer/example content in all question files.');
}

walkAndProcess().catch((err) => {
  console.error(err);
  process.exit(1);
});
