import Link from "next/link";
import LangRedirect from "@/components/LangRedirect";

export default function Root() {
  return (
    <main className="gut" style={{ paddingBlock: 64 }}>
      <LangRedirect />
      <p className="mono">Juan David Botero</p>
      <p style={{ marginTop: 16 }}>
        <Link href="/es/">Español</Link> · <Link href="/en/">English</Link>
      </p>
    </main>
  );
}
