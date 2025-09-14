"use client";
"use client";

import { useState } from "react";

export default function BeraterChat() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("de");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: `[${lang.toUpperCase()}] Antwort vom Berater (Demo)` },
    ]);
  };

  return (
    <div className="max-w-md mx-auto bg-[#1a1a2e] rounded-2xl p-6 shadow-lg text-center">
      <h3 className="text-xl font-bold gradient-text mb-4">Chat mit deinem Berater</h3>

      {/* Sprache wählen */}
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="mb-4 w-full p-2 rounded-md bg-[#0f0f1c] border border-gray-600 text-white"
      >
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
        <option value="nl">Nederlands</option>
        <option value="pl">Polski</option>
        <option value="ru">Русский</option>
        <option value="ar">العربية</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
      </select>

      {/* Chat Verlauf */}
      <div className="h-64 overflow-y-auto bg-[#0f0f1c] p-3 rounded-md text-left mb-4 border border-gray-700">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === "user" ? "text-pink-400" : "text-cyan-400"}`}>
            <strong>{m.role === "user" ? "Du" : "Berater"}:</strong> {m.text}
          </div>
        ))}
      </div>

      {/* Eingabe */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nachricht eingeben..."
          className="flex-1 p-2 rounded-md bg-[#0f0f1c] border border-gray-600 text-white"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition"
        >
          Senden
        </button>
      </div>
    </div>
  );
}
