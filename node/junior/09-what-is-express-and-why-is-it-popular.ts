export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is Express and why is it popular?" as const;

export function answer(): string {
  return "Express is a minimal web framework for routing, middleware, and HTTP APIs on Node.js.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
