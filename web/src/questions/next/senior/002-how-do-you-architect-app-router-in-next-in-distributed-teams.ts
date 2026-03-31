export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you set server/client boundaries for low JS cost?" as const;
export const tags = ["next","senior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Push data fetching and heavy logic to server components; keep client components minimal and interactive only.";
}

export function shortExample(): string {
  return "// Server component fetches heavy data:\nexport default async function Page() {\n  const report = await getReport();\n  return <InteractiveChart initialData={report.points} />; // client component\n}";
}
