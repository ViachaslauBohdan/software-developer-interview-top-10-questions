/**
 * End-to-end (API): full path through HTTP + in-memory "store" — no DB for simplicity.
 * Run: node --test orderApi.test.js
 *
 * In real projects, BE "e2e" often means: real server + real DB/migrations + HTTP
 * (or k6/Grafana for load). Tools: Supertest + test DB, Testcontainers, Playwright
 * APIRequestContext, Postman/Newman collections.
 */
import http from 'node:http';
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';

function createOrderApp() {
  /** @type {Map<string, { id: string, item: string }>} */
  const orders = new Map();

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');

    if (req.method === 'POST' && url.pathname === '/orders') {
      let raw = '';
      for await (const chunk of req) raw += chunk;
      const { item } = JSON.parse(raw);
      const id = String(orders.size + 1);
      orders.set(id, { id, item });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ id }));
      return;
    }

    if (req.method === 'GET' && url.pathname.startsWith('/orders/')) {
      const id = url.pathname.replace('/orders/', '');
      const order = orders.get(id);
      if (!order) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(order));
      return;
    }

    res.writeHead(404);
    res.end();
  });

  return server;
}

describe('order API e2e', () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createOrderApp();
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  it('creates then fetches an order', async () => {
    const create = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: 'Coffee' }),
    });
    assert.equal(create.status, 201);
    const { id } = await create.json();

    const get = await fetch(`${baseUrl}/orders/${id}`);
    assert.equal(get.status, 200);
    const order = await get.json();
    assert.equal(order.item, 'Coffee');
  });
});
