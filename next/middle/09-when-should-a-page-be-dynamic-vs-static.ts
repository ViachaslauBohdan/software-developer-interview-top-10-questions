export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "When should a page be dynamic vs static?" as const;

export function answer(): string {
  return "Use static for public mostly-stable pages; use dynamic for per-user, frequently changing, or auth-dependent responses.";
}

export function shortExample(): string {
  return "// Public docs/blog -> static + ISR\nexport const revalidate = 3600;\n\n// Personalized dashboard -> dynamic\n// export const dynamic = 'force-dynamic';";
}
