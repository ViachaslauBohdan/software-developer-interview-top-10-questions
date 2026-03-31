import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const baseDir = path.join(repoRoot, 'web/src/questions');
const levels = ['junior', 'middle', 'senior'];

const curated = {
  react: {
    junior: [
      'What is JSX and why does React use it?',
      'What is the difference between props and state?',
      'How does state update batching work in modern React?',
      'What causes a component to re-render?',
      'How do keys affect list rendering behavior?',
      'What is the practical use of useEffect?',
      'How do controlled and uncontrolled inputs differ?',
      'How do you share state between sibling components?',
      'How do you handle loading and error states in UI?',
      'What are common beginner mistakes with hooks?'
    ],
    middle: [
      'How do you debug unnecessary re-renders in a React app?',
      'When should you use useMemo and useCallback?',
      'How do you structure reusable custom hooks safely?',
      'How do you design scalable form handling in React?',
      'How do you manage server state vs client state?',
      'How do you avoid stale closures in hooks?',
      'How do you profile and improve rendering performance?',
      'How do you test async React UI behavior correctly?',
      'How do you implement robust error boundaries?',
      'How do you prevent regression in large React codebases?'
    ],
    senior: [
      'How do you design frontend architecture for a large React product?',
      'How do you define boundaries between feature modules?',
      'How do you choose between Context, Redux Toolkit, and Zustand?',
      'How do you control rendering cost at scale?',
      'How do you introduce Suspense incrementally in production?',
      'How do you enforce component API consistency across teams?',
      'How do you balance abstraction and delivery speed?',
      'How do you build frontend observability for React apps?',
      'How do you run safe migrations in long-lived React codebases?',
      'How do you mentor engineers on React internals and architecture?'
    ]
  },
  next: {
    junior: [
      'What problem does Next.js solve compared to plain React?',
      'What are Server Components vs Client Components?',
      'How does file-based routing work in App Router?',
      'How do layouts work in Next.js App Router?',
      'How do route handlers differ from traditional API routes?',
      'How does next/image improve performance?',
      'What does use client actually change?',
      'How do dynamic route segments and params work?',
      'How do not-found.tsx and error.tsx work?',
      'How do you fetch data in a basic Next.js page?'
    ],
    middle: [
      'When should you choose SSR, SSG, or ISR?',
      'How do caching and revalidation work in Next.js?',
      'How do you debug hydration mismatch issues?',
      'How do you protect routes with middleware?',
      'How do server actions work and where can they fail?',
      'How do you handle optimistic UI with server actions?',
      'How do parallel and intercepting routes solve real UX problems?',
      'How do you optimize Core Web Vitals in Next.js?',
      'How do you structure features in a growing Next.js repo?',
      'How do you avoid cache bugs with personalized responses?'
    ],
    senior: [
      'How do you design a high-traffic Next.js architecture?',
      'How do you set server/client boundaries for low JS cost?',
      'How do you design cache strategy for correctness and speed?',
      'How do you architect authentication in App Router?',
      'How do you choose Edge runtime vs Node runtime by route?',
      'How do you build observability across middleware and actions?',
      'How do you migrate safely from Pages Router to App Router?',
      'How do you support multi-tenant Next.js deployments?',
      'How do you guarantee SEO correctness with dynamic data?',
      'How do you manage multi-region deployment and failover?'
    ]
  },
  node: {
    junior: [
      'What is Node.js and where is it a strong fit?',
      'What is the event loop in simple terms?',
      'How do async/await and Promises work together?',
      'What is the difference between require and import?',
      'How do you build a basic HTTP API in Node?',
      'How do you handle errors in async route handlers?',
      'How do environment variables work in Node apps?',
      'What is middleware in Express/Fastify?',
      'How do you validate incoming request payloads?',
      'What are common Node.js beginner mistakes?'
    ],
    middle: [
      'How do process.nextTick, microtasks, and macrotasks differ?',
      'How do you avoid blocking the event loop?',
      'When should you use streams in backend services?',
      'How do you design idempotent APIs?',
      'How do you implement consistent API error responses?',
      'How do you secure secrets and configuration in production?',
      'How do you test Node services (unit + integration)?',
      'How do you handle graceful shutdown correctly?',
      'How do you diagnose memory leaks in Node processes?',
      'How do you implement retries and timeouts safely?'
    ],
    senior: [
      'How do you design fault-tolerant Node.js services?',
      'How do you identify and fix event-loop saturation in production?',
      'How do you choose between monolith and microservices?',
      'How do you run distributed job processing safely?',
      'How do you build observability for Node systems?',
      'How do you optimize P95/P99 latency under load?',
      'How do you enforce API contract governance across teams?',
      'How do you implement zero-downtime deployments?',
      'How do you handle consistency across distributed services?',
      'How do you set backend engineering standards at scale?'
    ]
  },
  nest: {
    junior: [
      'What is NestJS and why use it over plain Express?',
      'How do modules, controllers, and providers relate in Nest?',
      'How does dependency injection work in NestJS?',
      'How do DTOs and ValidationPipe work together?',
      'What are guards and when should you use them?',
      'How do interceptors differ from middleware and pipes?',
      'How do you handle exceptions in Nest applications?',
      'How do you implement a basic authenticated endpoint?',
      'How do you test a simple Nest service?',
      'What are common NestJS beginner pitfalls?'
    ],
    middle: [
      'How do you structure feature modules in a growing Nest app?',
      'How do you design reusable providers across modules?',
      'How do you implement robust request validation?',
      'How do global pipes, filters, and interceptors affect behavior?',
      'How do you design consistent API responses in Nest?',
      'How do you add JWT authentication with Passport safely?',
      'How do you test controllers and services with mocks?',
      'How do you handle async errors and domain exceptions?',
      'How do you integrate caching in Nest services?',
      'How do you add observability (logs/metrics) in Nest?'
    ],
    senior: [
      'How do you architect a modular Nest monorepo for many teams?',
      'How do provider scopes impact performance in Nest?',
      'How do you implement advanced authorization (RBAC/ABAC)?',
      'How do you design Nest services for multi-tenant systems?',
      'How do you enforce architecture boundaries in large Nest codebases?',
      'How do you design reliable transaction and outbox patterns?',
      'How do you build platform modules with dynamic-module patterns?',
      'How do you migrate legacy Express services to Nest incrementally?',
      'How do you optimize Nest for cold starts and throughput?',
      'How do you run safe versioned API evolution in Nest?'
    ]
  },
  aws: {
    junior: [
      'What is AWS Lambda and when should you use it?',
      'What is the difference between Lambda and EC2?',
      'What does API Gateway do in serverless architecture?',
      'How does IAM role-based access work for Lambda?',
      'What are common Lambda trigger sources?',
      'How do CloudWatch logs help debug Lambda issues?',
      'What is a Lambda cold start?',
      'What is Step Functions and when do you need it?',
      'How do you deploy Lambda changes safely?',
      'What is sync vs async Lambda invocation?'
    ],
    middle: [
      'How do you choose Lambda vs ECS/Fargate for a workload?',
      'How do you design a secure API Gateway + Lambda API?',
      'How do you reduce Lambda cold start impact?',
      'How do you connect Lambda to a VPC correctly?',
      'How do you design idempotent Lambda handlers?',
      'How do you integrate SQS/SNS with Lambda safely?',
      'How do Step Functions improve workflow reliability?',
      'How do you monitor and debug production serverless systems?',
      'How do you control cost in serverless architectures?',
      'How do you design retries and dead-letter handling?'
    ],
    senior: [
      'How do you design multi-region serverless architecture on AWS?',
      'How do you manage least-privilege IAM at scale?',
      'How do you handle cross-account AWS integrations safely?',
      'How do you design safe deployment and rollback strategy?',
      'How do you build end-to-end observability for serverless systems?',
      'How do you enforce data consistency across event-driven workflows?',
      'How do you secure public APIs with WAF, CloudFront, and Cognito?',
      'How do you forecast and govern AWS spend as systems scale?',
      'How do you design disaster recovery for serverless platforms?',
      'How do you standardize cloud architecture across teams?'
    ]
  },
  security: {
    junior: [
      'What is authentication vs authorization?',
      'What is XSS and how does it happen?',
      'What is CSRF and when is it a risk?',
      'Why must backend always validate user input?',
      'Why do we hash passwords instead of encrypting them?',
      'What do HttpOnly and Secure cookies protect against?',
      'What does HTTPS protect and what does it not?',
      'What is CORS in simple terms?',
      'What is rate limiting and why is it important?',
      'What counts as a secret and where should it live?'
    ],
    middle: [
      'How do you prevent XSS in modern frontend apps?',
      'How do you defend cookie-based auth against CSRF?',
      'How do you design secure login and refresh-token flows?',
      'How do you prevent SQL/NoSQL injection in APIs?',
      'How do you implement robust input validation boundaries?',
      'How do you secure file uploads against malicious payloads?',
      'How do you implement practical brute-force protection?',
      'How do you manage secrets safely across environments?',
      'What common CORS misconfigurations create vulnerabilities?',
      'How do you design secure session invalidation and logout?'
    ],
    senior: [
      'How do you design end-to-end security architecture for full-stack systems?',
      'How do you implement defense-in-depth in application platforms?',
      'How do you enforce least privilege in multi-tenant architectures?',
      'How do you design incident detection and response workflows?',
      'How do you secure service-to-service communication in microservices?',
      'How do you manage key and certificate rotation at scale?',
      'How do you reduce software supply-chain risk in CI/CD?',
      'How do you build auditable security logging without data leakage?',
      'How do you integrate threat modeling into delivery workflows?',
      'How do you balance strict security with developer velocity?'
    ]
  },
  css: {
    junior: [
      'What is the CSS cascade and why does it matter?',
      'How does CSS specificity work in practice?',
      'When should you use Flexbox vs Grid?',
      'How do you build responsive layouts safely?',
      'What are common beginner mistakes with CSS selectors?',
      'How do rem/em/px units differ and when to use each?',
      'How do positioning modes (static/relative/absolute/fixed) differ?',
      'How do z-index and stacking contexts work?',
      'How do you create accessible focus styles?',
      'How do CSS variables help maintainability?'
    ],
    middle: [
      'How do you architect reusable CSS for large components?',
      'How do you prevent CSS leakage and style collisions?',
      'How do container queries change responsive strategy?',
      'How do you optimize CSS for rendering performance?',
      'How do you manage design tokens in real projects?',
      'How do you debug hard-to-trace layout bugs quickly?',
      'How do you design dark mode and theming systems?',
      'How do you avoid specificity wars in large codebases?',
      'How do you implement motion while respecting reduced-motion users?',
      'How do you keep CSS readable as the product grows?'
    ],
    senior: [
      'How do you define CSS architecture standards across teams?',
      'How do you scale design-token systems across products?',
      'How do you enforce accessibility and contrast compliance in CSS?',
      'How do you design performant CSS for high-traffic applications?',
      'How do you govern style-system evolution without breaking teams?',
      'How do you migrate legacy CSS to modern architecture safely?',
      'How do you measure and control CSS bundle/perf budgets?',
      'How do you align CSS architecture with design and frontend engineering?',
      'How do you build resilient theming for multi-brand products?',
      'How do you reduce long-term CSS maintenance cost at scale?'
    ]
  }
};

