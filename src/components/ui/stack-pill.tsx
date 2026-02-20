import type { JSX } from "react";

export function StackPill({ icon, stackName }: { stackName: string; icon: JSX.Element }) {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 w-fit px-3 py-2 gap-3 rounded-[24px] [corner-shape:squircle] flex justify-center items-center ">
      {icon}
      {stackName}
    </div>
  );
}
