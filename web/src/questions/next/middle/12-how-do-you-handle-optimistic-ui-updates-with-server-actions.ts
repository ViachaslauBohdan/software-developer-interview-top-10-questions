export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you handle optimistic UI updates with Server Actions?" as const;

export function answer(): string {
  return "Use optimistic state update on submit, rollback on failure, and reconcile with revalidated server state.";
}

export function shortExample(): string {
  return "'use client';\nconst [items, setItems] = useState(initial);\nsetItems((prev) => [...prev, optimisticItem]); // optimistic\nawait createItemAction(data); // rollback on error";
}
