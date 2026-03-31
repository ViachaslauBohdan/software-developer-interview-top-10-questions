export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you implement api gateway in AWS with strong security constraints?" as const;
export const tags = ["aws","middle","api-gateway","security"] as const;
export const trending = true as const;

export function answer(): string {
  return "API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
