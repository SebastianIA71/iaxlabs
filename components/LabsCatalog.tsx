"use client";

import { labs } from "@/data/labs";
import { Atom, Brain, Cloud, Code, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const orderedLabs = labs
    .filter((l) => l.slug)
    .sort((a, b) => a.slug!.localeCompare(b.slug!));

  // Busca el topicTitle e image del article que hace de cabecera de cada topic
  const topicMeta: Record<string, { topicTitle?: string; image?: string }> = {};
  labs.forEach((l) => {
    if (l.topic && l.topicTitle) {
      topicMeta[l.topic] = {
        topicTitle: l.topicTitle,
        image: l.image,
      };
    }
  });

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Laboratorios</h2>
        <p className="text-slate-500 mt-2">
          Catálogo completo de experimentos
        </p>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-6">
        {orderedLabs.map((lab) => {
          const id = lab.slug;
          const meta = lab.topic ? topicMeta[lab.topic] : undefined;

          return (
            <Link
              key={lab.slug}
              href={`/labs/${lab.slug}`}
              className="group flex items-start gap-6 p-6 rounded-2xl border
                         bg-white/60 dark:bg-slate-900/60
                         hover:shadow-md hover:border-[#E6332A]/40
                         transition-all"
            >
              {/* ICON COLUMN */}
              <div className="w-16 flex justify-center shrink-0">
                {meta?.image ? (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <Image
                      src={meta.image}
                      alt={lab.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#E6332A]/10">
                    <div className="flex gap-1">
                      {lab.icons?.map((key: string, i: number) => {
                        const Icon = iconMap[key as keyof typeof iconMap];
                        return (
                          <div key={i}>
                            <Icon className="w-5 h-5 text-[#E6332A]" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">

                {/* TOP ROW: slug + type */}
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs text-slate-400">{id}</p>
                  <span className="text-xs text-slate-400 uppercase shrink-0 ml-4">
                    {lab.type}
                  </span>
                </div>

                {/* NAME + SUBTITLE */}
                <p className="font-semibold group-hover:text-[#E6332A] transition leading-snug">
                  {lab.name}
                </p>
                {lab.subtitle && (
                  <p className="text-sm text-slate-500 leading-tight opacity-80 mt-0.5">
                    {lab.subtitle}
                  </p>
                )}

                {/* TOPIC META: badge + topicTitle */}
                {lab.topic && (
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span
                      className={`
                        inline-flex items-center px-2.5 py-0.5 rounded-full
                        text-[10px] font-medium uppercase tracking-wider border
                        ${topicBadgeStyles[lab.topic] ?? "bg-slate-100 text-slate-600 border-slate-200"}
                      `}
                    >
                      {topicLabel[lab.topic] ?? lab.topic}
                    </span>
                    {meta?.topicTitle && (
                      <span className="text-xs text-slate-400 truncate">
                        {meta.topicTitle}
                      </span>
                    )}
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