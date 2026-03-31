export const technology = 'next' as const;
export const level = 'senior' as const;
export const question = "How do you design rollout strategy for Next.js breaking changes across multiple teams?" as const;

export function answer(): string {
  return "Roll out breaking changes behind feature flags, canary routes, and monitoring with rollback playbooks.";
}

export function shortExample(): string {
  return "if (process.env.NEXT_PUBLIC_NEW_CHECKOUT === '1') {\n  return <NewCheckout />;\n}\nreturn <LegacyCheckout />;";
}
