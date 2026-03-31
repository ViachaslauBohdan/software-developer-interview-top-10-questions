export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "How do CSS variables help maintainability?" as const;
export const tags = ["css","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do CSS variables help maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
