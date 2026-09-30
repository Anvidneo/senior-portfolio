"use client";

import Link from "next/link";
import { LANG_STORAGE_KEY, LANGS, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  label: string;
}

function remember(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Storage can be blocked (private windows); the switch still works.
  }
}

export default function LangSwitch({ lang, label }: Props) {
  return (
    <div className="lang" role="group" aria-label={label}>
      {LANGS.map((code) => (
        <Link
          key={code}
          href={`/${code}/`}
          hrefLang={code}
          lang={code}
          aria-current={code === lang ? "true" : undefined}
          onClick={() => remember(code)}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
