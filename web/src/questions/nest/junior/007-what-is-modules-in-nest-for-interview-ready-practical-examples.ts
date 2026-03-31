export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do you handle exceptions in Nest applications?" as const;
export const tags = ["nest","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Throw framework exceptions or custom exceptions and map them with global exception filters.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
