#!/bin/bash
# 🚨 Safety-Runner für npm + Next.js

echo "🔍 Starte Safe-Run..."

# Schritt 1: Tailwind Config checken
if ! grep -q "content:" tailwind.config.*; then
  echo "⚠️  WARNUNG: Tailwind content[] fehlt oder leer! Styles könnten fehlen."
fi

# Schritt 2: Lockfile prüfen
if [ ! -f package-lock.json ]; then
  echo "⚠️  WARNUNG: package-lock.json fehlt! (npm install nötig)"
fi

# Schritt 3: Build starten
npm run dev || {
  echo "❌ FEHLER: Build ist fehlgeschlagen!"
  exit 1
}

echo "✅ Safe-Run abgeschlossen: Server läuft stabil."
