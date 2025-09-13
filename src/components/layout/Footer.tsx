// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-oq-bg2 text-oq-muted text-sm mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Claim */}
        <div>
          <h3 className="text-xl font-bold bg-oq-gradient bg-clip-text text-transparent">
            OhneQuatschDeals
          </h3>
          <p className="mt-2">
            Ehrliche Vergleiche & 24/7 KI-Beratung – transparent und fair.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#hero" className="hover:text-white">
                Start
              </Link>
            </li>
            <li>
              <Link href="#warum-wir" className="hover:text-white">
                Warum wir
              </Link>
            </li>
            <li>
              <Link href="#deals" className="hover:text-white">
                Deals
              </Link>
            </li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="font-semibold text-white mb-2">Rechtliches</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb" className="hover:text-white">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-oq-bg3 text-center py-4 text-xs">
        © {new Date().getFullYear()} OhneQuatschDeals – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
