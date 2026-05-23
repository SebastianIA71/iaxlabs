"use client";

export default function BlogError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full md:w-3/5 px-2 md:px-12 py-20 flex flex-col gap-4">
      <p className="text-2xl font-semibold">No se pudo cargar este artículo</p>
      <p className="text-slate-500 text-sm">
        Ha ocurrido un error al renderizar el contenido. El artículo puede contener un error de formato.
      </p>
      <button
        onClick={reset}
        className="self-start text-sm underline underline-offset-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
