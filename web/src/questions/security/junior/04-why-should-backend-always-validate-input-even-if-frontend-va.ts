export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why should backend always validate input even if frontend validates?" as const;

export function answer(): string {
  return "Client validation improves UX only; backend validation is mandatory because clients are untrusted.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
