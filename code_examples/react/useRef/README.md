# useRef

## 1) What problem hook resolves

`useRef` stores mutable values (or DOM element references) that persist across renders without triggering re-render.

## 2) Outcomes, Benefits

- Avoids unnecessary renders for non-UI mutable data.
- Enables direct DOM access (focus, scroll, measure).
- Useful for storing timers, previous values, and instance-like objects.

## 3) Code examples

### Example A - focus an input
```ts
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();
```

### Example B - store timer id
```ts
const timerRef = useRef<number | null>(null);
timerRef.current = window.setInterval(tick, 1000);
```

### Example C - track previous value
```ts
const prevQueryRef = useRef(query);
useEffect(() => {
  prevQueryRef.current = query;
}, [query]);
```
