export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is the difference between synchronous and asynchronous code?" as const;

export function answer(): string {
  return "Synchronous code blocks execution; asynchronous code schedules work and keeps event loop responsive.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
