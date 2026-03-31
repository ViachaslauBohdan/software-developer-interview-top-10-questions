export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you evaluate Edge runtime vs Node runtime per route?" as const;

export function answer(): string {
  return "Use Edge for low-latency lightweight logic; use Node runtime for heavy libs, DB drivers, or native dependencies.";
}

export function shortExample(): string {
  return "// Lightweight geo/auth checks:\nexport const runtime = 'edge';\n// For heavy Node APIs use: export const runtime = 'nodejs';";
}
