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

      {/* BLOQUE ANTI-HYPE */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          “Esto es una locura.”  
          “Esto lo cambia todo.”  
          “Este LLM se carga a n8n.”  
          “Ya no hace falta programar.”  
          “El prompt es el nuevo código.”
        </p>

        <p className="italic">
          (Tranquilo, mañana habrá otro que también lo cambie todo.)
        </p>

        <p>
          Este tipo de frases se repiten constantemente.  
          Cambian los nombres, pero no el patrón.
        </p>

        <p className="italic">
          (La narrativa rota cada 3 semanas. El problema sigue igual.)
        </p>

        <p>
          Mucho impacto inicial. Poca profundidad.
        </p>

        <p>
          Aquí no trabajamos con titulares.  
          Trabajamos con sistemas.
        </p>

        <p className="italic">
          (Más aburrido. Mucho más útil.)
        </p>
      </div>

      {/* BLOQUE VISIÓN */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Qué estamos intentando entender realmente
        </h2>

        <p>
          La IA no es solo una herramienta más.  
          Es un cambio de capa.
        </p>

        <p className="italic">
          (Y eso no cabe en un tutorial de 10 minutos.)
        </p>

        <p>
          Está redefiniendo cómo trabajamos, cómo tomamos decisiones,
          cómo nos comunicamos y cómo diseñamos sistemas.
        </p>

        <p>
          Por eso, este proyecto no se queda en usar herramientas.  
          Busca entender los fundamentos.
        </p>

        <p className="italic">
          (Sí, eso implica pensar un poco más.)
        </p>

        <p>
          Física, matemáticas, sistemas, datos.  
          No como teoría aislada, sino como base para aplicar IA mejor.
        </p>

        <p className="italic">
          (Spoiler: la IA no ha sustituido a las matemáticas.)
        </p>

        <p>
          Porque lo que viene no es una mejora incremental.  
          Es un cambio estructural en todas las profesiones.
        </p>

        <p className="italic">
          (Incluida la tuya.)
        </p>
      </div>

      {/* BLOQUE 2 */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">
          Qué encontrarás aquí
        </h2>

        <ul className="space-y-4 text-slate-700 dark:text-slate-300">
          <li>• Experimentos reales con IA aplicados a casos concretos</li>
          <li>• Simulaciones y laboratorios interactivos</li>
          <li>• Conexiones entre IA, física, datos y sistemas</li>
          <li>• Implementaciones sobre cloud (especialmente GCP)</li>
          <li>• Aprendizaje basado en prueba y error</li>
        </ul>

        <p className="italic">
          (Sí, aquí se rompen cosas.)
        </p>
      </div>

      {/* BLOQUE 3 */}
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

        <p>
          Sin un objetivo claro, los costes se disparan.  
          Sin integración, las herramientas no aportan valor.  
          Sin rediseño de procesos, la adopción fracasa.
        </p>

        <p className="italic">
          (Pero al menos tendrás una demo bonita.)
        </p>

        <p>
          La clave no está en usar IA, sino en integrarla correctamente en el sistema.
        </p>
      </div>

      {/* BLOQUE 4 */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Sobre el autor
        </h2>

        <p>
          Profesional con más de 30 años de experiencia en el sector bancario, 
          especializado en organización, procesos y tecnología.
        </p>

        <p>
          En los últimos años, centrado en inteligencia artificial, automatización y cloud,
          con especial foco en Google Cloud Platform, modelos de IA y sistemas de datos.
        </p>

        <p className="italic">
          (Sí, antes de que fuera cool.)
        </p>

        <p>
          Este proyecto no nace desde la teoría, sino desde la práctica:
          desde sistemas reales, problemas reales y limitaciones reales.
        </p>
      </div>

      {/* BLOQUE 5 */}
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Ecosistema
        </h2>

        <p>
          IAXLabs forma parte de un ecosistema más amplio:
        </p>

        <ul className="space-y-3">
          <li>• <span className="font-semibold">IAfont</span> → contenido, artículos y reflexión</li>
          <li>• <span className="font-semibold">IAXLabs</span> → experimentación y laboratorio</li>
          <li>• <span className="font-semibold">IAXCore</span> → visión futura de aplicación en negocio</li>
        </ul>

        <p>
          Todo conectado bajo una misma idea:  
          entender la IA desde dentro antes de intentar venderla fuera.
        </p>

        <p className="italic">
          (Primero entender. Luego opinar.)
        </p>
      </div>

    </section>
  );
}
