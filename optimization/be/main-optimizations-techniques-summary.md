# BE Optimization: Main Techniques Summary

## 🔌 Connection Management
- Use a database `connection pool` to avoid expensive reconnects.
- Tune pool size (`min`/`max`) based on service concurrency and DB limits.
- Set sane timeouts for connection acquisition and queries.
- Monitor pool saturation and queue wait time.

## 🧠 Caching Strategy
- Use `Redis` for hot data, sessions, rate limits, and short-lived computed results.
- Apply `cache-aside` as a default pattern (`read-through` where supported).
- Define clear TTLs and invalidation rules.
- Prevent cache stampede with request coalescing/locks for popular keys.

## 📨 Queues and Async Processing
- Offload heavy/background work to queues (`BullMQ`, `RabbitMQ`, `SQS`, `Kafka`).
- Use retries with exponential backoff and dead-letter queues (`DLQ`).
- Keep consumers idempotent to handle duplicate deliveries safely.
- Track queue lag, failure rate, and processing latency.

## 🗄️ Database Optimization
- Add the right indexes for frequent filters, joins, and sort patterns.
- Prefer `composite indexes` that match real query order.
- Avoid over-indexing (slower writes, bigger storage).
- Use `EXPLAIN`/query plans to validate index usage.
- Batch writes/reads where possible and avoid N+1 queries.

## 📚 Main Index Types (Practical)
- `B-Tree` — default index for equality/range/order queries.
- `Hash` — fast equality lookups (engine-specific limitations apply).
- `GIN`/`GiST` — JSONB, arrays, full-text, and advanced search use cases.
- `Partial index` — indexes only filtered subsets to reduce index size.
- `Unique index` — enforces uniqueness and improves lookup paths.

## ⚙️ API and Runtime Performance
- Add pagination/cursor-based fetch for large datasets.
- Use streaming/chunked responses for large payloads.
- Apply compression (`gzip`/`brotli`) and keep payloads minimal.
- Reuse expensive objects/clients and avoid blocking calls in hot paths.

## 🌍 Delivery, Scaling, and Resilience
- Put services behind a load balancer and scale horizontally where needed.
- Use autoscaling with CPU, memory, and queue-depth signals.
- Apply circuit breakers, bulkheads, and timeouts to downstream calls.
- Use rate limiting and backpressure to protect core dependencies.

## 📊 Monitoring and Profiling
- Metrics: latency (`p50/p95/p99`), throughput, error rate, saturation.
- Logging: structured logs with correlation/request IDs.
- Tracing: distributed tracing (`OpenTelemetry`, `Jaeger`, `Datadog APM`).
- Profiling/APM: `Prometheus` + `Grafana`, `New Relic`, `Datadog`, `Sentry`.

## 🚀 Quick Summary (Ultra Short)
- Use connection pooling correctly.
- Cache hot paths with `Redis`.
- Move heavy tasks to queues.
- Optimize DB queries with proper indexes.
- Monitor latency/errors/saturation continuously.
