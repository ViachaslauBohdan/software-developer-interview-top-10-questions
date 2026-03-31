export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What do HttpOnly and Secure cookies protect against?" as const;
export const tags = ["security","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "HttpOnly blocks JS token access, Secure restricts cookie to HTTPS, reducing token theft risk.";
}

export function shortExample(): string {
  return "// Prefer HttpOnly Secure cookies for session tokens\nres.cookie('session', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax',\n});";
}
