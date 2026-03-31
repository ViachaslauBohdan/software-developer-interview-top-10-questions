export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you enforce least privilege in multi-tenant architectures?" as const;
export const tags = ["security","senior","top-common","architecture"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you enforce least privilege in multi-tenant architectures\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
