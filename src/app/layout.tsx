import type { Metadata } from "next";
import { Inter, Klee_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"], // 700 is not supported
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzapolepole.com"),
  title: {
    default: "薪窯Pizza POLE POLE | 東広島・西条のピザ・ランチ・カフェ",
    template: `%s | 薪窯Pizza POLE POLE - 東広島・西条のピザレストラン`,
  },
  description:
    "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
  openGraph: {
    title: "薪窯Pizza POLE POLE | 東広島・西条の本格ピザレストラン",
    description:
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    siteName: "薪窯Pizza POLE POLE",
    images: [
      {
        url: "/images/Kama.jpg",
        width: 1200,
        height: 630,
        alt: "東広島・西条の薪窯Pizza POLE POLEの薪窯",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "薪窯Pizza POLE POLE | 東広島・西条のピザレストラン",
    description:
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    images: ["/images/Kama.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${kleeOne.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://pizzapolepole.com" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="薪窯Pizza POLE POLE" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CLBZLTLG3H`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLBZLTLG3H');
          `}
        </Script>
      </body>
    </html>
  );
}
