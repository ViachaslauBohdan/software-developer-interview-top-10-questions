export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What are Controller and Service in NestJS?" as const;

export function answer(): string {
  return "Controllers handle transport layer requests; services contain business logic reusable across controllers.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
