export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you debug modules in NEST in distributed teams?" as const;
export const tags = ["nest","middle","modules"] as const;
export const trending = false as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
