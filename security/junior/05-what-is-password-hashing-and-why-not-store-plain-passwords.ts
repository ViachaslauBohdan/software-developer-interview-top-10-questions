export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is password hashing and why not store plain passwords?" as const;

export function answer(): string {
  return "Hash passwords with slow one-way algorithms (bcrypt/argon2) plus salts; never store plaintext passwords.";
}

export function shortExample(): string {
  return "import bcrypt from 'bcryptjs';\nconst hash = await bcrypt.hash(password, 12);\nconst ok = await bcrypt.compare(password, hash);";
}
