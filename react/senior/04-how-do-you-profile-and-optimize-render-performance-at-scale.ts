export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you profile and optimize render performance at scale?" as const;

export function answer(): string {
  return "Measure before optimizing: profile commits, reduce render surface, virtualize large lists, and memoize only proven hot paths.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
