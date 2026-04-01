# useTransition

## 1) What problem hook resolves

`useTransition` marks updates as non-urgent so React can prioritize urgent interactions (typing, clicking) and avoid UI blocking.

## 2) Outcomes, Benefits

- Smoother UX for heavy rendering scenarios.
- Better responsiveness under load (search/filter dashboards).
- Built-in pending state for clearer loading feedback.

## 3) Code examples

### Example A - defer non-urgent update
```ts
const [isPending, startTransition] = useTransition();

startTransition(() => {
  applyHeavyUpdate();
});
```

### Example B - urgent input + deferred filtering
```ts
setQuery(nextQuery); // urgent
startTransition(() => {
  setFiltered(items.filter((item) => item.includes(nextQuery)));
});
```

### Example C - startTransition outside component
```ts
import { startTransition } from "react";

startTransition(() => {
  setStore(nextState);
});
```
