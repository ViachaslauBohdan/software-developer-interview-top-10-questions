export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you build platform modules with dynamic-module patterns?" as const;
export const tags = ["nest","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
