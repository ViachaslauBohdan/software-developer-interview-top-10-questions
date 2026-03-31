export const technology = 'css' as const;
export const level = 'middle' as const;
export const question = "How do you prevent CSS leakage and style collisions?" as const;
export const tags = ["css","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you prevent CSS leakage and style collisions\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
