export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "Why are keys important in lists and what problems come from index keys?" as const;

export function answer(): string {
  return "Stable keys preserve element identity across list changes and prevent state mixups during reorder/insert/remove.";
}

export function shortExample(): string {
  return "{todos.map((t) => <TodoRow key={t.id} todo={t} />)}";
}
