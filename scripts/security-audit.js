#!/usr/bin/env node

/**
 * 薪窯Pizza POLE POLE セキュリティ監査スクリプト
 * 実行方法: node scripts/security-audit.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔐 薪窯Pizza POLE POLE - セキュリティ監査開始\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// セキュリティチェック項目
const securityChecks = {
  passed: [],
  warnings: [],
  failed: []
};

// 1. 依存関係の脆弱性チェック
function checkDependencyVulnerabilities() {
  console.log('📦 依存関係の脆弱性チェック...');
  
  try {
    const auditResult = execSync('npm audit --audit-level=moderate --json', { encoding: 'utf-8' });
    const auditData = JSON.parse(auditResult);
    
    if (auditData.metadata.vulnerabilities.total === 0) {
      securityChecks.passed.push('依存関係: 脆弱性なし');
      console.log('✅ 脆弱性は検出されませんでした');
    } else {
      const vulnCount = auditData.metadata.vulnerabilities;
      securityChecks.warnings.push(`依存関係: ${vulnCount.high}個の高リスク、${vulnCount.moderate}個の中リスク脆弱性`);
      console.log(`⚠️  脆弱性検出: 高${vulnCount.high}個、中${vulnCount.moderate}個`);
    }
  } catch (error) {
    securityChecks.failed.push('依存関係チェック失敗');
    console.log('❌ 依存関係チェック失敗');
  }
}

// 2. 機密情報の露出チェック
function checkSensitiveFileExposure() {
  console.log('\n🔍 機密情報露出チェック...');
  
  const sensitivePatterns = [
    '.env',
    '.env.local',
    '.env.production',
    'config/database.yml',
    'id_rsa',
    '.ssh/id_rsa',
    'private.key',
    'server.key',
    '.aws/credentials'
  ];
  
  const publicPath = path.join(process.cwd(), 'public');
  const exposedFiles = [];
  
  sensitivePatterns.forEach(pattern => {
    const filePath = path.join(publicPath, pattern);
    if (fs.existsSync(filePath)) {
      exposedFiles.push(pattern);
    }
  });
  
  if (exposedFiles.length === 0) {
    securityChecks.passed.push('機密ファイル: public配下に露出なし');
    console.log('✅ 機密ファイルの露出なし');
  } else {
    securityChecks.failed.push(`機密ファイル露出: ${exposedFiles.join(', ')}`);
    console.log(`❌ 機密ファイル露出: ${exposedFiles.join(', ')}`);
  }
}

// 3. ハードコードされた認証情報チェック
function checkHardcodedCredentials() {
  console.log('\n🔑 ハードコード認証情報チェック...');
  
  const credentialPatterns = [
    /password\s*=\s*["'][^"']{3,}["']/gi,
    /api_key\s*=\s*["'][^"']{10,}["']/gi,
    /secret\s*=\s*["'][^"']{10,}["']/gi,
    /token\s*=\s*["'][^"']{10,}["']/gi,
    /private_key\s*=\s*["'][^"']{20,}["']/gi
  ];
  
  const sourceFiles = [
    'src',
    'components',
    'pages',
    'lib',
    'utils'
  ];
  
  let credentialsFound = false;
  
  function scanDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && /\.(js|ts|jsx|tsx)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        credentialPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            credentialsFound = true;
            securityChecks.warnings.push(`ハードコード認証情報: ${fullPath}`);
          }
        });
      }
    });
  }
  
  sourceFiles.forEach(dir => scanDirectory(path.join(process.cwd(), dir)));
  
  if (!credentialsFound) {
    securityChecks.passed.push('認証情報: ハードコードなし');
    console.log('✅ ハードコードされた認証情報なし');
  } else {
    console.log('⚠️  ハードコードされた認証情報を検出');
  }
}

// 4. HTTPSとセキュリティヘッダーチェック
function checkSecurityHeaders() {
  console.log('\n🛡️  セキュリティヘッダー設定チェック...');
  
  const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');
  const middlewarePath = path.join(process.cwd(), 'src/middleware.ts');
  
  let headersConfigured = false;
  
  if (fs.existsSync(nextConfigPath)) {
    const nextConfig = fs.readFileSync(nextConfigPath, 'utf-8');
    
    const securityHeaders = [
      'X-XSS-Protection',
      'X-Content-Type-Options',
      'X-Frame-Options',
      'Strict-Transport-Security',
      'Content-Security-Policy'
    ];
    
    const configuredHeaders = securityHeaders.filter(header => 
      nextConfig.includes(header)
    );
    
    if (configuredHeaders.length >= 3) {
      headersConfigured = true;
      securityChecks.passed.push(`セキュリティヘッダー: ${configuredHeaders.length}/5個設定済み`);
      console.log(`✅ セキュリティヘッダー: ${configuredHeaders.length}/5個設定済み`);
    } else {
      securityChecks.warnings.push(`セキュリティヘッダー: ${configuredHeaders.length}/5個のみ設定`);
      console.log(`⚠️  セキュリティヘッダー: ${configuredHeaders.length}/5個のみ設定`);
    }
  }
  
  if (fs.existsSync(middlewarePath)) {
    const middleware = fs.readFileSync(middlewarePath, 'utf-8');
    
    if (middleware.includes('X-Content-Type-Options') || middleware.includes('X-Frame-Options')) {
      console.log('✅ ミドルウェアでセキュリティヘッダー設定済み');
    }
  }
}

// 5. 入力検証とサニタイゼーションチェック
function checkInputValidation() {
  console.log('\n🧹 入力検証・サニタイゼーションチェック...');
  
  const formFiles = [];
  
  function findFormFiles(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        findFormFiles(fullPath);
      } else if (entry.isFile() && /\.(js|ts|jsx|tsx)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        if (/form|input|textarea|select/gi.test(content)) {
          formFiles.push(fullPath);
        }
      }
    });
  }
  
  findFormFiles(path.join(process.cwd(), 'src'));
  
  if (formFiles.length > 0) {
    securityChecks.warnings.push(`フォーム入力: ${formFiles.length}個のファイルで入力処理 - 検証推奨`);
    console.log(`⚠️  ${formFiles.length}個のファイルで入力処理 - バリデーション確認推奨`);
  } else {
    securityChecks.passed.push('入力処理: フォーム入力なし');
    console.log('✅ フォーム入力処理なし');
  }
}

// 6. 外部リンク・URLチェック
function checkExternalLinks() {
  console.log('\n🔗 外部リンク・URL安全性チェック...');
  
  const suspiciousDomains = [
    'bit.ly',
    'tinyurl.com',
    'shorturl.at'
  ];
  
  // Twitter短縮URLパターン（実際のURL形式のみ）
  const twitterUrlPattern = /https?:\/\/t\.co\/[a-zA-Z0-9]+/g;
  
  let suspiciousLinksFound = false;
  
  function scanForLinks(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    entries.forEach(entry => {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scanForLinks(fullPath);
      } else if (entry.isFile() && /\.(js|ts|jsx|tsx|md)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        // 通常の疑わしいドメインチェック
        suspiciousDomains.forEach(domain => {
          const domainPattern = new RegExp(`https?://[^\\s]*${domain}[^\\s]*`, 'gi');
          if (domainPattern.test(content)) {
            suspiciousLinksFound = true;
            securityChecks.warnings.push(`疑わしいリンク: ${domain} in ${fullPath}`);
          }
        });
        
        // Twitter短縮URLチェック（実際のURL形式のみ）
        const twitterMatches = content.match(twitterUrlPattern);
        if (twitterMatches) {
          suspiciousLinksFound = true;
          securityChecks.warnings.push(`Twitter短縮URL: ${twitterMatches.length}個 in ${fullPath}`);
        }
      }
    });
  }
  
  scanForLinks(path.join(process.cwd(), 'src'));
  scanForLinks(path.join(process.cwd(), 'content'));
  
  if (!suspiciousLinksFound) {
    securityChecks.passed.push('外部リンク: 疑わしいリンクなし');
    console.log('✅ 疑わしい外部リンクなし');
  } else {
    console.log('⚠️  疑わしい外部リンクを検出');
  }
}

// メイン実行
async function runSecurityAudit() {
  checkDependencyVulnerabilities();
  checkSensitiveFileExposure();
  checkHardcodedCredentials();
  checkSecurityHeaders();
  checkInputValidation();
  checkExternalLinks();
  
  // 結果サマリー
  console.log('\n\n📊 セキュリティ監査結果サマリー:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  console.log(`\n✅ 合格項目 (${securityChecks.passed.length}):`)
  securityChecks.passed.forEach(item => console.log(`  • ${item}`));
  
  if (securityChecks.warnings.length > 0) {
    console.log(`\n⚠️  警告項目 (${securityChecks.warnings.length}):`)
    securityChecks.warnings.forEach(item => console.log(`  • ${item}`));
  }
  
  if (securityChecks.failed.length > 0) {
    console.log(`\n❌ 要対応項目 (${securityChecks.failed.length}):`)
    securityChecks.failed.forEach(item => console.log(`  • ${item}`));
  }
  
  // セキュリティスコア計算
  const totalChecks = securityChecks.passed.length + securityChecks.warnings.length + securityChecks.failed.length;
  const securityScore = Math.round((securityChecks.passed.length / totalChecks) * 100);
  
  console.log(`\n🎯 セキュリティスコア: ${securityScore}/100`);
  
  if (securityScore >= 90) {
    console.log('🎉 優秀なセキュリティレベルです！');
  } else if (securityScore >= 70) {
    console.log('🔧 いくつかの改善点があります');
  } else {
    console.log('🚨 セキュリティの強化が必要です');
  }
  
  console.log('\n🛡️  推奨セキュリティ対策:');
  console.log('1. 定期的な依存関係アップデート');
  console.log('2. HTTPS通信の強制');
  console.log('3. セキュリティヘッダーの実装');
  console.log('4. 入力値検証の徹底');
  console.log('5. 定期的なセキュリティ監査');
}

runSecurityAudit().catch(console.error);
