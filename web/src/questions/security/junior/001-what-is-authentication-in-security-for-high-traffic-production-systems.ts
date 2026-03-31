export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is authentication vs authorization?" as const;
export const tags = ["security","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Authentication verifies identity; authorization decides what that identity is allowed to access.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
