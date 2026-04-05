/**
 * Interview: Why is recursive `process.nextTick` dangerous?
 *
 * The nextTick queue runs before the event loop moves to timers, I/O, etc.
 * If you keep scheduling `process.nextTick` forever (or for a long CPU-heavy chain),
 * you can starve the event loop: timers, I/O completions, and `setImmediate` may be delayed.
 *
 * Prefer `setImmediate` for "run soon but let I/O run" or break work across turns.
 */

let ticks = 0;
function noisyNextTick() {
  ticks += 1;
  console.log(`nextTick iteration ${ticks}`);
  if (ticks < 3) {
    process.nextTick(noisyNextTick);
  }
}

process.nextTick(noisyNextTick);

setImmediate(() => console.log("setImmediate: runs after nextTick chain drains"));
setTimeout(() => console.log("setTimeout(0): also after nextTick chain"), 0);

/**
 * Expected: nextTick 1,2,3 first; then macrotasks (`setTimeout` / `setImmediate`) — relative order of those two is not guaranteed.
 */
