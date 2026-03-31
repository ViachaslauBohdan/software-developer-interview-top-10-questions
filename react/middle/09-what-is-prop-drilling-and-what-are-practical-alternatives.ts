export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "What is prop drilling and what are practical alternatives?" as const;

export function answer(): string {
  return "Prefer composition first, then Context or dedicated state stores when shared state spans many branches.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
