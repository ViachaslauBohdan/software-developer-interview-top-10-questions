export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "Why is resilience in AWS in distributed teams?" as const;
export const tags = ["aws","junior","resilience"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"Why is resilience in AWS in distributed teams\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
