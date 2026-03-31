export const technology = 'next' as const;
export const level = 'middle' as const;
export const question = "How do server actions work and where can they fail?" as const;
export const tags = ["next","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Server Actions execute on server, reduce API boilerplate, but require careful auth, validation, and error boundaries.";
}

export function shortExample(): string {
  return "'use server';\nexport async function createPost(formData: FormData) {\n  // validate + persist on server\n}\n// invoke from <form action={createPost}>";
}
