export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What are Server Components vs Client Components?" as const;
export const tags = ["next","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"What are Server Components vs Client Components\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
