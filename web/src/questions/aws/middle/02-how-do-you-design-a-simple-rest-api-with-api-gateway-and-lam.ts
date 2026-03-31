export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you design a simple REST API with API Gateway and Lambda?" as const;

export function answer(): string {
  return "API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.";
}

export function shortExample(): string {
  return "// Example Lambda handler behind API Gateway HTTP API\nexport const handler = async (event) => {\n  const name = event.queryStringParameters?.name ?? 'world';\n  return { statusCode: 200, body: JSON.stringify({ message: `hello ${name}` }) };\n};";
}
