export function buildTopics(labs: any[]) {
  const map: Record<string, any> = {};

  labs.forEach((lab) => {
    if (!lab.topic) return;

    if (!map[lab.topic]) {
      map[lab.topic] = {
        title: lab.topicTitle || lab.topic,
        description: lab.topicDescription || "",
        steps: [],
        image: null,
        minOrder: Infinity, // 🔥 clave
      };
    }

    map[lab.topic].steps.push({
      title: lab.name,
      subtitle: lab.subtitle, // ✅ clave
      slug: lab.slug,
      url: lab.url,
      type: lab.type,
      order: lab.order ?? 999,
    });

    // ✅ seleccionar imagen del menor order
    if (lab.image && (lab.order ?? 999) < map[lab.topic].minOrder) {
      map[lab.topic].image = lab.image;
      map[lab.topic].minOrder = lab.order ?? 999;
    }
  });

  return Object.values(map).map((topic: any) => ({
    title: topic.title,
    description: topic.description,
    image: topic.image, // 👈 ahora sí correcto
    steps: topic.steps.sort((a: any, b: any) => a.order - b.order),
  }));
}