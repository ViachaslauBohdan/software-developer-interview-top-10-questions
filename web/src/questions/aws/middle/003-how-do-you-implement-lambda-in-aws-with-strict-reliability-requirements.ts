export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you reduce Lambda cold start impact?" as const;
export const tags = ["aws","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Reduce cold start impact with smaller bundles, runtime tuning, and provisioned concurrency for latency-sensitive paths.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
