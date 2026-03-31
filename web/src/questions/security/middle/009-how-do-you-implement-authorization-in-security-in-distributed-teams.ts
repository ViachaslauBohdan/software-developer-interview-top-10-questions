export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "What common CORS misconfigurations create vulnerabilities?" as const;
export const tags = ["security","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"What common CORS misconfigurations create vulnerabilities\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "app.use(cors({\n  origin: ['https://app.example.com'],\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));";
}
