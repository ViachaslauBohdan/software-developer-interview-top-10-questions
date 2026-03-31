export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you scale streams in NODE with strong security constraints?" as const;
export const tags = ["node","senior","streams","security"] as const;
export const trending = false as const;

export function answer(): string {
  return "Streams process large payloads incrementally, lowering memory pressure and enabling backpressure-aware pipelines.";
}

export function shortExample(): string {
  return "import { createReadStream } from 'node:fs';\ncreateReadStream('large.csv').pipe(process.stdout);";
}
