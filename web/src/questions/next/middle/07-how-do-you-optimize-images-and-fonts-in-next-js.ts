export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do you optimize images and fonts in Next.js?" as const;

export function answer(): string {
  return "Use `next/image` and `next/font` for automatic optimization, better caching, and improved web vitals.";
}

export function shortExample(): string {
  return "import Image from 'next/image';\nimport { Inter } from 'next/font/google';\nconst inter = Inter({ subsets: ['latin'] });\nexport default function Hero() {\n  return <Image className={inter.className} src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} priority />;\n}";
}
