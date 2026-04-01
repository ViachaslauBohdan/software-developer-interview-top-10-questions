// ES2019: flat / flatMap, optional catch binding
const nested = [1, [2, [3]]];
const flattened = nested.flat(2);

const words = ["one", "two"];
const chars = words.flatMap((w) => w.split(""));

try {
  throw new Error("ignore details");
} catch {
  // optional catch binding
}

// ES2020: BigInt, optional chaining, nullish coalescing
const huge = 9007199254740993n;
const config = { api: { timeout: 0 } };
const timeout = config.api?.timeout ?? 1000; // keeps 0, unlike ||

console.log({ flattened, chars, huge: huge.toString(), timeout });
