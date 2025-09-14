"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 800);
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 800);
    }
  };

  return (
    <header className="w-full border-b border-brand-gradient relative z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-brand-gradient">
          OhneQuatschDeals.de
        </div>

        {/* Hamburger für Mobile */}
        <button
          className="sm:hidden text-gray-300 hover:text-white text-3xl w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
        >
          {menuOpen && !isClosing ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex sm:flex-row sm:items-center gap-6 text-gray-300">
          <li>
            <a href="#angebote" className="hover:text-pink-400 hover:glass-pill">Angebote</a>
          </li>
          <li>
            <a href="#beratung" className="hover:text-purple-400 hover:glass-pill">Beratung</a>
          </li>
          <li>
            <a href="#warum" className="hover:text-cyan-400 hover:glass-pill">Warum Wir</a>
          </li>
          <li>
            <a href="#login" className="btn-login-solid">Login</a>
          </li>
        </ul>
      </nav>

      {/* Full-Screen Drawer für Mobile */}
      {(menuOpen || isClosing) && (
        <div
          className={`fixed inset-0 glass-bg flex flex-col items-center justify-between text-2xl text-gray-200 z-50 py-16 ${
            isClosing ? "animate-zoomFadeOut" : "animate-zoomFadeIn"
          }`}
        >
          {/* Extra Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border-2 border-cyan-400 text-3xl text-gray-300 hover:scale-110 hover:shadow-[0_0_15px_#22d3ee] transition"
            onClick={closeMenu}
          >
            ✕
          </button>

          {/* Oben: Navigation */}
          <div className="flex flex-col gap-6 items-center">
            <a
              href="#angebote"
              onClick={closeMenu}
              className={`hover:text-pink-400 transition duration-300 hover:scale-110 opacity-0 ${
                isClosing ? "animate-fadeOutDown" : "animate-fadeInUp"
              }`}
              style={{ animationDelay: isClosing ? "0.7s" : "0.1s" }}
            >
              Angebote
            </a>
            <a
              href="#beratung"
              onClick={closeMenu}
              className={`hover:text-purple-400 transition duration-300 hover:scale-110 opacity-0 ${
                isClosing ? "animate-fadeOutDown" : "animate-fadeInUp"
              }`}
              style={{ animationDelay: isClosing ? "0.5s" : "0.3s" }}
            >
              Beratung
            </a>
            <a
              href="#warum"
              onClick={closeMenu}
              className={`hover:text-cyan-400 transition duration-300 hover:scale-110 opacity-0 ${
                isClosing ? "animate-fadeOutDown" : "animate-fadeInUp"
              }`}
              style={{ animationDelay: isClosing ? "0.3s" : "0.5s" }}
            >
              Warum Wir
            </a>
          </div>

          {/* Mitte: Login */}
          <div className="mt-8">
            <a
              href="#login"
              onClick={closeMenu}
              className={`btn-login-solid text-lg opacity-0 ${
                isClosing ? "animate-fadeOutDown" : "animate-fadeInUp"
              }`}
              style={{ animationDelay: isClosing ? "0.1s" : "0.7s" }}
            >
              Login
            </a>
          </div>

          {/* Unten: CTA */}
          <div className="mt-10">
            <a
              href="#angebote"
              onClick={closeMenu}
              className={`btn-brand-gradient text-lg opacity-0 ${
                isClosing ? "animate-fadeOutDown" : "animate-fadeInUp"
              }`}
              style={{ animationDelay: isClosing ? "0s" : "0.9s" }}
            >
              🚀 Angebote entdecken
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
