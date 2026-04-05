/**
 * Multiple type parameters relate types. Arrays infer element type from values.
 */

// 1) Two type parameters — tuple in, tuple out
function mapPair<A, B>(pair: [A, B], fnA: (a: A) => A, fnB: (b: B) => B): [A, B] {
  return [fnA(pair[0]), fnB(pair[1])];
}

const doubled = mapPair(
  [1, "x"],
  (a) => a * 2,
  (b) => b + b,
);

// 2) Infer `T` from a readonly array
function firstElement<T>(arr: readonly T[]): T | undefined {
  return arr[0];
}

const head = firstElement([10, 20]);

console.log("mapPair:", doubled, "firstElement:", head);
