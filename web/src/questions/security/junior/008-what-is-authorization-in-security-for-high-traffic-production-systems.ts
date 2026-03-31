export const technology = 'security' as const;
export const level = 'junior' as const;
export const question = "What is CORS in simple terms?" as const;
export const tags = ["security","junior","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "CORS is browser-enforced cross-origin policy that controls which frontends can call your APIs.";
}

export function shortExample(): string {
  return "app.use(cors({\n  origin: ['https://app.example.com'],\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));";
}
