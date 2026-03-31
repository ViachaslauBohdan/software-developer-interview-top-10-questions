export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why must backend always validate user input?" as const;
export const tags = ["security","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"Why must backend always validate user input\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
