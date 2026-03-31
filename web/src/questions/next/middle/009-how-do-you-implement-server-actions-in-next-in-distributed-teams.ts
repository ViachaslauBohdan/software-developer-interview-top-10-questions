export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you structure features in a growing Next.js repo?" as const;
export const tags = ["next","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you structure features in a growing Next.js repo\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "export default function Page() {\n  return <main>Next.js page</main>;\n}";
}
