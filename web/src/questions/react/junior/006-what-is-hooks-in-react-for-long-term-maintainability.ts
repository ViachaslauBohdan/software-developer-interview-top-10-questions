export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "What is the practical use of useEffect?" as const;
export const tags = ["react","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use `useEffect` to sync with external systems; include all reactive dependencies and cleanup subscriptions/timers.";
}

export function shortExample(): string {
  return "useEffect(() => {\n  const id = setInterval(load, 1000);\n  return () => clearInterval(id);\n}, [load]);";
}
