export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "What is design tokens in CSS while reducing operational cost?" as const;
export const tags = ["css","junior","design-tokens"] as const;
export const trending = true as const;

export function answer(): string {
  return "Design tokens centralize visual decisions so themes and components stay consistent across products.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
