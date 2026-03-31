export const technology = 'css' as const;
export const level = 'senior' as const;
export const question = "How do you design performant CSS for high-traffic applications?" as const;
export const tags = ["css","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you design performant CSS for high-traffic applications\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
