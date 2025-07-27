# GitHub Pages デプロイ手順

## 🚀 デプロイ前の準備

### 1. GitHub Secrets 設定
GitHub リポジトリの **Settings → Secrets and variables → Actions** で以下を設定：

```
NEXT_PUBLIC_GA_ID = G-CLBZLTLG3H
```

### 2. GitHub Pages 設定
リポジトリの **Settings → Pages** で：
- Source: **GitHub Actions** を選択
- Custom domain（オプション）: `pizzapolepole.com`

### 3. デプロイ実行
```bash
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin develop
```

## 🔍 デプロイ確認

### 自動実行される処理：
1. ✅ Next.js アプリのビルド
2. ✅ 静的ファイルの生成（`out/` フォルダ）
3. ✅ GitHub Pages への自動デプロイ
4. ✅ Google Analytics の適用

### 確認事項：
- [ ] GitHub Actions でビルドが成功
- [ ] デプロイしたサイトが正常表示
- [ ] Google Analytics が動作
- [ ] 全ページが正しくルーティング
- [ ] 画像が正常表示

## 🌐 アクセス先

- **GitHub Pages URL**: `https://nagahiro-fujiwara.github.io/pizza-polepole/`
- **カスタムドメイン（設定時）**: `https://pizzapolepole.com`

## ⚠️ 重要な注意点

1. **環境変数**: `.env.local` はGitHub Actionsでは使用されません
2. **画像パス**: 全て絶対パス（`/images/...`）で記述済み
3. **ルーティング**: 静的サイトなので、すべてのルートが事前生成されます
4. **更新**: `develop` ブランチへのpushで自動デプロイ

## 🛠️ トラブルシューティング

### ビルドエラーの場合：
```bash
npm run build
```
でローカルビルドを確認

### デプロイエラーの場合：
GitHub Actions の **Actions** タブでログを確認
