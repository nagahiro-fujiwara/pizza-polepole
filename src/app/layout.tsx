import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a standard font
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: '--font-m-plus-rounded-1c',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzapolepole.com"), // Add this line
  title: "薪窯Pizza POLEPOLE | 西条・東広島の薪窯ピザ",
  description: "広島県東広島市西条町の薪窯ピザPOLEPOLE。地元食材を使ったピザと、心温まる癒しの空間。メニュー、店舗紹介、アクセス、ブログもご覧いただけます。",
  icons: {
    icon: "/favicon.ico",
  },
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
    <html lang="ja" className={`${notoSansJp.className} ${mPlusRounded1c.variable}`}>
      <head>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
