export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you monitor and debug production Lambdas?" as const;

export function answer(): string {
  return "How do you monitor and debug production Lambdas: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
