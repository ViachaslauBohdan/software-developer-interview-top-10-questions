export const technology = 'next' as const;
export const level = 'junior' as const;
export const question = "What are layout.tsx files used for?" as const;

export function answer(): string {
  return "`layout.tsx` defines shared UI shell for route segments and persists between page navigations.";
}

export function shortExample(): string {
  return "// app/dashboard/layout.tsx\nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return <section><Sidebar />{children}</section>;\n}";
}
