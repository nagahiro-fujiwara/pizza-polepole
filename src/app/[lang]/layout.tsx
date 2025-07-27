import type { Metadata } from "next";
import { Inter, Klee_One } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"], // 700 is not supported
  display: "swap",
});

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzapolepole.com"),
  title: {
    default: "薪窯PIZZA POLE POLE ⌇ ピッツァポレポレ",
    template: `%s | 薪窯PIZZA POLE POLE  ⌇ ピッツァポレポレ`,
  },
  description:
    "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
  openGraph: {
    title: "薪窯PIZZA POLE POLE ⌇ピッツァポレポレ",
    description:
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    url: "https://pizzapolepole.com",
    siteName: "ピッツァポレポレ",
    images: [
      {
        url: "/images/Kama.jpg",
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLE POLEの薪窯",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "薪窯Pizza POLE POLE ⌇ ピッツァポレポレ",
    description:
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたてのピザをどうぞ。",
    images: ["/images/Kama.jpg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${kleeOne.className}`}>
      <head>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
