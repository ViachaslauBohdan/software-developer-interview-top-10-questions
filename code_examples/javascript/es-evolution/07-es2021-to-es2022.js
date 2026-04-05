// ES2021: logical assignment + numeric separators + Promise.any
let retries = 0;
// ||= assigns the right side only when the left is "falsy" (0, "", null, undefined, NaN, false).
// Here retries is 0, so it becomes 3. Same idea as: retries = retries || 3
retries ||= 3;
// Numeric separators (_) are allowed in numeric literals for readability only; value is still 1000000.
const budget = 1_000_000;

// Promise.any: resolves with the first fulfilled promise; rejects only if every input rejects.
const fastestSuccess = Promise.any([
  Promise.reject(new Error("primary failed")),
  Promise.resolve("secondary ok"),
]);

// ES2022: Array.prototype.at + class fields
class Cart {
  // Class field: instance property declared on the class body (no constructor boilerplate).
  items = ["apple", "banana", "orange"];
  getLast() {
    // .at(index) reads by index; negative counts from the end (-1 === last element).
    // Safer/clearer than items[items.length - 1] for "last item".
    return this.items.at(-1);
  }
}

async function run() {
  const cart = new Cart();
  console.log({ retries, budget, last: cart.getLast(), service: await fastestSuccess });
}

run().catch((e) => console.error(e.message));
