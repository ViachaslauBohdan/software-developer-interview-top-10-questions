export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you scale forms in REACT for interview-ready practical examples?" as const;
export const tags = ["react","senior","forms"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you scale forms in REACT for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
