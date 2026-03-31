export const technology = 'aws' as const;
export const level = 'senior' as const;
export const question = "How do you design multi-region serverless architecture on AWS?" as const;
export const tags = ["aws","senior","top-common","architecture"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you design multi-region serverless architecture on AWS\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
