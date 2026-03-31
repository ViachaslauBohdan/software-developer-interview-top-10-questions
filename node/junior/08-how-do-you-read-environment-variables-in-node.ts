export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do you read environment variables in Node?" as const;

export function answer(): string {
  return "Read env vars from `process.env`; validate required values at startup and never hardcode secrets.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
