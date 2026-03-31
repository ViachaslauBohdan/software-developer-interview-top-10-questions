export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is the difference between props and state?" as const;
export const tags = ["react","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"What is the difference between props and state\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
