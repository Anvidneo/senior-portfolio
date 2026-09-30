import type { Content } from "@/lib/content";

export default function Education({ education }: { education: Content["education"] }) {
  return (
    <section className="sec gut" id="estudios">
      <div className="in chap">
        <div className="sec-head">
          <h2>{education.title}</h2>
        </div>
        <div className="edu">
          <div className="card">
            <h3>{education.degreesTitle}</h3>
            <ul>
              {education.degrees.map((degree) => (
                <li key={degree.title}>
                  {degree.title}
                  <br />
                  <small>{degree.detail}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>{education.certsTitle}</h3>
            <ul>
              {education.certs.map((cert) => (
                <li key={cert.title}>
                  {cert.title}
                  {cert.detail && (
                    <>
                      <br />
                      <small>{cert.detail}</small>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>{education.langsTitle}</h3>
            <ul>
              {education.langs.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
