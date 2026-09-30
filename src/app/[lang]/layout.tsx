import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SITE_URL, getContent } from "@/lib/content";
import { fontVariables } from "@/lib/fonts";
import { LANGS, isLang } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getContent(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: { es: "/es/", en: "/en/", "x-default": "/es/" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}/`,
      siteName: "Juan David Botero",
      locale: meta.ogLocale,
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={fontVariables}>
      <body>
        <a className="skip" href="#proyectos">
          {lang === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        {children}
      </body>
    </html>
  );
}
