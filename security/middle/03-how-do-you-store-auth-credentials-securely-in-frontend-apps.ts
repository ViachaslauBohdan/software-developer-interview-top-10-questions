export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you store auth credentials securely in frontend apps?" as const;

export function answer(): string {
  return "How do you store auth credentials securely in frontend apps: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Prefer HttpOnly Secure cookies for session tokens\nres.cookie('session', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax',\n});";
}
