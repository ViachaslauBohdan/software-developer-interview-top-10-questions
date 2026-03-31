export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do you write a basic unit test for a service?" as const;

export function answer(): string {
  return "Use `@nestjs/testing` to instantiate providers with mocked dependencies and assert service behavior.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
