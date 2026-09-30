import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";
import { LANGS } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}/`,
    lastModified: new Date(),
    alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, `${SITE_URL}/${l}/`])) },
  }));
}
