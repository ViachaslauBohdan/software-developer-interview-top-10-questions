# Node.js event loop — scheduling priority (high → low)

Use this as a cheat sheet for interview “what runs first?” questions. Exact behavior of `setTimeout(0)` vs `setImmediate()` **from the main script** is not guaranteed; see `04-setimmediate-vs-timeout-after-io.js`.

## Order (priority)

1. Synchronous JavaScript (current stack)
2. `process.nextTick`
3. Microtasks — `Promise` / `queueMicrotask` / `async` continuation after `await`
4. Timers — `setTimeout`, `setInterval`
5. Pending I/O callbacks (when applicable)
6. Poll (I/O)
7. `setImmediate` (check phase)
8. Close callbacks (e.g. `socket.on('close')`)

`setImmediate` is **after** timers and typical I/O phases, not right after `nextTick` — microtasks (3) sit between `nextTick` and macrotasks.

## One turn after the current synchronous stack finishes

| Order | What runs | APIs / notes |
|------:|-----------|----------------|
| 1 | **Synchronous code** | Top-level code and call stack until it returns |
| 2 | **`process.nextTick` queue** | Drained until empty (new nextTicks run in the same drain) |
| 3 | **Microtask queue** | `Promise.then` / `catch` / `finally`, `queueMicrotask()`, continuations after `await` |
| 4 | **Event loop — timers phase** | `setTimeout`, `setInterval` (due callbacks) |
| 5 | **Pending I/O** | Some deferred operations |
| 6 | **Poll** | I/O (e.g. `fs`, network); can block for I/O |
| 7 | **Check** | `setImmediate()` |
| 8 | **Close** | e.g. socket `close` events |

Between steps 4–8, Node runs **one phase per loop iteration** (not all eight in one go); steps 2–3 run **between** each phase when the loop is about to continue.

## Short mnemonic (async only, same “checkpoint”)

1. `process.nextTick`
2. Microtasks (`Promise`, `queueMicrotask`, `async` after `await`)
3. Macrotasks via the loop: timers (`setTimeout` / `setInterval`) → … → `setImmediate` (check phase)

`setImmediate` is **not** directly after `nextTick`; **microtasks** run first, then later phases until the check phase runs `setImmediate`.

## Run the examples

```bash
cd code_examples/javascript/event-loop
node 01-nexttick-microtasks-macrotasks.js
```
