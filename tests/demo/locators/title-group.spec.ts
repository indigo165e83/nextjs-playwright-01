import { test, expect } from '@playwright/test';

test('Title group tests', async ({ page }) => {
  await page.goto('http://localhost:3002/demo/locators');

  await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

});
