export const technology = 'security' as const;
export const level = 'senior' as const;
export const question = "How do you secure service-to-service communication in microservices?" as const;
export const tags = ["security","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you secure service-to-service communication in microservices\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
