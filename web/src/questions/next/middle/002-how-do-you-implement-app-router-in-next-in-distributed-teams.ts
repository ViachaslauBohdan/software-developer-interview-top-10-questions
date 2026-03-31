export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do caching and revalidation work in Next.js?" as const;
export const tags = ["next","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use time-based or tag/path revalidation and ensure mutation paths trigger cache invalidation explicitly.";
}

export function shortExample(): string {
  return "await fetch('https://api.example.com/catalog', {\n  next: { revalidate: 300, tags: ['catalog'] }\n});\n// After mutation on server action/route handler: revalidateTag('catalog')";
}
