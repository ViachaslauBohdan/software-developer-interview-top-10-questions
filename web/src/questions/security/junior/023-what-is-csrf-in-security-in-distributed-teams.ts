export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is csrf in SECURITY in distributed teams?" as const;
export const tags = ["security","junior","csrf"] as const;
export const trending = false as const;

export function answer(): string {
  return "CSRF tricks authenticated browsers into unintended requests; mitigate with SameSite cookies and anti-CSRF tokens.";
}

export function shortExample(): string {
  return "// Backend CSRF token check (express-style)\napp.post('/transfer', csrfMiddleware, (req, res) => {\n  // token validated by middleware\n  res.sendStatus(204);\n});\n\n// Cookie settings\n// Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax";
}
