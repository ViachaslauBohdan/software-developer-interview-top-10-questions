export const technology = 'aws' as const;
export const level = 'middle' as const;
export const question = "How do Step Functions improve workflow reliability?" as const;
export const tags = ["aws","middle","top-common"] as const;
export const trending = true as const;

export function answer(): string {
  return "Step Functions orchestrate distributed tasks with retries, branching, timeouts, and failure handling.";
}

export function shortExample(): string {
  return "// Fragment of Step Functions state machine (Amazon States Language)\n{\n  \"Comment\": \"Simple two-step flow\",\n  \"StartAt\": \"Validate\",\n  \"States\": {\n    \"Validate\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:REGION:ACCT:function:validate\", \"Next\": \"Process\" },\n    \"Process\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:REGION:ACCT:function:process\", \"End\": true }\n  }\n}";
}
