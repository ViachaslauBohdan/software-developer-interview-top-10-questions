export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "How would you debug a component that re-renders too often?" as const;

export function answer(): string {
  return "Re-renders happen when local state changes, parent passes new props, or consumed context updates.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
