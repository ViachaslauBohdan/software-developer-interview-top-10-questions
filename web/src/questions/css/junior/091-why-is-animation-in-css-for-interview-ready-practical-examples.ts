export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "Why is animation in CSS for interview-ready practical examples?" as const;
export const tags = ["css","junior","animation"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"Why is animation in CSS for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
