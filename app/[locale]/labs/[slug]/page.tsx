import { labs } from "@/data/labs";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);

  const title = lab ? `${lab.name} | IAxLabs` : "Lab | IAxLabs";
  const description = lab
    ? `${lab.subtitle} — Experimento interactivo en IAxLabs, el laboratorio de IAfont.`
    : "Experimento interactivo sobre inteligencia artificial en IAxLabs.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://iaxlabs.com/labs/${slug}`,
      siteName: "IAxLabs",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@iafont",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <iframe
      src={`/experiments/${slug}/index.html`}
      className="w-full h-screen border-0"
    />
  );
}