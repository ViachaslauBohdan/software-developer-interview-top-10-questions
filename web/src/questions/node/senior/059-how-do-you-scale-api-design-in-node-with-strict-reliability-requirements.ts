export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you scale api design in NODE with strict reliability requirements?" as const;
export const tags = ["node","senior","api-design"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you scale api design in NODE with strict reliability requirements\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
