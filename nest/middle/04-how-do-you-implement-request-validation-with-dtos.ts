export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you implement request validation with DTOs?" as const;

export function answer(): string {
  return "For \"How do you implement request validation with DTOs\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
