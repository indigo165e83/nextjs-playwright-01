import { test, expect } from '@playwright/test';

test('Test Id group tests', async ({ page }) => {
  await page.goto('http://localhost:3002/demo/locators');

  await page.getByTestId('directions').click();

});
