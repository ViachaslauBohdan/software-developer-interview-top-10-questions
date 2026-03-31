export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "When and why would you use streams?" as const;

export function answer(): string {
  return "Streams process large payloads incrementally, lowering memory pressure and enabling backpressure-aware pipelines.";
}

export function shortExample(): string {
  return "import { createReadStream } from 'node:fs';\ncreateReadStream('large.csv').pipe(process.stdout);";
}
