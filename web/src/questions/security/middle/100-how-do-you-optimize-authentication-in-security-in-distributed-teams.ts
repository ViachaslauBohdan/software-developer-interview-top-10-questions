export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you optimize authentication in SECURITY in distributed teams?" as const;
export const tags = ["security","middle","authentication"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you optimize authentication in SECURITY in distributed teams\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
