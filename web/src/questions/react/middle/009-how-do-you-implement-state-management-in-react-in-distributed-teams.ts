export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "How do you implement robust error boundaries?" as const;
export const tags = ["react","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use granular error boundaries around risky features and provide user recovery paths, retries, and telemetry.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
