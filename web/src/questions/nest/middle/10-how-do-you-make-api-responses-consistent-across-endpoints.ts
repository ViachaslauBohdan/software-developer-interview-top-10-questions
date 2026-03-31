export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you make API responses consistent across endpoints?" as const;

export function answer(): string {
  return "How do you make API responses consistent across endpoints: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
