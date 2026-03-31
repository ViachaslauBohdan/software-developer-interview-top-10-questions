export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What are callbacks and why can they become hard to manage?" as const;

export function answer(): string {
  return "Callbacks are function arguments run later; nesting many can hurt readability and error handling.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
