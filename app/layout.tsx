import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";

export const metadata: Metadata = {
  title: "OhneQuatschDeals.de",
  description: "Ihre digitale Beraterin – mit menschlicher Intuition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#0E0F1A] text-white antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
