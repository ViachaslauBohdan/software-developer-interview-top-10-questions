export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design multi-region Next.js deployment strategy for low latency?" as const;

export function answer(): string {
  return "Use region-local execution and data replicas with latency-aware routing and clear consistency model.";
}

export function shortExample(): string {
  return "// region-aware runtime choice\nexport const runtime = 'edge';\n// route through global edge, read from nearest replica when possible";
}
