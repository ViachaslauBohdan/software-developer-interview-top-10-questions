export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do async/await and Promises work together?" as const;
export const tags = ["node","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "`async/await` makes promise-based flows readable and centralizes error handling with `try/catch`.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
