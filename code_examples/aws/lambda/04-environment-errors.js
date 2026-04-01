/**
 * Environment variables + consistent error mapping.
 * - Use env for config (table names, feature flags), not secrets in plain text in repo.
 * - Map unexpected errors to 500 with a safe client message; log details server-side only.
 */

const TABLE_NAME = process.env.TABLE_NAME ?? "default-table";

exports.handler = async (event) => {
  console.log(JSON.stringify({ level: "info", table: TABLE_NAME, path: event.rawPath }));

  try {
    if (!event.headers?.authorization) {
      return json(401, { error: "Unauthorized" });
    }
    // ... business logic that might throw
    return json(200, { table: TABLE_NAME, ok: true });
  } catch (error) {
    console.error(JSON.stringify({ level: "error", message: error.message, stack: error.stack }));
    return json(500, { error: "Internal error" });
  }
};

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
}
