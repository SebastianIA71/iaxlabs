import LabCard from "@/components/LabCard";
import { labs } from "@/data/labs";

// 🔥 FRASES
const hookPhrases = [
  "Menos hype por la IA. Más laboratorio.",
  "Pon IA en algo. Luego cuéntanos qué ha pasado.",
  "Todo el mundo habla de IA. Aquí la probamos.",
  "La IA no es magia. Pero sorprende igual.",
  "Entrena un modelo. O al menos la curiosidad.",
  "Primero el experimento. Luego el PowerPoint.",
  "La IA ha llegado. El uso está empezando.",
  "No es humo. Es prueba y error.",
  "La IA no piensa. Pero tú decides qué hacer con ella.",
  "Prometieron robots. Empezamos por prototipos.",
  "La matriz de confusión… y todo empieza a cuadrar.",
  "Pasa. Prueba. A ver qué ocurre.",
  "No hace falta saber. Hace falta empezar.",
  "Curiosidad primero. Optimización después.",
  "Menos teoría. Más tocar.",
  "Si no falla, no era interesante."
];

// 🎯 RANDOM
const randomPhrase =
  hookPhrases[Math.floor(Math.random() * hookPhrases.length)];

export default function Showcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16">

      {/* 🔥 BLOQUE FRASE */}
      <div className="mx-auto max-w-2xl mt-6 mb-8">
        <div className="flex items-center justify-center rounded-xl
          bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b]
          px-5 py-3 shadow-md">

          <p className="text-center text-lg sm:text-3xl font-medium text-[#E6332A]">
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