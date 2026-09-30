import en from "@/messages/en.json";
import es from "@/messages/es.json";
import type { Lang } from "./i18n";

export type Tone = "deep" | "green" | "blue" | "paper";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  num: string;
  name: string;
  tone: Tone;
  featured?: boolean;
  status: { label: string; kind: "live" | "private" };
  desc: string;
  tags: string[];
  links: ProjectLink[];
  highlights?: string[];
  note?: string;
}

export interface ExperienceEntry {
  dates: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface Content {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    projects: string;
    experience: string;
    contact: string;
    langLabel: string;
  };
  hero: {
    avail: string;
    line1: string;
    line2: string;
    sub: string;
    cta1: string;
    cta2: string;
    bubble: string;
    years: string;
    companies: string;
    live: string;
  };
  band: string[];
  projects: {
    title: string;
    sub: string;
    highlightsLabel: string;
    items: Project[];
  };
  experience: { title: string; sub: string; entries: ExperienceEntry[] };
  stack: { title: string; groups: { name: string; items: string[] }[] };
  education: {
    title: string;
    degreesTitle: string;
    degrees: { title: string; detail: string }[];
    certsTitle: string;
    certs: { title: string; detail?: string }[];
    langsTitle: string;
    langs: string[];
  };
  contact: { title: string; label: string; copy: string; copied: string };
  footer: string;
}

export const SITE_URL = "https://juan-botero.dev";
export const EMAIL = "botero1400@gmail.com";
export const GITHUB_URL = "https://github.com/Anvidneo";

const BIA_URL = "https://bia-energy.juan-botero.dev";
const HYPERCOFF_URL = "https://hypercoff.juan-botero.dev";
const APP_STORE_URL = "https://apps.apple.com/co/app/naturcom/id6753870730";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.grlbd.tech.appnaturcom&hl=es_419";

type Messages = typeof es;

const BAND = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "React",
  "React Native",
  "PostgreSQL",
  "GCP",
  "Docker",
];

const STACK_ITEMS = [
  ["Node.js", "NestJS", "Express", "TypeScript", "FastAPI", "PHP", ".NET", "GraphQL"],
  ["React", "React Native", "Expo", "JavaScript"],
  ["GCP", "AWS", "Docker", "Jenkins", "Git / GitHub", "Jest"],
  ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "DB2", "Redis", "TypeORM"],
];

/** Everything about a project that does not change with the language. */
const PROJECTS = [
  {
    id: "cored",
    num: "01",
    name: "CORED",
    tone: "deep",
    featured: true,
    statusKind: "private",
    tags: ["React Native", "Expo", "TypeScript", "NestJS", "GCP"],
    hrefs: [],
  },
  {
    id: "bia-energy",
    num: "02",
    name: "Bia Energy",
    tone: "green",
    statusKind: "live",
    tags: ["Go", "React 19", "PostgreSQL", "CI/CD"],
    hrefs: [BIA_URL],
  },
  {
    id: "naturcom",
    num: "03",
    name: "NaturCom",
    tone: "blue",
    statusKind: "live",
    tags: ["React Native", "Node.js", "MySQL", "EAS"],
    hrefs: [APP_STORE_URL, PLAY_URL],
  },
  {
    id: "hypercoff",
    num: "04",
    name: "Hypercoff",
    tone: "paper",
    statusKind: "live",
    tags: ["Next.js", "TypeScript", "Vercel"],
    hrefs: [HYPERCOFF_URL],
  },
] as const;

const COMPANIES = [
  "Domina Entrega Total S.A.S · Medellín",
  "Konecta · Medellín",
  "Mercadeo Virtual · Medellín",
  "Garantías Comunitarias Grupo S. A. · Medellín",
  "Grupo Bancolombia · Medellín",
];

function build(m: Messages): Content {
  return {
    meta: m.meta,
    nav: m.nav,
    hero: m.hero,
    band: BAND,
    projects: {
      title: m.projects.title,
      sub: m.projects.sub,
      highlightsLabel: m.projects.highlightsLabel,
      items: PROJECTS.map((shared, i) => {
        const text = m.projects.items[i] as Messages["projects"]["items"][number] & {
          highlights?: string[];
          note?: string;
        };
        return {
          id: shared.id,
          num: shared.num,
          name: shared.name,
          tone: shared.tone,
          featured: "featured" in shared ? shared.featured : undefined,
          status: { label: text.statusLabel, kind: shared.statusKind },
          desc: text.desc,
          tags: [...shared.tags],
          links: shared.hrefs.map((href, j) => ({ label: text.linkLabels[j], href })),
          highlights: text.highlights,
          note: text.note,
        };
      }),
    },
    experience: {
      title: m.experience.title,
      sub: m.experience.sub,
      entries: m.experience.entries.map((entry, i) => ({
        dates: entry.dates,
        role: entry.role,
        company: COMPANIES[i],
        bullets: entry.bullets,
      })),
    },
    stack: {
      title: m.stack.title,
      groups: m.stack.groups.map((name, i) => ({ name, items: STACK_ITEMS[i] })),
    },
    education: m.education,
    contact: m.contact,
    footer: m.footer,
  };
}

export const CONTENT: Record<Lang, Content> = { es: build(es), en: build(en satisfies Messages) };

export function getContent(lang: Lang): Content {
  return CONTENT[lang];
}
