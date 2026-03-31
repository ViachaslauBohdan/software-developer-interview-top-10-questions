export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do you navigate programmatically in Next.js?" as const;

export function answer(): string {
  return "Use `useRouter()` from `next/navigation` and call `router.push()`/`router.replace()`.";
}

export function shortExample(): string {
  return "'use client';\nimport { useRouter } from 'next/navigation';\nconst router = useRouter();\nrouter.push('/checkout');";
}
