export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do you create an API route handler in Next.js?" as const;

export function answer(): string {
  return "Create `app/api/<name>/route.ts` and export HTTP methods like `GET`/`POST` returning `Response`.";
}

export function shortExample(): string {
  return "// app/api/health/route.ts\nexport async function GET() {\n  return Response.json({ ok: true });\n}";
}
