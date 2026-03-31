export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What are the basic triggers that can invoke a Lambda function?" as const;

export function answer(): string {
  return "Lambda can be triggered by API Gateway, SQS, SNS, EventBridge, S3, DynamoDB Streams, and more.";
}

export function shortExample(): string {
  return "// Basic Lambda handler\nexport const handler = async () => {\n  return { statusCode: 200, body: JSON.stringify({ ok: true }) };\n};";
}
