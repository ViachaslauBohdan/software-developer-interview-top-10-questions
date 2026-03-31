export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "When should you use streams in backend services?" as const;
export const tags = ["node","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Streams process large payloads incrementally, lowering memory pressure and enabling backpressure-aware pipelines.";
}

export function shortExample(): string {
  return "import { createReadStream } from 'node:fs';\ncreateReadStream('large.csv').pipe(process.stdout);";
}
