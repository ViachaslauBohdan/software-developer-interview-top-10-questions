export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "When should you use useReducer instead of useState?" as const;

export function answer(): string {
  return "Use `useReducer` when state transitions are complex, event-driven, or need predictable action-based updates.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
