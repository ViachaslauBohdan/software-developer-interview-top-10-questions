/**
 * End-to-end: real browser drives the app (or a static page).
 *
 * Setup once in this folder:
 *   npm init -y
 *   npm i -D @playwright/test
 *   npx playwright install
 *
 * Run:
 *   npx playwright test playwright.spec.js
 *
 * Common tools: Playwright, Cypress, WebdriverIO.
 */
import { test, expect } from '@playwright/test';

test('example.com has a title', async ({ page }) => {
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);
});
