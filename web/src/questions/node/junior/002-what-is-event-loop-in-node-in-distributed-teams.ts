export const technology = 'node' as const;
export const level = 'junior' as const;
export const question = "What is the event loop in simple terms?" as const;
export const tags = ["node","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Node uses an event loop for async I/O; promise microtasks run before next macrotask phase callbacks.";
}

export function shortExample(): string {
  return "setTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('microtask'));";
}
