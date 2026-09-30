export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";
export const LANG_STORAGE_KEY = "jb-lang";

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/** Picks the first-visit language from a saved choice, then the browser locale. */
export function pickLang(saved: string | null, browserLocale: string): Lang {
  if (saved && isLang(saved)) return saved;
  return browserLocale.toLowerCase().startsWith("en") ? "en" : DEFAULT_LANG;
}
