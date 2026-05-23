"use client";

export default function LabError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-center px-6">
      <p className="text-2xl font-semibold">Este laboratorio no está disponible</p>
      <p className="text-slate-500 text-sm max-w-sm">
        Ha ocurrido un error al cargar el experimento. Puede que esté en mantenimiento.
      </p>
      <button
        onClick={reset}
        className="mt-2 text-sm underline underline-offset-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
