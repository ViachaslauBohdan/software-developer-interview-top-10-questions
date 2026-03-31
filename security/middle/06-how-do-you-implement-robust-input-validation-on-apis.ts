export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement robust input validation on APIs?" as const;

export function answer(): string {
  return "How do you implement robust input validation on APIs: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "import { z } from 'zod';\nconst Body = z.object({ email: z.string().email(), age: z.number().int().min(18) });\napp.post('/users', (req, res) => res.json(Body.parse(req.body)));";
}
