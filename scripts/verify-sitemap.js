#!/usr/bin/env node

/**
 * Google Search Console サイトマップ登録確認スクリプト
 * 実行方法: node scripts/verify-sitemap.js
 */

const https = require('https');
const fs = require('fs');

const SITE_URL = 'https://pizzapolepole.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

console.log('🔍 SEO検証スクリプト開始...\n');

// 1. サイトマップの存在確認
function checkSitemap() {
  return new Promise((resolve, reject) => {
    console.log('📋 サイトマップ確認中...');
    
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          const urlCount = (data.match(/<url>/g) || []).length;
          console.log(`✅ サイトマップ正常: ${urlCount}ページ登録済み`);
          resolve(urlCount);
        } else {
          console.log(`❌ サイトマップエラー: ${res.statusCode}`);
          reject(new Error(`Sitemap error: ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log(`❌ サイトマップアクセス失敗: ${err.message}`);
      reject(err);
    });
  });
}

// 2. robots.txt確認
function checkRobotsTxt() {
  return new Promise((resolve, reject) => {
    console.log('🤖 robots.txt確認中...');
    
    https.get(`${SITE_URL}/robots.txt`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          const hasSitemap = data.includes('Sitemap:');
          console.log(`✅ robots.txt正常: ${hasSitemap ? 'サイトマップ記載あり' : 'サイトマップ記載なし'}`);
          resolve(hasSitemap);
        } else {
          console.log(`❌ robots.txtエラー: ${res.statusCode}`);
          reject(new Error(`Robots.txt error: ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log(`❌ robots.txtアクセス失敗: ${err.message}`);
      reject(err);
    });
  });
}

// 3. 構造化データ確認
function checkStructuredData() {
  return new Promise((resolve, reject) => {
    console.log('📊 構造化データ確認中...');
    
    https.get(SITE_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const jsonLdMatches = data.match(/application\/ld\+json/g) || [];
        const schemaCount = jsonLdMatches.length;
        console.log(`✅ 構造化データ: ${schemaCount}個のスキーマ実装済み`);
        resolve(schemaCount);
      });
    }).on('error', (err) => {
      console.log(`❌ 構造化データ確認失敗: ${err.message}`);
      reject(err);
    });
  });
}

// 4. ページ速度の簡易チェック
function checkPageSpeed() {
  return new Promise((resolve) => {
    console.log('⚡ ページ速度確認中...');
    
    const start = Date.now();
    https.get(SITE_URL, (res) => {
      res.on('end', () => {
        const duration = Date.now() - start;
        const speed = duration < 1000 ? '高速' : duration < 3000 ? '標準' : '要改善';
        console.log(`✅ ページ読み込み時間: ${duration}ms (${speed})`);
        resolve(duration);
      });
    }).on('error', (err) => {
      console.log(`❌ ページ速度確認失敗: ${err.message}`);
      resolve(null);
    });
  });
}

// メイン実行
async function main() {
  try {
    const results = await Promise.allSettled([
      checkSitemap(),
      checkRobotsTxt(),
      checkStructuredData(),
      checkPageSpeed()
    ]);

    console.log('\n📊 SEO検証結果まとめ:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    results.forEach((result, index) => {
      const items = ['サイトマップ', 'robots.txt', '構造化データ', 'ページ速度'];
      if (result.status === 'fulfilled') {
        console.log(`✅ ${items[index]}: 正常`);
      } else {
        console.log(`❌ ${items[index]}: ${result.reason.message}`);
      }
    });

    console.log('\n🎯 Google Search Console での確認推奨項目:');
    console.log('1. サイトマップ登録: https://search.google.com/search-console');
    console.log('2. URL検査でインデックス状況確認');
    console.log('3. Core Web Vitals レポート確認');
    console.log('4. 検索パフォーマンス分析開始');
    
  } catch (error) {
    console.error('❌ 検証エラー:', error.message);
  }
}

main();
