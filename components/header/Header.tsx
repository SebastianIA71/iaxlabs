import HeaderLinks from "@/components/header/HeaderLinks";
import MobileMenu from "@/components/header/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Home");

  return (
    <header className="py-2 px-6 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 font-ui text-sm font-medium tracking-tight">

        <div className="flex items-center space-x-6 md:space-x-12">
          <I18nLink
            href="/"
            prefetch={false}
            className="flex items-center space-x-1 font-bold"
          >
        <Image
          alt={siteConfig.name}
          src="/logo-light.svg"
          className="w-auto h-6 block dark:hidden"
          width={506}
          height={205}
          priority
        />

        <Image
          alt={siteConfig.name}
          src="/logo-dark.svg"
          className="w-auto h-6 hidden dark:block"
          width={506}
          height={205}
          priority
        />            
        <span className="text-gray-800 dark:text-gray-200">
              {t("title")}
            </span>
          </I18nLink>
          <HeaderLinks />

          <a
            href="https://iafont.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-2 opacity-80 hover:opacity-100 transition"
          >
          <Image
            src="/logo-iafont-dark.svg"
            className="h-10 w-auto block dark:hidden"
            width={80}
            height={24}
            alt="IAFONT"
          />

          <Image
            src="/logo-iafont-light.svg"
            className="h-10 w-auto hidden dark:block"
            width={80}
            height={24}
            alt="IAFONT"
          />          
          </a>
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 flex-1 justify-end">
          {/* PC */}
          <div className="hidden md:flex items-center gap-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
