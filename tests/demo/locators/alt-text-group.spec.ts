import { test, expect } from '@playwright/test';

test('Alt Text group tests', async ({ page }) => {
  await page.goto('http://localhost:3002/demo/locators');

  await page.getByAltText('playwright logo').click();

});
