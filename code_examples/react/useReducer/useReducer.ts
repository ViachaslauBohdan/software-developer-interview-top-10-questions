import { useReducer } from "react";

type CounterAction = { type: "inc" } | { type: "dec" } | { type: "reset" };

/**
 * useReducer centralizes state transitions.
 * Benefit: predictable updates for state with multiple actions.
 */
function counterReducer(state: number, action: CounterAction) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "reset") return 0;
  return state;
}

export function useCounterReducer(initial = 0) {
  const [count, dispatch] = useReducer(counterReducer, initial);
  return { count, dispatch };
}
