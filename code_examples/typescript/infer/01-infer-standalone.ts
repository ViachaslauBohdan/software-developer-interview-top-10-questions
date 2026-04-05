/**
 * `infer` — use inside `T extends ... ? ... : ...` to *name* a part of the shape.
 * TypeScript fills in that name when it matches `T` to the pattern.
 */

// "If T is a Promise of something, call that something U; else T stays as is."
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<number>; // number

// "If T is any function, name its return type R."
type GetReturn<T> = T extends (...args: unknown[]) => infer R ? R : never;

type C = GetReturn<() => boolean>; // boolean

// Values match the types above (helps the compiler check the examples).
const _a: A = "text";
const _b: B = 1;
const _c: C = false;
void [_a, _b, _c];
