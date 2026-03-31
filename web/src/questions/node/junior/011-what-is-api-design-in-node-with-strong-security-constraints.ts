export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is api design in NODE with strong security constraints?" as const;
export const tags = ["node","junior","api-design","security"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"What is api design in NODE with strong security constraints\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
