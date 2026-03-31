export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is JSX and why do we use it in React?" as const;

export function answer(): string {
  return "For \"What is JSX and why do we use it in React\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
