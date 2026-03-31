export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is AWS Lambda and when would you use it?" as const;

export function answer(): string {
  return "AWS Lambda is serverless compute that runs code on demand without managing servers, billed per execution duration.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
