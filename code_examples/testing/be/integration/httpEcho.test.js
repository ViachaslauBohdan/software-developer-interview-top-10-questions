/**
 * Integration: real HTTP server + real request (same process).
 * Run: node --test httpEcho.test.js
 *
 * Common tools: Supertest (Express/Fastify), node:test + fetch (as here),
 * Vitest with `request` helper.
 */
import http from 'node:http';
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';

function createEchoServer() {
  const server = http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
      return;
    }
    res.writeHead(404);
    res.end();
  });
  return server;
}

describe('echo HTTP server', () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createEchoServer();
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  it('returns health JSON', async () => {
    const res = await fetch(`${baseUrl}/health`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.deepEqual(body, { ok: true });
  });
});
