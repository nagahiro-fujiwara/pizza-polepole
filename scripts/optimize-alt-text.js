#!/usr/bin/env node

/**
 * 画像ALTテキスト最適化レポート生成スクリプト
 * 実行方法: node scripts/optimize-alt-text.js
 */

const fs = require('fs');
const path = require('path');

// ALTテキスト最適化ガイドライン
const ALT_GUIDELINES = {
  // 料理画像のALTテキストパターン
  menuImages: {
    'マルゲリータ': '薪窯で焼いた本格マルゲリータピザ - モッツァレラチーズとバジルの香り',
    'マリナーラ': '薪窯焼きマリナーラピザ - トマトソースとガーリックの風味',
    'ブタバリータ': '地元野菜のブタバリータピザ - 新鮮野菜と薪窯の香ばしさ',
    'フォルマッジ': '4種チーズの薪窯フォルマッジピザ - 濃厚チーズの味わい',
    'ノリジャポーネ': '和風ノリジャポーネピザ - 海苔と和の食材の絶妙な組み合わせ',
    'レモン': '爽やかレモンピザ - 薪窯で焼いた夏の特別メニュー',
    'れんこん': '地元れんこんピザ - 東広島産れんこんの食感が楽しめる'
  },

  // 店舗画像のALTテキストパターン
  storeImages: {
    'exterior_全体': '薪窯Pizza POLE POLE外観 - 東広島西条の自然に囲まれた一軒家レストラン',
    'exterior_玄関': 'POLE POLE玄関入口 - 温かみのある木製ドアとのれん',
    'exterior_イス': '店外のベンチ - 自然の中でゆったり過ごせる石のベンチ',
    'exterior_のれん': 'POLE POLEののれん - 手作り感のある暖簾が出迎え',
    'exterior_煙突': '薪窯の煙突 - 本格薪窯から立ち上る白い煙',
    'interior_釜': '薪窯Pizza POLE POLEの薪窯 - 500度の高温で焼く本格ナポリピザ窯',
    'interior_counter': '店内カウンター席 - 薪窯を眺めながら食事できる特等席',
    'interior_席': '店内テーブル席 - 家族連れでゆったり過ごせる空間',
    'interior_景色': '店内から見た田園風景 - 東広島の美しい自然を眺めながらのお食事',
    'interior_花': '店内の季節の花 - 温かみのある店内装飾'
  },

  // ロゴ・ブランド画像
  brandImages: {
    'Logo1': '薪窯Pizza POLE POLEのロゴ - 東広島西条の薪窯ピザレストラン',
    'Logo2': 'POLE POLEブランドロゴ - 自然と食の調和を表現',
    'logo-dynamic': 'POLE POLE動的ロゴ - アニメーション対応ブランドマーク'
  },

  // イベント・お知らせ画像
  eventImages: {
    'OPEN': '薪窯Pizza POLE POLE営業中看板 - 本日営業のお知らせ',
    '開店のお知らせ': 'POLE POLE開店告知 - 東広島西条に新しい薪窯ピザ店オープン',
    'こだわり': '薪窯ピザへのこだわり - 生地から焼き方まで職人の技',
    'ピザの日': 'ピザの日特別メニュー - 薪窯で焼く記念日限定ピザ'
  }
};

// 現在のALTテキストチェック
function analyzeCurrentAltTexts() {
  const results = {
    optimized: [],
    needsImprovement: [],
    missing: []
  };

  console.log('🔍 画像ALTテキスト分析開始...\n');

  // TSX/JSXファイルを検索
  const componentFiles = [
    'src/components/PizzaGallery.tsx',
    'src/components/Header.tsx',
    'src/components/MenuHighlight.tsx',
    'src/app/menu/page.tsx',
    'src/app/[lang]/page.tsx',
    'src/app/[lang]/about/page.tsx'
  ];

  componentFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // ALTテキストを検出
      const altMatches = content.match(/alt=["']([^"']+)["']/g) || [];
      
      console.log(`📄 ${file}:`);
      
      altMatches.forEach(match => {
        const altText = match.match(/alt=["']([^"']+)["']/)[1];
        
        if (altText.length < 10) {
          results.needsImprovement.push({
            file,
            current: altText,
            reason: '短すぎる（10文字未満）'
          });
          console.log(`  ⚠️  "${altText}" - 短すぎます`);
        } else if (altText.includes('image') || altText.includes('photo')) {
          results.needsImprovement.push({
            file,
            current: altText,
            reason: '一般的すぎる表現'
          });
          console.log(`  ⚠️  "${altText}" - 一般的すぎます`);
        } else if (altText.length > 100) {
          results.needsImprovement.push({
            file,
            current: altText,
            reason: '長すぎる（100文字超過）'
          });
          console.log(`  ⚠️  "${altText}" - 長すぎます`);
        } else {
          results.optimized.push({
            file,
            current: altText
          });
          console.log(`  ✅ "${altText}"`);
        }
      });
      
      console.log('');
    }
  });

  return results;
}

// 改善提案を生成
function generateImprovementSuggestions(results) {
  console.log('💡 ALTテキスト改善提案:\n');
  
  results.needsImprovement.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}`);
    console.log(`   現在: "${item.current}"`);
    console.log(`   理由: ${item.reason}`);
    
    // 改善案を生成
    let suggestion = '';
    
    if (item.current.includes('Logo')) {
      suggestion = '薪窯Pizza POLE POLEのロゴ - 東広島西条の薪窯ピザレストラン';
    } else if (item.current.includes('メニュー')) {
      suggestion = '薪窯Pizza POLE POLEのメニュー表 - 本格ナポリピザと地元食材を使った料理';
    } else if (item.current.includes('店')) {
      suggestion = '薪窯Pizza POLE POLE店内 - 東広島西条の自然に囲まれたピザレストラン';
    } else {
      suggestion = `薪窯Pizza POLE POLE - ${item.current}の詳細情報`;
    }
    
    console.log(`   提案: "${suggestion}"`);
    console.log('');
  });
}

// メイン実行
function main() {
  console.log('🎯 薪窯Pizza POLE POLE - ALTテキスト最適化分析\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const results = analyzeCurrentAltTexts();
  
  console.log('📊 分析結果サマリー:');
  console.log(`✅ 最適化済み: ${results.optimized.length}個`);
  console.log(`⚠️  改善必要: ${results.needsImprovement.length}個`);
  console.log(`❌ 不足: ${results.missing.length}個\n`);
  
  if (results.needsImprovement.length > 0) {
    generateImprovementSuggestions(results);
  }
  
  console.log('🎯 ALTテキスト最適化ガイドライン:');
  console.log('1. 10-80文字程度で具体的に記述');
  console.log('2. キーワード「薪窯ピザ」「東広島」「西条」を自然に含める');
  console.log('3. 画像の内容と文脈を正確に表現');
  console.log('4. 装飾的な画像は適切にマークアップ');
  console.log('5. ユーザーの検索意図に合致する表現を使用\n');
  
  console.log('🚀 次のアクション:');
  console.log('1. 上記の改善提案を元にALTテキストを更新');
  console.log('2. 新しい画像追加時はガイドラインに従って記述');
  console.log('3. 月1回の定期チェック実施');
  console.log('4. Google Search Console の「拡張」セクションで画像検索の改善確認');
}

main();
