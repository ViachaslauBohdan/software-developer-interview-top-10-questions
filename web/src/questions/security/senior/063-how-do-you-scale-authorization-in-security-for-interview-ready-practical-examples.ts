export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you scale authorization in SECURITY for interview-ready practical examples?" as const;
export const tags = ["security","senior","authorization"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you scale authorization in SECURITY for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
