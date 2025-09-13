// src/components/ui/DealCard.tsx
"use client";

import { OqdButton } from "@/components/ui/OqdButton";

type DealCardProps = {
  provider: string;
  logo?: string;
  title: string;
  price: string;
  features: string[];
  link?: string;
};

export function DealCard({
  provider,
  logo,
  title,
  price,
  features,
  link,
}: DealCardProps) {
  return (
    <div className="bg-oq-bg2 rounded-2xl shadow-lg p-6 flex flex-col gap-4 max-w-sm border border-oq-bg3 hover:scale-[1.01] transition-transform">
      {/* Logo & Provider */}
      <div className="flex items-center gap-3">
        {logo && <img src={logo} alt={provider} className="w-10 h-10" />}
        <h3 className="text-lg font-semibold text-white">{provider}</h3>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-white">{title}</h2>

      {/* Price */}
      <p className="text-2xl font-extrabold bg-oq-gradient bg-clip-text text-transparent">
        {price}
      </p>

      {/* Features */}
      <ul className="text-sm text-oq-muted list-disc list-inside space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-4">
        <OqdButton onClick={() => (link ? window.open(link, "_blank") : null)}>
          Zum Angebot
        </OqdButton>
      </div>
    </div>
  );
}
