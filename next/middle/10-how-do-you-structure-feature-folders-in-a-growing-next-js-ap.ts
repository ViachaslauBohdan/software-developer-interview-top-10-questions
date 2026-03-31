export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you structure feature folders in a growing Next.js app?" as const;

export function answer(): string {
  return "Organize by feature/domain and keep UI, data, and server actions together to reduce cross-module coupling.";
}

export function shortExample(): string {
  return "app/\n  (marketing)/page.tsx\n  (app)/dashboard/page.tsx\nfeatures/\n  billing/{ui,server,actions.ts}";
}
