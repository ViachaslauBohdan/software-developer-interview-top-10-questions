export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How does prefetching work in Next.js links?" as const;

export function answer(): string {
  return "Next.js prefetches linked routes in viewport to speed up client-side transitions; tune based on traffic and cache behavior.";
}

export function shortExample(): string {
  return "import Link from 'next/link';\n<Link href=\"/dashboard\" prefetch>Dashboard</Link>\n// Route is prefetched when link enters viewport.";
}
