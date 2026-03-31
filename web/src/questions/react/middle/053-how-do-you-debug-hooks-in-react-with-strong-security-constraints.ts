export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "How do you debug hooks in REACT with strong security constraints?" as const;
export const tags = ["react","middle","hooks","security"] as const;
export const trending = false as const;

export function answer(): string {
  return "Use React DevTools Profiler, component memo boundaries, and prop/state diffing to isolate expensive render paths.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
