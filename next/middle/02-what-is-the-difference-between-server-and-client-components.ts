export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "What is the difference between Server and Client Components?" as const;

export function answer(): string {
  return "Server Components reduce client JS by rendering on server; Client Components handle browser interactivity.";
}

export function shortExample(): string {
  return "// Server Component (default)\nexport default async function Page() {\n  const posts = await fetch('https://api.example.com/posts').then(r => r.json());\n  return <pre>{JSON.stringify(posts)}</pre>;\n}";
}
