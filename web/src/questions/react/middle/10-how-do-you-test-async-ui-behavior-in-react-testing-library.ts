export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "How do you test async UI behavior in React Testing Library?" as const;

export function answer(): string {
  return "Test behavior visible to users: loading, async success/error states, and interactive flows.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
