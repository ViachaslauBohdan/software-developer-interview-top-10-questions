export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you architect observability in NEST while reducing operational cost?" as const;
export const tags = ["nest","senior","observability"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you architect observability in NEST while reducing operational cost\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
