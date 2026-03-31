export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How would you protect a route using middleware?" as const;

export function answer(): string {
  return "Middleware executes before route resolution for auth, redirects, and edge checks but should stay lightweight.";
}

export function shortExample(): string {
  return "import { NextResponse } from 'next/server';\nexport function middleware(req: Request) {\n  const ok = req.headers.get('cookie')?.includes('session=');\n  return ok ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.url));\n}";
}
