/**
 * Primitive `unknown`: you must narrow before you can use it.
 */
export {};

function stringify(x: unknown): string {
  if (typeof x === "string") return x;
  if (typeof x === "number") return x.toString();
  return "other";
}

console.log(stringify("hi"), stringify(123), stringify(true));

