export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "How do CloudWatch logs help debug Lambda issues?" as const;
export const tags = ["aws","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "CloudWatch Logs stores Lambda execution logs for debugging, metrics extraction, and alerting.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
