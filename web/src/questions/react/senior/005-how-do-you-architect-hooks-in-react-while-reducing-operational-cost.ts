export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you introduce Suspense incrementally in production?" as const;
export const tags = ["react","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Adopt Suspense incrementally around isolated data islands with clear loading/error boundaries.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
