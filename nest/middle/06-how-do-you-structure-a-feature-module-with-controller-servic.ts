export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you structure a feature module with controller + service + repository?" as const;

export function answer(): string {
  return "How do you structure a feature module with controller + service + repository: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
