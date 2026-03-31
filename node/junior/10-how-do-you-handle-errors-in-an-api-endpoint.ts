export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do you handle errors in an API endpoint?" as const;

export function answer(): string {
  return "Wrap async handlers, propagate to centralized error middleware, and return consistent safe error responses.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
