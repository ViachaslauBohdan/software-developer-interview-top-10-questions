/**
 * `any` — disables type checking for that value. Use rarely (interop, migration).
 */

function useAny(x: any): void {
  x.foo.bar.baz(); // compiler allows — may throw at runtime
  const n: number = x; // allowed (unsound)
}

useAny({});
