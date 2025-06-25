import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a standard font
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzapolepole.com"), // Add this line
  title: "薪窯Pizza POLEPOLE | 西条・東広島の薪窯ピザ",
  description: "広島県東広島市西条町の薪窯ピザPOLEPOLE。地元食材を使ったピザと、心温まる癒しの空間。メニュー、店舗紹介、アクセス、ブログもご覧いただけます。",
  openGraph: {
    title: "薪窯Pizza POLEPOLE | 西条・東広島の薪窯",
    description: "広島県東広島市西条町の薪窯ピザPOLEPOLE。地元食材を使ったピザと、心温まる癒しの空間。",
    type: "website",
    url: "https://pizzapolepole.com/", // Replace with actual domain
    images: [
      {
        url: "/images/Kama.jpg", // Use a representative image
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLEPOLEの薪窯",
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
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var correct = 'polepole0626';
              function check() {
                var pass = localStorage.getItem('site_auth');
                if (pass !== correct) {
                  var input = prompt('パスワードを入力してください');
                  if (input === correct) {
                    localStorage.setItem('site_auth', correct);
                    location.reload();
                  } else {
                    alert('パスワードが違います');
                    check();
                  }
                }
              }
              check();
            })();
          `
        }} />
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
