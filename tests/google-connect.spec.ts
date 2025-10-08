// tests/google-connect.spec.ts
import { test, expect, chromium } from '@playwright/test';

/*
あらかじめ以下のコマンドを実行して、Chrome（WSL の Ubuntu 上）を手動で起動しておきます。
その後、Playwright などのテストを実施します。

google-chrome \
	--remote-debugging-address=127.0.0.1 \
	--remote-debugging-port=9222 \
	--user-data-dir=$HOME/playwright-prof/[path to profile] &
*/

test('既存Chromeに接続してGmailを開く', async () => {
	// 既存 Chrome(9222)に CDP: Chrome DevTools Protocol で接続
  const browser = await chromium.connectOverCDP('http://localhost:9222');
	// 既存コンテキストを取得（なければ新規）
  const context = browser.contexts()[0] ?? await browser.newContext();
  const page = await context.newPage();
	// すでにログイン済みなら Gmail をそのまま開ける
  await page.goto('https://mail.google.com/');
  await expect(page).toHaveTitle(/Gmail/i);

  // 使い終わったら接続だけ切る（Chrome自体はあなたが閉じる）
  await browser.close();	
});
