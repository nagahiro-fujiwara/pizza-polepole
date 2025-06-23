import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "薪窯Pizza POLEPOLE | 西条・東広島のゆるふわ薪窯ピザ",
  description: "広島県東広島市西条町の薪窯ピザPOLEPOLE。地元食材・本格ナポリピザ・癒しの空間。メニュー・店舗紹介・アクセス・ブログも。",
  openGraph: {
    title: "薪窯Pizza POLEPOLE | 西条・東広島のゆるふわ薪窯ピザ",
    description: "広島県東広島市西条町の薪窯ピザPOLEPOLE。地元食材・本格ナポリピザ・癒しの空間。メニュー・店舗紹介・アクセス・ブログも。",
    type: "website",
    url: "https://pizzapolepole.com/",
    images: [
      {
        url: "/images/pizza-hero.jpg",
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLEPOLEのイメージ",
      },
    ],
  },
  keywords: [
    "薪窯ピザ", "西条 ピザ", "東広島 ピザ", "広島 ピザ", "polepole", "ピザ", "カフェ", "ナポリピザ", "地元食材", "癒し空間"
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
          <div style={{ margin: "24px 0 0 0" }}>
            <Image src="/images/Logo.jpg" alt="POLEPOLEロゴ" width={120} height={120} priority />
          </div>
          {children}
        </div>
        <footer className={"footer"}>
          <div className="footer__contentsWrapper">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <a href="/privacy" className="privacyLink">プライバシーポリシー</a>
            </div>
            <div style={{ margin: "16px 0 0 0" }}>© 2025 POLEPOLE. All rights reserved.</div>
            <div style={{ marginTop: 8 }}>
              薪窯Pizza POLEPOLE<br />
              〒739-0036<br />
              広島県東広島市西条町田口70-1
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
