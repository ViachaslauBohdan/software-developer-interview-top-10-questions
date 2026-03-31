export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you build observability across middleware and actions?" as const;
export const tags = ["next","senior","top-common","observability"] as const;
export const trending = true as const;

export function answer(): string {
  return "Middleware executes before route resolution for auth, redirects, and edge checks but should stay lightweight.";
}

export function shortExample(): string {
  return "import { NextResponse } from 'next/server';\nexport function middleware(req: Request) {\n  const ok = req.headers.get('cookie')?.includes('session=');\n  return ok ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.url));\n}";
}
