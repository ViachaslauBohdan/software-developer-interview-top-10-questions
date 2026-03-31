export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you debug guards in NEST for interview-ready practical examples?" as const;
export const tags = ["nest","middle","guards"] as const;
export const trending = false as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@UseGuards(AuthGuard('jwt'))\n@Get('me')\nme(@Req() req: any) {\n  return req.user;\n}";
}
