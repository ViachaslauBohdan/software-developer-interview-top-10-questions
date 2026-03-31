export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do parallel routes work in App Router?" as const;

export function answer(): string {
  return "Parallel routes render multiple named slots simultaneously, ideal for dashboards/modals with independent data loading.";
}

export function shortExample(): string {
  return "app/dashboard/@analytics/page.tsx\napp/dashboard/@activity/page.tsx\n// both slots render in the same layout concurrently.";
}
