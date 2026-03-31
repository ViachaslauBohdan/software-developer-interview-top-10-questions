export const technology = 'react' as const;
export const level = 'senior' as const;
export const question = "How do you design a scalable React architecture for a large product?" as const;

export function answer(): string {
  return "Scale React by organizing by features, separating domain/UI/state concerns, enforcing boundaries, and standardizing conventions across teams.";
}

export function shortExample(): string {
  return "// feature-first boundaries\nsrc/\n  features/billing/{ui,api,state}\n  features/auth/{ui,api,state}\n  shared/{ui,lib}";
}
