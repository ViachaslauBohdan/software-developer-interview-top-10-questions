export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "How do require and import differ in Node.js?" as const;

export function answer(): string {
  return "`require` is CommonJS runtime loading, while `import` is ESM syntax with static analysis and tree-shaking support.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
