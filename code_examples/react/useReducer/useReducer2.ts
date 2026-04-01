import { useReducer } from "react";

type FormState = { email: string; name: string };
type FormAction =
  | { type: "field"; name: keyof FormState; value: string }
  | { type: "reset" };

/**
 * Example 2: form reducer by field name.
 * Benefit: one generic action can update many fields.
 */
function formReducer(state: FormState, action: FormAction): FormState {
  if (action.type === "field") {
    return { ...state, [action.name]: action.value };
  }
  if (action.type === "reset") return { email: "", name: "" };
  return state;
}

export function useFormReducer() {
  const [form, dispatch] = useReducer(formReducer, { email: "", name: "" });
  return { form, dispatch };
}
