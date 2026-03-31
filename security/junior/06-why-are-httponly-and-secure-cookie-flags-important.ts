export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "Why are HttpOnly and Secure cookie flags important?" as const;

export function answer(): string {
  return "HttpOnly blocks JS token access, Secure restricts cookie to HTTPS, reducing token theft risk.";
}

export function shortExample(): string {
  return "// Prefer HttpOnly Secure cookies for session tokens\nres.cookie('session', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax',\n});";
}
