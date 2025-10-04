import { test, expect } from '@playwright/test';

test('トップページが表示される', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  //await expect(page.getByRole('heading', { level: 1 })).toBeVisible();   // <h1>が見える
  await expect(page).toHaveTitle(/Create Next App/);                     // タイトル
});

test('Learnリンクが存在し、クリックできる', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const learnLink = page.getByRole('link', { name: 'Learn' });
  await expect(learnLink).toBeVisible();  // 表示されているか
  await expect(learnLink).toHaveAttribute('href', /^https:\/\/nextjs\.org\/learn(?:\?.*)?$/); // href確認
});

test('Learnリンクをクリックすると外部ページが開く', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // 新しいタブ（ウィンドウ）を待つ
    page.getByRole('link', { name: 'Learn' }).click(),
  ]);

  await newPage.waitForLoadState(); // ロード完了を待つ
  await expect(newPage).toHaveURL(/https:\/\/nextjs\.org\/learn(?:\?.*)?$/); // 新しいタブのURLを確認
});