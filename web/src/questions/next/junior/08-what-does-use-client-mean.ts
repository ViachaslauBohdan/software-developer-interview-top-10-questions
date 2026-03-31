export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What does use client mean?" as const;

export function answer(): string {
  return "`use client` marks a component to run in the browser so it can use hooks, events, and DOM APIs.";
}

export function shortExample(): string {
  return "'use client';\nimport { useState } from 'react';\nexport function Counter() { const [n, setN] = useState(0); return <button onClick={() => setN(n + 1)}>{n}</button>; }";
}
