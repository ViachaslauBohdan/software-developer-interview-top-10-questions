export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is the difference between props and state?" as const;

export function answer(): string {
  return "What is the difference between props and state: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
