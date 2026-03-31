export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you design a secure API Gateway + Lambda API?" as const;
export const tags = ["aws","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.";
}

export function shortExample(): string {
  return "// Example Lambda handler behind API Gateway HTTP API\nexport const handler = async (event) => {\n  const name = event.queryStringParameters?.name ?? 'world';\n  return { statusCode: 200, body: JSON.stringify({ message: `hello ${name}` }) };\n};";
}
