# Node.js Answers With Short Code Examples

## Middle

1) Event loop explained?
```js
setTimeout(() => console.log('timer'), 0); // macrotask
Promise.resolve().then(() => console.log('microtask')); // runs first
```

2) `nextTick` vs Promise vs `setImmediate`?
```js
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
setImmediate(() => console.log('immediate'));
```

3) Async errors in Express/Fastify?
```js
app.get('/x', async (req, res, next) => {
  try { res.json(await svc.load()); } catch (e) { next(e); }
});
```

4) Why streams?
```js
import { createReadStream } from 'node:fs';
createReadStream('big.csv').pipe(process.stdout); // no full file in RAM
```

5) Request validation?
```js
import { z } from 'zod';
const Body = z.object({ email: z.string().email() });
app.post('/users', (req, res) => res.json(Body.parse(req.body)));
```

6) Idempotent endpoint?
```js
app.put('/users/:id', async (req, res) => {
  await db.user.update({ where: { id: req.params.id }, data: req.body });
  res.sendStatus(204); // same request -> same final state
});
```

7) Avoid blocking event loop?
```js
import { Worker } from 'node:worker_threads';
new Worker('./hash-worker.js', { workerData: bigPayload });
```

8) Secrets handling?
```js
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error('DATABASE_URL required');
```

9) Consistent error responses?
```js
app.use((err, req, res, _next) => {
  res.status(err.status || 500).json({ code: 'INTERNAL_ERROR', message: err.message });
});
```

10) Testing strategy?
```js
import request from 'supertest';
await request(app).get('/health').expect(200);
```

## Senior

1) Fault-tolerant backend?
```js
// timeout + retry skeleton
const ctrl = AbortSignal.timeout(2000);
const res = await fetch(url, { signal: ctrl });
```

2) Detect/fix event loop saturation?
```js
import { monitorEventLoopDelay } from 'node:perf_hooks';
const h = monitorEventLoopDelay(); h.enable();
setInterval(() => console.log('p99 lag ms', h.percentile(99) / 1e6), 5000);
```

3) Monolith vs microservices?
```txt
Start modular monolith; split service only when scaling/deploy boundaries are proven.
```

4) Job processing with retries/dedup?
```js
// pseudo: queue.add(name, payload, { jobId: uniqueKey, attempts: 5, backoff: { type: 'exponential', delay: 1000 } })
```

5) API contract governance?
```yaml
# openapi.yaml in CI
paths:
  /users:
    get: { responses: { "200": { description: OK } } }
```

6) End-to-end observability?
```js
console.log(JSON.stringify({ level: 'info', traceId, route: req.path, ms }));
```

7) Zero-downtime + graceful shutdown?
```js
process.on('SIGTERM', async () => {
  server.close(() => process.exit(0)); // stop accepting new requests
});
```

8) Data consistency across services?
```txt
Use outbox pattern + idempotent consumers for at-least-once delivery.
```

9) Optimize P95/P99?
```js
const t = performance.now();
await handler();
histogram.record(performance.now() - t);
```

10) Enforce standards?
```json
{
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  }
}
```
