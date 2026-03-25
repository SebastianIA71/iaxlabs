export default function AboutPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-20">

      {/* HERO */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Sobre IAXLabs
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

        <p>
          Este proyecto busca justo lo contrario: entender qué funciona, qué no, y en qué condiciones.
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
      </div>

      {/* BLOQUE 3 */}
      <div className="space-y-6 mb-16 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">
          Filosofía
        </h2>

        <p>
          La inteligencia artificial no es magia. Es estadística, datos y procesos.
        </p>

        <p>
          Sin un objetivo claro, los costes se disparan.
          Sin integración, las herramientas no aportan valor.
          Sin rediseño de procesos, la adopción fracasa.
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
      </div>

    </section>
  );
}