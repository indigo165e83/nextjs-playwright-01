import { test, expect } from '@playwright/test';

test('Test Id group tests', async ({ page }) => {
  await page.goto('/demo/locators');

  await page.getByTestId('directions').click();

});
