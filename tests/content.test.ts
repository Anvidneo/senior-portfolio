import { CONTENT, getContent } from "@/lib/content";
import en_ from "@/messages/en.json";
import es_ from "@/messages/es.json";

const { es, en } = CONTENT;

describe("content parity between languages", () => {
  it("has the same number of projects, entries and groups", () => {
    expect(en.projects.items).toHaveLength(es.projects.items.length);
    expect(en.experience.entries).toHaveLength(es.experience.entries.length);
    expect(en.stack.groups).toHaveLength(es.stack.groups.length);
    expect(en.education.certs).toHaveLength(es.education.certs.length);
    expect(en.education.degrees).toHaveLength(es.education.degrees.length);
  });

  it("keeps project ids, links and tags identical across languages", () => {
    es.projects.items.forEach((project, i) => {
      const twin = en.projects.items[i];
      expect(twin.id).toBe(project.id);
      expect(twin.tags).toEqual(project.tags);
      expect(twin.links.map((l) => l.href)).toEqual(project.links.map((l) => l.href));
      expect(Boolean(twin.highlights)).toBe(Boolean(project.highlights));
    });
  });

  it("keeps the same bullet count per experience entry", () => {
    es.experience.entries.forEach((entry, i) => {
      expect(en.experience.entries[i].bullets).toHaveLength(entry.bullets.length);
    });
  });

  it("has no empty visible strings", () => {
    const walk = (value: unknown, path: string) => {
      if (typeof value === "string") expect(value.trim(), path).not.toBe("");
      else if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${path}[${i}]`));
      else if (value && typeof value === "object")
        Object.entries(value).forEach(([k, v]) => walk(v, `${path}.${k}`));
    };
    walk(es, "es");
    walk(en, "en");
  });

  it("only links to https URLs", () => {
    for (const lang of ["es", "en"] as const) {
      for (const project of getContent(lang).projects.items) {
        for (const link of project.links) expect(link.href.startsWith("https://")).toBe(true);
      }
    }
  });
});

describe("translation files", () => {
  const shape = (value: unknown): unknown =>
    Array.isArray(value)
      ? value.map(shape)
      : value && typeof value === "object"
        ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
        : typeof value;

  it("es.json and en.json have exactly the same shape", () => {
    expect(shape(en_)).toEqual(shape(es_));
  });
});
