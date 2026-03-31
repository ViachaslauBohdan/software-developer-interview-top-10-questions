export const technology = 'css' as const;
export const level = 'senior' as const;
export const question = "How do you enforce accessibility and contrast compliance in CSS?" as const;
export const tags = ["css","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Accessible CSS includes clear focus styles, sufficient contrast, and reduced-motion support.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
