/**
 * Generics: reusable APIs where the caller (or inference) fixes `T`.
 */

// 1) Generic function — same input and output type
function identity<T>(value: T): T {
  return value;
}

const _n = identity(42);
const _s = identity("hi");

// 2) Generic interface — container of `T`
interface Box<T> {
  value: T;
}

const numBox: Box<number> = { value: 1 };
const strBox: Box<string> = { value: "a" };

console.log("identity:", identity(7), "Box:", numBox, strBox);
