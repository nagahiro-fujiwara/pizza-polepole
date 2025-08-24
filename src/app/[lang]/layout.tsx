import type { Metadata } from "next";
import "../globals.css";

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
  await params; // ここではスタイルのみ統一。描画は親の root layout に委譲
  return <>{children}</>;
}
