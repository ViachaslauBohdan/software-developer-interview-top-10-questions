export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is seo in NEXT with strict reliability requirements?" as const;
export const tags = ["next","junior","seo"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is seo in NEXT with strict reliability requirements\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
