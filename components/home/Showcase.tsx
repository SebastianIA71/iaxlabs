import { ArrowUpRightIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface ShowcaseItem {
  name: string;
  url: string;
}

// Hardcoded showcase data - add your products here
const showcaseItems: ShowcaseItem[] = [
  {
    name: "vget",
    url: "https://www.vget.io/",
  },
  {
    name: "submitnow",
    url: "https://www.submitnow.dev/",
  },
  {
    name: "OG Image Generator",
    url: "https://myogimage.com",
  },
  {
    name: "Black's Screen",
    url: "https://www.blacksscreen.com/",
  },
  {
    name: "Pinpoint Answer",
    url: "https://pinpointanswer.today/",
  },
  {
    name: "Dead Pixel Test",
    url: "https://deadpixelstest.com/",
  },
  {
    name: "Ouke Machinery",
    url: "https://www.oukemac.com/",
  },
  {
    name: "Ouke Machinery",
    url: "https://oukepoultry.com/",
  },
  {
    name: "Robot Apex",
    url: "https://ai-apex.top/",
  },
  {
    name: "PicArt - Online Puzzle Tool",
    url: "https://www.puzzletool.online/",
  },
  {
    name: "Escape From Duckov Wiki",
    url: "https://www.escapefromduckov.io/",
  },
  {
    name: "FileMerges",
    url: "https://filemerges.net/",
  },
  {
    name: "Khuzama Valley Investment",
    url: "https://khuzamainv.com/",
  },
];

const hookPhrases = [
  "Menos hype. Más laboratorio.",
  "Pon IA en el proceso. Luego averigua para qué ha servido..",
  "Todo el mundo habla de IA. Aquí la tocamos.",
  "Esto no es magia. Es estadística con marketing.",
  "Entrena un modelo. O al menos tu curiosidad.",
  "Primero el experimento. Luego el PowerPoint.",
  "La IA ha llegado. El cambio no tanto.",
  "No es humo. Es inferencia.",
  "La IA no piensa. O.",
  "Prometieron robots. No han visto blade ru ."
];

const randomPhrase =
  hookPhrases[Math.floor(Math.random() * hookPhrases.length)];

export default function Showcase() {
  const t = useTranslations("Showcase");
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16">


      <p className="text-center text-xl font-semibold mb-8  text-[#E6332A]">
          {randomPhrase}
      </p>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-200 sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t("description")}
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex-grow min-w-0">
              <h3 className="text-base font-semibold text-slate-900 dark:text-gray-200 truncate pr-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                {new URL(item.url).hostname}
              </p>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <ArrowUpRightIcon className="w-5 h-5 text-blue-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
