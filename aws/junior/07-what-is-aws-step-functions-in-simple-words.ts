export const technology = 'aws' as const;
export const level = 'junior' as const;
export const question = "What is AWS Step Functions in simple words?" as const;

export function answer(): string {
  return "Step Functions orchestrate distributed workflows with explicit state transitions and retries.";
}

export function shortExample(): string {
  return "// Fragment of Step Functions state machine (Amazon States Language)\n{\n  \"Comment\": \"Simple two-step flow\",\n  \"StartAt\": \"Validate\",\n  \"States\": {\n    \"Validate\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:REGION:ACCT:function:validate\", \"Next\": \"Process\" },\n    \"Process\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:REGION:ACCT:function:process\", \"End\": true }\n  }\n}";
}
