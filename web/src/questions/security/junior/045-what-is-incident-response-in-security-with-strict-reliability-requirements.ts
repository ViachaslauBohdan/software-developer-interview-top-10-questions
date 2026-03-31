export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is incident response in SECURITY with strict reliability requirements?" as const;
export const tags = ["security","junior","incident-response"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is incident response in SECURITY with strict reliability requirements\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
