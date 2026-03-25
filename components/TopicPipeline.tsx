"use client";

import { FileText, FlaskConical, HelpCircle } from "lucide-react";
import Link from "next/link";

type Step = {
  title: string;
  subtitle?: string;
  slug?: string;
  url?: string;
  type: "article" | "lab" | "qa";
  order?: number;
};

type TopicPipelineProps = {
  title: string;
  description?: string;
  steps: Step[];
  image?: string;
  featured?: boolean;
};

const iconMap = {
  article: FileText,
  lab: FlaskConical,
  qa: HelpCircle,
};

const truncate70 = (text: string, max = 70) =>
  text.length > max ? text.slice(0, max) + "…" : text;

export default function TopicPipeline({
  title,
  description,
  steps,
  image,
  featured = false,
}: TopicPipelineProps) {

  const sortedSteps = [...steps].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="w-full h-full rounded-2xl border bg-white/70 dark:bg-slate-900/60 p-6 flex flex-col">

      {/* HEADER */}
      <div className="mb-6 flex flex-col items-center">

        {image && (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-md object-cover mb-2"
          />
        )}

        <h3 className="text-lg font-semibold text-center">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            {description}
          </p>
        )}

      </div>

      {/* PIPELINE */}
      <div className="relative flex flex-col gap-6 flex-1">

        {sortedSteps.map((step, index) => {
          const Icon = iconMap[step.type];

          return (
            <div key={index} className="flex items-start gap-4 relative">

              {/* Línea */}
              {index !== sortedSteps.length - 1 && (
                <div className="absolute left-5 top-10 w-px h-[calc(100%-0.5rem)] bg-slate-300 dark:bg-slate-700" />
              )}

              {/* Nodo */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6332A]/10 text-[#E6332A] shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              {/* Contenido */}
              <Link
                href={step.slug ? `/labs/${step.slug}` : step.url || "#"}
                className="flex-1 p-3 rounded-lg border 
                hover:bg-slate-100 dark:hover:bg-slate-800 
                hover:border-[#E6332A]/40
                transition-all"
              >

                <div className="flex items-start justify-between gap-2 w-full">

                  {/* TEXTO */}
                  <div className="flex-1">

                    {featured && step.subtitle ? (
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                          {truncate70(step.title)}
                        </span>

                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {truncate70(step.subtitle)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-200">
                        {truncate70(step.title)}
                      </span>
                    )}

                  </div>

                  {/* TYPE */}
                  <span className="text-[10px] text-slate-400 uppercase mt-1 shrink-0">
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