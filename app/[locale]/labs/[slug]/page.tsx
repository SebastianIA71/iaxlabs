export const dynamic = "force-dynamic";

export default async function Page({ params }: any) {
  const { slug } = await params;

  return (
    <iframe
      src={`/experiments/${slug}/index.html`}
      className="w-full h-screen border-0"
    />
  );
}