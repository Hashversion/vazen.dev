import { CopyCodeBlock } from "@/components/ui/copy-code-block";
import * as motion from "motion/react-client";

export default function HomePage() {
  return (
    <>
      <section className="p-12">
        <div className="max-w-340 mx-auto">
          <div className="max-w-prose space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-2xl text-balance text-start"
            >
              A production-grade monorepo starter for building full-stack applications on cloudflare
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <CopyCodeBlock value="npx degit Hashversion/vazen <Your-Project>" />
            </motion.div>
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
