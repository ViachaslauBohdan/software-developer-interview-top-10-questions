export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do environment variables work in Node apps?" as const;
export const tags = ["node","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Read env vars from `process.env`; validate required values at startup and never hardcode secrets.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
