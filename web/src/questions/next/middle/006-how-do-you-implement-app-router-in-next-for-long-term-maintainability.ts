export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you handle optimistic UI with server actions?" as const;
export const tags = ["next","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use optimistic state update on submit, rollback on failure, and reconcile with revalidated server state.";
}

export function shortExample(): string {
  return "'use client';\nconst [items, setItems] = useState(initial);\nsetItems((prev) => [...prev, optimisticItem]); // optimistic\nawait createItemAction(data); // rollback on error";
}
