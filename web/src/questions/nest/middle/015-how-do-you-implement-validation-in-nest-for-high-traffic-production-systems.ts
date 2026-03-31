export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you implement validation in NEST for high-traffic production systems?" as const;
export const tags = ["nest","middle","validation"] as const;
export const trending = false as const;

export function answer(): string {
  return "For \"How do you implement validation in NEST for high-traffic production systems\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
