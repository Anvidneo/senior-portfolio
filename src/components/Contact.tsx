import { EMAIL, GITHUB_URL, type Content } from "@/lib/content";
import CopyEmail from "./CopyEmail";

export default function Contact({ contact, footer }: { contact: Content["contact"]; footer: string }) {
  return (
    <>
      <section className="contact gut" id="contacto">
        <div className="in">
          <h2>{contact.title}</h2>
          <div className="box">
            <span className="mono">{contact.label}</span>
            <span className="em">{EMAIL}</span>
            <CopyEmail email={EMAIL} copy={contact.copy} copied={contact.copied} />
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/Anvidneo
            </a>
          </div>
        </div>
      </section>
      <footer className="gut">
        <div className="in mono">
          <span>© {new Date().getFullYear()} Juan David Botero Cabrera</span>
          <span>{footer}</span>
        </div>
      </footer>
    </>
  );
}
