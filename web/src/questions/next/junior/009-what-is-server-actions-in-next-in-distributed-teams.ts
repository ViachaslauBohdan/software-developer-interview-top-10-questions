export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do not-found.tsx and error.tsx work?" as const;
export const tags = ["next","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "`not-found.tsx` handles 404 UI for a segment, while `error.tsx` catches runtime errors with reset support.";
}

export function shortExample(): string {
  return "// app/dashboard/loading.tsx\nexport default function Loading() {\n  return <p>Loading dashboard...</p>;\n}\n\n// app/dashboard/error.tsx\n'use client';\nexport default function Error({ reset }: { reset: () => void }) {\n  return <button onClick={reset}>Try again</button>;\n}";
}
