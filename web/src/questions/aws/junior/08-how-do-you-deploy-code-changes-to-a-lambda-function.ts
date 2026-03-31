export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "How do you deploy code changes to a Lambda function?" as const;

export function answer(): string {
  return "Deploy with CLI/CDK/SAM pipelines, publish versions, and route traffic via aliases.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
