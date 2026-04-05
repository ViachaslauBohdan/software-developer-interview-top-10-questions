/**
 * Pure validation — ideal for fast unit tests.
 */
export function validateEmail(value) {
  if (typeof value !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
