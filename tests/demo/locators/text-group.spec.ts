import { test, expect } from '@playwright/test';

test('Text group tests', async ({ page }) => {
  await page.goto('http://localhost:3002/demo/locators');

  await expect(page.getByText('Welcome, John')).toBeVisible();
  await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
  await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();

});
