export const technology = 'css' as const;
export const level = 'middle' as const;
export const question = "How do you debug specificity in CSS for interview-ready practical examples?" as const;
export const tags = ["css","middle","specificity"] as const;
export const trending = false as const;

export function answer(): string {
  return "Specificity controls which CSS rules win; keep selectors simple and avoid accidental overrides.";
}

export function shortExample(): string {
  return ".btn { color: #111; }\n.btn-primary { color: #fff; background: #2563eb; }";
}
