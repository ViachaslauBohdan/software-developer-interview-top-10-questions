export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is the difference between synchronous and asynchronous Lambda invocation?" as const;

export function answer(): string {
  return "Sync invocation waits for result (API use-cases); async queues event and returns immediately.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
