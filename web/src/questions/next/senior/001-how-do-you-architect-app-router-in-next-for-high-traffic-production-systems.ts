export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design a high-traffic Next.js architecture?" as const;
export const tags = ["next","senior","top-common","architecture"] as const;
export const trending = true as const;

export function answer(): string {
  return "Mix SSG/ISR for cacheable pages with dynamic rendering for personalized views, plus strict caching and observability.";
}

export function shortExample(): string {
  return "// SEO/public: cache-friendly ISR\nexport const revalidate = 300;\n\n// Personalized routes: request-time render\n// export const dynamic = 'force-dynamic';";
}
