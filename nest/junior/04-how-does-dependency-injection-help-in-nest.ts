export const technology = 'nest' as const;
export const level = 'junior' as const;
export const question = "How does dependency injection help in Nest?" as const;

export function answer(): string {
  return "Nest DI resolves providers from module context and injects them via constructor for testable architecture.";
}

export function shortExample(): string {
  return "@Injectable()\nclass UsersService {}\n\n@Controller('users')\nclass UsersController {\n  constructor(private readonly usersService: UsersService) {}\n}";
}
