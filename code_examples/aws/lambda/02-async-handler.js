/**
 * Async handler — use for any I/O (DB, HTTP, S3).
 * Benefit: readable stack traces; avoid mixing callbacks with Promises incorrectly.
 */

exports.handler = async (event, context) => {
  // Simulate async work (replace with real SDK calls)
  const data = await Promise.resolve({ userId: event.userId ?? "anonymous" });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, data }),
  };
};
