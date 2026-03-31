export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you prevent SQL/NoSQL injection in APIs?" as const;
export const tags = ["security","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Prevent injections via parameterized queries, strict schema validation, and never concatenating untrusted input.";
}

export function shortExample(): string {
  return "// Parameterized query (no string concatenation)\nawait db.query('SELECT * FROM users WHERE email = $1', [email]);";
}
