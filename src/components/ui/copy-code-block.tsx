"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";

export function CopyCodeBlock({
  value,
  prefix = "$",
}: {
  value: string;
  copiedLabel?: string;
  copyLabel?: string;
  prefix?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx degit Hashversion/vazen <Your-Project>");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="h-10 pl-4 pr-3 rounded-xl text-sm font-medium dark:bg-neutral-800 bg-neutral-200 active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer group"
    >
      <span className="font-mono text-muted-foreground select-none">{prefix}</span>
      <span className="font-commitmono text-[13px]  text-neutral-900 dark:text-neutral-50 text-balance">
        {value}
      </span>
      <span className="size-6 rounded-lg bg-accent text-neutral-800 flex items-center justify-center dark:group-hover:bg-neutral-700 dark:text-white group-hover:bg-neutral-300 transition-colors">
        {copied ? <Icons.Check /> : <Icons.Copy />}
      </span>
    </button>
  );
}
