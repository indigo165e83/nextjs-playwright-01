# 動作確認用サイト

下記を使用しています。
https://nextjs-playwright-01.indigo5d5d8d.com/

# Chrome（WSL の Ubuntu 上）を手動で起動しておく手順

あらかじめ以下のコマンドを実行して、Chrome（WSL の Ubuntu 上）を手動で起動しておきます。  
その後、Playwright などのテストを実施します。

```bash
google-chrome \
  --remote-debugging-address=127.0.0.1 \
  --remote-debugging-port=9222 \
  --user-data-dir=$HOME/playwright-prof/[path to profile] &
```
## 各オプションの説明

---

### `google-chrome`
通常の Chrome を起動します（WSL の Ubuntu 上）。

---

### `--remote-debugging-address=127.0.0.1`
セキュリティのために、**ローカルのみ（127.0.0.1）**にポートを開く設定です。  
外部からの接続を防ぐため、この指定を付けるのがおすすめです。

---

### `--remote-debugging-port=9222`
DevTools のリモート接続口を **9222 番ポート**で開きます。  
Playwright はこのポート経由（CDP: Chrome DevTools Protocol）で  
既存の Chrome に「後から接続」できます。

---

### `--user-data-dir=$HOME/[path to profile]`
専用プロファイル（履歴・Cookie・拡張などの保存場所）を  
`$HOME/playwright-prof/[path to profile]` に分けて使用します。

- 普段のプロファイルを壊さない  
- 「プロファイル使用中」ロックを回避できる  
- ユーザーアカウントごとにフォルダを分けるのがおすすめ  
- 初回実行時に自動でフォルダが作成されます

---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
