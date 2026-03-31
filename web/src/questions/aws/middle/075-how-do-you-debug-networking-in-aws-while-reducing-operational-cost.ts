export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you debug networking in AWS while reducing operational cost?" as const;
export const tags = ["aws","middle","networking"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you debug networking in AWS while reducing operational cost\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
