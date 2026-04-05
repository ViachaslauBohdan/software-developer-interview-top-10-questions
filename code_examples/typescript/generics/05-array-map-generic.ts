/**
 * Primitive generic: infer `T` from an array element type.
 */
export {};

function mapArray<T, U>(arr: T[], fn: (t: T) => U): U[] {
  return arr.map(fn);
}

const nums = mapArray([1, 2, 3], (n) => n.toString());
console.log(nums);

