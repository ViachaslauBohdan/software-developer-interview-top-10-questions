export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement rate limiting and brute-force protection?" as const;

export function answer(): string {
  return "Rate limiting caps request volume per identity/IP to reduce abuse, brute-force, and accidental overload.";
}

export function shortExample(): string {
  return "import rateLimit from 'express-rate-limit';\napp.use('/auth/login', rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));";
}
