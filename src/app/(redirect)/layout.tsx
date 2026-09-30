import type { Metadata } from "next";
import "../globals.css";
import { SITE_URL } from "@/lib/content";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Juan David Botero | Full-Stack Engineer",
  alternates: { canonical: "/es/", languages: { es: "/es/", en: "/en/", "x-default": "/es/" } },
};

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
