export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What is the purpose of Link in Next.js?" as const;

export function answer(): string {
  return "`next/link` enables client-side navigation with prefetch support, avoiding full page reloads.";
}

export function shortExample(): string {
  return "import Link from 'next/link';\nexport default function Nav() {\n  return <Link href=\"/dashboard\">Go to dashboard</Link>;\n}";
}
