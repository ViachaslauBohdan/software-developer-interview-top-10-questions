/**
 * Basic Lambda handler (Node.js).
 * - event: trigger payload (shape varies by service)
 * - context: AWS Lambda context (requestId, getRemainingTimeInMillis, etc.)
 *
 * Return value is serialized for some integrations; for API Gateway v2 you often return { statusCode, body }.
 */

exports.handler = (event, context) => {
  // Log correlation id for tracing in CloudWatch
  console.log("requestId", context.requestId);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "ok", received: event }),
  };
};
