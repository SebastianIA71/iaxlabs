import { Atom, Brain, Cloud, Code, Database } from "lucide-react";
import Link from "next/link";

const iconMap = {
  ai: Brain,
  physics: Atom,
  data: Database,
  cloud: Cloud,
  code: Code,
};

const truncateCombined = (title: string, subtitle: string, max = 70) => {
  const full = `${title} ${subtitle}`;
  return full.length > max ? full.slice(0, max) + "…" : full;
};

export default function LabCard({ lab }: any) {
  return (
    <Link
      href={lab.slug ? `/labs/${lab.slug}` : lab.url}
      className="flex flex-col justify-between h-full
                 rounded-2xl border bg-white/70 dark:bg-slate-900/60 
                 p-6 transition mx-auto max-w-md text-center"
    >
      {/* 🔼 CONTENIDO */}
    <div className="flex flex-col items-center">

        {/* 🖼️ Imagen */}
        {lab.image && (
          <div className="mb-4 rounded-xl overflow-hidden" style={{ width: '144px', height: '144px' }}>
            <img
              src={lab.image}
              alt={lab.name}
              style={{ width: '144px', height: '144px', objectFit: 'cover' }}
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
{lab.icons?.map((key: string, i: number) => {
  const Icon = iconMap[key as keyof typeof iconMap];
  return (
    <div key={i}>
      <Icon className="w-5 h-5 text-[#E6332A]" />
    </div>
  );
})}
      </div>
    </Link>
  );
}