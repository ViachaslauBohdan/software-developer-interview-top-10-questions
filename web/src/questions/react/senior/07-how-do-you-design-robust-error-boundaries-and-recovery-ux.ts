export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you design robust error boundaries and recovery UX?" as const;

export function answer(): string {
  return "Use granular error boundaries around risky features and provide user recovery paths, retries, and telemetry.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
