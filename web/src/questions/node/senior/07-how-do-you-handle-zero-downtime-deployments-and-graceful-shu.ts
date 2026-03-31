export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you handle zero-downtime deployments and graceful shutdown?" as const;

export function answer(): string {
  return "Stop accepting new traffic, complete in-flight requests, close resources, then exit with health checks updated.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
