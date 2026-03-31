export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement secrets in SECURITY for long-term maintainability?" as const;
export const tags = ["security","middle","secrets"] as const;
export const trending = false as const;

export function answer(): string {
  return "Use secret managers, runtime injection, scoped access, and rotation policies with audit trails.";
}

export function shortExample(): string {
  return "// Load from secret manager/env, never hardcode\nconst dbPassword = process.env.DB_PASSWORD;\nif (!dbPassword) throw new Error('Missing DB_PASSWORD');";
}
