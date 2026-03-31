export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "How do you store auth credentials securely in frontend apps?" as const;

export function answer(): string {
  return "For \"How do you store auth credentials securely in frontend apps\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Prefer HttpOnly Secure cookies for session tokens\nres.cookie('session', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax',\n});";
}
