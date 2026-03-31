export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you debug web vitals in NEXT for interview-ready practical examples?" as const;
export const tags = ["next","middle","web-vitals"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you debug web vitals in NEXT for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
