import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { GithubIcon, MailIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { SiBluesky, SiDiscord } from "react-icons/si";

export default async function Footer() {
  const t = await getTranslations("Home");
  const tFooter = await getTranslations("Footer");

  return (
    <div className="bg-gray-900 text-gray-300">
      <footer className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* 🔥 GRID 3 COLUMNAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* 1️⃣ IAXLABS */}
            <div className="space-y-4">
              <h2 className="text-white text-xl font-bold">
                {t("title")}
              </h2>

              <p className="text-sm text-gray-400">
                {t("tagLine")}
              </p>

              <div className="flex items-center gap-2">
                {siteConfig.socialLinks?.github && (
                  <Link href={siteConfig.socialLinks.github} target="_blank" className="icon">
                    <GithubIcon className="size-4" />
                  </Link>
                )}
                {siteConfig.socialLinks?.discord && (
                  <Link href={siteConfig.socialLinks.discord} target="_blank" className="icon">
                    <SiDiscord className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.socialLinks?.twitter && (
                  <Link href={siteConfig.socialLinks.twitter} target="_blank" className="icon">
                    <TwitterX className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.socialLinks?.bluesky && (
                  <Link href={siteConfig.socialLinks.bluesky} target="_blank" className="icon">
                    <SiBluesky className="w-4 h-4" />
                  </Link>
                )}
                {siteConfig.socialLinks?.email && (
                  <Link href={`mailto:${siteConfig.socialLinks.email}`} target="_blank" className="icon">
                    <MailIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>

              </div>

            {/* 2️⃣ PROYECTO */}
            <div className="space-y-4 text-center md:text-center">
              <h3 className="text-white text-lg font-semibold">
                Proyecto
              </h3>

              <ul className="space-y-2 text-sm">
                <li>
                  <I18nLink href="/about" className="hover:text-white">
                    Sobre IAxLabs
                  </I18nLink>
                </li>
                <li>
                  <I18nLink href="/labs" className="hover:text-white">
                    Laboratorios
                  </I18nLink>
                </li>
                <li>
                  <I18nLink href="/experiments" className="hover:text-white">
                    Experimentos
                  </I18nLink>
                </li>
              </ul>
            </div>

            {/* 3️⃣ IAFONT */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">
                IAfont | Inteligencia Artificial
              </h3>

              <p className="text-sm text-gray-400">
                Explora nuevas ideas en IA, experimentos y reflexiones reales.
              </p>

              <Link
                href="https://iafont.substack.com"
                target="_blank"
                className="text-sm underline hover:text-white inline-block mt-2"
              >
                Leer en Substack →
              </Link>
            </div>

          </div>

          {/* 🔻 BOTTOM */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-400 text-sm">
              {tFooter("Copyright", {
                year: new Date().getFullYear(),
                name: siteConfig.name,
              })}
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <I18nLink href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                {tFooter("PrivacyPolicy")}
              </I18nLink>
              <I18nLink href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                {tFooter("TermsOfService")}
              </I18nLink>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}