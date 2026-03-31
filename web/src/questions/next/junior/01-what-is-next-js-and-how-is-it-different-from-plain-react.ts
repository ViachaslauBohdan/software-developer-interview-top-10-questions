export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is Next.js and how is it different from plain React?" as const;

export function answer(): string {
  return "Next.js adds routing, server rendering, data fetching, API routes, and production optimizations on top of React.";
}

export function shortExample(): string {
  return "// Next.js gives file-based routing and server rendering out of the box:\n// app/about/page.tsx -> route /about\nexport default function About() { return <h1>About</h1>; }";
}
