/**
 * Mapped types: `[K in keyof T]` builds a new object type by iterating keys.
 */

type User = {
  id: number;
  name: string;
  active: boolean;
};

// 1) Optional copy — every property optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = Optional<User>;

// 2) Readonly copy — same keys, readonly values
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

const _pu: PartialUser = { name: "Bob" };
const _ru: ReadonlyUser = { id: 2, name: "Bob", active: true };

console.log("mapped:", _pu, _ru);

export {};
