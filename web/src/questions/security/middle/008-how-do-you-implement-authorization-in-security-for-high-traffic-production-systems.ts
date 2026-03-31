export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you manage secrets safely across environments?" as const;
export const tags = ["security","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use secret managers, runtime injection, scoped access, and rotation policies with audit trails.";
}

export function shortExample(): string {
  return "// Load from secret manager/env, never hardcode\nconst dbPassword = process.env.DB_PASSWORD;\nif (!dbPassword) throw new Error('Missing DB_PASSWORD');";
}
