export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you handle multi-tenant or white-label architecture in Next.js?" as const;

export function answer(): string {
  return "Resolve tenant from host/path, isolate data access by tenant ID, and enforce tenant-aware authorization on every request.";
}

export function shortExample(): string {
  return "// middleware.ts\nexport function middleware(req: Request) {\n  const host = new URL(req.url).host;\n  const tenant = host.split('.')[0];\n  return new Response(null, { headers: { 'x-tenant': tenant } });\n}";
}
