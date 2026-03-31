export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you debug xss in SECURITY for interview-ready practical examples?" as const;
export const tags = ["security","middle","xss"] as const;
export const trending = false as const;

export function answer(): string {
  return "Prevent XSS with output encoding, strict CSP, sanitization for rich text, and avoiding unsafe DOM injection APIs.";
}

export function shortExample(): string {
  return "// React auto-escapes strings in JSX\nconst userInput = \"<img src=x onerror=alert(1) />\";\nreturn <p>{userInput}</p>; // rendered as text, not HTML\n\n// If HTML is required, sanitize first (DOMPurify)\n// const clean = DOMPurify.sanitize(dirtyHtml);";
}
