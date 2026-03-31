export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you implement caching in NEXT with strong security constraints?" as const;
export const tags = ["next","middle","caching","security"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you implement caching in NEXT with strong security constraints\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
