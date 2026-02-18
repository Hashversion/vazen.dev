"use client";

import { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/ui/icons";

async function copyToClipboard(value: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
}

export function CopyCodeBlock({
  value,
  copiedLabel = "Copied",
  copyLabel = "Copy to clipboard",
  prefix = "$",
  className = "",
}: {
  value: string;
  copiedLabel?: string;
  copyLabel?: string;
  prefix?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleCopy = async () => {
    await copyToClipboard(value);
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div
      className={[
        "inline-flex items-center gap-3 rounded-[50px] [corner-shape:squircle] bg-neutral-200 dark:bg-neutral-800 px-3 py-1.5 text-sm",
        className,
      ].join(" ")}
    >
      <code className="truncate flex items-center font-commitmono text-neutral-800 dark:text-neutral-200">
        <span>{prefix}</span>
        <span className="ml-[1ch]">{value}</span>
      </code>
      <button
        type="button"
        className="p-1.5 rounded cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
        aria-label={copied ? copiedLabel : copyLabel}
        title={copied ? copiedLabel : copyLabel}
        onClick={handleCopy}
      >
        {copied ? <Icons.Check /> : <Icons.Copy />}
      </button>
    </div>
  );
}
