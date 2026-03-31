export const technology = 'aws' as const;
export const level = 'senior' as const;
export const question = "How do you control and forecast AWS costs for a fast-growing serverless platform?" as const;

export function answer(): string {
  return "For \"How do you control and forecast AWS costs for a fast-growing serverless platform\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
