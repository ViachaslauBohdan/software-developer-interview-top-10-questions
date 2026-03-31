export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do you integrate SQS/SNS with Lambda safely?" as const;
export const tags = ["aws","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "For \"How do you integrate SQS/SNS with Lambda safely\", give a clear definition, outline key trade-offs, and finish with one practical production-ready pattern.";
}

export function shortExample(): string {
  return "// Lambda subscribed to SQS queue\nexport const handler = async (event) => {\n  for (const record of event.Records) {\n    const payload = JSON.parse(record.body);\n    // handle message\n  }\n};";
}
