export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do you create a simple HTTP server in Node?" as const;

export function answer(): string {
  return "Use Node `http` module or frameworks like Express/Fastify to define routes and start listening on a port.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
