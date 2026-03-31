export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do loading.tsx and error.tsx work in App Router?" as const;

export function answer(): string {
  return "`loading.tsx` renders fallback during segment fetch; `error.tsx` isolates runtime failures with reset support.";
}

export function shortExample(): string {
  return "// app/dashboard/loading.tsx\nexport default function Loading() {\n  return <p>Loading dashboard...</p>;\n}\n\n// app/dashboard/error.tsx\n'use client';\nexport default function Error({ reset }: { reset: () => void }) {\n  return <button onClick={reset}>Try again</button>;\n}";
}
