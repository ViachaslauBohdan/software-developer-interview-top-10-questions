export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do interceptors differ from middleware and pipes?" as const;
export const tags = ["nest","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
