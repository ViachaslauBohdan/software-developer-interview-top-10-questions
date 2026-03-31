export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you implement defense-in-depth for authentication and authorization?" as const;

export function answer(): string {
  return "How do you implement defense-in-depth for authentication and authorization: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
