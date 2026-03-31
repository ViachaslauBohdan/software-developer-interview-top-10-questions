export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do dynamic route segments and params work?" as const;
export const tags = ["next","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Dynamic segments like `[id]` map URL parts to `params` for route-level data fetching.";
}

export function shortExample(): string {
  return "// app/products/[id]/page.tsx\nexport default function ProductPage({ params }: { params: { id: string } }) {\n  return <p>Product ID: {params.id}</p>;\n}";
}
