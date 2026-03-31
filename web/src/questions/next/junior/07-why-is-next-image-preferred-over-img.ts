export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "Why is next/image preferred over img?" as const;

export function answer(): string {
  return "`next/image` provides automatic optimization, responsive sizing, lazy loading, and better Core Web Vitals defaults.";
}

export function shortExample(): string {
  return "import Image from 'next/image';\nexport default function Hero() {\n  return <Image src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} priority />;\n}";
}
