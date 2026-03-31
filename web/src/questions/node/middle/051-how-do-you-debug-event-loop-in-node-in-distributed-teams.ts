export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "How do you debug event loop in NODE in distributed teams?" as const;
export const tags = ["node","middle","event-loop"] as const;
export const trending = false as const;

export function answer(): string {
  return "Node uses an event loop for async I/O; promise microtasks run before next macrotask phase callbacks.";
}

export function shortExample(): string {
  return "setTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('microtask'));";
}
