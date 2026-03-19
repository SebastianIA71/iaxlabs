"use client";

import { FileText, FlaskConical, HelpCircle } from "lucide-react";
import Link from "next/link";

type Step = {
  title: string;
  href: string;
  type: "article" | "lab" | "qa";
  order?: number;
  status?: "done" | "current" | "next";
};

type TopicPipelineProps = {
  title: string;
  description?: string;
  steps: Step[];
};

const iconMap = {
  article: FileText,
  lab: FlaskConical,
  qa: HelpCircle,
};

export default function TopicPipeline({
  title,
  description,
  steps,
}: TopicPipelineProps) {

  // 🧠 aseguramos orden por si acaso
  const sortedSteps = [...steps].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border bg-white/70 dark:bg-slate-900/60 p-6">

      {/* HEADER */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {/* PIPELINE */}
      <div className="relative flex flex-col gap-6">

        {sortedSteps.map((step, index) => {
          const Icon = iconMap[step.type];

          return (
            <div key={index} className="flex items-start gap-4 relative">

              {/* Línea vertical continua */}
              {index !== sortedSteps.length - 1 && (
                <div className="absolute left-5 top-10 w-px h-[calc(100%-0.5rem)] bg-slate-300 dark:bg-slate-700" />
              )}

              {/* Nodo */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6332A]/10 text-[#E6332A] shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              {/* Contenido */}
              <Link
                href={step.href}
                className="flex-1 p-4 rounded-xl border 
                hover:bg-slate-100 dark:hover:bg-slate-800 
                hover:border-[#E6332A]/40
                transition-all"
              >
                <div className="flex items-center justify-between">

                  <span className="text-sm font-medium">
                    {step.title}
                  </span>

                  {/* tipo pequeño */}
                  <span className="text-xs text-slate-400 uppercase">
                    {step.type}
                  </span>

                </div>
              </Link>

            </div>
          );
        })}
      </div>
    </div>
  );
}