export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "Explain trade-offs of global state tools (Context, Redux Toolkit, Zustand, Jotai)." as const;

export function answer(): string {
  return "Choose global state by complexity: Context for low-frequency shared data, RTK/Zustand/Jotai for high-frequency and larger domains.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
