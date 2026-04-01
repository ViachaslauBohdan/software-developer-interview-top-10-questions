import { useReducer } from "react";

type RequestState = {
  loading: boolean;
  error: string | null;
};

type RequestAction =
  | { type: "start" }
  | { type: "success" }
  | { type: "error"; message: string };

/**
 * Example 1: async request state machine.
 * Benefit: avoids ad-hoc boolean combinations.
 */
function requestReducer(state: RequestState, action: RequestAction): RequestState {
  if (action.type === "start") return { loading: true, error: null };
  if (action.type === "success") return { loading: false, error: null };
  if (action.type === "error") return { loading: false, error: action.message };
  return state;
}

export function useRequestState() {
  const [state, dispatch] = useReducer(requestReducer, {
    loading: false,
    error: null,
  });

  return { state, dispatch };
}
