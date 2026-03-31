export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you implement robust input validation boundaries?" as const;
export const tags = ["security","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you implement robust input validation boundaries\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "import { z } from 'zod';\nconst Body = z.object({ email: z.string().email(), age: z.number().int().min(18) });\napp.post('/users', (req, res) => res.json(Body.parse(req.body)));";
}
