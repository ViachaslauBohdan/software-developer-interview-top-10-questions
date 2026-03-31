export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What causes a component to re-render?" as const;
export const tags = ["react","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Re-renders happen when local state changes, parent passes new props, or consumed context updates.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
