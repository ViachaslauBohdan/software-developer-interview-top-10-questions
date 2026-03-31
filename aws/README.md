# AWS Interview Essentials (Lambda, EC2, API Gateway, Step Functions)

## Most crucial things to understand

1. Execution models
- Lambda for event-driven, short-lived compute.
- EC2 for long-running, full-control VMs and custom runtimes.

2. Serverless integration patterns
- API Gateway + Lambda for HTTP APIs.
- EventBridge/SQS/SNS as async triggers and decoupling layers.

3. Step Functions orchestration
- Orchestrating multi-step workflows across Lambdas and services.
- Error handling, retries, compensation, and human approval steps.

4. IAM and security boundaries
- IAM roles for Lambda and EC2, least privilege.
- Resource policies for API Gateway, Lambda, and Step Functions.

5. Networking and connectivity
- VPCs, subnets, security groups for EC2 and private Lambdas.
- Connecting to RDS/DynamoDB/EKS and on-prem via VPN/Direct Connect.

6. Observability
- CloudWatch Logs and Metrics, X-Ray traces.
- Structured logs and correlation IDs across services.

7. Cost and scaling behavior
- Lambda concurrency, cold starts, and pricing model.
- EC2 instance types, autoscaling groups, and reserved/savings plans.

8. Deployment strategies
- Infrastructure as Code with CDK/CloudFormation/Terraform.
- Safe rollouts with stages, canaries, and traffic shifting.

## Top interview questions — Middle

1. When would you choose Lambda vs EC2 for a backend?
2. How do you design a simple REST API with API Gateway and Lambda?
3. How do you secure an API Gateway endpoint?
4. What are cold starts in Lambda and how do you mitigate them?
5. How do you connect a Lambda function to a VPC and why?
6. How do you integrate SQS/SNS with Lambda?
7. How do you use Step Functions to orchestrate multiple Lambdas?
8. How do you monitor and debug production Lambdas?
9. How do you design idempotent Lambdas for retries?
10. How do you control costs for a serverless API?

## Top interview questions — Senior

1. How do you design a multi-region, highly available serverless architecture?
2. How do you structure IAM roles and policies for a large Lambda-based system?
3. How do you design Step Functions workflows for complex business processes?
4. How do you handle cross-account and cross-region integrations?
5. How do you choose between Lambda, Fargate, and EC2 for compute?
6. How do you approach observability and tracing across API Gateway, Lambda, and Step Functions?
7. How do you design safe deployments and rollbacks for Lambda and API Gateway?
8. How do you design for data consistency and exactly-once-like behavior with SQS/Lambda/Step Functions?
9. How do you secure public APIs at the edge (API Gateway, CloudFront, WAF, Cognito)?
10. How do you control and forecast AWS costs for a fast-growing serverless platform?
