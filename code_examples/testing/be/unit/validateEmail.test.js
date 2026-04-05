/**
 * Run: node --test validateEmail.test.js
 * Common tools: Vitest, Jest, Mocha, Ava — same pattern on the server.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail } from './validateEmail.js';

describe('validateEmail', () => {
  it('accepts a simple address', () => {
    assert.equal(validateEmail('a@b.co'), true);
  });

  it('rejects invalid input', () => {
    assert.equal(validateEmail('not-an-email'), false);
    assert.equal(validateEmail(null), false);
  });
});
