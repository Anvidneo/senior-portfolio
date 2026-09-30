import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import LangRedirect from "@/components/LangRedirect";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import { EMAIL, getContent } from "@/lib/content";
import { LANG_STORAGE_KEY } from "@/lib/i18n";

const replace = vi.fn();
vi.mock("next/navigation", () => ({ useRouter: () => ({ replace }) }));

beforeEach(() => {
  replace.mockClear();
  localStorage.clear();
});

describe("Nav and language switch", () => {
  it("marks the active language and links to both routes", () => {
    const c = getContent("es");
    render(<Nav lang="es" nav={c.nav} />);
    const es = screen.getByRole("link", { name: "ES" });
    const en = screen.getByRole("link", { name: "EN" });
    expect(es).toHaveAttribute("aria-current", "true");
    expect(en).not.toHaveAttribute("aria-current");
    // Next appends the trailing slash at build time (trailingSlash: true).
    expect(es.getAttribute("href")).toMatch(/^\/es\/?$/);
    expect(en.getAttribute("href")).toMatch(/^\/en\/?$/);
  });

  it("remembers the chosen language on click", () => {
    const c = getContent("es");
    render(<Nav lang="es" nav={c.nav} />);
    fireEvent.click(screen.getByRole("link", { name: "EN" }));
    expect(localStorage.getItem(LANG_STORAGE_KEY)).toBe("en");
  });

  it("renders the translated menu labels", () => {
    render(<Nav lang="en" nav={getContent("en").nav} />);
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Experience" })).toBeInTheDocument();
  });
});

describe("Hero", () => {
  it.each(["es", "en"] as const)("shows headline and stack in %s", (lang) => {
    const c = getContent(lang);
    render(<Hero hero={c.hero} band={c.band} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(c.hero.line1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(c.hero.line2);
    expect(screen.getByText("NestJS")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: c.hero.cta1 })).toHaveAttribute("href", "#proyectos");
  });
});

describe("Projects", () => {
  it("renders every project with external links opening safely", () => {
    const c = getContent("en");
    render(<Projects projects={c.projects} />);
    for (const project of c.projects.items) {
      expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
    }
    const store = screen.getByRole("link", { name: "App Store" });
    expect(store).toHaveAttribute("target", "_blank");
    expect(store).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("shows highlights and the confidentiality note for the featured project", () => {
    const c = getContent("es");
    render(<Projects projects={c.projects} />);
    expect(screen.getByText("Seguimiento GPS offline-first")).toBeInTheDocument();
    expect(screen.getByText("Sin capturas por confidencialidad")).toBeInTheDocument();
  });
});

describe("Experience, Stack and Education", () => {
  it("lists every company", () => {
    const c = getContent("es");
    render(<Experience experience={c.experience} />);
    for (const entry of c.experience.entries) {
      expect(screen.getByText(entry.company)).toBeInTheDocument();
    }
  });

  it("lists every stack group", () => {
    const c = getContent("en");
    render(<Stack stack={c.stack} />);
    for (const group of c.stack.groups) {
      expect(screen.getByRole("heading", { name: group.name })).toBeInTheDocument();
    }
  });

  it("shows degrees, certifications and languages", () => {
    const c = getContent("en");
    render(<Education education={c.education} />);
    expect(screen.getByText("AWS Cloud Quest: Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("English · conversational (B1)")).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("copies the email and confirms it", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    const c = getContent("en");
    render(<Contact contact={c.contact} footer={c.footer} />);
    fireEvent.click(screen.getByRole("button", { name: c.contact.copy }));
    await waitFor(() => expect(screen.getByRole("button", { name: c.contact.copied })).toBeInTheDocument());
    expect(writeText).toHaveBeenCalledWith(EMAIL);
  });

  it("keeps working when the clipboard is refused", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.assign(navigator, { clipboard: { writeText } });
    const c = getContent("es");
    render(<Contact contact={c.contact} footer={c.footer} />);
    fireEvent.click(screen.getByRole("button", { name: c.contact.copy }));
    await waitFor(() => expect(writeText).toHaveBeenCalled());
    expect(screen.getByRole("button", { name: c.contact.copy })).toBeInTheDocument();
    expect(screen.getByText(EMAIL)).toBeInTheDocument();
  });
});

describe("LangRedirect", () => {
  it("uses the saved language first", () => {
    localStorage.setItem(LANG_STORAGE_KEY, "en");
    render(<LangRedirect />);
    expect(replace).toHaveBeenCalledWith("/en/");
  });

  it("falls back to the browser language", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("en-US");
    render(<LangRedirect />);
    expect(replace).toHaveBeenCalledWith("/en/");
  });
});
