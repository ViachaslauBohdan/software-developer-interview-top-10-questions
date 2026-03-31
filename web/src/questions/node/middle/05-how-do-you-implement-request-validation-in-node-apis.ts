export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "How do you implement request validation in Node APIs?" as const;

export function answer(): string {
  return "How do you implement request validation in Node APIs: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "import { z } from 'zod';\nconst Body = z.object({ email: z.string().email() });\napp.post('/users', (req, res) => res.json(Body.parse(req.body)));";
}
