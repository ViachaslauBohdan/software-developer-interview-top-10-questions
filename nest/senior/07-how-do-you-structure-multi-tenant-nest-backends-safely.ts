export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you structure multi-tenant Nest backends safely?" as const;

export function answer(): string {
  return "How do you structure multi-tenant Nest backends safely: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
