export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is streams in NODE for long-term maintainability?" as const;
export const tags = ["node","junior","streams"] as const;
export const trending = false as const;

export function answer(): string {
  return "Streams process large payloads incrementally, lowering memory pressure and enabling backpressure-aware pipelines.";
}

export function shortExample(): string {
  return "import { createReadStream } from 'node:fs';\ncreateReadStream('large.csv').pipe(process.stdout);";
}
