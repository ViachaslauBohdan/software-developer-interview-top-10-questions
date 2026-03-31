export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you integrate SQS or SNS with Lambda?" as const;

export function answer(): string {
  return "How do you integrate SQS or SNS with Lambda: explain the core concept, key trade-offs, and one production-ready implementation pattern.";
}

export function shortExample(): string {
  return "// Lambda subscribed to SQS queue\nexport const handler = async (event) => {\n  for (const record of event.Records) {\n    const payload = JSON.parse(record.body);\n    // handle message\n  }\n};";
}
