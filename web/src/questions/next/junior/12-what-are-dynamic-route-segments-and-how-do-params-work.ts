export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What are dynamic route segments and how do params work?" as const;

export function answer(): string {
  return "Dynamic segments like `[id]` map URL parts to `params` for route-level data fetching.";
}

export function shortExample(): string {
  return "// app/products/[id]/page.tsx\nexport default function ProductPage({ params }: { params: { id: string } }) {\n  return <p>Product ID: {params.id}</p>;\n}";
}
