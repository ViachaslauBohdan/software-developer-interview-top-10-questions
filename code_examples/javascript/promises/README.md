# JavaScript Promises - Primitive to Modern

This folder is a practical progression from foundational Promise patterns to modern production-style async workflows.

## Learning path

1. `01-primitive-promise.js`
- Create a Promise manually with `new Promise`.
- Resolve/reject basics.

2. `02-then-catch-finally.js`
- Chain async steps with `.then()`.
- Handle errors with `.catch()`.
- Cleanup with `.finally()`.

3. `03-promise-combinators.js`
- `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`.
- Know failure semantics of each.

4. `04-async-await.js`
- Equivalent modern syntax with `async/await`.
- Cleaner try/catch flows.

5. `05-timeout-retry-cancel.js`
- Add timeout guard.
- Add retry with exponential backoff.
- Cancel in-flight work using `AbortController`.

6. `06-concurrency-control.js`
- Run tasks with limited parallelism.
- Real-world pattern for queue workers / rate-limited APIs.

7. `07-summary-all-promise-types.js`
- Single consolidated walkthrough of all major Promise styles.
- Useful for quick interview revision.

## Most up-to-date interview angle

Modern Promise usage is not just syntax (`await`) - it is control:
- timeout and cancellation
- bounded concurrency
- predictable error strategy (retry/abort/fail fast)

Use this order in interviews: basic Promise -> async/await -> combinators -> operational patterns.
