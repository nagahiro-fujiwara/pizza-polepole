import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
            🍕❓
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            color: '#7a8c6a',
            marginBottom: '1rem'
          }}>
            ページが見つかりません
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            お探しのページは存在しないか、移動された可能性があります。
          </p>
          
          <div style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            borderLeft: '4px solid #9baf87'
          }}>
            <p><strong>もしかして...</strong></p>
            <ul style={{ 
              textAlign: 'left', 
              marginTop: '1rem',
              paddingLeft: '1rem'
            }}>
              <li>URLを直接入力された場合は、スペルをご確認ください</li>
              <li>ブックマークからアクセスされた場合は、ページが移動している可能性があります</li>
              <li>サイトのメンテナンス中の可能性があります</li>
            </ul>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <Link 
              href="/" 
              className={styles.button}
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#9baf87',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              🏠 ホームに戻る
            </Link>
            
            <Link 
              href="/menu" 
              className={styles.button}
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#7a8c6a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              🍕 メニューを見る
            </Link>
          </div>
          
          <div style={{
            background: '#e6eddf',
            padding: '2rem',
            borderRadius: '10px',
            marginTop: '2rem'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                営業時間: 木・金・土・日・月曜日 11:00-15:00
                <br />
                定休日: 火・水曜日
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
