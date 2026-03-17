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

export default function LabCard({ lab }: any) {
  return (
    <Link
      href={lab.url}
      className="flex flex-col items-start text-left 
                 rounded-2xl border bg-white/70 dark:bg-slate-900/60 
                 p-6 transition"
    >
      {/* ICONOS + IMAGEN */}
      <div className="flex items-center gap-3 mb-4">

        {/* 🖼️ Imagen opcional */}
        {lab.image && (
          <div className="w-10 h-10 relative shrink-0">
            <Image
              src={lab.image}
              alt={lab.name}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* 🔴 Iconos */}
        {lab.icons?.map((key: keyof typeof iconMap, i: number) => {
          const Icon = iconMap[key];
          return (
            <div
              key={i}
              className="w-8 h-8 flex items-center justify-center 
                         rounded-md bg-slate-100 dark:bg-slate-800"
            >
              <Icon className="w-4 h-4 text-[#E6332A]" />
            </div>
          );
        })}
      </div>

      {/* TITULO */}
      <h3 className="font-semibold text-lg mb-1">
        {lab.name}
      </h3>

      {/* SUBTITULO */}
      <p className="text-sm text-slate-500">
        {lab.subtitle}
      </p>
    </Link>
  );
}