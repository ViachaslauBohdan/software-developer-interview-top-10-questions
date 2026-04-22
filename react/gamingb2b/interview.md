# Gaming B2B Interview Notes

## Event Loop Order

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
process.nextTick(() => console.log('4'));
console.log('5');
```

```js
// 1
// 5
// 3
// 4
// 2
```

**Answer:** Output order is `1, 5, 4, 3, 2` in Node.js.  
- `1` and `5` run first (synchronous call stack).  
- `process.nextTick` (`4`) runs before Promise microtasks.  
- Promise callback (`3`) runs next from microtask queue.  
- `setTimeout` (`2`) runs later from macrotask queue.

## React Render Example

```jsx
function Child() {
  console.log('Child render');
  return <div>Child Component</div>;
}

function Parent() {
  const [count, setCount] = React.useState(0);

  console.log('Parent render');

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child />
    </>
  );
}
```

**Answer:** On initial render, logs are:
- `Parent render`
- `Child render`

After clicking `+`, `Parent` re-renders because `count` changes. `Child` also re-renders because it is not memoized, so logs appear again in the same order.

## useEffect Fetch Example

```jsx
useEffect(() => {
  AbortController();
  fetch(`/api?q=${query}`)
    .then(res => res.json())
    .then(data => setData(data));
}, [query]);
```

**Answer:** The effect re-runs every time `query` changes.  
Best practice is to create an `AbortController`, pass `signal` into `fetch`, and abort in cleanup to avoid race conditions and state updates from stale requests.

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(`/api?q=${query}`, { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') throw err;
    });

  return () => controller.abort();
}, [query]);
```

## State Management Notes

```js
/**
 * Modal open/close state - context or redux ui state
 * authenticated user - redux ui
 * bet slip ( coupon ) - redux redux query (without cache)
 * live odds -
 * API Response cache - redux toolkit, redux query (cache)
 */
```

**Answer:**
- Modal open/close: `Context` for local UI scope, `Redux` if many distant components control the same modal.
- Authenticated user: `Redux` (or auth context) as global app state.
- Bet slip (coupon): `Redux` for deterministic shared updates; can combine with RTK Query mutations for submit flow.
- Live odds: streaming state (WebSocket/SSE) in `Redux` slice; avoid long cache TTL.
- API response cache: `RTK Query` is a strong default for caching, invalidation, deduplication, and loading/error states.

## UI Components Notes

```txt
/**
 * hero banners
 * jackpot widgets
 * game carousels
 * promo blocks
 * personalized sections
 * several third-party scripts (analytics, chat, tracking)
 */
```

**Answer:**
- Hero banners: lazy-load media, responsive images, track impressions/clicks.
- Jackpot widgets: isolate data polling/streaming logic and show fallback state.
- Game carousels: virtualize long lists and defer offscreen rendering.
- Promo blocks: drive from CMS/config for non-dev updates.
- Personalized sections: render after user/profile data is ready; keep skeleton placeholders.
- Third-party scripts: load async/defer, gate by consent, and monitor performance impact.
