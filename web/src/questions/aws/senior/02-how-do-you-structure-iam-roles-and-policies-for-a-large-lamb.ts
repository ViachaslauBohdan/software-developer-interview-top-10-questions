export const technology = 'aws' as const;
export const level = 'senior' as const;
export const question = "How do you structure IAM roles and policies for a large Lambda-based system?" as const;

export function answer(): string {
  return "IAM roles grant temporary permissions to AWS resources without embedding static credentials.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
