export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "When would you choose Lambda vs EC2 for a backend?" as const;

export function answer(): string {
  return "Choose Lambda for event-driven elastic workloads; choose EC2 for persistent processes and full runtime control.";
}

export function shortExample(): string {
  return "// Lambda: handler called per request\nexport const handler = async () => ({ statusCode: 200, body: 'hello from lambda' });\n\n// EC2: long-running Node server\napp.listen(3000, () => console.log('running on EC2 instance'));";
}
