export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What is a Guard in simple terms?" as const;

export function answer(): string {
  return "Guards run before handlers to allow/deny execution based on authn/authz policies.";
}

export function shortExample(): string {
  return "@UseGuards(AuthGuard('jwt'))\n@Get('me')\nme(@Req() req: any) {\n  return req.user;\n}";
}
