export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you manage key rotation, secret rotation, and certificate lifecycle?" as const;

export function answer(): string {
  return "How do you manage key rotation, secret rotation, and certificate lifecycle: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Load from secret manager/env, never hardcode\nconst dbPassword = process.env.DB_PASSWORD;\nif (!dbPassword) throw new Error('Missing DB_PASSWORD');";
}
