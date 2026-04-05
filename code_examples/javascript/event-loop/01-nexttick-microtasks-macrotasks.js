/**
 * Interview: In what order do these run?
 *
 * Node model (simplified):
 * 1) Current synchronous JavaScript runs to completion.
 * 2) `process.nextTick` queue — drained repeatedly until empty (can starve I/O if abused).
 * 3) Microtask queue — Promises, `queueMicrotask`, `async` continuations after `await`.
 * 4) Event loop phases (timers, pending, poll, check, close, etc.) — `setTimeout` vs `setImmediate`
 *    depends on *where* you schedule them (see file 02).
 */

console.log("A: sync — runs first (top-level script)");

process.nextTick(() => {
  console.log("B: nextTick — runs after sync, before any microtasks from this turn");
});

Promise.resolve().then(() => {
  console.log("C: promise microtask — after all nextTicks scheduled for this turn are done");
});

queueMicrotask(() => {
  console.log("D: queueMicrotask — same queue as Promise.then (order vs other microtasks = schedule order)");
});

setTimeout(() => {
  console.log("E: setTimeout(0) — macrotask (timers phase), after microtasks and nextTicks");
}, 0);

setImmediate(() => {
  console.log("F: setImmediate — macrotask (check phase); vs setTimeout(0) on the main script: order is NOT guaranteed");
});

console.log("G: sync — still before any async callbacks above");

/**
 * Expected order (typical):
 * A, G, B, C, D, then E and F in some order (E before F is common but not guaranteed from main script).
 *
 * Why B before C?
 * Node runs the entire nextTick queue before the microtask queue in this pipeline step.
 */
