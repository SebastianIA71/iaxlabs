import LabCard from "@/components/LabCard";
import { labs } from "@/data/labs";

// 🔥 FRASES
const hookPhrases = [
  "Menos hype por la IA. Más laboratorio.",
  "Pon IA en el proceso. Luego averigua para qué ha servido.",
  "Todo el mundo habla de IA. Aquí la tocamos.",
  "La IA no es magia. Es estadística con marketing.",
  "Entrena un modelo. O al menos tu curiosidad.",
  "Primero el experimento. Luego el PowerPoint.",
  "La IA ha llegado. El cambio no tanto.",
  "No es humo. Es inferencia.",
  "La IA no piensa. O eso preferimos creer.",
  "Prometieron robots. No han visto Blade Runner.",
  "Es la matriz de confusión, estúpido!!."
];

// 🎯 RANDOM
const randomPhrase =
  hookPhrases[Math.floor(Math.random() * hookPhrases.length)];

export default function Showcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16">

      {/* 🔥 BLOQUE FRASE */}
      <div className="mx-auto max-w-6xl mt-14 mb-12">
        <div className="flex items-center gap-4 rounded-2xl
        bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b]
        px-10 py-10 shadow-lg">

          <img
            src="/logo-light.svg"
            alt="IAXLabs"
            className="h-8 w-auto"
          />

          <p className="flex-1 text-center text-2xl sm:text-3xl font-bold text-[#E6332A]">
            {randomPhrase}
          </p>
        </div>
      </div>

      {/* TITULO */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Laboratorios destacados
        </h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          Experimentos que conectan IA, datos y sistemas reales.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab, i) => (
          <LabCard key={i} lab={lab} />
        ))}
      </div>

    </section>
  );
}