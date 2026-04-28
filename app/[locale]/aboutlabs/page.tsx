export default function QueEsUnLabPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-20">

      {/* HERO */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          ¿Qué es un laboratorio?
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          En IAxLabs no explicamos la IA desde fuera. La ponemos en marcha, la rompemos y vemos qué pasa.
        </p>
      </div>

      {/* BLOQUE 1 — QUÉ ES */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          Cada laboratorio es un experimento interactivo que complementa un artículo publicado en IAfont.
          Lees, tocas, entiendes.
        </p>
        <p>
          No son tutoriales. No son demos.<br />
          Son entornos donde puedes cambiar parámetros, observar resultados y construir
          intuición real sobre cómo funciona algo.
        </p>
        <p className="italic">
          (Sin leer un manual de 40 páginas.)
        </p>
        <p>
          Porque hay cosas que no se entienden leyendo.<br />
          Se entienden tocando.
        </p>
      </div>

      {/* BLOQUE 2 — TIPOS */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">
          Tipos de laboratorio
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            {
              tag: "Lab",
              tagClass: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
              title: "Experimenta",
              desc: "Interactúas con un modelo, una simulación o un sistema real. Cambias parámetros, observas resultados y construyes intuición sobre cómo funciona algo.",
              note: "(Sí, aquí se rompen cosas. Es parte del método.)",
            },
            {
              tag: "Q&A",
              tagClass: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
              title: "Afianza",
              desc: "Preguntas y respuestas para consolidar lo aprendido en el artículo y el lab. Sin trampa ni cartón — si no lo has entendido, aquí se nota.",
              note: "(Más incómodo de lo que parece.)",
            },
          ].map((item) => (
            <li
              key={item.tag}
              className="border-2 border-slate-200 dark:border-slate-600 rounded-xl px-5 py-5 bg-slate-50 dark:bg-slate-800/60 space-y-3"
            >
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-md ${item.tagClass}`}>
                {item.tag}
              </span>
              <p className="font-medium text-slate-800 dark:text-slate-200">{item.title}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              <p className="italic text-slate-500 dark:text-slate-400 text-sm">{item.note}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* BLOQUE 3 — EL LOOP */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          El loop
        </h2>
        <p>
          Cada laboratorio está vinculado a un artículo. No son piezas independientes,
          son parte de un ciclo pensado para que el conocimiento se consolide de verdad.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl px-6 py-5 border border-slate-200 dark:border-slate-700">
          <ol className="space-y-3 text-sm">
            {[
              { step: "01", text: "Lees el artículo en IAfont — contexto, criterio, por qué importa." },
              { step: "02", text: "Entras al lab — lo pones en práctica, lo tocas, lo rompes si hace falta." },
              { step: "03", text: "Haces el Q&A — consolidas lo que has aprendido." },
              { step: "04", text: "Sigues con el siguiente artículo." },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-4">
                <span className="font-semibold text-slate-400 dark:text-slate-500 min-w-[24px]">{item.step}</span>
                <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="italic">
          (Si saltas directo al lab sin leer el artículo, funciona igual. Pero te pierdes la mitad.)
        </p>
      </div>

      {/* BLOQUE 4 — IAFONT */}
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Los artículos están en IAfont
        </h2>
        <p>
          IAxLabs es el espacio experimental. Los artículos originales viven en{" "}
          <a
            href="https://iafont.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-slate-900 dark:text-slate-100 hover:opacity-70 transition-opacity"
          >
            iafont.com
          </a>
          , alojado en Substack.
        </p>
        <p>
          Si llegas directo a un lab, el artículo es el punto de partida recomendado.
          Cada lab tiene su enlace al artículo correspondiente.
        </p>
        <p className="italic">
          (La suscripción a IAfont es gratis. Sin spam. Sin newsletter de los martes con 11 tips.)
        </p>
      </div>

    </section>
  );
}