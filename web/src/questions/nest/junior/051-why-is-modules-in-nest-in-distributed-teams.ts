export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "Why is modules in NEST in distributed teams?" as const;
export const tags = ["nest","junior","modules"] as const;
export const trending = false as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
