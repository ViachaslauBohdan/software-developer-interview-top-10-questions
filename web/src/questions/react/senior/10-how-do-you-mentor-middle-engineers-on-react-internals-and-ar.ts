export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you mentor middle engineers on React internals and architecture decisions?" as const;

export function answer(): string {
  return "Mentor through code reviews, profiling sessions, and architecture discussions tied to real production scenarios.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
