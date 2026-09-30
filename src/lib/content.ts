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

const STACK_ITEMS = {
  backend: ["Node.js", "NestJS", "Express", "TypeScript", "FastAPI", "PHP", ".NET", "GraphQL"],
  front: ["React", "React Native", "Expo", "JavaScript"],
  cloud: ["GCP", "AWS", "Docker", "Jenkins", "Git / GitHub", "Jest"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "DB2", "Redis", "TypeORM"],
};

const es: Content = {
  meta: {
    title: "Juan David Botero | Full-Stack Engineer",
    description:
      "Full-Stack Engineer en Medellín. Node.js, React y React Native con arquitectura hexagonal y cloud. Disponible ahora, remoto o híbrido.",
    ogLocale: "es_CO",
  },
  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    langLabel: "Idioma",
  },
  hero: {
    avail: "Disponible ahora · remoto o híbrido",
    line1: "Backends que aguantan carga.",
    line2: "Apps que funcionan sin señal.",
    sub: "Full-Stack Engineer en Medellín. Node.js, React y React Native con arquitectura hexagonal y cloud.",
    cta1: "Ver proyectos",
    cta2: "Hablemos",
    bubble: "¡Hola! Soy Juan David. Construyo el producto completo, del servidor a la pantalla.",
    years: "años de experiencia",
    companies: "empresas",
    live: "en vivo",
  },
  band: BAND,
  projects: {
    title: "Proyectos",
    sub: "Cuatro productos que diseñé y construí. Tres están en línea y puedes probarlos.",
    highlightsLabel: "Lo difícil",
    items: [
      {
        id: "cored",
        num: "01",
        name: "CORED",
        tone: "deep",
        featured: true,
        status: { label: "Privado · Domina", kind: "private" },
        desc: "Desarrollador principal de la app de domiciliarios de una plataforma de última milla en Domina Entrega Total.",
        tags: ["React Native", "Expo", "TypeScript", "NestJS", "GCP"],
        links: [],
        highlights: [
          "Seguimiento GPS offline-first",
          "Validación antifraude de pruebas de entrega",
          "Chat en tiempo real y rediseño de navegación",
        ],
        note: "Sin capturas por confidencialidad",
      },
      {
        id: "bia-energy",
        num: "02",
        name: "Bia Energy",
        tone: "green",
        status: { label: "En vivo", kind: "live" },
        desc: "Detecta anomalías en el consumo eléctrico y explica cada hallazgo con una acción recomendada. Motor determinístico en Go, sin LLM para decidir.",
        tags: ["Go", "React 19", "PostgreSQL", "CI/CD"],
        links: [{ label: "Ver en vivo →", href: BIA_URL }],
      },
      {
        id: "naturcom",
        num: "03",
        name: "NaturCom",
        tone: "blue",
        status: { label: "En tiendas", kind: "live" },
        desc: "App móvil y backend, hechos de punta a punta. La usan profesionales de la salud para consultar una línea de productos homeopáticos.",
        tags: ["React Native", "Node.js", "MySQL", "EAS"],
        links: [
          { label: "App Store", href: APP_STORE_URL },
          { label: "Google Play", href: PLAY_URL },
        ],
      },
      {
        id: "hypercoff",
        num: "04",
        name: "Hypercoff",
        tone: "paper",
        status: { label: "En vivo", kind: "live" },
        desc: "El sitio de un negocio real de café en Marinilla. Next.js estático, rápido y con marca propia.",
        tags: ["Next.js", "TypeScript", "Vercel"],
        links: [{ label: "Ver en vivo →", href: HYPERCOFF_URL }],
      },
    ],
  },
  experience: {
    title: "Capítulos",
    sub: "Seis años de historia, del aprendizaje en un banco a liderar una app de última milla.",
    entries: [
      {
        dates: "Feb 2023 – Sep 2026",
        role: "Desarrollador Full-Stack",
        company: "Domina Entrega Total S.A.S · Medellín",
        bullets: [
          "Desarrollador principal de la app de domiciliarios (React Native, Expo, TypeScript): GPS offline-first, validación antifraude y chat en tiempo real.",
          "Diseñé un microservicio de documentos y su BFF con NestJS, arquitectura hexagonal, DDD y CQRS.",
          "Construí un pipeline de direcciones (FastAPI, Pub/Sub, N8N, PostgreSQL, MongoDB, AWS SES) y un chat operativo en tiempo real (FastAPI, MongoDB, Keycloak, Socket.IO).",
          "Armé micro-frontends en React con componentes compartidos y preparé capacitaciones internas de React Native y GCP.",
        ],
      },
      {
        dates: "Nov 2021 – Feb 2023",
        role: "Desarrollador Full-Stack",
        company: "Konecta · Medellín",
        bullets: [
          "Módulos con PHP (Yii) y JavaScript sobre PostgreSQL y DB2.",
          "Resolución de incidentes de alto nivel en aplicaciones de misión crítica.",
        ],
      },
      {
        dates: "Jul 2021 – Nov 2021",
        role: "Desarrollador Backend",
        company: "Mercadeo Virtual · Medellín",
        bullets: ["APIs escalables con Node.js y .NET, implementando GraphQL."],
      },
      {
        dates: "Ago 2020 – Abr 2021",
        role: "Desarrollador",
        company: "Garantías Comunitarias Grupo S. A. · Medellín",
        bullets: [
          "Nuevos módulos y funcionalidades con JavaScript y PHP, y administración de bases de datos MySQL.",
        ],
      },
      {
        dates: "Oct 2019 – Abr 2020",
        role: "Aprendiz",
        company: "Grupo Bancolombia · Medellín",
        bullets: [],
      },
    ],
  },
  stack: {
    title: "Superpoderes",
    groups: [
      { name: "Backend", items: STACK_ITEMS.backend },
      { name: "Front y móvil", items: STACK_ITEMS.front },
      { name: "Cloud y DevOps", items: STACK_ITEMS.cloud },
      { name: "Datos", items: STACK_ITEMS.data },
    ],
  },
  education: {
    title: "Origen del héroe",
    degreesTitle: "Formación",
    degrees: [
      {
        title: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
        detail: "SENA · 2018 – 2020",
      },
      { title: "Técnico en Desarrollo de Software", detail: "SENA · 2016 – 2017" },
    ],
    certsTitle: "Certificaciones",
    certs: [
      { title: "Node.js esencial" },
      { title: "Node.js avanzado" },
      { title: "AWS Cloud Quest: Cloud Practitioner" },
      { title: "NodeJS: De cero a experto", detail: "Udemy · DevTalles · 37,5 h · sep 2026" },
    ],
    langsTitle: "Idiomas",
    langs: ["Español · nativo", "Inglés · conversacional (B1)"],
  },
  contact: {
    title: "¿Tienes un backend que sufre o una app que necesita salir? Escríbeme.",
    label: "Correo",
    copy: "Copiar",
    copied: "Copiado",
  },
  footer: "Hecho con Next.js y mucha tinta",
};

