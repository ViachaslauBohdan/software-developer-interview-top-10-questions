export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "Why is specificity in CSS with strong security constraints?" as const;
export const tags = ["css","junior","specificity","security"] as const;
export const trending = false as const;

export function answer(): string {
  return "Specificity controls which CSS rules win; keep selectors simple and avoid accidental overrides.";
}

export function shortExample(): string {
  return ".btn { color: #111; }\n.btn-primary { color: #fff; background: #2563eb; }";
}
