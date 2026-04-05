/**
 * `unknown` — top type for “we don’t know yet”; narrow before use.
 */

function useUnknown(x: unknown): string {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  if (x && typeof x === "object" && "msg" in x && typeof (x as { msg: unknown }).msg === "string") {
    return (x as { msg: string }).msg;
  }
  return String(x);
}

console.log(useUnknown("hi"), useUnknown({ msg: "ok" }));
