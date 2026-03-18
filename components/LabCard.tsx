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
      className="flex flex-col justify-between h-full
                 rounded-2xl border bg-white/70 dark:bg-slate-900/60 
                 p-6 transition mx-auto max-w-md text-center"
    >
      {/* 🔼 CONTENIDO */}
      <div className="flex flex-col items-center">

        {/* 🖼️ Imagen */}
        {lab.image && (
          <div className="w-12 h-12 relative mb-4">
            <Image
              src={lab.image}
              alt={lab.name}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* TITULO */}
        <h3 className="font-semibold text-lg mb-2">
          {lab.name}
        </h3>

        {/* SUBTITULO */}
        <p className="text-sm text-slate-500">
          {lab.subtitle}
        </p>

      </div>

      {/* 🔻 ICONOS ABAJO */}
      <div className="flex justify-center gap-2 mt-6">
        {lab.icons?.map((key: keyof typeof iconMap, i: number) => {
          const Icon = iconMap[key];
          return (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center 
                         rounded-lg bg-red-100"
            >
              <Icon className="w-5 h-5 text-[#E6332A]" />
            </div>
          );
        })}
      </div>
    </Link>
  );
}