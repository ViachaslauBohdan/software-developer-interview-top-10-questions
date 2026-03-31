export const technology = 'nest' as const;
export const level = 'middle' as const;
export const question = "How do you debug dependency injection in NEST with strict reliability requirements?" as const;
export const tags = ["nest","middle","dependency-injection"] as const;
export const trending = false as const;

export function answer(): string {
  return "Nest DI resolves providers from module context and injects them via constructor for testable architecture.";
}

export function shortExample(): string {
  return "@Injectable()\nclass UsersService {}\n\n@Controller('users')\nclass UsersController {\n  constructor(private readonly usersService: UsersService) {}\n}";
}
