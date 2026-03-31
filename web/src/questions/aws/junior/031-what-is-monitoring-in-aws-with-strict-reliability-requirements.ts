export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is monitoring in AWS with strict reliability requirements?" as const;
export const tags = ["aws","junior","monitoring"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is monitoring in AWS with strict reliability requirements\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
