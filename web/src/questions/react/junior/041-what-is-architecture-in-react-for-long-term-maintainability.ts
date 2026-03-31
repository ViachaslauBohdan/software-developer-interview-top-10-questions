export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is architecture in REACT for long-term maintainability?" as const;
export const tags = ["react","junior","architecture"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is architecture in REACT for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
