import { CheckCircle } from "lucide-react";

export default function WarumSection() {
  const vorteile = [
    "24/7 persönliche Beratung mit KI-Unterstützung",
    "Transparente Vergleiche ohne versteckte Kosten",
    "Exklusive Affiliate-Deals mit echten Ersparnissen",
    "Schnell, modern & mobil optimiert",
  ];

  return (
    <section className="bg-[#12121f] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold gradient-text mb-10">
          Warum OhneQuatschDeals?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {vorteile.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-pink-500 w-6 h-6 mt-1" />
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
