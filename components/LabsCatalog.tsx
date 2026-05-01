"use client";

import { labs } from "@/data/labs";
import { Atom, Brain, Cloud, Code, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const iconMap = {
  ai: Brain,
  physics: Atom,
  data: Database,
  cloud: Cloud,
  code: Code,
};

const topicBadgeStyles: Record<string, string> = {
  "prompting":   "bg-[#EEEDFE] text-[#3C3489] border-[#AFA9EC]",
  "applied-ai":  "bg-[#E1F5EE] text-[#085041] border-[#5DCAA5]",
  "cloud-costs": "bg-[#E6F1FB] text-[#0C447C] border-[#85B7EB]",
};

const topicLabel: Record<string, string> = {
  "prompting":   "Prompting",
  "applied-ai":  "Applied AI",
  "cloud-costs": "Cloud Costs",
};

export default function LabsCatalog() {
  const [query, setQuery] = useState("");

  const orderedLabs = labs
    .filter((l) => l.slug)
    .sort((a, b) => a.slug!.localeCompare(b.slug!));

  const topicMeta: Record<string, { topicTitle?: string; topicDescription?: string; image?: string }> = {};
  labs.forEach((l) => {
    if (l.topic && l.topicTitle) {
      topicMeta[l.topic] = {
        topicTitle: l.topicTitle,
        topicDescription: l.topicDescription,
        image: l.image,
      };
    }
  });

  const filteredLabs = orderedLabs.filter((lab) => {
    if (!query) return true;
    const q = query.toLowerCase();
    const meta = lab.topic ? topicMeta[lab.topic] : undefined;
    return [lab.name, lab.subtitle, lab.slug, meta?.topicTitle]
      .some((f) => f?.toLowerCase().includes(q));
  });

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Laboratorios</h2>
        <p className="text-slate-500 mt-2">Catálogo completo de laboratorios y experimentos</p>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Buscar labs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-8 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm outline-none focus:border-[#E6332A]/50 transition-colors"
      />

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {filteredLabs.length === 0 && (
          <p className="text-center text-sm text-slate-400 py-8">
            No se encontraron labs
          </p>
        )}
        {filteredLabs.map((lab) => {
          const meta = lab.topic ? topicMeta[lab.topic] : undefined;

          return (
            <Link
              key={lab.slug}
              href={`/labs/${lab.slug}`}
              className="group flex items-start gap-4 p-4 rounded-2xl border
                         bg-white/60 dark:bg-slate-900/60
                         hover:shadow-md hover:border-[#E6332A]/40
                         transition-all"
            >
              {/* FOTO */}
              <div className="w-[72px] h-[72px] shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                {meta?.image ? (
                  <Image
                    src={meta.image}
                    alt={lab.name}
                    width={72}
                    height={72}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center gap-1">
                    {lab.icons?.map((key, i) => {
                      const Icon = iconMap[key as keyof typeof iconMap];
                      return <Icon key={i} className="w-5 h-5 text-[#E6332A]" />;
                    })}
                  </div>
                )}
              </div>

              {/* TOPIC */}
              <div className="flex-[1] border-r border-slate-200 dark:border-slate-700 pr-5 flex flex-col justify-center gap-1.5">
                {meta?.topicTitle && (
                  <p className="text-[17px] font-semibold leading-snug">
                    {meta.topicTitle}
                  </p>
                )}
                {meta?.topicDescription && (
                  <p className="text-[14px] text-slate-400 leading-snug">
                    {meta.topicDescription}
                  </p>
                )}
              </div>

              {/* META */}
              <div className="flex-[1] min-w-0 pl-5 flex flex-col justify-center gap-1">
                <div className="flex justify-between items-start">
                  <p className="text-[11px] text-slate-400">{lab.slug}</p>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider ml-4 shrink-0">
                    {lab.type}
                  </span>
                </div>
                <p className="text-[14px] font-medium group-hover:text-[#E6332A] transition leading-snug">
                  {lab.name}
                </p>
                {lab.subtitle && (
                  <p className="text-[12px] text-slate-500 leading-tight">
                    {lab.subtitle}
                  </p>
                )}
                {lab.topic && (
                  <div className="mt-1.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border ${topicBadgeStyles[lab.topic] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                      {topicLabel[lab.topic] ?? lab.topic}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}