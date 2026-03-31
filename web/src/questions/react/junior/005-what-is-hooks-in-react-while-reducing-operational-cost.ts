export const technology = 'react' as const;
export const level = 'junior' as const;
export const question = "How do keys affect list rendering behavior?" as const;
export const tags = ["react","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Stable keys preserve element identity across list changes and prevent state mixups during reorder/insert/remove.";
}

export function shortExample(): string {
  return "{todos.map((t) => <TodoRow key={t.id} todo={t} />)}";
}
