export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "Why is web vitals in NEXT for interview-ready practical examples?" as const;
export const tags = ["next","junior","web-vitals"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"Why is web vitals in NEXT for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
