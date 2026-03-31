export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you add authentication using Passport/JWT in Nest?" as const;

export function answer(): string {
  return "How do you add authentication using Passport/JWT in Nest: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
