export const technology = 'node' as const;
export const level = 'middle' as const;
export const question = "Difference between process.nextTick, Promise microtasks, and setImmediate." as const;

export function answer(): string {
  return "`process.nextTick` runs before microtask drain of next phase and can starve I/O if overused.";
}

export function shortExample(): string {
  return "process.nextTick(() => console.log('nextTick'));\nPromise.resolve().then(() => console.log('promise microtask'));\nsetImmediate(() => console.log('setImmediate'));\n// Typical order: nextTick -> promise -> setImmediate";
}
