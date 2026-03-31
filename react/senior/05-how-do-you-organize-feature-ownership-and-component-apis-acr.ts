export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you organize feature ownership and component APIs across teams?" as const;

export function answer(): string {
  return "Create stable component contracts, semantic props, strict typing, versioning rules, and cross-team ownership.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
