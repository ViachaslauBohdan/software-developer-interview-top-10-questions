/**
 * Run: node --test userClient.test.js
 * Integration here = your code + fetch (mocked). Real browser optional.
 * Common tools: Vitest + MSW, Jest + fetch mock, Testing Library + MSW.
 */
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { fetchUserName } from './userClient.js';

describe('fetchUserName (integration-style)', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('parses name from JSON response', async () => {
    globalThis.fetch = async () =>
      new Response(JSON.stringify({ name: 'Ada' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });

    const name = await fetchUserName('https://api.example.com', '1');
    assert.equal(name, 'Ada');
  });
});
