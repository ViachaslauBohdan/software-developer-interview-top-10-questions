export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How do modules, controllers, and providers relate in Nest?" as const;
export const tags = ["nest","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
