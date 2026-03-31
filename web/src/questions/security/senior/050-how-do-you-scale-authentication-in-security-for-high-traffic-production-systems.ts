export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you scale authentication in SECURITY for high-traffic production systems?" as const;
export const tags = ["security","senior","authentication"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you scale authentication in SECURITY for high-traffic production systems\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
