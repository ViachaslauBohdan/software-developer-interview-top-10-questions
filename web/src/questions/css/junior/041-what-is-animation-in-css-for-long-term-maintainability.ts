export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "What is animation in CSS for long-term maintainability?" as const;
export const tags = ["css","junior","animation"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is animation in CSS for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return ".button:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}";
}
