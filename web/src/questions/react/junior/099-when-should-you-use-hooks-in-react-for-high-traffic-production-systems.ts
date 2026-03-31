export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "When should you use hooks in REACT for high-traffic production systems?" as const;
export const tags = ["react","junior","hooks"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"When should you use hooks in REACT for high-traffic production systems\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
