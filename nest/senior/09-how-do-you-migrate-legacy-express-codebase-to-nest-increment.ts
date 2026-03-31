export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you migrate legacy Express codebase to Nest incrementally?" as const;

export function answer(): string {
  return "For \"How do you migrate legacy Express codebase to Nest incrementally\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
