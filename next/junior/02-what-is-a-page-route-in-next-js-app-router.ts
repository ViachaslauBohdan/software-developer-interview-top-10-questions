export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is a page route in Next.js App Router?" as const;

export function answer(): string {
  return "A route is created by folder segments under `app/` with `page.tsx` as the leaf entry.";
}

export function shortExample(): string {
  return "// app/products/page.tsx\nexport default function ProductsPage() {\n  return <h1>Products</h1>;\n}";
}
