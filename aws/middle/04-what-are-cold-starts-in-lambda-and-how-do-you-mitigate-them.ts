export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "What are cold starts in Lambda and how do you mitigate them?" as const;

export function answer(): string {
  return "Reduce cold start impact with smaller bundles, runtime tuning, and provisioned concurrency for latency-sensitive paths.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
