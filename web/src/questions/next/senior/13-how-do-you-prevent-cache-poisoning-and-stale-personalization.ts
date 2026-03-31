export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you prevent cache poisoning and stale personalization bugs in Next.js?" as const;

export function answer(): string {
  return "Separate public/private caches, vary by auth/locale keys, and avoid caching personalized responses globally.";
}

export function shortExample(): string {
  return "await fetch('/api/profile', {\n  cache: 'no-store', // personalized\n});\n// keep shared cache only for public, anonymous content";
}
