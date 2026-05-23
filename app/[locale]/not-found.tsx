import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-32 px-6 text-center">
      <p className="text-8xl font-bold text-[#E6332A] mb-4">404</p>
      <h1 className="text-2xl font-semibold mb-2">Página no encontrada</h1>
      <p className="text-slate-500 text-sm mb-8 max-w-sm">
        La dirección que buscas no existe en IAxLabs.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-[#E6332A] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Inicio
        </Link>
        <Link
          href="/labs"
          className="px-5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Ver laboratorios
        </Link>
      </div>
    </div>
  );
}
