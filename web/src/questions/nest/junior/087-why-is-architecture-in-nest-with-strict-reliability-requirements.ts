export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "Why is architecture in NEST with strict reliability requirements?" as const;
export const tags = ["nest","junior","architecture"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"Why is architecture in NEST with strict reliability requirements\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}";
}
