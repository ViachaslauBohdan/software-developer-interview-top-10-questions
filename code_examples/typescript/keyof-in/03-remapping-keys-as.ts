/**
 * Key remapping (TS 4.1+): `[K in keyof T as NewName]` renames keys.
 */

type User = {
  id: number;
  name: string;
  active: boolean;
};

type Getterify<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getterify<User>;

const getters: UserGetters = {
  getId: () => 1,
  getName: () => "Ada",
  getActive: () => true,
};

console.log("getters:", getters.getName());

export {};
