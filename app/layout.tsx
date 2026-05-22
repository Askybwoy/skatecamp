import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Скейт Кэмп — Дивногорск",
  description: "Скейт-кэмп в Сибири, 5–12 июня. Дивногорск.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
