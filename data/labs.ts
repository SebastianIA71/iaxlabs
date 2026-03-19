// data/labs.ts
export const labs = [
  {
    name: "Brownian Style",
    subtitle: "Investigasión a fondo",
    url: "https://sebastian531746.substack.com/",
    icons: ["physics", "ai"],
    image: "/icons/waterbrow.JPG",

    // 🧠 NUEVO
    type: "article",
    topic: "brownian",
    order: 0,
    topicTitle: "Movimiento Browniano → Modelos de Difusión",
    topicDescription: "De la física a la IA generativa",
  },
  {
    name: "De la Termodinámica a la Generación de Imágenes",
    subtitle: "Cómo el Movimiento Browniano inspiró los Modelos de Difusión, la tecnología detrás de la IA generativa",
    url: "/labs/brownian",
    icons: ["physics", "ai"],
    image: "/icons/waterbrow.JPG",

    // 🧠 NUEVO
    type: "lab",
    topic: "brownian",
    order: 0,
    topicTitle: "Movimiento Browniano → Modelos de Difusión",
    topicDescription: "De la física a la IA generativa",
  },
  {
    name: "Del Movimiento Browniano a los Modelos de Difusión",
    subtitle: "Una inmersión profunda que conecta la termodinámica con la IA generativa",
    url: "/labs/brownian2",
    icons: ["physics", "ai"],
    image: "/icons/waterbrow.JPG",

    // 🧠 NUEVO
    type: "lab",
    topic: "brownian",
    order: 1,
  },

  // 🔜 preparado para crecer
  {
    name: "Q&A Browniano",
    subtitle: "Conceptos clave y preguntas frecuentes",
    url: "/labs/brownian-qa",
    icons: ["physics", "ai"],

    type: "qa",
    topic: "brownian",
    order: 2,
  },

  // 🔹 independientes (sin topic)
  {
    name: "Realtime Pipeline",
    subtitle: "Streaming + BigQuery",
    url: "/labs/subpub",
    icons: ["data", "cloud", "code"],

    type: "lab",
  },
  {
    name: "Prompt Lab",
    subtitle: "LLM optimization",
    url: "/labs/prompts",
    icons: ["ai"],

    type: "lab",
  },
];