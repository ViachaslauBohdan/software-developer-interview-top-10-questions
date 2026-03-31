export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you debug seo in NEXT for long-term maintainability?" as const;
export const tags = ["next","middle","seo"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you debug seo in NEXT for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
