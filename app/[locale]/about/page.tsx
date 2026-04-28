export default function AboutPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-20">
 
      {/* HERO */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Sobre IAxLabs
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Menos hype por la IA. Más laboratorio.
        </p>
      </div>
 
      {/* BLOQUE 1 */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          IAXLabs nace como un espacio para experimentar con inteligencia artificial de forma práctica.
          Aquí no hay promesas vacías ni soluciones mágicas. Solo pruebas, errores y aprendizaje real.
        </p>
        <p>
          La mayoría de conversaciones sobre IA están dominadas por el hype.
          Herramientas, demos espectaculares y discursos optimistas que rara vez aterrizan en procesos reales.
        </p>
        <p className="italic">
          (Pero quedan muy bien en LinkedIn.)
        </p>
        <p>
          Este proyecto busca justo lo contrario: entender qué funciona, qué no, y en qué condiciones.
        </p>
      </div>
 
      {/* BLOQUE ANTI-HYPE — destacado visualmente */}
      <div className="mb-16 border-l-2 border-slate-300 dark:border-slate-600 pl-6 space-y-4 text-slate-600 dark:text-slate-400">
        <p className="leading-relaxed">
          Abres tu red social preferida cualquier día y lees:<br />
          <br />
          "Esto es una locura."<br />
          "Esto lo cambia todo."<br />
          "Este LLM se carga a n8n."<br />
          "Ya no hace falta programar."<br />
          "El prompt es el nuevo código."
        </p>
        <p className="italic text-sm">
          (Tranquilo, mañana habrá otro que también lo cambie todo.)
        </p>
        <p className="leading-relaxed">
          Este tipo de frases se repiten constantemente.<br />
          Cambian los nombres, pero no el patrón.
        </p>
        <p className="italic text-sm">
          (La narrativa rota cada 3 semanas. El problema sigue igual.)
        </p>
        <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-300">
          Mucho impacto inicial. Poca profundidad.
        </p>
        <p className="leading-relaxed">
          Aquí no trabajamos con titulares.<br />
          Trabajamos con sistemas.
        </p>
        <p className="italic text-sm">
          (Quizás un poco más aburrido. Mucho más útil.)
        </p>
      </div>
 
      {/* BLOQUE VISIÓN */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Qué estamos intentando entender realmente
        </h2>
        <p>
          La IA no es solo una herramienta más.<br />
          Es un cambio de capa.
          Es mucho más que una herramienta.
          Y si alguien te dice que es un experto, ojo, porque probablemente solo sepa usarla, no entenderla.
          Obviamente hay expertos, pero no salen dando los titulares de impacto que crean clickbait.
        </p>
        <p className="italic">
          (Imagínate condensar esta revolución en un tutorial de 15 minutos - con 3 anuncios embebidos-)
        </p>
        <p>
          Está redefiniendo cómo trabajamos, cómo tomamos decisiones,
          cómo nos comunicamos y cómo diseñamos sistemas.
        </p>
        <p>
          Por eso, este proyecto no se queda en usar herramientas.<br />
          Busca entender los fundamentos.
        </p>
        <p className="italic">
          (Sí, eso implica pensar un poco más y perderse de vez en cuando.)
        </p>
        <p>
          Todo está ahí: física, matemáticas, sistemas, datos.<br />
          No como teoría aislada, sino como base para aplicar IA mejor.
        </p>
        <p className="italic">
          (Spoiler: la IA no ha sustituido a las matemáticas ni a la física. De hecho, las ha hecho más necesarias que nunca.)
        </p>
        <p>
          Porque lo que viene no es una mejora incremental.<br />
          Es un cambio estructural en todas las profesiones.
        </p>
        <p className="italic">
          (Incluida la tuya.)
        </p>
      </div>
 
      {/* BLOQUE 2 — lista con cards */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">
          Qué encontrarás aquí
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            "Experimentos reales con IA aplicados a casos concretos",
            "Simulaciones y laboratorios interactivos",
            "Conexiones entre IA, física, datos y sistemas",
            "Implementaciones sobre cloud (especialmente GCP)",
            "Aprendizaje basado en prueba y error",
          ].map((item) => (
            <li
              key={item}
              className="border-2 border-slate-200 dark:border-slate-600 rounded-xl px-5 py-5 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/60"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="italic text-slate-500 dark:text-slate-400 text-sm">
          (Sí, aquí se rompen cosas.)
        </p>
      </div>
 
      {/* BLOQUE 3 — Filosofía */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Filosofía
        </h2>
        <p>
          La inteligencia artificial no es magia. Es estadística, datos y procesos.
        </p>
        <p className="italic">
          (Aunque el marketing se esfuerce en lo contrario.)
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl px-6 py-5 space-y-2 text-sm border border-slate-200 dark:border-slate-700">
          <p>Sin un objetivo claro, los costes se disparan.</p>
          <p>Sin integración, las herramientas no aportan valor.</p>
          <p>Sin rediseño de procesos, la adopción fracasa.</p>
        </div>
        <p className="italic">
          (Pero al menos tendrás una demo bonita 🌷.)
        </p>
        <p>
          La clave no está en usar IA, sino en integrarla correctamente en el sistema.
        </p>
      </div>
 
      {/* BLOQUE 4 — Autor */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">
          Sobre el autor
        </h2>
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-6 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Profesional con más de 30 años de experiencia en el sector bancario,
            especializado - No experto - en organización, procesos y tecnología.
          </p>
          <p>
            En los últimos años, centrado en inteligencia artificial, automatización y cloud,
            con especial foco en Google Cloud Platform, modelos de IA y sistemas de datos.
          </p>
          <p className="italic text-slate-500 dark:text-slate-400 text-sm">
            (Sí, antes de que fuera cool.)
          </p>
          <p>
            Este proyecto no nace desde la teoría, sino desde la práctica:
            desde sistemas reales, problemas reales y limitaciones reales.
          </p>
        </div>
      </div>
 
      {/* BLOQUE 5 — Ecosistema */}
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Ecosistema
        </h2>
        <p>
          IAXLabs forma parte de un ecosistema más amplio:
        </p>
        <ul className="space-y-3">
          {[
            { name: "IAfont", desc: "contenido, artículos y reflexión" },
            { name: "IAXLabs", desc: "experimentación y laboratorio" },
            { name: "IAXCore", desc: "visión futura de aplicación en negocio (Under perpetual construction)" },
          ].map((item) => (
            <li
              key={item.name}
              className="flex items-start gap-3 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4"
            >
              <span className="font-semibold text-slate-900 dark:text-slate-100 min-w-[80px]">
                {item.name}
              </span>
              <span className="text-slate-500 dark:text-slate-400">→</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</span>
            </li>
          ))}
        </ul>
        <p>
          Todo conectado bajo una misma idea:<br />
          entender la IA desde dentro antes de intentar opinar fuera.
        </p>
        <p className="italic">
          (Recordemos que en teoría es Primero entender, Luego opinar.. NO al revés...)
        </p>
      </div>
 
    </section>
  );
}
 
