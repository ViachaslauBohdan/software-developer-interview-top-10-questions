import { useReducer } from "react";

type Todo = { id: number; text: string; done: boolean };
type State = { input: string; todos: Todo[] };
type Action =
  | { type: "set_input"; value: string }
  | { type: "add_todo" }
  | { type: "toggle_todo"; id: number }
  | { type: "remove_todo"; id: number };

function reducer(state: State, action: Action): State {
  if (action.type === "set_input") return { ...state, input: action.value };

  if (action.type === "add_todo") {
    const text = state.input.trim();
    if (!text) return state;
    const nextTodo: Todo = { id: Date.now(), text, done: false };
    return { input: "", todos: [...state.todos, nextTodo] };
  }

  if (action.type === "toggle_todo") {
    return {
      ...state,
      todos: state.todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t)),
    };
  }

  if (action.type === "remove_todo") {
    return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };
  }

  return state;
}

/**
 * Comprehensive but minimal:
 * - multi-action reducer
 * - predictable transitions
 * - simple todo workflow
 */
export function ReducerTodoApp() {
  const [state, dispatch] = useReducer(reducer, { input: "", todos: [] });

  return (
    <section>
      <h3>useReducer Todo App</h3>
      <input
        value={state.input}
        onChange={(e) => dispatch({ type: "set_input", value: e.target.value })}
        placeholder="Add todo..."
      />
      <button onClick={() => dispatch({ type: "add_todo" })}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch({ type: "toggle_todo", id: todo.id })}
              />
              {todo.text}
            </label>
            <button onClick={() => dispatch({ type: "remove_todo", id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
