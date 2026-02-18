import { CopyCodeBlock } from "@/components/ui/copy-code-block";

export default function HomePage() {
  return (
    <section className="p-12">
      <div className="max-w-340 mx-auto">
        <div className="max-w-prose space-y-5">
          <h1 className="text-2xl text-balance font-medium text-start">
            A production-grade monorepo starter for building full-stack applications on cloudflare
          </h1>
          <CopyCodeBlock value="npx degit Hashversion/vazen" />
        </div>
      </div>
    </section>
  );
}
