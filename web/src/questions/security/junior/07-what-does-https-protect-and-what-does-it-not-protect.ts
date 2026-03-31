export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What does HTTPS protect and what does it not protect?" as const;

export function answer(): string {
  return "HTTPS encrypts transport and integrity in transit, but not application logic bugs or stolen credentials endpoints.";
}

export function shortExample(): string {
  return "// Enforce HTTPS at reverse proxy / gateway\n// Add Strict-Transport-Security header (HSTS)\nres.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');";
}
