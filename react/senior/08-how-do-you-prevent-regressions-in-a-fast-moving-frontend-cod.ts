export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you prevent regressions in a fast-moving frontend codebase?" as const;

export function answer(): string {
  return "Combine typed contracts, integration tests, visual checks, and performance budgets in CI for safe iteration.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
