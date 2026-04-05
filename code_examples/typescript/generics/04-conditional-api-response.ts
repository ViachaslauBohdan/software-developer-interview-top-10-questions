/**
 * Conditional type: output shape depends on whether `T` extends `string`.
 */

type ApiResponse<T> = T extends string ? { data: string } : { data: T };

function wrap<T>(x: T): ApiResponse<T> {
  return { data: x } as ApiResponse<T>;
}

console.log("wrap:", wrap("ok"), wrap(99));
