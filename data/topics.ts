// lib/topics.ts
export function buildTopics(labs: any[]) {
  const map: Record<string, any> = {};

  labs.forEach((lab) => {
    if (!lab.topic) return;

    if (!map[lab.topic]) {
      map[lab.topic] = {
        title: lab.topicTitle || lab.topic,
        description: lab.topicDescription || "",
        steps: [],
      };
    }

    map[lab.topic].steps.push({
      title: lab.name,
      href: lab.url,
      type: lab.type,
      order: lab.order ?? 999,
    });
  });

  return Object.values(map).map((topic: any) => ({
    ...topic,
    steps: topic.steps.sort((a: any, b: any) => a.order - b.order),
  }));
}