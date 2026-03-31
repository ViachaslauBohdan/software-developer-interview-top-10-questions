export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do you validate incoming request payloads?" as const;
export const tags = ["node","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you validate incoming request payloads\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
