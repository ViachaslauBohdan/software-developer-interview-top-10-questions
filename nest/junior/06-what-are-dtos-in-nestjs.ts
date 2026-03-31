export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What are DTOs in NestJS?" as const;

export function answer(): string {
  return "DTOs define API contracts and validation rules for request/response payloads.";
}

export function shortExample(): string {
  return "class CreateUserDto {\n  @IsEmail() email!: string;\n  @MinLength(8) password!: string;\n}";
}
