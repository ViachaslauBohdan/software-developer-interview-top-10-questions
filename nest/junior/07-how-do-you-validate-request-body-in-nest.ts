export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do you validate request body in Nest?" as const;

export function answer(): string {
  return "Use DTO classes + `ValidationPipe` to enforce schema and reject malformed input.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
