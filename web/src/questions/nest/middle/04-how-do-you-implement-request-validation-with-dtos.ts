export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you implement request validation with DTOs?" as const;

export function answer(): string {
  return "How do you implement request validation with DTOs: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
