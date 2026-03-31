export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "How do you build responsive layouts safely?" as const;
export const tags = ["css","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Responsive CSS combines fluid sizing, breakpoints, and content-first layout adjustments.";
}

export function shortExample(): string {
  return ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}";
}
