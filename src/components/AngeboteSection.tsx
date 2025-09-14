import AngebotCard from "./AngebotCard";

export default function AngeboteSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold gradient-text text-center mb-12">
        Aktuelle Top-Deals
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <AngebotCard
          title="Internet & TV"
          description="Superschnelles Internet + TV Paket für Zuhause"
          price="ab 29,99€/Monat"
          link="#"
        />
        <AngebotCard
          title="Stromtarif"
          description="Wechsel jetzt & spare bis zu 300€ im Jahr"
          price="ab 24,99€/Monat"
          link="#"
        />
        <AngebotCard
          title="Versicherung"
          description="Die besten Versicherungsangebote im Vergleich"
          price="individuell"
          link="#"
        />
      </div>
    </section>
  );
}
