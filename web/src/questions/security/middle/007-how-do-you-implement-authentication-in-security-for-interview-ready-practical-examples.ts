export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement practical brute-force protection?" as const;
export const tags = ["security","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you implement practical brute-force protection\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "import rateLimit from 'express-rate-limit';\napp.use('/auth/login', rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));";
}
