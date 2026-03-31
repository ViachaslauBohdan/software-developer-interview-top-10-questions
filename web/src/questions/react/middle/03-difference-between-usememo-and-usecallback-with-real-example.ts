export const technology = 'react' as const;
export const level = 'middle' as const;
export const question = "Difference between useMemo and useCallback with real examples." as const;

export function answer(): string {
  return "`useMemo` memoizes computed values, `useCallback` memoizes function identity to reduce unnecessary child renders.";
}

export function shortExample(): string {
  return "const visible = useMemo(() => items.filter(i => i.active), [items]);\nconst onSave = useCallback(() => save(id), [id]);";
}
