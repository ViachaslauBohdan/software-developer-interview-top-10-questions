export const technology = 'css' as const;
export const level = 'middle' as const;
export const question = "How do container queries change responsive strategy?" as const;
export const tags = ["css","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Responsive CSS combines fluid sizing, breakpoints, and content-first layout adjustments.";
}

export function shortExample(): string {
  return ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}";
}
