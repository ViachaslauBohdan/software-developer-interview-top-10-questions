/**
 * Primitive `any`: bypasses type checking (escape hatch).
 * This compiles, but may fail at runtime.
 */
export {};

const x: any = "hi";

try {
  console.log(x.toFixed(2));
} catch (e) {
  console.log("runtime failure from any:", (e as Error).message);
}

