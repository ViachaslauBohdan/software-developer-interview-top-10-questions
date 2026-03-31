export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "What is dependency injection in NEST for long-term maintainability?" as const;
export const tags = ["nest","junior","dependency-injection"] as const;
export const trending = false as const;

export function answer(): string {
  return "Nest DI resolves providers from module context and injects them via constructor for testable architecture.";
}

export function shortExample(): string {
  return "@Injectable()\nclass UsersService {}\n\n@Controller('users')\nclass UsersController {\n  constructor(private readonly usersService: UsersService) {}\n}";
}
