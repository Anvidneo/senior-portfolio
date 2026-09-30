"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LANG_STORAGE_KEY, pickLang } from "@/lib/i18n";

/** "/" has no content of its own: send visitors to their language. */
export default function LangRedirect() {
  const router = useRouter();

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      // Storage unavailable: fall back to the browser locale.
    }
    router.replace(`/${pickLang(saved, navigator.language || "")}/`);
  }, [router]);

  return null;
}
