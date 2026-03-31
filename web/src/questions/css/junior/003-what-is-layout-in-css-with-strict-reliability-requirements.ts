export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "When should you use Flexbox vs Grid?" as const;
export const tags = ["css","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Flexbox is best for one-dimensional alignment and spacing across rows or columns.";
}

export function shortExample(): string {
  return ".toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}";
}
