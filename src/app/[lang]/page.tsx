import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import { getContent } from "@/lib/content";
import { isLang } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const c = getContent(lang);

  return (
    <>
      <Nav lang={lang} nav={c.nav} />
      <Hero hero={c.hero} band={c.band} />
      <main>
        <Projects projects={c.projects} />
        <Experience experience={c.experience} />
        <Stack stack={c.stack} />
        <Education education={c.education} />
      </main>
      <Contact contact={c.contact} footer={c.footer} />
    </>
  );
}
