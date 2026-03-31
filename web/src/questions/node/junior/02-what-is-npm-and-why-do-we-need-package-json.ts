export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is npm and why do we need package.json?" as const;

export function answer(): string {
  return "npm is Node’s package manager; `package.json` defines scripts, dependencies, and project metadata.";
}

export function shortExample(): string {
  return "app.get('/items/:id', async (req, res, next) => {\n  try { res.json(await service.get(req.params.id)); } catch (e) { next(e); }\n});";
}
