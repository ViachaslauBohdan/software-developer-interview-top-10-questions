export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do route handlers differ from traditional API routes?" as const;
export const tags = ["next","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Route handlers are App Router native, support Web `Request/Response`, and align with segment/runtime/caching controls.";
}

export function shortExample(): string {
  return "// app/api/users/route.ts\nexport async function GET() {\n  return Response.json([{ id: 1, name: 'Ann' }]);\n}\nexport async function POST(req: Request) {\n  const body = await req.json();\n  return Response.json({ created: true, body }, { status: 201 });\n}";
}
