/**
 * SQS-triggered Lambda receives a batch of records.
 * - Process each message; failed items can be returned for partial batch failure (batchItemFailures).
 * - Design handlers to be idempotent: the same message may be delivered more than once.
 */

exports.handler = async (event) => {
  const failures = [];

  for (const record of event.Records ?? []) {
    try {
      const body = JSON.parse(record.body);
      console.log("process message", record.messageId, body);
      // await saveToDatabase(body)
    } catch (err) {
      console.error("message failed", record.messageId, err.message);
      failures.push({ itemIdentifier: record.messageId });
    }
  }

  // Lambda partial batch response (SQS event source mapping)
  return { batchItemFailures: failures };
};
