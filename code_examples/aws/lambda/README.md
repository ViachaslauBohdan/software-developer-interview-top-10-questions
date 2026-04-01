# AWS Lambda — Code Examples

Serverless functions that run on demand. These examples use **Node.js** handler style (common in interviews and production).

## What Lambda solves

- Run code without managing servers; AWS scales instances and bills per invocation duration.
- Integrates with API Gateway, SQS, DynamoDB streams, EventBridge, and more.

## Core concepts (interview-ready)

| Concept | Meaning |
|---|---|
| Handler | Entry function AWS invokes with `event` and `context`. |
| Event | Payload shape depends on trigger (HTTP, queue message, scheduled rule). |
| Context | Metadata: request id, remaining time, function name. |
| Cold start | First invocation after idle may be slower (JIT, container init). |
| Timeout | Hard limit per function; always set below worst-case work. |
| IAM | Function role controls what it can call (S3, DynamoDB, etc.). |

## Files in this folder

1. `01-handler-basics.js` — synchronous handler, simple return.
2. `02-async-handler.js` — `async` handler with `await` (preferred for I/O).
3. `03-api-gateway-http.js` — API Gateway HTTP API style request/response.
4. `04-environment-errors.js` — env vars, structured errors, logging pattern.
5. `05-sqs-event.js` — batch of SQS records (fan-out / queue worker).

## Best practices (short)

- Keep handlers thin: parse input, call services, map errors to HTTP or DLQ.
- Use **idempotency** for retries (SQS, EventBridge can deliver twice).
- Set memory and timeout from profiling; more memory can mean faster CPU (and different cost).
- Prefer **structured JSON logs** for CloudWatch Insights.

## Static React (SPA) on AWS

React builds to static files. Host them on **S3** behind **CloudFront**; use **Lambda** for APIs, not for serving the bundle.

- **S3:** [`../s3/README.md`](../s3/README.md)
- **CloudFront:** [`../cloudfront/README.md`](../cloudfront/README.md)
- **AWS index:** [`../README.md`](../README.md)
