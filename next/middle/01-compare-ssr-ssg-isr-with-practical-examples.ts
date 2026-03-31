export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "Compare SSR, SSG, ISR with practical examples." as const;

export function answer(): string {
  return "SSR renders on each request, SSG at build time, and ISR regenerates static output after revalidation.";
}

export function shortExample(): string {
  return "// SSR (request-time)\nexport const dynamic = 'force-dynamic';\n\n// SSG (build-time)\nexport const dynamic = 'force-static';\n\n// ISR (static + periodic refresh)\nexport const revalidate = 60;";
}
