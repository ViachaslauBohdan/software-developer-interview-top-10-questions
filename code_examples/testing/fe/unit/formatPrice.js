/**
 * Pure UI helper — easy to unit test (no DOM, no network).
 */
export function formatPrice(amount, currency = 'USD') {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    throw new TypeError('amount must be a number');
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
