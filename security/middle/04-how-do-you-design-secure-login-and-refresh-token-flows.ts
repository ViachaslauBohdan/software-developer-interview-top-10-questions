export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you design secure login and refresh-token flows?" as const;

export function answer(): string {
  return "How do you design secure login and refresh-token flows: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
