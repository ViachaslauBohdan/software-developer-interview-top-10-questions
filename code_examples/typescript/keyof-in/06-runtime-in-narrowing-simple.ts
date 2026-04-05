/**
 * Primitive runtime `in`: `"prop" in obj` narrows union members.
 */
export {};

type A = { kind: "a"; a: number };
type B = { kind: "b"; b: string };
type Shape = A | B;

function get(x: Shape): number | string {
  if ("a" in x) return x.a; // `x` is `A` here
  return x.b; // otherwise `x` is `B`
}

console.log(get({ kind: "a", a: 1 }));
console.log(get({ kind: "b", b: "s" }));

