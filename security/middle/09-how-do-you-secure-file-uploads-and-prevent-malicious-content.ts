export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you secure file uploads and prevent malicious content risks?" as const;

export function answer(): string {
  return "For \"How do you secure file uploads and prevent malicious content risks\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Security headers baseline\nimport helmet from 'helmet';\napp.use(helmet());";
}
