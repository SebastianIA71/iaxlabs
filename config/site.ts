import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextjsstarter.io";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-starter";
export const PRO_VERSION = "https://nexty.dev";

const TWITTER_URL = 'https://x.com/weijunext'

const EMAIL_URL = 'sebastian@iafont.com'
const GITHUB_URL = 'https://github.com/sebastianIA71'

export const siteConfig: SiteConfig = {
  name: "Next.js Starter",
  tagLine: 'Multilingual Next.js 16 Starter',
  description:
    "A multilingual Next.js 16 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.",
  url: BASE_URL,
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  socialLinks: {
    twitter: TWITTER_URL,
    github: GITHUB_URL,
    email: EMAIL_URL
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
