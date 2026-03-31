export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "How does IAM role-based access work for Lambda?" as const;
export const tags = ["aws","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "IAM roles grant temporary permissions to AWS resources without embedding static credentials.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
