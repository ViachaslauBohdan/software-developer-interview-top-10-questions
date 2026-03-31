export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do global pipes/filters/interceptors affect app behavior?" as const;

export function answer(): string {
  return "Use middleware for raw request concerns, guards for authz, pipes for validation, interceptors for cross-cutting transformations.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
