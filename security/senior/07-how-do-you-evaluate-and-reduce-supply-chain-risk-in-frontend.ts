export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you evaluate and reduce supply-chain risk in frontend and backend dependencies?" as const;

export function answer(): string {
  return "For \"How do you evaluate and reduce supply-chain risk in frontend and backend dependencies\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
