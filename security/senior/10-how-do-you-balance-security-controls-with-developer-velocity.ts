export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you balance security controls with developer velocity and product UX?" as const;

export function answer(): string {
  return "How do you balance security controls with developer velocity and product UX: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
