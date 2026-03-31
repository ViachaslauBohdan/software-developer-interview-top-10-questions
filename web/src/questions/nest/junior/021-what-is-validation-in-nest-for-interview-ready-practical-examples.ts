export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What is validation in NEST for interview-ready practical examples?" as const;
export const tags = ["nest","junior","validation"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"What is validation in NEST for interview-ready practical examples\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
