export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why is xss in SECURITY with strict reliability requirements?" as const;
export const tags = ["security","junior","xss"] as const;
export const trending = false as const;

export function answer(): string {
  return "Prevent XSS with output encoding, strict CSP, sanitization for rich text, and avoiding unsafe DOM injection APIs.";
}

export function shortExample(): string {
  return "// React auto-escapes strings in JSX\nconst userInput = \"<img src=x onerror=alert(1) />\";\nreturn <p>{userInput}</p>; // rendered as text, not HTML\n\n// If HTML is required, sanitize first (DOMPurify)\n// const clean = DOMPurify.sanitize(dirtyHtml);";
}
