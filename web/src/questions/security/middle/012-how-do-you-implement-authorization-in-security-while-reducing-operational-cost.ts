export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement authorization in SECURITY while reducing operational cost?" as const;
export const tags = ["security","middle","authorization"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you implement authorization in SECURITY while reducing operational cost\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
