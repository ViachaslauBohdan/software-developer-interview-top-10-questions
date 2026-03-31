export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you architect csrf in SECURITY for long-term maintainability?" as const;
export const tags = ["security","senior","csrf"] as const;
export const trending = false as const;

export function answer(): string {
  return "Mitigate CSRF with SameSite cookies, anti-CSRF tokens, and server-side origin/referrer validation.";
}

export function shortExample(): string {
  return "// Backend CSRF token check (express-style)\napp.post('/transfer', csrfMiddleware, (req, res) => {\n  // token validated by middleware\n  res.sendStatus(204);\n});\n\n// Cookie settings\n// Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax";
}
