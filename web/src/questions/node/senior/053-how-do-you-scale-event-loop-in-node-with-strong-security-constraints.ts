export const technology = 'node' as const;
export const level = 'senior' as const;
export const question = "How do you scale event loop in NODE with strong security constraints?" as const;
export const tags = ["node","senior","event-loop","security"] as const;
export const trending = false as const;

export function answer(): string {
  return "Node uses an event loop for async I/O; promise microtasks run before next macrotask phase callbacks.";
}

export function shortExample(): string {
  return "setTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('microtask'));";
}
