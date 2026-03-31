export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you migrate from Pages Router to App Router safely?" as const;

export function answer(): string {
  return "Migrate route-by-route, keeping Pages and App routers side-by-side until feature parity is reached.";
}

export function shortExample(): string {
  return "// Keep both during migration:\n// pages/legacy.tsx (old)\n// app/new/page.tsx (new)\n// Move route-by-route and retire pages/* gradually.";
}
