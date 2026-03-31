export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you implement deployment in NEXT while reducing operational cost?" as const;
export const tags = ["next","middle","deployment"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you implement deployment in NEXT while reducing operational cost\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
