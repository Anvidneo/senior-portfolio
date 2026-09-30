import type { Content } from "@/lib/content";

interface Props {
  hero: Content["hero"];
  band: string[];
}

export default function Hero({ hero, band }: Props) {
  return (
    <>
      <header className="hero" id="top">
        <div className="in gut">
          <div>
            <span className="chip mono">
              <i />
              <span>{hero.avail}</span>
            </span>
            <h1>
              {hero.line1}
              <br />
              <em>{hero.line2}</em>
            </h1>
            <p className="sub">{hero.sub}</p>
            <div className="ctas">
              <a className="btn p" href="#proyectos">
                {hero.cta1}
              </a>
              <a className="btn s" href="#contacto">
                {hero.cta2}
              </a>
            </div>
          </div>
          <div className="art">
            <div className="bubble">{hero.bubble}</div>
            <div className="burst">
              <div className="shape" aria-hidden="true" />
              <div className="txt">
                <b>6+</b>
                <span>{hero.years}</span>
              </div>
            </div>
            <div className="minis">
              <div className="mini">
                <b>5</b>
                <span className="mono">{hero.companies}</span>
              </div>
              <div className="mini">
                <b>3</b>
                <span className="mono">{hero.live}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="band">
        <ul className="in gut" aria-label="Stack">
          {band.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
