export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why is supply chain in SECURITY for interview-ready practical examples?" as const;
export const tags = ["security","junior","supply-chain"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"Why is supply chain in SECURITY for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
