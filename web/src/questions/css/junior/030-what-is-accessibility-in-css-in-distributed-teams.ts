export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "What is accessibility in CSS in distributed teams?" as const;
export const tags = ["css","junior","accessibility"] as const;
export const trending = false as const;

export function answer(): string {
  return "Accessible CSS includes clear focus styles, sufficient contrast, and reduced-motion support.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
