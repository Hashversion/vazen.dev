import TechStackSet from "@/components/tech-stack-set";
import { CopyCodeBlock } from "@/components/ui/copy-code-block";
import { Icons } from "@/components/ui/icons";
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
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
              href="https://web.vazen.dev"
              target="_blank"
              className="inline-flex gap-2 justify-center items-center bg-black text-white dark:bg-white dark:text-black px-4 py-3 rounded-full text-[14px] cursor-pointer"
            >
              See Demo
              <Icons.LinkSquare />
            </motion.a>
          </div>
        </div>
      </section>
      <section className="p-3 mt-12">
        <div className="max-w-340 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.123, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full relative  dark:bg-neutral-900 dark:border-neutral-500 bg-[#F0F0F0] border border-[#AAAAAA]  p-5  "
          >
            <span className="size-2 bg-black dark:bg-white absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <span className="size-2 bg-black absolute dark:bg-white top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full" />
            <span className="size-2 bg-black absolute bottom-0 dark:bg-white left-0 -translate-x-1/2 translate-y-1/2 rounded-full" />
            <span className="size-2 bg-black absolute bottom-0 right-0 translate-y-1/2 dark:bg-white translate-x-1/2 rounded-full" />
            <CirclePattern />
            <div className="pt-15.5 space-y-8">
              <h1 className="text-2xl text-neutral-600 dark:text-neutral-200 text-center">
                Production-ready stack, optimized for scale
              </h1>
              <TechStackSet />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function CirclePattern() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="200">
      <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="20" fill="currentColor"></circle>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  );
}
