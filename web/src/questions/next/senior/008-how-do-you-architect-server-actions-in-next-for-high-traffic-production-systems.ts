export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you support multi-tenant Next.js deployments?" as const;
export const tags = ["next","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Resolve tenant from host/path, isolate data access by tenant ID, and enforce tenant-aware authorization on every request.";
}

export function shortExample(): string {
  return "// middleware.ts\nexport function middleware(req: Request) {\n  const host = new URL(req.url).host;\n  const tenant = host.split('.')[0];\n  return new Response(null, { headers: { 'x-tenant': tenant } });\n}";
}
