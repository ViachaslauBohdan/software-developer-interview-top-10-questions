export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you design frontend architecture for a large React product?" as const;
export const tags = ["react","senior","top-common","architecture"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you design frontend architecture for a large React product\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
