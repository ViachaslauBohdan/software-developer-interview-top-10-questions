/**
 * Primitive generic: parameterized tuple type.
 */
export {};

type Pair<T> = [T, T];

const p1: Pair<number> = [1, 2];
const p2: Pair<string> = ["a", "b"];

console.log(p1, p2);

