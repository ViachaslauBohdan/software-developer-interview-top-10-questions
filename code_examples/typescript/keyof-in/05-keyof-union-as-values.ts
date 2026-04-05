/**
 * Primitive `keyof`: produces a union of property names.
 */
export {};

type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserKeys = keyof User; // "id" | "name" | "active"

const keys: UserKeys[] = ["id", "name"];
console.log(keys);

