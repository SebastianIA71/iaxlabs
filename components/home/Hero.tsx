import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import FloatingBadges from "@/components/FloatingBadges";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { Lightbulb, MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Home");
  const words = t.raw("hero.typewriterWords") as string[];

  return (
    <section className="relative w-full">
      <FloatingBadges />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2 pt-2 text-center">

        {/* BADGE */}
        <div className="mt-4 mb-8 flex justify-center">
          <Link href="#publicaciones">
            <AnimatedBorderButton>
                {t("hero.badge")} →
            </AnimatedBorderButton>
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex justify-center mt-14 mb-6">
          <img
            src="/logo-light.svg"
            alt="IAXLabs"
            className="h-20 sm:h-24 md:h-28 w-auto"
          />
        </div>

        {/* TITULO */}
        <h1 className="mx-auto max-w-4xl mt-24 font-display font-bold tracking-tight text-slate-900 dark:text-gray-200 leading-tight">

          <span className="block text-center text-5xl sm:text-7xl mb-2">
            {t("hero.line1")}
          </span>

          <span className="block text-center text-5xl sm:text-7xl mb-2">
            {t("hero.line2")}
          </span>

            <div className="flex justify-center">
              <div className="w-full md:w-[610px] text-center md:text-left text-3xl sm:text-6xl px-2 md:px-0">
                
                <div className="md:whitespace-nowrap">
                  mediante{" "}
                  <span className="text-blue-600 inline-block">
                    <Typewriter
                      words={words}
                      typingSpeed={90}
                      deletingSpeed={50}
                      pauseTime={1400}
                    />
                  </span>
                </div>

              </div>
            </div>
        </h1>


        {/* DESCRIPCIÓN */}
        <p className="mx-auto mt-6 max-w-2xl text-1xl tracking-tight text-slate-700 dark:text-slate-500">
          {t("description")}
        </p>

        {/* BOTONES */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full max-w-xl mx-auto">

          {/* BOTON 1 */}
          <Button
            className="h-11 flex-1 rounded-xl px-6 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
            variant="outline"
            asChild
          >
            <Link
              href="https://iafont.com/account?utm_medium=web&utm_source=custom-footer&next=https%3A%2F%2Fiafont.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              title="Suscríbete a IAfont"
              prefetch={false}
              className="flex items-center justify-center gap-2 w-full"
            >
              <MousePointerClick className="w-4 h-4 text-indigo-500" />
              Suscríbete a IAfont
            </Link>
          </Button>

          {/* BOTON 2 */}
          <Button
            className="h-11 flex-1 rounded-xl px-6 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
            variant="outline"
            asChild
          >
            <Link
              href="#experimentos"
              title="Proponer laboratorio"
              className="flex items-center justify-center gap-2 w-full"
            >
              <Lightbulb className="w-4 h-4 text-indigo-500" />
              Propón un laboratorio
            </Link>
          </Button>

        </div>

      </div>
    </section>
  );
}