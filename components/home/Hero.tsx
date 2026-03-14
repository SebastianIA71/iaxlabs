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
  <section className="relative">

    <FloatingBadges />

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 text-center">

      <div className="mb-6 flex justify-center">
        <AnimatedBorderButton>
          ✨ {t("hero.badge")} →
        </AnimatedBorderButton>
      </div>

      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-gray-200 text-left leading-tight">

        <span className="block">
          {t("hero.line1")}
        </span>

      <span className="block min-h-[1em]">
        {"   "}  con ayuda de{" "}
        <span className="text-blue-600">
          <Typewriter
            words={words}
            typingSpeed={90}
            deletingSpeed={50}
            pauseTime={1400}
          />
        </span>
      </span> 
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
            href="https://nexty.dev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Get SaaS Version - NEXTY.DEV"
            prefetch={false}
            className="flex items-center gap-2"
          >
            <MousePointerClick className="w-4 h-4 text-indigo-500" />
            Get SaaS Version
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
            title="Join Discord"
            prefetch={false}
            className="flex items-center gap-2"
          >
            <SiDiscord className="w-4 h-4 text-indigo-500" />
            Join Discord
          </Link>
        </Button>
      </div>

    </div>
  </section>
);

}
