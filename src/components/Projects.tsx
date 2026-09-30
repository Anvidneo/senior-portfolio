import type { Content, Project } from "@/lib/content";

const TONE_CLASS = { deep: "c1", green: "c2", blue: "c3", paper: "c4" } as const;

function Cover({ project, highlightsLabel }: { project: Project; highlightsLabel: string }) {
  const cls = `cover ${TONE_CLASS[project.tone]}${project.featured ? " feat" : ""}`;
  const statusCls = project.status.kind === "private" ? "status priv" : "status";

  const main = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <span className={statusCls}>{project.status.label}</span>
      <p>{project.desc}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {(project.links.length > 0 || project.note) && (
        <div className="go">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
          {project.note && <span className="note">{project.note}</span>}
        </div>
      )}
    </div>
  );

  return (
    <article className={cls} id={project.id}>
      <div className="art-top">
        <span className="num" aria-hidden="true">
          Nº {project.num}
        </span>
        <h3>{project.name}</h3>
      </div>
      {project.highlights ? (
        <div className="body">
          {main}
          <div className="side">
            <span className="mono">{highlightsLabel}</span>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="body">{main}</div>
      )}
    </article>
  );
}

export default function Projects({ projects }: { projects: Content["projects"] }) {
  return (
    <section className="proj-sec gut" id="proyectos">
      <div className="in">
        <div className="sec-head">
          <h2>{projects.title}</h2>
          <p>{projects.sub}</p>
        </div>
        <div className="covers">
          {projects.items.map((project) => (
            <Cover key={project.id} project={project} highlightsLabel={projects.highlightsLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
