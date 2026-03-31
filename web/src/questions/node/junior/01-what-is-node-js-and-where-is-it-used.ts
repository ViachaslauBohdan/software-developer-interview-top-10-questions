export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is Node.js and where is it used?" as const;

export function answer(): string {
  return "Node.js is a JavaScript runtime on V8 for building servers, CLIs, and event-driven backend services.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
