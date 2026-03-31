export const technology = 'security' as const;
export const level = 'middle' as const;
export const question = "What CORS mistakes are common and how do you avoid them?" as const;

export function answer(): string {
  return "For \"What CORS mistakes are common and how do you avoid them\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "app.use(cors({\n  origin: ['https://app.example.com'],\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));";
}
