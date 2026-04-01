# useReducer

## 1) What problem hook resolves

`useReducer` handles complex state transitions with explicit actions and a pure reducer function.

## 2) Outcomes, Benefits

- Better structure than many interdependent `useState` calls.
- Predictable state transitions (easy to reason about and debug).
- Strong testability because reducer logic is pure.

## 3) Code examples

### Example A - simple counter reducer
```ts
type Action = { type: "inc" } | { type: "dec" };
function reducer(state: number, action: Action) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  return state;
}
```

### Example B - async lifecycle states
```ts
type State = { loading: boolean; error: string | null };
type Action =
  | { type: "start" }
  | { type: "success" }
  | { type: "error"; message: string };
```

### Example C - form update by field name
```ts
dispatch({ type: "field", name: "email", value: "a@b.com" });
dispatch({ type: "reset" });
```
