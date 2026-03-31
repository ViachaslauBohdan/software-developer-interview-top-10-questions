export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you design a fault-tolerant Node.js backend for high load?" as const;

export function answer(): string {
  return "How do you design a fault-tolerant Node.js backend for high load: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
