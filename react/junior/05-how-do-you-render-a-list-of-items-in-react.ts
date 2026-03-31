export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "How do you render a list of items in React?" as const;

export function answer(): string {
  return "How do you render a list of items in React: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
