/**
 * Interview: What prints when nextTick and Promise are nested inside each other?
 *
 * After synchronous code: Node drains `process.nextTick` until empty, then runs microtasks.
 * A nextTick can schedule more nextTicks; those run before any microtask runs.
 */

process.nextTick(() => {
  console.log("1: outer nextTick");
  Promise.resolve().then(() => console.log("4: promise scheduled from inside nextTick 1"));
  process.nextTick(() => console.log("2: inner nextTick — runs before microtasks from this batch"));
});

Promise.resolve().then(() => {
  console.log("3: top-level promise — after the nextTick queue for this checkpoint");
  process.nextTick(() => console.log("5: nextTick scheduled from promise — runs before any *new* microtasks"));
});

/**
 * Typical order: 1, 2, 3, 4, 5
 * Microtask 3 runs first; the nextTick in 3 runs before microtask 4 because nextTick is checked again.
 */
