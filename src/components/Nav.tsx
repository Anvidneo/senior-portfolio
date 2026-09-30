import type { Content } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

interface Props {
  lang: Lang;
  nav: Content["nav"];
}

export default function Nav({ lang, nav }: Props) {
  return (
    <nav aria-label="Main">
      <div className="in gut">
        <a className="logo" href="#top">
          JB<b>.dev</b>
        </a>
        <div className="links">
          <a href="#proyectos">{nav.projects}</a>
          <a href="#experiencia">{nav.experience}</a>
          <a href="#contacto">{nav.contact}</a>
          <LangSwitch lang={lang} label={nav.langLabel} />
        </div>
      </div>
    </nav>
  );
}
