export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is the difference between metadata in layout and page files?" as const;

export function answer(): string {
  return "Layout metadata applies to nested routes; page metadata can override per-leaf route for SEO granularity.";
}

export function shortExample(): string {
  return "// app/layout.tsx\nexport const metadata = { title: 'Base' };\n// app/blog/page.tsx\nexport const metadata = { title: 'Blog' };";
}
