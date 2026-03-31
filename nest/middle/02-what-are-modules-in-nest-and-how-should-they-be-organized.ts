export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "What are modules in Nest and how should they be organized?" as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
