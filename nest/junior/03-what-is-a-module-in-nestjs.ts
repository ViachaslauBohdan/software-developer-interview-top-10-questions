export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What is a Module in NestJS?" as const;

export function answer(): string {
  return "What is a Module in NestJS: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
