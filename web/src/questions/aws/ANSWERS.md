# AWS Answers With Short Code Examples

## Middle

1) Lambda vs EC2?
```ts
// Lambda: event-driven function
export const handler = async () => ({ statusCode: 200, body: 'ok' });
// EC2: long-running service process
app.listen(3000);
```

2) REST API with API Gateway + Lambda?
```ts
export const handler = async (event: any) => {
  return { statusCode: 200, body: JSON.stringify({ path: event.rawPath }) };
};
```

3) Secure API Gateway endpoint?
```txt
Use JWT/Cognito authorizer + WAF + throttling + least-privilege IAM.
```

4) Mitigate cold starts?
```ts
// Keep package small, avoid heavy init, and optionally provision concurrency.
```

5) Lambda in VPC?
```txt
Attach Lambda to private subnets + security groups when accessing private RDS/ElastiCache.
```

6) SQS/SNS with Lambda?
```ts
export const handler = async (event: any) => {
  for (const record of event.Records) console.log(record.body);
};
```

7) Step Functions orchestration?
```json
{ "StartAt": "Validate", "States": { "Validate": { "Type": "Task", "Next": "Process" }, "Process": { "Type": "Task", "End": true } } }
```

8) Monitor/debug Lambdas?
```ts
console.log(JSON.stringify({ traceId, route, durationMs }));
// CloudWatch metrics + X-Ray traces
```

9) Idempotent retries?
```ts
// Use idempotency key (requestId/orderId) to skip duplicates.
```

10) Control serverless cost?
```txt
Set concurrency limits, right-size memory, tune timeouts, and use metrics/alerts on spend.
```

## Senior

1) Multi-region HA design?
```txt
Active-active API Gateway + Lambda with Route53 failover and region-local data strategy.
```

2) IAM at scale?
```txt
Role-per-service, least privilege, permission boundaries, and policy linting in CI.
```

3) Complex Step Functions?
```json
{ "Type": "Map", "MaxConcurrency": 20 }
```

4) Cross-account/cross-region integrations?
```txt
Use STS AssumeRole and explicit resource policies with scoped principals.
```

5) Lambda vs Fargate vs EC2?
```txt
Lambda: burst/event; Fargate: containerized services; EC2: max control/specialized workloads.
```

6) Observability across gateway/lambda/workflow?
```ts
// propagate correlation-id through headers + state machine input
```

7) Safe deployments/rollbacks?
```txt
Use Lambda aliases + weighted traffic shifting + automatic rollback on alarms.
```

8) Exactly-once-like behavior?
```txt
Use SQS FIFO or idempotency keys + dedupe store + retry-safe handlers.
```

9) Secure public APIs at edge?
```txt
CloudFront + WAF + API Gateway auth + strict rate limits + bot protections.
```

10) Forecast costs?
```txt
Tag resources, allocate cost by team, define budgets/anomaly alerts, review unit economics.
```
