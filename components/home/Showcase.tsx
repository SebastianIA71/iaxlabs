import LabCard from "@/components/LabCard";
import TopicPipeline from "@/components/TopicPipeline";
import { labs } from "@/data/labs";
import { buildTopics } from "@/data/topics"; // 

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

const randomPhrase =
  hookPhrases[Math.floor(Math.random() * hookPhrases.length)];

export default function Showcase() {

  // 🧠 TOPICS DINÁMICOS
  const topics = buildTopics(labs);

  // ✅ FEATURED FIJO (brownian)
  const featuredTopic = topics.find(t =>
    t.title.includes("Browniano")
  );

  const restTopics = topics.filter(t => t !== featuredTopic);

  // ✅ evitar duplicados en grid
  const standaloneLabs = labs.filter(l => !l.topic);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16">

      {/* FRASE */}
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

      {/* 🧠 FEATURED */}
      {featuredTopic && (
        <div className="mb-16">
          <TopicPipeline
            title={featuredTopic.title}
            description={featuredTopic.description}
            steps={featuredTopic.steps}
            image={featuredTopic.image}
          />
        </div>
      )}

      {/* 🧠 RESTO */}
      {restTopics.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {restTopics.map((topic, i) => (
            <TopicPipeline
              key={i}
              title={topic.title}
              description={topic.description}
              steps={topic.steps}
              image={topic.image}
            />
          ))}
        </div>
      )}

      {/* 🔽 DIVISOR */}
      <div className="text-center mb-6 text-sm text-slate-400">
        Otros experimentos
      </div>

      {/* GRID SOLO LABS SUELTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {standaloneLabs.map((lab, i) => (
          <LabCard key={i} lab={lab} />
        ))}
      </div>

    </section>
  );
}