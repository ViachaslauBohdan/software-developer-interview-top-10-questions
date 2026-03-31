export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "Controlled vs uncontrolled form components: trade-offs and use-cases." as const;

export function answer(): string {
  return "Controlled inputs give predictable validation/state sync; uncontrolled can be simpler for basic forms and refs.";
}

export function shortExample(): string {
  return "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}";
}
