export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you implement robust request validation?" as const;
export const tags = ["nest","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you implement robust request validation\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
