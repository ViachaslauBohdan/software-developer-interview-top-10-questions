export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design observability for server actions, route handlers, and middleware?" as const;

export function answer(): string {
  return "Use structured logs with correlation IDs across middleware, route handlers, and server actions, then aggregate in centralized tracing/metrics.";
}

export function shortExample(): string {
  return "const t0 = Date.now();\ntry {\n  // route handler / action logic\n} finally {\n  console.log(JSON.stringify({ traceId, route: '/api/orders', ms: Date.now() - t0 }));\n}";
}
