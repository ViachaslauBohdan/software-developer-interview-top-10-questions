export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you design incident detection, response, and recovery workflows?" as const;

export function answer(): string {
  return "For \"How do you design incident detection, response, and recovery workflows\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
