export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do intercepting routes work and when should you use them?" as const;

export function answer(): string {
  return "Intercepting routes render route content in current layout context (e.g., modal over list) without losing navigation state.";
}

export function shortExample(): string {
  return "app/feed/page.tsx\napp/feed/@modal/(..)photo/[id]/page.tsx\n// photo opens as modal while keeping feed context.";
}
