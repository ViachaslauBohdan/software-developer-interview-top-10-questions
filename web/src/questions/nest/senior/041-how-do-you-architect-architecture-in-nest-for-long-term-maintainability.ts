export const technology = 'nest' as const;
export const level = 'senior' as const;
export const question = "How do you architect architecture in NEST for long-term maintainability?" as const;
export const tags = ["nest","senior","architecture"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you architect architecture in NEST for long-term maintainability\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