const en: Content = {
  meta: {
    title: "Juan David Botero | Full-Stack Engineer",
    description:
      "Full-Stack Engineer in Medellín, Colombia. Node.js, React and React Native with hexagonal architecture and cloud. Available now, remote or hybrid.",
    ogLocale: "en_US",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    langLabel: "Language",
  },
  hero: {
    avail: "Available now · remote or hybrid",
    line1: "Backends that hold under load.",
    line2: "Apps that work offline.",
    sub: "Full-Stack Engineer in Medellín, Colombia. Node.js, React and React Native, with hexagonal architecture and cloud.",
    cta1: "See projects",
    cta2: "Let's talk",
    bubble: "Hi! I'm Juan David. I build the whole product, from server to screen.",
    years: "years of experience",
    companies: "companies",
    live: "live",
  },
  band: BAND,
  projects: {
    title: "Projects",
    sub: "Four products I designed and built. Three are online and you can try them.",
    highlightsLabel: "The hard parts",
    items: [
      {
        id: "cored",
        num: "01",
        name: "CORED",
        tone: "deep",
        featured: true,
        status: { label: "Private · Domina", kind: "private" },
        desc: "Lead developer of the couriers' mobile app on a last-mile delivery platform at Domina Entrega Total.",
        tags: ["React Native", "Expo", "TypeScript", "NestJS", "GCP"],
        links: [],
        highlights: [
          "Offline-first GPS tracking",
          "Anti-fraud validation of delivery proofs",
          "Real-time chat and navigation redesign",
        ],
        note: "No screenshots, for confidentiality",
      },
      {
        id: "bia-energy",
        num: "02",
        name: "Bia Energy",
        tone: "green",
        status: { label: "Live", kind: "live" },
        desc: "Detects anomalies in electricity consumption and explains each finding with a recommended action. Deterministic engine in Go, no LLM making the call.",
        tags: ["Go", "React 19", "PostgreSQL", "CI/CD"],
        links: [{ label: "See it live →", href: BIA_URL }],
      },
      {
        id: "naturcom",
        num: "03",
        name: "NaturCom",
        tone: "blue",
        status: { label: "In the stores", kind: "live" },
        desc: "Mobile app and backend, built end to end. Healthcare professionals use it to look up a line of homeopathic products.",
        tags: ["React Native", "Node.js", "MySQL", "EAS"],
        links: [
          { label: "App Store", href: APP_STORE_URL },
          { label: "Google Play", href: PLAY_URL },
        ],
      },
      {
        id: "hypercoff",
        num: "04",
        name: "Hypercoff",
        tone: "paper",
        status: { label: "Live", kind: "live" },
        desc: "The website of a real coffee business in Marinilla. Static Next.js, fast, with its own brand.",
        tags: ["Next.js", "TypeScript", "Vercel"],
        links: [{ label: "See it live →", href: HYPERCOFF_URL }],
      },
    ],
  },
  experience: {
    title: "Chapters",
    sub: "Six years of story, from a bank apprenticeship to leading a last-mile delivery app.",
    entries: [
      {
        dates: "Feb 2023 – Sep 2026",
        role: "Full-Stack Developer",
        company: "Domina Entrega Total S.A.S · Medellín",
        bullets: [
          "Lead developer of the couriers' app (React Native, Expo, TypeScript): offline-first GPS, anti-fraud validation and real-time chat.",
          "Designed a documents microservice and its BFF with NestJS, hexagonal architecture, DDD and CQRS.",
          "Built an address-processing pipeline (FastAPI, Pub/Sub, N8N, PostgreSQL, MongoDB, AWS SES) and a real-time operations chat (FastAPI, MongoDB, Keycloak, Socket.IO).",
          "Built React micro-frontends sharing reusable components and prepared internal training on React Native and GCP.",
        ],
      },
      {
        dates: "Nov 2021 – Feb 2023",
        role: "Full-Stack Developer",
        company: "Konecta · Medellín",
        bullets: [
          "Modules with PHP (Yii) and JavaScript on PostgreSQL and DB2.",
          "Resolved high-level incidents on mission-critical applications.",
        ],
      },
      {
        dates: "Jul 2021 – Nov 2021",
        role: "Backend Developer",
        company: "Mercadeo Virtual · Medellín",
        bullets: ["Scalable APIs with Node.js and .NET, implementing GraphQL."],
      },
      {
        dates: "Aug 2020 – Apr 2021",
        role: "Developer",
        company: "Garantías Comunitarias Grupo S. A. · Medellín",
        bullets: [
          "New modules and features in JavaScript and PHP, plus MySQL database administration.",
        ],
      },
      {
        dates: "Oct 2019 – Apr 2020",
        role: "Apprentice",
        company: "Grupo Bancolombia · Medellín",
        bullets: [],
      },
    ],
  },
  stack: {
    title: "Superpowers",
    groups: [
      { name: "Backend", items: STACK_ITEMS.backend },
      { name: "Front and mobile", items: STACK_ITEMS.front },
      { name: "Cloud and DevOps", items: STACK_ITEMS.cloud },
      { name: "Data", items: STACK_ITEMS.data },
    ],
  },
  education: {
    title: "Origin story",
    degreesTitle: "Education",
    degrees: [
      {
        title: "Technologist in Systems Analysis and Development",
        detail: "SENA · 2018 – 2020",
      },
      { title: "Technician in Software Development", detail: "SENA · 2016 – 2017" },
    ],
    certsTitle: "Certifications",
    certs: [
      { title: "Node.js esencial" },
      { title: "Node.js avanzado" },
      { title: "AWS Cloud Quest: Cloud Practitioner" },
      { title: "NodeJS: From zero to expert", detail: "Udemy · DevTalles · 37.5 h · Sep 2026" },
    ],
    langsTitle: "Languages",
    langs: ["Spanish · native", "English · conversational (B1)"],
  },
  contact: {
    title: "Got a backend that struggles or an app that needs to ship? Write to me.",
    label: "Email",
    copy: "Copy",
    copied: "Copied",
  },
  footer: "Built with Next.js and plenty of ink",
};

export const CONTENT: Record<Lang, Content> = { es, en };

export function getContent(lang: Lang): Content {
  return CONTENT[lang];
}
