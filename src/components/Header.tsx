export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-[#0E0F1A]/80 backdrop-blur-md fixed top-0 z-50">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 via-blue-400 to-blue-900">
        OhneQuatschDeals.de
      </h1>
      <nav className="flex gap-6 text-gray-300 font-medium">
        <a href="#angebote" className="hover:text-white">Angebote</a>
        <a href="#beratung" className="hover:text-white">Beratung</a>
        <a href="#warum" className="hover:text-white">Warum wir</a>
        <a href="#login" className="hover:text-white">Login</a>
      </nav>
    </header>
  )
}
