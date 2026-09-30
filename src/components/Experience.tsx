import type { Content } from "@/lib/content";

export default function Experience({ experience }: { experience: Content["experience"] }) {
  return (
    <section className="sec gut" id="experiencia">
      <div className="in chap">
        <div className="sec-head">
          <h2>{experience.title}</h2>
          <p>{experience.sub}</p>
        </div>
        {experience.entries.map((entry) => (
          <article
            className={`entry${entry.bullets.length === 0 ? " small" : ""}`}
            key={`${entry.company}-${entry.dates}`}
          >
            <div className="when">
              <b>{entry.dates}</b>
            </div>
            <div className="what">
              <h3>{entry.role}</h3>
              <span className="co">{entry.company}</span>
              {entry.bullets.length > 0 && (
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
