export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What are route groups in App Router and why are they useful?" as const;

export function answer(): string {
  return "Route groups organize routes without affecting URL structure, useful for separate layouts or app sections.";
}

export function shortExample(): string {
  return "app/\n  (marketing)/page.tsx\n  (dashboard)/dashboard/page.tsx\n// Parentheses group routes without changing URL paths.";
}
