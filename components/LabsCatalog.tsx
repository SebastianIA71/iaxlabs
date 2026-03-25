"use client";

import { labs } from "@/data/labs";
import { Atom, Brain, Cloud, Code, Database } from "lucide-react";
import Link from "next/link";

const iconMap = {
  ai: Brain,
  physics: Atom,
  data: Database,
  cloud: Cloud,
  code: Code,
};

export default function LabsCatalog() {
  const orderedLabs = labs
    .filter((l) => l.slug)
    .sort((a, b) => a.slug.localeCompare(b.slug));

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
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#E6332A]/10">
                  <div className="flex gap-1">
                    {lab.icons?.map((key: keyof typeof iconMap, i: number) => {
                      const Icon = iconMap[key];
                      return (
                        <Icon key={i} className="w-5 h-5 text-[#E6332A]" />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      {id}
                    </p>

                    <div className="flex flex-col">
                      <p className="font-semibold group-hover:text-[#E6332A] transition">
                        {lab.name}
                      </p>

                      {lab.subtitle && (
                        <p className="text-sm text-slate-500 leading-tight opacity-80">
                          {lab.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 uppercase">
                    {lab.type}
                  </span>

                </div>

              </div>
            </Link>
          );
        })}

      </div>
    </section>
  );
}