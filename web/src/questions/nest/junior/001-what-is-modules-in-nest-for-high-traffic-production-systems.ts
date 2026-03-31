export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What is NestJS and why use it over plain Express?" as const;
export const tags = ["nest","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "NestJS is a TypeScript-first Node framework built around modules, DI, and structured architecture patterns.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
