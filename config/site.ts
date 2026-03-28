import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://iaxlabs.com";

export const SUBSTACK_URL = "https://iafont.substack.com";
export const GITHUB_URL = "https://github.com/SebastianIA71";

export const siteConfig: SiteConfig = {
  name: "IAxLabs",
  tagLine: "Laboratorios abiertos sobre inteligencia artificial",
  description:
    "IAxLabs es el espacio experimental de IAfont. Simulaciones, experimentos interactivos, pruebas con modelos de IA, visualizaciones matemáticas y exploraciones técnicas.",
  url: BASE_URL,
  authors: [
    {
      name: "Sebastián",
      url: SUBSTACK_URL,
    }
  ],
  creator: '@iafont',
  socialLinks: {
    twitter: "https://x.com/iafont",
    github: GITHUB_URL,
    email: "sebastian@iafont.com"
  },
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  defaultNextTheme: "system",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};