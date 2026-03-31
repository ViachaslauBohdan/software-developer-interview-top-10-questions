export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is a Lambda cold start?" as const;

export function answer(): string {
  return "Cold start is initialization latency when a new execution environment boots before handling a request.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
