import { test, expect } from '@playwright/test';

test('Фильтр по диапазону цен', async ({ page }) => {
  await page.goto('https://cerulean-praline-8e5aa6.netlify.app/list');

  await page.fill('input[placeholder="Мин цена"]', '100');
  await page.fill('input[placeholder="Макс цена"]', '1000');
  await page.click('button:has-text("Применить")');

  const prices = await page.locator('.price').allTextContents();

  for (const priceText of prices) {
    const price = parseInt(priceText.replace(/\D/g, ''));
    expect(price).toBeGreaterThanOrEqual(100);
    expect(price).toBeLessThanOrEqual(1000);
  }
});
