export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "Difference between middleware, guards, interceptors, and pipes." as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@UseGuards(AuthGuard('jwt'))\n@Get('me')\nme(@Req() req: any) {\n  return req.user;\n}";
}
