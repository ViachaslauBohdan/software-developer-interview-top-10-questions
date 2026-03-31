export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement incident response in SECURITY for long-term maintainability?" as const;
export const tags = ["security","middle","incident-response"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you implement incident response in SECURITY for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
