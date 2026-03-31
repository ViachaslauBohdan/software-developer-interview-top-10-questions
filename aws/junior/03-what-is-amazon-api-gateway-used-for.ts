export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is Amazon API Gateway used for?" as const;

export function answer(): string {
  return "API Gateway is a managed API front door for routing, auth, throttling, and monitoring.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
