"use client";
import BeraterProfile from "./BeraterProfile";

export default function BeraterSection() {
  return (
    <section className="bg-[#0f0f1c] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold gradient-text mb-12">
          Dein persönlicher Berater
        </h2>
        <BeraterProfile
          name="Max Müller"
          role="Experte für Internet & Strom"
          image="/avatars/berater1.png"
          description="Seit 10 Jahren helfe ich Kunden, die besten Tarife und Angebote zu finden – fair, transparent und ohne versteckte Kosten."
          links={[
            { title: "Internet Tarife", url: "#" },
            { title: "Strom Vergleich", url: "#" },
          ]}
          qrUrl="https://ohnequatschdeals.de/berater/max"
        />
      </div>
    </section>
  );
}
