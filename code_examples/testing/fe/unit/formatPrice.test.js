/**
 * Run: node --test formatPrice.test.js
 * Common tools: Vitest, Jest, Mocha — same idea (assert on pure functions).
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatPrice } from './formatPrice.js';

describe('formatPrice', () => {
  it('formats USD', () => {
    assert.equal(formatPrice(12.5), '$12.50');
  });

  it('rejects non-numbers', () => {
    assert.throws(() => formatPrice('12'), TypeError);
  });
});
