/**
 * `extends` constrains `T`. Default type parameters specialize when omitted.
 */

// 1) Constraint — `T` must have `.length`
function logLength<T extends { length: number }>(x: T): void {
  console.log(x.length);
}

logLength("abc");
logLength([1, 2, 3]);

// 2) Default type parameters
function createPair<T = string, U = number>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair1 = createPair("a", 1);
const pair2 = createPair<boolean, boolean>(true, false);

console.log("logLength ok", "createPair:", pair1, pair2);
