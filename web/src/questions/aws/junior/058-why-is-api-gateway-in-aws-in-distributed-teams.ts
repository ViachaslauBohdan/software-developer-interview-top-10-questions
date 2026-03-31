export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "Why is api gateway in AWS in distributed teams?" as const;
export const tags = ["aws","junior","api-gateway"] as const;
export const trending = false as const;

export function answer(): string {
  return "API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
