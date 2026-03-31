export const technology = 'css' as const;
export const level = 'senior' as const;
export const question = "How do you architect responsive design in CSS while reducing operational cost?" as const;
export const tags = ["css","senior","responsive-design"] as const;
export const trending = false as const;

export function answer(): string {
  return "Responsive CSS combines fluid sizing, breakpoints, and content-first layout adjustments.";
}

export function shortExample(): string {
  return ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}";
}
