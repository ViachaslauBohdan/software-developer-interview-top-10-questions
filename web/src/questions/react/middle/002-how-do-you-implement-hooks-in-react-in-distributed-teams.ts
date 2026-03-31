export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "When should you use useMemo and useCallback?" as const;
export const tags = ["react","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "`useMemo` memoizes computed values, `useCallback` memoizes function identity to reduce unnecessary child renders.";
}

export function shortExample(): string {
  return "const visible = useMemo(() => items.filter(i => i.active), [items]);\nconst onSave = useCallback(() => save(id), [id]);";
}
