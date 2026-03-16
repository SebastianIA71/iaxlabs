import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import FloatingBadges from "@/components/FloatingBadges";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";


export default function Hero() {
  const t = useTranslations("Home");
  const words = t.raw("hero.typewriterWords") as string[];


  return (
  <section className="relative w-full">

    <FloatingBadges />

    <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2 pt-2 text-center">

    <div className="mt-10 mb-8 flex justify-center">

      <Link href="#experimentos">

        <AnimatedBorderButton>
        <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
          IAxLabs
        </span>

        <span className="text-slate-300">
          🔬 {t("hero.badge")} →
        </span>    </AnimatedBorderButton>

      </Link>

    </div>



      <h1 className="mx-auto max-w-4xl mt-20 font-display font-bold tracking-tight text-slate-900 dark:text-gray-200 leading-tight">

        {/* LINE 1 */}
        <span className="block text-center text-5xl sm:text-7xl mb-2">
          {t("hero.line1")}
        </span>

        {/* LINE 2 */}
        <span className="block text-center text-5xl sm:text-7xl mb-2">
          {t("hero.line2")}
        </span>

        {/* TYPEWRITER */}
        <div className="flex justify-center">
          <div className="w-[450px] text-left text-3xl sm:text-6xl whitespace-nowrap">
            mediante{" "}
            <span className="text-blue-600">
              <Typewriter
                words={words}
                typingSpeed={90}
                deletingSpeed={50}
                pauseTime={1400}
              />
            </span>
          </div>
        </div>

      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-1xl tracking-tight text-slate-700 dark:text-slate-500">
        {t("description")}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2">
        <Button
          className="h-11 w-full sm:w-fit rounded-xl px-8 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
          variant="outline"
          asChild
        >
          <Link
            href="https://sebastian531746.substack.com/account?utm_medium=web&utm_source=custom-footer&next=https%3A%2F%2Fsebastian531746.substack.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            title="Suscríbete a IAfont"
            prefetch={false}
            className="flex items-center gap-2"
          >
            <MousePointerClick className="w-4 h-4 text-indigo-500" />
            Suscríbete a IAfont
          </Link>
        </Button>

        <Button
          className="h-11 w-full sm:w-fit rounded-xl px-8 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
          variant="outline"
          asChild
        >
          <Link
            href={
              siteConfig.socialLinks?.discord ||
              "https://discord.com/invite/R7bUxWKRqZ"
            }
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="Propon Experimento"
            prefetch={false}
            className="flex items-center gap-2"
          >
            <SiDiscord className="w-4 h-4 text-indigo-500" />
            Propón Experimento
          </Link>
        </Button>
      </div>

    </div>
  </section>
);

}
