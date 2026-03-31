export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you implement advanced authorization (RBAC/ABAC)?" as const;
export const tags = ["nest","senior","top-common","security"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you implement advanced authorization (RBAC/ABAC)\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
