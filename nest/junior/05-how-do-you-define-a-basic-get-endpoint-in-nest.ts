export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do you define a basic GET endpoint in Nest?" as const;

export function answer(): string {
  return "Define a controller with `@Get()` decorator and return DTO/JSON from a service.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
