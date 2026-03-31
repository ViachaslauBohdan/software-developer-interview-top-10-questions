import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

const data = {
  react: {
    junior: [
      'What is JSX and why do we use it in React?',
      'What is the difference between props and state?',
      'How do you handle click events in React?',
      'What is conditional rendering in React?',
      'How do you render a list of items in React?',
      'What is a controlled input component?',
      'What does useState return?',
      'What is component composition in simple words?',
      'How do you pass data from parent to child?',
      'Why should components be small and focused?'
    ],
    middle: [
      'What causes a React component to re-render?',
      'Explain how useEffect dependencies work and common mistakes.',
      'Difference between useMemo and useCallback with real examples.',
      'When should you use useReducer instead of useState?',
      'Why are keys important in lists and what problems come from index keys?',
      'Controlled vs uncontrolled form components: trade-offs and use-cases.',
      'How do you structure reusable custom hooks safely?',
      'How would you debug a component that re-renders too often?',
      'What is prop drilling and what are practical alternatives?',
      'How do you test async UI behavior in React Testing Library?'
    ],
    senior: [
      'How do you design a scalable React architecture for a large product?',
      'How do you decide boundaries between client state, server state, and URL state?',
      'Explain trade-offs of global state tools (Context, Redux Toolkit, Zustand, Jotai).',
      'How do you profile and optimize render performance at scale?',
      'How do you organize feature ownership and component APIs across teams?',
      'How do you introduce Suspense and streaming gradually in an existing app?',
      'How do you design robust error boundaries and recovery UX?',
      'How do you prevent regressions in a fast-moving frontend codebase?',
      'What are your rules for abstraction to avoid over-engineering?',
      'How do you mentor middle engineers on React internals and architecture decisions?'
    ]
  },
  next: {
    junior: [
      'What is Next.js and how is it different from plain React?',
      'What is a page route in Next.js App Router?',
      'What is the purpose of Link in Next.js?',
      'How do you fetch data in a basic Next.js page?',
      'What is the difference between static and dynamic content?',
      'How do you create an API route handler in Next.js?',
      'Why is next/image preferred over img?',
      'What does use client mean?',
      'What are layout.tsx files used for?',
      'How do you navigate programmatically in Next.js?',
      'What are route groups in App Router and why are they useful?',
      'What are dynamic route segments and how do params work?',
      'What are not-found.tsx and error.tsx used for?',
      'How does prefetching work in Next.js links?',
      'What is the difference between metadata in layout and page files?'
    ],
    middle: [
      'Compare SSR, SSG, ISR with practical examples.',
      'What is the difference between Server and Client Components?',
      'How do loading.tsx and error.tsx work in App Router?',
      'Explain revalidation in Next.js and where it can fail.',
      'How would you protect a route using middleware?',
      'How do route handlers differ from traditional API routes?',
      'How do you optimize images and fonts in Next.js?',
      'How do you debug hydration mismatch errors?',
      'When should a page be dynamic vs static?',
      'How do you structure feature folders in a growing Next.js app?',
      'How do Server Actions work and what are common pitfalls?',
      'How do you handle optimistic UI updates with Server Actions?',
      'How do parallel routes work in App Router?',
      'How do intercepting routes work and when should you use them?',
      'How do you use cache tags and revalidateTag effectively?'
    ],
    senior: [
      'How do you design a high-traffic Next.js architecture with mixed rendering modes?',
      'How do you define server/client boundaries to minimize hydration and JS bundle size?',
      'How do you design caching and revalidation strategy for correctness + performance?',
      'How do you approach auth in App Router (session, token, edge constraints)?',
      'How do you evaluate Edge runtime vs Node runtime per route?',
      'How do you design observability for server actions, route handlers, and middleware?',
      'How do you migrate from Pages Router to App Router safely?',
      'How do you handle multi-tenant or white-label architecture in Next.js?',
      'How do you ensure SEO correctness with dynamic and personalized content?',
      'How do you set engineering standards for Next.js code quality at team scale?',
      'How do you design rollout strategy for Next.js breaking changes across multiple teams?',
      'How do you design data ownership between BFF route handlers and downstream services?',
      'How do you prevent cache poisoning and stale personalization bugs in Next.js?',
      'How do you design multi-region Next.js deployment strategy for low latency?',
      'How do you benchmark and control hydration cost at enterprise scale?'
    ]
  },
  node: {
    junior: [
      'What is Node.js and where is it used?',
      'What is npm and why do we need package.json?',
      'How do require and import differ in Node.js?',
      'How do you create a simple HTTP server in Node?',
      'What is the difference between synchronous and asynchronous code?',
      'What are callbacks and why can they become hard to manage?',
      'What does async/await solve?',
      'How do you read environment variables in Node?',
      'What is Express and why is it popular?',
      'How do you handle errors in an API endpoint?'
    ],
    middle: [
      'Explain the Node.js event loop with practical examples.',
      'Difference between process.nextTick, Promise microtasks, and setImmediate.',
      'How do you handle async errors in Express/Fastify apps?',
      'When and why would you use streams?',
      'How do you implement request validation in Node APIs?',
      'What makes an API endpoint idempotent?',
      'How do you avoid blocking the event loop?',
      'How do you secure environment variables and secrets?',
      'How do you design consistent error responses?',
      'How do you test Node services (unit + integration)?'
    ],
    senior: [
      'How do you design a fault-tolerant Node.js backend for high load?',
      'How do you identify and fix event loop saturation in production?',
      'How do you choose between monolith, modular monolith, and microservices?',
      'How do you design distributed job processing with retries and deduplication?',
      'How do you approach API contract governance across multiple teams?',
      'How do you build end-to-end observability in Node systems?',
      'How do you handle zero-downtime deployments and graceful shutdown?',
      'How do you design data consistency strategy across services?',
      'How do you benchmark and optimize P95/P99 latency?',
      'How do you enforce backend engineering standards and code quality?'
    ]
  },
  nest: {
    junior: [
      'What is NestJS and why use it over plain Express?',
      'What are Controller and Service in NestJS?',
      'What is a Module in NestJS?',
      'How does dependency injection help in Nest?',
      'How do you define a basic GET endpoint in Nest?',
      'What are DTOs in NestJS?',
      'How do you validate request body in Nest?',
      'What is a Guard in simple terms?',
      'How do you handle exceptions in Nest?',
      'How do you write a basic unit test for a service?'
    ],
    middle: [
      'Explain how dependency injection works in NestJS.',
      'What are modules in Nest and how should they be organized?',
      'Difference between middleware, guards, interceptors, and pipes.',
      'How do you implement request validation with DTOs?',
      'How do global pipes/filters/interceptors affect app behavior?',
      'How do you structure a feature module with controller + service + repository?',
      'How do you handle async errors and custom exceptions?',
      'How do you test a service with mocked dependencies?',
      'How do you add authentication using Passport/JWT in Nest?',
      'How do you make API responses consistent across endpoints?'
    ],
    senior: [
      'How do you design a modular NestJS architecture for many teams/features?',
      'How do you decide provider scopes and avoid request-scope performance issues?',
      'How do you implement advanced authorization (RBAC/ABAC/policies)?',
      'How do you design observability (logs, metrics, tracing) in Nest apps?',
      'How do you approach transactions and eventual consistency with Nest services?',
      'How do you design reusable dynamic modules for platform capabilities?',
      'How do you structure multi-tenant Nest backends safely?',
      'How do you optimize cold start and throughput in container/serverless setups?',
      'How do you migrate legacy Express codebase to Nest incrementally?',
      'How do you enforce architecture constraints and code standards in a Nest monorepo?'
    ]
  },
  aws: {
    junior: [
      'What is AWS Lambda and when would you use it?',
      'What is Amazon EC2 and how is it different from Lambda?',
      'What is Amazon API Gateway used for?',
      'What are the basic triggers that can invoke a Lambda function?',
      'What is an AWS IAM role and why is it important?',
      'What is Amazon CloudWatch Logs and how does it relate to Lambda?',
      'What is AWS Step Functions in simple words?',
      'How do you deploy code changes to a Lambda function?',
      'What is the difference between synchronous and asynchronous Lambda invocation?',
      'What is a Lambda cold start?'
    ],
    middle: [
      'When would you choose Lambda vs EC2 for a backend?',
      'How do you design a simple REST API with API Gateway and Lambda?',
      'How do you secure an API Gateway endpoint?',
      'What are cold starts in Lambda and how do you mitigate them?',
      'How do you connect a Lambda function to a VPC and why?',
      'How do you integrate SQS or SNS with Lambda?',
      'How do you use Step Functions to orchestrate multiple Lambdas?',
      'How do you monitor and debug production Lambdas?',
      'How do you design idempotent Lambdas for retries?',
      'How do you control costs for a serverless API?'
    ],
    senior: [
      'How do you design a multi-region, highly available serverless architecture?',
      'How do you structure IAM roles and policies for a large Lambda-based system?',
      'How do you design Step Functions workflows for complex business processes?',
      'How do you handle cross-account and cross-region integrations?',
      'How do you choose between Lambda, Fargate, and EC2 for compute?',
      'How do you approach observability and tracing across API Gateway, Lambda, and Step Functions?',
      'How do you design safe deployments and rollbacks for Lambda and API Gateway?',
      'How do you design for data consistency and exactly-once-like behavior with SQS, Lambda, and Step Functions?',
      'How do you secure public APIs at the edge with API Gateway, CloudFront, WAF, and Cognito?',
      'How do you control and forecast AWS costs for a fast-growing serverless platform?'
    ]
  },
  security: {
    junior: [
      'What is authentication vs authorization?',
      'What is XSS in frontend apps?',
      'What is CSRF and where does it happen?',
      'Why should backend always validate input even if frontend validates?',
      'What is password hashing and why not store plain passwords?',
      'Why are HttpOnly and Secure cookie flags important?',
      'What does HTTPS protect and what does it not protect?',
      'What is CORS in simple terms?',
      'What is rate limiting and why do APIs need it?',
      'What is a secret and where should it be stored?'
    ],
    middle: [
      'What is XSS and how do you prevent it in React apps?',
      'What is CSRF and how do cookie-based apps defend against it?',
      'How do you store auth credentials securely in frontend apps?',
      'How do you design secure login and refresh-token flows?',
      'How do you prevent SQL or NoSQL injection in backend services?',
      'How do you implement robust input validation on APIs?',
      'What CORS mistakes are common and how do you avoid them?',
      'How do you implement rate limiting and brute-force protection?',
      'How do you secure file uploads and prevent malicious content risks?',
      'How do you protect secrets and environment configuration in production?'
    ],
    senior: [
      'How do you design end-to-end security architecture for FE and BE systems?',
      'How do you implement defense-in-depth for authentication and authorization?',
      'How do you handle multi-tenant access control safely at scale?',
      'How do you design incident detection, response, and recovery workflows?',
      'How do you secure microservice-to-microservice communication?',
      'How do you manage key rotation, secret rotation, and certificate lifecycle?',
      'How do you evaluate and reduce supply-chain risk in frontend and backend dependencies?',
      'How do you design secure SDLC practices such as SAST, DAST, and threat modeling?',
      'How do you build auditable security logging without leaking sensitive data?',
      'How do you balance security controls with developer velocity and product UX?'
    ]
  }
};

function toFileName(index, question) {
  const clean = question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return `${String(index + 1).padStart(2, '0')}-${clean}.ts`;
}

function template(tech, level, question) {
  return `export const technology = '${tech}' as const;
export const level = '${level}' as const;
export const question = ${JSON.stringify(question)} as const;

export function answer(): string {
  return 'Draft your concise interview answer here.';
}

export function shortExample(): string {
  return \`// Short example for: ${question}
// Replace this with a real code snippet before practice.
\`;
}
`;
}

async function main() {
  for (const [tech, levels] of Object.entries(data)) {
    for (const [level, questions] of Object.entries(levels)) {
      const dir = path.join(root, tech, level);
      await mkdir(dir, { recursive: true });
      await Promise.all(
        questions.map((q, i) => {
          const filePath = path.join(dir, toFileName(i, q));
          return writeFile(filePath, template(tech, level, q), 'utf8');
        })
      );
    }
  }
  console.log('Generated question files for all technologies and levels.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
