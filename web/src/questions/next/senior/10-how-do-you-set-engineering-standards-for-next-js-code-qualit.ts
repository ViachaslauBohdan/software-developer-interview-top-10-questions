export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you set engineering standards for Next.js code quality at team scale?" as const;

export function answer(): string {
  return "Enforce lint/type/test/build gates in CI and standardize routing/data/caching conventions across teams.";
}

export function shortExample(): string {
  return "// package.json scripts\n{\n  \"scripts\": { \"lint\": \"next lint\", \"typecheck\": \"tsc --noEmit\", \"test\": \"vitest run\" }\n}";
}