function buildTags(technology, level, question) {
  const q = question.toLowerCase();
  const tags = [technology, level, 'top-common'];
  if (q.includes('performance')) tags.push('performance');
  if (q.includes('security') || q.includes('auth')) tags.push('security');
  if (q.includes('observability')) tags.push('observability');
  if (q.includes('architecture')) tags.push('architecture');
  return [...new Set(tags)];
}

async function curateLevel(technology, level) {
  const levelDir = path.join(baseDir, technology, level);
  const allFiles = (await readdir(levelDir)).filter((file) => file.endsWith('.ts')).sort();
  const topTen = allFiles.slice(0, 10);
  const questions = curated[technology][level];

  for (let i = 0; i < topTen.length; i += 1) {
    const filePath = path.join(levelDir, topTen[i]);
    const source = await readFile(filePath, 'utf8');
    const updated = source
      .replace(/export const question = "([\s\S]*?)" as const;/, `export const question = ${JSON.stringify(questions[i])} as const;`)
      .replace(/export const tags = \[[\s\S]*?\] as const;/, `export const tags = ${JSON.stringify(buildTags(technology, level, questions[i]))} as const;`)
      .replace(/export const trending = (true|false) as const;/, 'export const trending = true as const;');
    await writeFile(filePath, updated, 'utf8');
  }
}

async function main() {
  for (const technology of Object.keys(curated)) {
    for (const level of levels) {
      await curateLevel(technology, level);
    }
  }
  console.log('Curated top-10 questions per technology and level.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
