export const technology = 'css' as const;
export const level = 'middle' as const;
export const question = "How do you debug performance in CSS with strict reliability requirements?" as const;
export const tags = ["css","middle","performance"] as const;
export const trending = false as const;

export function answer(): string {
  return "CSS performance improves when you reduce costly paint operations and avoid layout thrashing.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
