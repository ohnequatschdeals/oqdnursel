import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { OqdButton } from "@/components/ui/OqdButton";
import { DealCard } from "@/components/ui/DealCard";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-oq-bg text-white">
      {/* Hero Section */}
      <SectionWrapper id="hero" background="gradient" className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-oq-gradient bg-clip-text text-transparent drop-shadow-lg">
          Ihre digitale Beraterin – mit menschlicher Intuition.
        </h1>

        <p className="mt-6 text-lg text-oq-muted max-w-2xl mx-auto">
          Ehrliche Vergleiche & 24/7 KI-Beratung für Internet, Strom, TV,
          Versicherungen & mehr.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <OqdButton>Jetzt Angebote entdecken</OqdButton>
          <OqdButton variant="outlineTeal">Beratung starten</OqdButton>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 justify-center text-sm text-oq-muted">
          <div className="flex items-center gap-2">
            <img src="/icons/shield.png" alt="DSGVO" className="w-6 h-6" />
            DSGVO-konform
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/rocket.png" alt="Trusted" className="w-6 h-6" />
            Trusted Beratung
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/bulb.png" alt="Support" className="w-6 h-6" />
            24/7 erreichbar
          </div>
        </div>
      </SectionWrapper>

      {/* Warum wir Section */}
      <SectionWrapper id="warum-wir" background="dark" className="text-center">
        <h2 className="text-4xl font-bold bg-oq-gradient bg-clip-text text-transparent">
          Warum OhneQuatschDeals?
        </h2>
        <p className="mt-4 text-oq-muted max-w-2xl mx-auto">
          Weil wir keine versteckten Kosten, kein Bullshit und nur klare Empfehlungen liefern.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-oq-bg2 shadow-md">
            <img src="/icons/shield.png" alt="Ehrlich" className="w-12 h-12" />
            <h3 className="text-xl font-semibold">100% Ehrlich</h3>
            <p className="text-oq-muted text-sm">
              Alle Angebote transparent erklärt, ohne versteckte Klauseln.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-oq-bg2 shadow-md">
            <img src="/icons/puzzle.png" alt="Individuell" className="w-12 h-12" />
            <h3 className="text-xl font-semibold">Individuell</h3>
            <p className="text-oq-muted text-sm">
              Empfehlungen basieren auf deinem Bedarf – nicht auf Werbung.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-oq-bg2 shadow-md">
            <img src="/icons/bulb.png" alt="Support" className="w-12 h-12" />
            <h3 className="text-xl font-semibold">24/7 Beratung</h3>
            <p className="text-oq-muted text-sm">
              Dein digitaler Assistent ist jederzeit für dich da.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Deals Section */}
      <SectionWrapper id="deals" background="gradient" className="text-center">
        <h2 className="text-4xl font-bold bg-oq-gradient bg-clip-text text-transparent">
          Unsere Top-Deals
        </h2>
        <p className="mt-4 text-oq-muted max-w-2xl mx-auto">
          Wähle aus den besten Angeboten für Internet & Strom – fair und transparent.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <DealCard
            provider="Vodafone"
            logo="/icons/rocket.png"
            title="GigaZuhause 250 Cable"
            price="29,99 € / Monat"
            features={[
              "250 Mbit/s Download",
              "50 Mbit/s Upload",
              "24 Monate Laufzeit",
              "WLAN Router inklusive",
            ]}
            link="https://example.com/vodafone"
          />

          <DealCard
            provider="Telekom"
            logo="/icons/shield.png"
            title="Magenta Zuhause L"
            price="39,95 € / Monat"
            features={[
              "100 Mbit/s Download",
              "40 Mbit/s Upload",
              "Festnetz Flat",
              "Top Netzabdeckung",
            ]}
            link="https://example.com/telekom"
          />

          <DealCard
            provider="O2"
            logo="/icons/puzzle.png"
            title="O2 Home XL"
            price="34,99 € / Monat"
            features={[
              "500 Mbit/s Download",
              "50 Mbit/s Upload",
              "Flex-Tarif verfügbar",
              "Kombi-Vorteil möglich",
            ]}
            link="https://example.com/o2"
          />
        </div>
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </main>
  );
}
