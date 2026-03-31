export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "How do you fetch data in a basic Next.js page?" as const;
export const tags = ["next","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "In App Router, fetch on the server in page components and use caching/revalidate controls as needed.";
}

export function shortExample(): string {
  return "export default async function Page() {\n  const posts = await fetch('https://api.example.com/posts').then(r => r.json());\n  return <pre>{JSON.stringify(posts, null, 2)}</pre>;\n}";
}
