export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#0E0F1A] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold gradient-text">OhneQuatschDeals</h2>
          <p className="mt-3 text-sm">
            Dein smarter Vergleich & Beratung – jederzeit transparent & fair.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#" className="hover:text-purple-400">Tarife</a></li>
            <li><a href="#" className="hover:text-cyan-400">Beratung</a></li>
            <li><a href="#" className="hover:text-blue-400">Kontakt</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Kontakt</h3>
          <p>Email: <a href="mailto:info@ohnequatschdeals.de" className="hover:text-pink-400">info@ohnequatschdeals.de</a></p>
          <p>Tel: <a href="tel:+4900000000" className="hover:text-pink-400">+49 000 000000</a></p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} OhneQuatschDeals – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
