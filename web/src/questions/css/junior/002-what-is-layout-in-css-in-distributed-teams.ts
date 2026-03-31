export const technology = 'css' as const;
export const level = 'junior' as const;
export const question = "How does CSS specificity work in practice?" as const;
export const tags = ["css","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Specificity controls which CSS rules win; keep selectors simple and avoid accidental overrides.";
}

export function shortExample(): string {
  return ".btn { color: #111; }\n.btn-primary { color: #fff; background: #2563eb; }";
}
