export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you debug testing in NEST for high-traffic production systems?" as const;
export const tags = ["nest","middle","testing"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you debug testing in NEST for high-traffic production systems\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
