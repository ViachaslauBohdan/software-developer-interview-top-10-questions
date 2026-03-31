export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is an AWS IAM role and why is it important?" as const;

export function answer(): string {
  return "IAM roles grant temporary permissions to AWS resources without embedding static credentials.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
