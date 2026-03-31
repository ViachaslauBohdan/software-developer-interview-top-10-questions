export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "Why is lambda in AWS for long-term maintainability?" as const;
export const tags = ["aws","junior","lambda"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"Why is lambda in AWS for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
