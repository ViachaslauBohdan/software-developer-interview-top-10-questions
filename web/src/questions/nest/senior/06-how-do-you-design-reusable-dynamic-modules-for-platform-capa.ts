export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you design reusable dynamic modules for platform capabilities?" as const;

export function answer(): string {
  return "Modules define bounded contexts by grouping controllers/providers and controlling exported dependencies.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
