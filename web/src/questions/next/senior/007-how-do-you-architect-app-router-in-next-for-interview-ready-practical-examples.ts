export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you migrate safely from Pages Router to App Router?" as const;
export const tags = ["next","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you migrate safely from Pages Router to App Router\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
