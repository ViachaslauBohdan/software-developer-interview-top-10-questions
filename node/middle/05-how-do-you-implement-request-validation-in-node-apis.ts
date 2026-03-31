export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "How do you implement request validation in Node APIs?" as const;

export function answer(): string {
  return "For \"How do you implement request validation in Node APIs\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "import { z } from 'zod';\nconst Body = z.object({ email: z.string().email() });\napp.post('/users', (req, res) => res.json(Body.parse(req.body)));";
}
