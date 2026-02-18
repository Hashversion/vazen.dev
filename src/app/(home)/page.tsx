import { CopyCodeBlock } from "@/components/ui/copy-code-block";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="p-12">
        <div className="max-w-340 mx-auto">
          <div className="max-w-prose space-y-5">
            <h1 className="text-2xl text-balance text-start">
              A production-grade monorepo starter for building full-stack applications on cloudflare
            </h1>
            <CopyCodeBlock value="npx degit Hashversion/vazen <Your-Project>" />
          </div>
        </div>
      </section>
      <section className="p-3">
        <div className="max-w-340 mx-auto">
          <div className="w-full h-60 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="896">
              <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="20" fill="currentColor"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
