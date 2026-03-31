export const technology = 'css' as const;
export const level = 'middle' as const;
export const question = "How do you avoid specificity wars in large codebases?" as const;
export const tags = ["css","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Specificity controls which CSS rules win; keep selectors simple and avoid accidental overrides.";
}

export function shortExample(): string {
  return ".btn { color: #111; }\n.btn-primary { color: #fff; background: #2563eb; }";
}
