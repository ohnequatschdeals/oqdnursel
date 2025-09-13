// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OhneQuatschDeals – Ehrliche Beratung & Deals",
  description:
    "Vergleiche Internet, Strom, TV & mehr – mit 24/7 KI-Beratung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-oq-bg text-oq-text antialiased">
        {children}
      </body>
    </html>
  );
}
