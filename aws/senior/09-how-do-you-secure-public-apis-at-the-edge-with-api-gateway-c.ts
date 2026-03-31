export const technology = 'aws' as const;
export const level = 'senior' as const;
export const question = "How do you secure public APIs at the edge with API Gateway, CloudFront, WAF, and Cognito?" as const;

export function answer(): string {
  return "API Gateway exposes managed HTTP APIs with auth, throttling, routing, and observability in front of integrations.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
