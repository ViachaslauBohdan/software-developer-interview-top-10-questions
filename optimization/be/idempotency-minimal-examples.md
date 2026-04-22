# Idempotency: Minimal Real Examples

## What Is It
Idempotency means retrying the same request gives the same final result and does not duplicate side effects.

## Why It Matters
- Client times out and retries.
- Mobile network drops and app resends.
- Queue/broker delivers the same message again.

Without idempotency: duplicate charges, duplicate orders, duplicate processing.

## Example 1: Payment API (`POST /payments`)

Request:
- Header: `Idempotency-Key: 2f5d2d5a-6e63-4c5f-9c11-4b7f6e2a9a55`
- Body: `{ "orderId": "o-101", "amount": 49.99 }`

Behavior:
1. First request with this key: charge card, store result.
2. Retry with same key and same body: return stored result, do not charge again.
3. Same key with different body: return `409 Conflict`.

## Example 2: Create Order (`POST /orders`)

Client sends:
- `Idempotency-Key: 3c8b...`
- `{ "cartId": "c-77" }`

Server side:
- Table has `UNIQUE(idempotency_key)`.
- Insert order once.
- If retry hits unique constraint, fetch existing order and return it.

Result: one logical order even if request is sent multiple times.

## Example 3: Queue Consumer (at-least-once delivery)

Message:
- `messageId: m-9001`

Consumer flow:
1. Check `processed_message_ids` store for `m-9001`.
2. If already processed, skip.
3. If new, process and record `m-9001` atomically.

Result: duplicate deliveries do not repeat side effects.

## Minimal Rules
- Use `Idempotency-Key` for retryable write operations.
- Store operation state/result with TTL (`processing`, `succeeded`, `failed`).
- Add DB-level uniqueness as a second guard.
- Make external side effects replay-safe.
