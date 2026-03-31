export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is the difference between Lambda and EC2?" as const;
export const tags = ["aws","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"What is the difference between Lambda and EC2\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
