# Promise Combinators Differences

## Quick comparison

| Method | Resolves when | Rejects when | Result shape | Best use case |
|---|---|---|---|---|
| `Promise.all` | All promises fulfill | Any one rejects (fail-fast) | `Array<value>` | All tasks are required |
| `Promise.allSettled` | All promises settle | Never rejects by combinator itself | `Array<{ status, value/reason }>` | Need full report of success + failure |
| `Promise.race` | First promise settles (resolve or reject) | If first settled is rejection | First settled value/reason | Timeouts, first-response wins |
| `Promise.any` | First promise fulfills | Only if all promises reject | First fulfilled value (or `AggregateError`) | Need first successful result from many sources |

## Behavioral differences

### `Promise.all`
- Strict and fail-fast.
- If one request fails, whole result rejects immediately.
- Good for dependent parallel work where every piece is mandatory.

### `Promise.allSettled`
- Never short-circuits on failure.
- Returns status for each input promise.
- Good for dashboards/batch jobs where partial success is acceptable.

### `Promise.race`
- Finishes on first settled promise (success or failure).
- Useful for timeout wrappers: race task against timeout rejection.
- Be careful: fastest failure also fails the race.

### `Promise.any`
- Finishes on first success.
- Ignores rejections until all fail.
- If all fail, rejects with `AggregateError`.
- Good for fallback providers / multi-region endpoint strategy.

## Minimal examples

```js
await Promise.all([apiA(), apiB()]); // both must succeed
```

```js
await Promise.allSettled([apiA(), apiB()]); // inspect each status
```

```js
await Promise.race([apiCall(), timeout(1000)]); // first settle wins
```

```js
await Promise.any([primary(), secondary(), tertiary()]); // first success wins
```

## Real-world service scenarios

### 1) `Promise.all` - both services are required

You render a checkout page and need:
- Service A: user profile
- Service B: payment methods

If either fails, page cannot be rendered correctly, so fail fast:

```js
const [profile, paymentMethods] = await Promise.all([
  fetchUserProfile(userId),      // service A
  fetchPaymentMethods(userId),   // service B
]);
```

Use this when both responses are mandatory for the same screen/action.

### 2) `Promise.allSettled` - partial success is acceptable

You load a dashboard with independent widgets:
- Service A: revenue chart
- Service B: notifications
- Service C: recommendations (sometimes unstable)

You still want to show what works, even if one widget fails:

```js
const widgetResults = await Promise.allSettled([
  fetchRevenueWidget(),          // service A
  fetchNotificationsWidget(),    // service B
  fetchRecommendationsWidget(),  // service C
]);

const fulfilled = widgetResults.filter((r) => r.status === "fulfilled");
const rejected = widgetResults.filter((r) => r.status === "rejected");
```

Use this for resilient UIs and batch jobs with partial failure tolerance.

### 3) `Promise.race` - one service is slow, enforce timeout

You call Service A, but sometimes it hangs.  
Race the request against a timeout to fail quickly:

```js
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Service timeout")), ms)
  );
}

const response = await Promise.race([
  fetchFromServiceA(), // may be slow
  timeout(1200),
]);
```

Use this when latency SLO matters and you need a fast fail/backup path.

### 4) `Promise.any` - fallback providers, first healthy wins

You can get geocoding from multiple providers:
- Provider A (primary)
- Provider B (backup)
- Provider C (backup)

You only need one successful response:

```js
const geo = await Promise.any([
  geocodeWithProviderA(query),
  geocodeWithProviderB(query),
  geocodeWithProviderC(query),
]);
```

Use this for high availability and multi-provider failover.

## Interview answer in one line

- Use `all` when everything is required, `allSettled` when you need every outcome, `race` when timing/first settle matters, and `any` when first success is enough.
