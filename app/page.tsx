export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="hero-spotlight text-center relative z-10 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-brand-gradient glow-cyan mb-4 relative z-10">
          Gradient 5 Farben Test
        </h1>
        <p className="text-lg text-gray-300 mb-8 relative z-10">
          Hier sollte die Reihenfolge Pink → Lila → Türkis → Blau → Dunkelblau sichtbar sein 🎨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href="#angebote" className="btn-brand-gradient inline-block w-auto">
            Angebote entdecken →
          </a>
          <a href="#beratung" className="btn-outline-brand">
            Beratung starten →
          </a>
        </div>
      </section>
    </main>
  );
}
