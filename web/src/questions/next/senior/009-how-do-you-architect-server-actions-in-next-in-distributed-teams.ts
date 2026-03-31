export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you guarantee SEO correctness with dynamic data?" as const;
export const tags = ["next","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Generate metadata server-side, use canonical tags, and ensure crawlable HTML for content-critical routes.";
}

export function shortExample(): string {
  return "export async function generateMetadata() {\n  return {\n    title: 'Product',\n    description: 'SEO-safe server-rendered metadata',\n  };\n}";
}
