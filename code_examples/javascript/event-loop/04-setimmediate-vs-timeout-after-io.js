/**
 * Interview: Who wins — setTimeout(0) or setImmediate — when both are scheduled from the main script?
 * Answer: order is not guaranteed (different phases: timers vs check).
 *
 * When both are scheduled from an I/O callback (e.g. after `fs.readFile`), `setImmediate` runs first:
 * I/O runs in the poll phase; check (`setImmediate`) runs right after poll, timers run on the next loop.
 */

const fs = require("fs");

console.log("--- Main script: timeout vs immediate (order not guaranteed) ---");
setTimeout(() => console.log("main: timeout"), 0);
setImmediate(() => console.log("main: immediate"));

fs.readFile(__filename, () => {
  console.log("--- Inside I/O callback: immediate before timeout ---");
  setTimeout(() => console.log("I/O: timeout"));
  setImmediate(() => console.log("I/O: immediate"));
});
