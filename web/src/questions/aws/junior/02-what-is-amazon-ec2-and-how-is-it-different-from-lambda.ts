export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is Amazon EC2 and how is it different from Lambda?" as const;

export function answer(): string {
  return "EC2 provides virtual servers with full OS/runtime control, ideal for long-running or specialized workloads.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
