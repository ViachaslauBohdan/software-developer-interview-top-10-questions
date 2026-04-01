/**
 * API Gateway (HTTP API / REST) proxy integration — typical shapes.
 * event.body is often a string; path/query come as maps or strings depending on API setup.
 */

exports.handler = async (event) => {
  const method = event.requestContext?.http?.method ?? event.httpMethod ?? "GET";
  const rawBody = event.body;
  let parsed = null;
  if (rawBody) {
    try {
      parsed = JSON.parse(rawBody);
    } catch {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid JSON body" }),
      };
    }
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ method, echo: parsed }),
  };
};
