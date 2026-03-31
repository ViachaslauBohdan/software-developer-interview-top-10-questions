export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is rate limiting and why is it important?" as const;
export const tags = ["security","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Rate limiting caps request volume per identity/IP to reduce abuse, brute-force, and accidental overload.";
}

export function shortExample(): string {
  return "import rateLimit from 'express-rate-limit';\napp.use('/auth/login', rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));";
}
