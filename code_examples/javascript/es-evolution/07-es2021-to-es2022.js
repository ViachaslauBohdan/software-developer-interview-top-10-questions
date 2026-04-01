// ES2021: logical assignment + numeric separators + Promise.any
let retries = 0;
retries ||= 3;
const budget = 1_000_000;

const fastestSuccess = Promise.any([
  Promise.reject(new Error("primary failed")),
  Promise.resolve("secondary ok"),
]);

// ES2022: Array.prototype.at + class fields
class Cart {
  items = ["apple", "banana", "orange"];
  getLast() {
    return this.items.at(-1);
  }
}

async function run() {
  const cart = new Cart();
  console.log({ retries, budget, last: cart.getLast(), service: await fastestSuccess });
}

run().catch((e) => console.error(e.message));
