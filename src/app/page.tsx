export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0E0F1A] via-[#1a0e23] to-[#0E0F1A] relative overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Hintergrund Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 via-blue-400 to-blue-900">
          Ihre digitale Beraterin – mit menschlicher Intuition.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Spricht 12 Sprachen. Schreibt. Hört zu. Und versteht wirklich, was du brauchst.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 via-blue-400 to-blue-900 shadow-lg hover:opacity-90 transition">
            Angebote entdecken →
          </button>
          <button className="px-6 py-3 rounded-full font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Beratung starten →
          </button>
        </div>

        {/* Trust-Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <span>🔒 DSGVO-konform</span>
          <span>⭐ Trusted Beratung</span>
          <span>⚡ 24/7 erreichbar</span>
        </div>
      </section>
    </main>
  )
}
