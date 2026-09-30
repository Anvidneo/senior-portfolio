import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/lib/content";

describe("SEO routes", () => {
  it("lists both language pages with hreflang alternates", () => {
    const entries = sitemap();
    expect(entries.map((e) => e.url)).toEqual([`${SITE_URL}/es/`, `${SITE_URL}/en/`]);
    expect(entries[0].alternates?.languages).toEqual({
      es: `${SITE_URL}/es/`,
      en: `${SITE_URL}/en/`,
    });
  });

  it("allows crawling and points to the sitemap", () => {
    expect(robots().sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });
});
