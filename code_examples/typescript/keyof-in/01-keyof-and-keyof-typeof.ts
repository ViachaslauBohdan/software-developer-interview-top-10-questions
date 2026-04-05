/**
 * `keyof T` — union of property names. `keyof typeof x` — keys of a value’s type (great with `as const`).
 */

type User = {
  id: number;
  name: string;
  active: boolean;
};

// 1) keyof — read a property by key (`keyof User` is "id" | "name" | "active")
function readProp(obj: User, key: keyof User): User[typeof key] {
  return obj[key];
}

const u: User = { id: 1, name: "Ada", active: true };
console.log("keyof:", readProp(u, "name"));

// 2) keyof typeof — keys of a const object
const HttpStatus = { OK: 200, NotFound: 404 } as const;
type StatusKey = keyof typeof HttpStatus;

function isStatusKey(k: string): k is StatusKey {
  return k in HttpStatus;
}

console.log("keyof typeof:", isStatusKey("OK"), isStatusKey("Nope"));

export {};
