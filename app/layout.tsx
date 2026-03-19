import { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Эволюция",
  description: "Пространство восстановления",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={mulish.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
