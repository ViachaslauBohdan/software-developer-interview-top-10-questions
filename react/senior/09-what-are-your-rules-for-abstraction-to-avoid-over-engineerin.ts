export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "What are your rules for abstraction to avoid over-engineering?" as const;

export function answer(): string {
  return "Abstract only after repeated patterns emerge and keep APIs narrow to avoid over-generalized components.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
