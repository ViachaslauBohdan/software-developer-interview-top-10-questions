export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "How do you handle graceful shutdown correctly?" as const;
export const tags = ["node","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Stop accepting new traffic, complete in-flight requests, close resources, then exit with health checks updated.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
