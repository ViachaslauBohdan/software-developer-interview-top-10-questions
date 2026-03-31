export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you secure file uploads and prevent malicious content risks?" as const;

export function answer(): string {
  return "How do you secure file uploads and prevent malicious content risks: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
