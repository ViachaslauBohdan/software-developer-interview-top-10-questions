export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "How do you structure reusable custom hooks safely?" as const;

export function answer(): string {
  return "Keep custom hooks focused, deterministic, and explicit about dependencies and returned API shape.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
