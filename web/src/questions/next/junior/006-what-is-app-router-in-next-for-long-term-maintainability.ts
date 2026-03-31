export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How does next/image improve performance?" as const;
export const tags = ["next","junior","top-common","performance"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How does next/image improve performance\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
