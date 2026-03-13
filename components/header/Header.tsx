import HeaderLinks from "@/components/header/HeaderLinks";
import MobileMenu from "@/components/header/MobileMenu";
import LocaleSwitcher from "@/components/LocaleSwitcher";
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
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 flex-1 justify-end">
          {/* PC */}
          <div className="hidden md:flex items-center gap-x-4">
            <LocaleSwitcher />
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
