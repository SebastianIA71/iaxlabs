import "@/styles/globals.css";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans px-6">
        <p className="text-8xl font-bold text-[#E6332A] mb-4">404</p>
        <h1 className="text-2xl font-semibold mb-2">Página no encontrada</h1>
        <p className="text-slate-500 text-sm mb-8 text-center max-w-sm">
          La dirección que buscas no existe en IAxLabs.
        </p>
        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-[#E6332A] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>
      </body>
    </html>
  );
}
