export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design caching and revalidation strategy for correctness + performance?" as const;

export function answer(): string {
  return "Define cache keys/tags by domain, separate public/personalized data, and trigger explicit invalidation after mutations.";
}

export function shortExample(): string {
  return "await fetch('https://api.example.com/catalog', {\n  next: { revalidate: 300, tags: ['catalog'] }\n});\n// After mutation on server action/route handler: revalidateTag('catalog')";
}
