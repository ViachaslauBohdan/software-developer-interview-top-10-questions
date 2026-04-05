/**
 * Interview: Does `async` / `await` run before or after a nearby `.then()`?
 *
 * Both `await` continuations and `Promise.prototype.then` use the microtask queue.
 * Order is whichever callback was scheduled first.
 */

async function demo() {
  console.log("async: synchronous part runs immediately when demo() is called");
  await Promise.resolve();
  console.log("async: code after await — microtask (scheduled when await was hit)");
}

console.log("sync start");
demo();
Promise.resolve().then(() => console.log("bare .then() microtask"));
console.log("sync end");

/**
 * Typical order:
 * sync start
 * async: synchronous part...
 * sync end
 * async: code after await  (demo() was invoked first, so this microtask was queued before .then)
 * bare .then() microtask
 */
