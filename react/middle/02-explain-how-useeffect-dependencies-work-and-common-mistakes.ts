export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "Explain how useEffect dependencies work and common mistakes." as const;

export function answer(): string {
  return "Use `useEffect` to sync with external systems; include all reactive dependencies and cleanup subscriptions/timers.";
}

export function shortExample(): string {
  return "useEffect(() => {\n  const id = setInterval(load, 1000);\n  return () => clearInterval(id);\n}, [load]);";
}
