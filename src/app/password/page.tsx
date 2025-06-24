"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "polepole2025") {
      document.cookie = `polepole_auth=${input}; path=/; max-age=86400`;
      router.push("/");
    } else {
      setError("パスワードが違います");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f7f7" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", padding: 32, minWidth: 320, textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: 24 }}>パスワード認証</h1>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="パスワードを入力"
          style={{ width: "100%", padding: 12, borderRadius: 6, border: "1px solid #ccc", marginBottom: 16, fontSize: "1rem" }}
        />
        <button type="submit" style={{ width: "100%", padding: 12, borderRadius: 6, background: "#8aa079", color: "#fff", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer" }}>
          ログイン
        </button>
        {error && <div style={{ color: "#c00", marginTop: 16 }}>{error}</div>}
      </form>
    </div>
  );
}
