export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you benchmark and control hydration cost at enterprise scale?" as const;

export function answer(): string {
  return "Measure hydration budget per route, move logic server-side, and isolate interactivity to small client islands.";
}

export function shortExample(): string {
  return "// keep chart client-only; fetch/prepare data on server\nexport default async function Page() {\n  const data = await getData();\n  return <ChartClient data={data} />;\n}";
}
