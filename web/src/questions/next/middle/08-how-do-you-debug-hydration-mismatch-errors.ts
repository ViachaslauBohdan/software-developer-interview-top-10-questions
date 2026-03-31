export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you debug hydration mismatch errors?" as const;

export function answer(): string {
  return "Ensure server/client render determinism, move browser-only values into client effects, and isolate unstable UI to client components.";
}

export function shortExample(): string {
  return "'use client';\nimport { useEffect, useState } from 'react';\nexport default function Clock() {\n  const [now, setNow] = useState('');\n  useEffect(() => setNow(new Date().toISOString()), []);\n  return <p>{now}</p>;\n}";
}
