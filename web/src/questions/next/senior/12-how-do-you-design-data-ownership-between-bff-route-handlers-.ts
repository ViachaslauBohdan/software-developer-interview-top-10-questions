export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design data ownership between BFF route handlers and downstream services?" as const;

export function answer(): string {
  return "Keep orchestration and response composition in BFF handlers, while domain rules and writes stay in downstream services.";
}

export function shortExample(): string {
  return "// app/api/dashboard/route.ts (BFF)\nexport async function GET() {\n  const [user, orders] = await Promise.all([usersSvc.me(), ordersSvc.list()]);\n  return Response.json({ user, orders }); // composed view model\n}";
}
