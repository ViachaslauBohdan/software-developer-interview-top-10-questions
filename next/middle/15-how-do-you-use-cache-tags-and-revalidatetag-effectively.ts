export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you use cache tags and revalidateTag effectively?" as const;

export function answer(): string {
  return "Tag related fetches and call `revalidateTag` after mutations to refresh only affected cache slices.";
}

export function shortExample(): string {
  return "await fetch('/api/posts', { next: { tags: ['posts'] } });\n// after mutation\n// revalidateTag('posts');";
}
