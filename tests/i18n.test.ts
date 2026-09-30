import { isLang, otherLang, pickLang } from "@/lib/i18n";

describe("i18n helpers", () => {
  it("recognizes supported languages only", () => {
    expect(isLang("es")).toBe(true);
    expect(isLang("en")).toBe(true);
    expect(isLang("fr")).toBe(false);
  });

  it("returns the other language", () => {
    expect(otherLang("es")).toBe("en");
    expect(otherLang("en")).toBe("es");
  });

  it("prefers a saved choice over the browser locale", () => {
    expect(pickLang("es", "en-US")).toBe("es");
    expect(pickLang("en", "es-CO")).toBe("en");
  });

  it("falls back to the browser locale, then to Spanish", () => {
    expect(pickLang(null, "en-GB")).toBe("en");
    expect(pickLang(null, "es-CO")).toBe("es");
    expect(pickLang("fr", "de-DE")).toBe("es");
  });
});
