export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What are guards and when should you use them?" as const;
export const tags = ["nest","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@UseGuards(AuthGuard('jwt'))\n@Get('me')\nme(@Req() req: any) {\n  return req.user;\n}";
}
