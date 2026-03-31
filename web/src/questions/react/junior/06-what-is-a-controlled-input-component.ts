export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is a controlled input component?" as const;

export function answer(): string {
  return "What is a controlled input component: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
