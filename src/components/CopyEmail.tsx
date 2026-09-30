"use client";

import { useState } from "react";

interface Props {
  email: string;
  copy: string;
  copied: string;
}

export default function CopyEmail({ email, copy, copied }: Props) {
  const [done, setDone] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1400);
    } catch {
      // Clipboard can be refused; the address is still selectable text.
    }
  }

  return (
    <button className="copy" type="button" onClick={onClick}>
      {done ? copied : copy}
    </button>
  );
}
