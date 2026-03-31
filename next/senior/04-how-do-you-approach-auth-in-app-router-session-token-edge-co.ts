export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you approach auth in App Router (session, token, edge constraints)?" as const;

export function answer(): string {
  return "Centralize auth checks in middleware/route handlers and use secure session cookies with server-side validation.";
}

export function shortExample(): string {
  return "// app/api/me/route.ts\nexport async function GET(req: Request) {\n  const hasSession = req.headers.get('cookie')?.includes('session=');\n  return hasSession ? Response.json({ ok: true }) : new Response('Unauthorized', { status: 401 });\n}";
}
