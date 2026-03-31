export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you balance abstraction and delivery speed?" as const;
export const tags = ["react","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Abstract only after repeated patterns emerge and keep APIs narrow to avoid over-generalized components.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
