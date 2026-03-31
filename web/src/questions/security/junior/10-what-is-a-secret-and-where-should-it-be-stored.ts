export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is a secret and where should it be stored?" as const;

export function answer(): string {
  return "A secret is sensitive credential material (keys/tokens/passwords) that must live in secure secret stores.";
}

export function shortExample(): string {
  return "// Load from secret manager/env, never hardcode\nconst dbPassword = process.env.DB_PASSWORD;\nif (!dbPassword) throw new Error('Missing DB_PASSWORD');";
}
