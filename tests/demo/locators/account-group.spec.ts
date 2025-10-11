import { test, expect } from '@playwright/test';

test('Account group tests', async ({ page }) => {
  await page.goto('http://localhost:3002/demo/locators');

  //await page.getByRole('button', { name: 'Sign in' }).click();
  const locator = page.getByRole('button', { name: 'Sign in' });
  await locator.hover();
  await locator.click(); 

  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  await page.getByRole('button', { name: /submit/i }).click();
  await page.getByLabel('Password').fill('secret');
  await page
    .getByPlaceholder('name@example.com')
    .fill('playwright@microsoft.com');
});
