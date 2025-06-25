"use client";
import { useState } from 'react';

export default function PasswordPage() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const password = process.env.NEXT_PUBLIC_SITE_PASSWORD || 'polepole';
    if (input === password) {
      document.cookie = `site_auth=${password}; path=/;`;
      window.location.href = '/';
    } else {
      setError('パスワードが違います');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#faf7f2' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 8px #0001', minWidth: 320 }}>
        <h2 style={{ marginBottom: 16 }}>パスワード入力</h2>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="パスワード"
          style={{ width: '100%', padding: 8, fontSize: 18, borderRadius: 6, border: '1px solid #ccc', marginBottom: 16 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, fontSize: 18, borderRadius: 6, background: '#b48a78', color: '#fff', border: 'none' }}>
          入る
        </button>
        {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      </form>
    </div>
  );
}
