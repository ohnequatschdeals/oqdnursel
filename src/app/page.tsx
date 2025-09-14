export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0E0F1A] text-white">
      <h1 className="text-6xl font-extrabold text-brand-gradient text-center">
        Gradient 5 Farben Test
      </h1>
      <p className="mt-4 text-center">
        Reihenfolge: <span style={{ color: '#ec4899' }}>Pink</span> → <span style={{ color: '#a855f7' }}>Lila</span> → <span style={{ color: '#22d3ee' }}>Türkis</span> → <span style={{ color: '#3b82f6' }}>Blau</span> → <span style={{ color: '#1e3a8a' }}>Dunkelblau</span>
      </p>
    </main>
  );
}
