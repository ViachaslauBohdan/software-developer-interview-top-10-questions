export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is the difference between static and dynamic content?" as const;

export function answer(): string {
  return "Static content is generated ahead of time and cached; dynamic content is rendered per request/user context.";
}

export function shortExample(): string {
  return "// Static (build time)\nexport const dynamic = 'force-static';\n\n// Dynamic (request time)\n// export const dynamic = 'force-dynamic';";
}
