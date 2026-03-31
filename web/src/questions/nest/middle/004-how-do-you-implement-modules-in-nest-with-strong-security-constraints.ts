export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do global pipes, filters, and interceptors affect behavior?" as const;
export const tags = ["nest","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
