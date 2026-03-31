export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do parallel and intercepting routes solve real UX problems?" as const;
export const tags = ["next","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Intercepting routes render route content in current layout context (e.g., modal over list) without losing navigation state.";
}

export function shortExample(): string {
  return "app/feed/page.tsx\napp/feed/@modal/(..)photo/[id]/page.tsx\n// photo opens as modal while keeping feed context.";
}
