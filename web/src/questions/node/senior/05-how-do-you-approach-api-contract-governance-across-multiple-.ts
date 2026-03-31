export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you approach API contract governance across multiple teams?" as const;

export function answer(): string {
  return "How do you approach API contract governance across multiple teams: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
