export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you choose Edge runtime vs Node runtime by route?" as const;
export const tags = ["next","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use Edge for low-latency lightweight logic; use Node runtime for heavy libs, DB drivers, or native dependencies.";
}

export function shortExample(): string {
  return "// Lightweight geo/auth checks:\nexport const runtime = 'edge';\n// For heavy Node APIs use: export const runtime = 'nodejs';";
}
