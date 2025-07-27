#!/usr/bin/env node

/**
 * ファビコン生成・検証スクリプト
 * 実行方法: node scripts/generate-favicon.js
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 薪窯Pizza POLE POLE - ファビコン生成・検証開始\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// ファビコンファイルの存在確認
function checkFaviconFiles() {
  console.log('📁 ファビコンファイル確認...');
  
  const faviconPaths = [
    'public/favicon.ico',
    'src/app/favicon.ico',
    'public/images/Logo1.png'
  ];
  
  const results = {
    existing: [],
    missing: []
  };
  
  faviconPaths.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      results.existing.push({
        path: filePath,
        size: `${Math.round(stats.size / 1024)}KB`,
        modified: stats.mtime.toISOString().split('T')[0]
      });
      console.log(`✅ ${filePath} (${Math.round(stats.size / 1024)}KB)`);
    } else {
      results.missing.push(filePath);
      console.log(`❌ ${filePath} - 見つかりません`);
    }
  });
  
  return results;
}

// HTMLでのファビコン参照確認
function checkFaviconReferences() {
  console.log('\n🔍 HTML内のファビコン参照確認...');
  
  const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
  
  if (fs.existsSync(layoutPath)) {
    const content = fs.readFileSync(layoutPath, 'utf-8');
    
    const faviconPatterns = [
      /rel="icon"/g,
      /rel="apple-touch-icon"/g,
      /rel="shortcut icon"/g,
      /favicon\.ico/g,
      /Logo1\.png/g
    ];
    
    faviconPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        console.log(`✅ ${pattern.source}: ${matches.length}個の参照`);
      } else {
        console.log(`❌ ${pattern.source}: 参照なし`);
      }
    });
  }
}

// Web Manifest生成
function generateWebManifest() {
  console.log('\n📱 Web Manifest生成...');
  
  const manifest = {
    name: "薪窯Pizza POLE POLE",
    short_name: "POLE POLE",
    description: "東広島・西条の本格薪窯ピザレストラン",
    start_url: "/",
    display: "standalone",
    background_color: "#e6eddf",
    theme_color: "#9baf87",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/Logo1.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/images/Logo1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    categories: ["food", "restaurant"],
    lang: "ja",
    dir: "ltr"
  };
  
  const manifestPath = path.join(process.cwd(), 'public/manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Web Manifest生成完了: public/manifest.json');
  
  return manifest;
}

// ファビコンテストHTML生成
function generateFaviconTest() {
  console.log('\n🧪 ファビコンテスト用HTML生成...');
  
  const testHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>薪窯Pizza POLE POLE - ファビコンテスト</title>
    
    <!-- ファビコン設定 -->
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" href="/images/Logo1.png" type="image/png" sizes="192x192" />
    <link rel="apple-touch-icon" href="/images/Logo1.png" sizes="180x180" />
    <link rel="mask-icon" href="/images/Logo1.png" color="#9baf87" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#9baf87" />
    <meta name="msapplication-TileColor" content="#9baf87" />
    <meta name="msapplication-TileImage" content="/images/Logo1.png" />
    
    <style>
        body {
            font-family: 'Klee One', cursive;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #e6eddf;
            color: #333;
        }
        .test-section {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .favicon-preview {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        .favicon-preview img {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <h1>🍕 薪窯Pizza POLE POLE - ファビコンテスト</h1>
    
    <div class="test-section">
        <h2>📋 ファビコン確認項目</h2>
        <ul>
            <li>ブラウザタブにロゴが表示されているか？</li>
            <li>お気に入り登録時にロゴが表示されるか？</li>
            <li>モバイルでホーム画面に追加時にロゴが表示されるか？</li>
            <li>異なるブラウザ（Chrome、Firefox、Safari、Edge）で正常か？</li>
        </ul>
    </div>
    
    <div class="test-section">
        <h2>🎨 ファビコンプレビュー</h2>
        <div class="favicon-preview">
            <img src="/favicon.ico" width="32" height="32" alt="Favicon" />
            <span>32x32 ICO形式</span>
        </div>
        <div class="favicon-preview">
            <img src="/images/Logo1.png" width="192" height="192" style="width: 32px; height: 32px;" alt="PNG Icon" />
            <span>192x192 PNG形式</span>
        </div>
    </div>
    
    <div class="test-section">
        <h2>📱 PWA対応</h2>
        <p>Web Manifest: <a href="/manifest.json" target="_blank">manifest.json</a></p>
        <p>このページをモバイルでホーム画面に追加して、アイコンを確認してください。</p>
    </div>
    
    <div class="test-section">
        <h2>🔗 メインサイト</h2>
        <p><a href="/">薪窯Pizza POLE POLE メインサイトへ</a></p>
    </div>
</body>
</html>`;
  
  const testPath = path.join(process.cwd(), 'public/favicon-test.html');
  fs.writeFileSync(testPath, testHTML);
  console.log('✅ ファビコンテストページ生成完了: public/favicon-test.html');
}

// メイン実行
function main() {
  const fileResults = checkFaviconFiles();
  checkFaviconReferences();
  generateWebManifest();
  generateFaviconTest();
  
  console.log('\n📊 ファビコン設定完了サマリー:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  console.log(`\n✅ 検出されたファイル (${fileResults.existing.length}):`);
  fileResults.existing.forEach(file => {
    console.log(`  • ${file.path} (${file.size}, 更新: ${file.modified})`);
  });
  
  if (fileResults.missing.length > 0) {
    console.log(`\n❌ 不足ファイル (${fileResults.missing.length}):`);
    fileResults.missing.forEach(file => {
      console.log(`  • ${file}`);
    });
  }
  
  console.log('\n🎯 次のステップ:');
  console.log('1. ビルド・デプロイを実行');
  console.log('2. https://pizzapolepole.com/favicon-test.html でテスト');
  console.log('3. 各ブラウザでファビコン表示確認');
  console.log('4. モバイルでPWAインストールテスト');
  
  console.log('\n🔧 トラブルシューティング:');
  console.log('• ブラウザキャッシュをクリア');
  console.log('• ハードリロード (Ctrl+Shift+R)');
  console.log('• プライベートモードで確認');
  console.log('• 24時間後に再確認（DNS伝播）');
}

main();
