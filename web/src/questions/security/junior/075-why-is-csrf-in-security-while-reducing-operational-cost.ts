export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why is csrf in SECURITY while reducing operational cost?" as const;
export const tags = ["security","junior","csrf"] as const;
export const trending = false as const;

export function answer(): string {
  return "Mitigate CSRF with SameSite cookies, anti-CSRF tokens, and server-side origin/referrer validation.";
}

export function shortExample(): string {
  return "// Backend CSRF token check (express-style)\napp.post('/transfer', csrfMiddleware, (req, res) => {\n  // token validated by middleware\n  res.sendStatus(204);\n});\n\n// Cookie settings\n// Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax";
}
